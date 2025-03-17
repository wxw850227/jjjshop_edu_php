<?php

namespace app\common\library\easywechat;

use app\admin\model\settings\Setting as SettingModel;
use app\api\service\order\paysuccess\type\PayTypeSuccessFactory;
use app\common\enum\order\OrderPayTypeEnum;
use app\common\exception\BaseException;
use app\common\model\app\App as AppModel;
use app\common\model\app\AppWx as AppWxModel;

/**
 * 微信支付
 */
class WxPay
{
    // 微信支付配置
    private $app;

    /**
     * 构造函数
     */
    public function __construct($app)
    {
        $this->app = $app;
    }

    /**
     * 统一下单API
     */
    public function unifiedorder($order_no, $openid, $totalFee, $orderType, $pay_source, $app_id)
    {
        $data = [
            "mchid" => $this->app->getConfig()['mch_id'],
            "out_trade_no" => $order_no,
            "appid" => $this->app->getConfig()['app_id'],
            "description" => $order_no,
            "notify_url" => base_url() . 'index.php/job/notify/wxpay',
            'attach' => json_encode(['order_type' => $orderType, 'pay_source' => $pay_source]),
            "amount" => [
                "total" => intval($totalFee * 100),
                "currency" => "CNY"
            ],
            "payer" => [
                "openid" => $openid
            ]
        ];
        $url = "v3/pay/transactions/jsapi";
        //h5支付差异
        if ($pay_source == 'h5') {
            $url = "v3/pay/transactions/h5";
            unset($data['payer']);
            $data['scene_info'] = [
                "payer_client_ip" => request()->ip(),
                "h5_info" => [
                    "type" => "Wap"
                ]
            ];
        }
        if ($pay_source == 'android' || $pay_source == 'ios') {
            unset($data['payer']);
            $url = "v3/pay/transactions/app";
        }
        // 是否开启服务商支付、目前只验证了微信小程序
        if ($pay_source == 'wx') {
            // 是否开启服务商支付
            $service_pay = $this->isServicePay($app_id);
            if ($service_pay) {
                unset($data['openid']);
                $data['appid'] = $this->app->getConfig()['app_id'];
                $data['mch_id'] = $this->app->getConfig()['mch_id'];
                $data['sub_appid'] = $this->app->getConfig()['sub_appid'];
                $data['sub_mch_id'] = $this->app->getConfig()['sub_mch_id'];
                $data['sub_openid'] = $openid;
            }
        }
        // 统一下单
        $payApp = $this->app->getClient();
        $response = $payApp->postJson($url, $data);
        $result = $response->toArray(false);
        //如果是微信小程序
        if ($pay_source == 'wx' || $pay_source == 'android' || $pay_source == 'ios' || $pay_source == 'mp') {
            // 请求失败
            if (!isset($result['prepay_id'])) {
                throw new BaseException(['msg' => "微信支付api：{$result['message']}", 'code' => 0]);
            }
            if ($pay_source == 'wx' || $pay_source == 'mp') {
                $prepayId = $result['prepay_id'];
                $utils = $this->app->getUtils();
                $appId = $this->app->getConfig()['app_id'];
                $signType = 'RSA';
                $config = $utils->buildMiniAppConfig($prepayId, $appId, $signType);
                return [
                    'appId' => $appId,
                    'nonceStr' => $config['nonceStr'],
                    'timeStamp' => $config['timeStamp'],
                    'paySign' => $config['paySign'],
                    "signType" => $config['signType'],
                    'package' => $config['package'],
                ];
            } else if ($pay_source == 'android' || $pay_source == 'ios') {
                $prepayId = $result['prepay_id'];
                $utils = $this->app->getUtils();
                $appId = $this->app->getConfig()['app_id'];
                $signType = 'RSA';
                $config = $utils->buildAppConfig($prepayId, $appId, $signType);
                return $config;
            }
        }
        // 请求失败
        if (!isset($result['h5_url'])) {
            throw new BaseException(['msg' => "微信支付api：{$result['message']}", 'code' => 0]);
        }
        return $result;
    }

    /**
     * 支付成功异步通知
     */
    public function notify()
    {
        if (!$json = file_get_contents('php://input')) {
            log_write('Not found DATA');
            $this->returnCode(false, 'Not found DATA');
        }
        log_write($json);
        $wechatpay_serial = request()->header('wechatpay-serial');
        $json = json_decode($json, true);
        $app = AppModel::getBySerial($wechatpay_serial);
        $AesUtil = new AesUtil($app['apikey']);
        $data = $AesUtil->decryptToString($json['resource']['associated_data'], $json['resource']['nonce'], $json['resource']['ciphertext']);
        $data = json_decode($data, true);
        $attach = json_decode($data['attach'], true);
        // 实例化订单模型
        $PaySuccess = PayTypeSuccessFactory::getFactory($data['out_trade_no'], $attach);
        $app_id = $PaySuccess->isExist();
        $app_id == 0 && $this->returnCode(false, '订单不存在');
        if ($data['trade_state'] != 'SUCCESS') {
            $this->returnCode(false, $data['trade_state_desc']);
        }
        // 订单支付成功业务处理
        $status = $PaySuccess->onPaySuccess(OrderPayTypeEnum::WECHAT, $data);
        if ($status == false) {
            $this->returnCode(false, $PaySuccess->error);
        }
        // 返回状态
        $this->returnCode(true, 'OK');
    }

    private function isServicePay($app_id)
    {
        $config = SettingModel::getSysConfig();
        $app = AppModel::detail($app_id);
        $app_wx = AppWxModel::detail($app_id);
        if ($config['weixin_service']['is_open'] == 1 && $app['weixin_service'] == 1) {
            $filePath = root_path() . 'runtime/cert/appwx/10000/';
            $configData = [
                'app_id' => $config['weixin_service']['app_id'],
                'mch_id' => $config['weixin_service']['mch_id'],
                'sub_appid' => $app_wx['wxapp_id'],
                'sub_mch_id' => $app['mchid'],
                'secret_key' => $config['weixin_service']['apikey'],   // API 密钥
                // 如需使用敏感接口（如退款、发送红包等）需要配置 API 证书路径(登录商户平台下载 API 证书)
                'certificate' => $filePath . 'cert.pem',
                'private_key' => $filePath . 'key.pem',
                'http' => [
                    'throw' => true, // 状态码非 200、300 时是否抛出异常，默认为开启
                    'timeout' => 5.0,
                ],
            ];
            $this->app->setConfig($configData);
            return true;
        } else {
            return false;
        }
    }

    /**
     * 申请退款API
     */
    public function refund($transaction_id, $total_fee, $refund_fee)
    {
        $out_refund_no = time();
        $data = [
            "transaction_id" => $transaction_id,
            "out_refund_no" => "{$out_refund_no}",
            "notify_url" => base_url(),
            "amount" => [
                "refund" => intval($refund_fee * 100),
                "total" => intval($total_fee * 100),
                "currency" => "CNY"
            ],
        ];
        $payApp = $this->app->getClient();
        $result = $payApp->postJson('v3/refund/domestic/refunds', $data);
        $result = $result->toArray(false);
        // 请求失败
        if (isset($result['code']) || !isset($result['status'])) {
            throw new BaseException(['msg' => $result['message']]);
        }
        // 请求失败
        if ($result['status'] == 'CLOSED' || $result['status'] == 'ABNORMAL') {
            throw new BaseException(['msg' => 'return_msg: ' . $result['return_msg']]);
        }
        return true;
    }

    /**
     * 企业付款到零钱API
     */
    public function transfers($order_no, $openid, $amount, $desc)
    {
        $api = $this->app->getClient();
        $result = $api->postXml('/mmpaymkttransfers/promotion/transfers', [
            'mch_appid' => $this->app->getConfig()['app_id'],
            'mchid' => $this->app->getConfig()['mch_id'],
            'partner_trade_no' => $order_no,
            'openid' => $openid,
            'check_name' => 'NO_CHECK',
            're_user_name' => '',
            'amount' => $amount,
            'desc' => $desc,
        ]);
        $result = $result->toArray(false);
        // 请求失败
        if (empty($result)) {
            throw new BaseException(['msg' => '微信提现到零钱api请求失败']);
        }
        // 请求失败
        if ($result['return_code'] === 'FAIL') {
            throw new BaseException(['msg' => 'return_msg: ' . $result['return_msg']]);
        }
        if ($result['result_code'] === 'FAIL') {
            throw new BaseException(['msg' => 'err_code_des: ' . $result['err_code_des']]);
        }
        return true;
    }

    /**
     * 返回状态给微信服务器
     */
    private function returnCode($returnCode = true, $msg = null)
    {
        // 返回状态
        $return = [
            'return_code' => $returnCode ? 'SUCCESS' : 'FAIL',
            'return_msg' => $msg ?: 'OK',
        ];
        // 记录日志
        log_write([
            'describe' => '返回微信支付状态',
            'data' => $return
        ]);
        die($this->toXml($return));
    }

    /**
     * 输出xml字符
     * @param $values
     * @return bool|string
     */
    private function toXml($values)
    {
        if (!is_array($values)
            || count($values) <= 0
        ) {
            return false;
        }

        $xml = "<xml>";
        foreach ($values as $key => $val) {
            if (is_numeric($val)) {
                $xml .= "<" . $key . ">" . $val . "</" . $key . ">";
            } else {
                $xml .= "<" . $key . "><![CDATA[" . $val . "]]></" . $key . ">";
            }
        }
        $xml .= "</xml>";
        return $xml;
    }

    public function wechatTrans($pars, $app_id)
    {
        $url = 'https://api.mch.weixin.qq.com/v3/transfer/batches';
        $http_method = 'POST';//请求方法（GET,POST,PUT）
        $timestamp = time();//请求时间戳
        $url_parts = parse_url($url);//获取请求的绝对URL
        $nonce = $timestamp . rand('10000', '99999');//请求随机串
        $body = json_encode((object)$pars);//请求报文主体
        $app = AppModel::detail($app_id);

        $apiclient_cert_arr = openssl_x509_parse($app['cert_pem']);
        $serial_no = $apiclient_cert_arr['serialNumberHex'];//证书序列号
        $mch_private_key = $app['key_pem'];//密钥
        $merchant_id = $app['mchid'];//商户id
        $canonical_url = ($url_parts['path'] . (!empty($url_parts['query']) ? "?{$url_parts['query']}" : ""));
        $message = $http_method . "\n" .
            $canonical_url . "\n" .
            $timestamp . "\n" .
            $nonce . "\n" .
            $body . "\n";
        openssl_sign($message, $raw_sign, $mch_private_key, 'sha256WithRSAEncryption');
        $sign = base64_encode($raw_sign);//签名
        $schema = 'WECHATPAY2-SHA256-RSA2048';
        $token = sprintf('mchid="%s",nonce_str="%s",timestamp="%d",serial_no="%s",signature="%s"',
            $merchant_id, $nonce, $timestamp, $serial_no, $sign);//微信返回token
        return $this->https_request(json_encode($pars), $token);;
    }


    public function https_request($data, $token)
    {
        $url = 'https://api.mch.weixin.qq.com/v3/transfer/batches';
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, (string)$url);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);
        if (!empty($data)) {
            curl_setopt($curl, CURLOPT_POST, 1);
            curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
        }
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
        //添加请求头
        $headers = [
            'Authorization:WECHATPAY2-SHA256-RSA2048 ' . $token,
            'Accept: application/json',
            'Content-Type: application/json; charset=utf-8',
            'User-Agent:Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36',
        ];
        if (!empty($headers)) {
            curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
        }
        $output = curl_exec($curl);
        curl_close($curl);
        return $output;
    }
}
