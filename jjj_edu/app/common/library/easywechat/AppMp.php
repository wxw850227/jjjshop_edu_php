<?php

namespace app\common\library\easywechat;

use app\common\exception\BaseException;
use app\common\model\app\AppMp as AppMpModel;
use app\common\model\app\App as AppModel;
use EasyWeChat\OfficialAccount\Application;
use EasyWeChat\Pay\Application as payApp;

/**
 * 微信公众号
 */
class AppMp
{
    public static function getApp($app_id, $referee_id = 0)
    {
        // 获取当前小程序信息
        $wxConfig = AppMpModel::getAppMpCache($app_id);
        // 验证appid和appsecret是否填写
        if (empty($wxConfig['mpapp_id']) || empty($wxConfig['mpapp_secret'])) {
            throw new BaseException(['msg' => '请到 [后台-应用-公众号设置] mpapp_id 和 mpapp_secret']);
        }
        $config = [
            'app_id' => $wxConfig['mpapp_id'],
            'secret' => $wxConfig['mpapp_secret'],
            'token' => 'easywechat',
            'aes_key' => '', // 明文模式请勿填写 EncodingAESKey

            /**
             * OAuth 配置
             *
             * scopes：公众平台（snsapi_userinfo / snsapi_base），开放平台：snsapi_login
             * callback：OAuth授权完成后的回调页地址
             */
            'oauth' => [
                'scopes' => ['snsapi_userinfo'],
                'callback' => base_url() . "index.php/api/user.usermp/login_callback?app_id={$app_id}&referee_id={$referee_id}",
                'redirect_url' => base_url() . "index.php/api/user.usermp/login_callback?app_id={$app_id}&referee_id={$referee_id}",
            ],

            /**
             * 接口请求相关配置，超时时间等，具体可用参数请参考：
             * https://github.com/symfony/symfony/blob/5.3/src/Symfony/Contracts/HttpClient/HttpClientInterface.php
             */
            'http' => [
                'timeout' => 5.0,
                'retry' => true, // 使用默认重试配置
            ],
        ];
        $app = new Application($config);
        return $app;
    }

    public static function getWxPayApp($app_id)
    {
        // 获取当前小程序信息
        $wxConfig = AppMpModel::getAppMpCache($app_id);
        // 验证appid和appsecret是否填写
        if (empty($wxConfig['mpapp_id']) || empty($wxConfig['mpapp_secret'])) {
            throw new BaseException(['msg' => '请到 [后台-应用-公众号设置] 填写appid 和 appsecret']);
        }

        $app = AppModel::detail($app_id);
        if (empty($app['cert_pem']) || empty($app['key_pem'])) {
            throw new BaseException(['msg' => '请先到后台[后台-应用-支付设置]填写微信支付证书文件']);
        }
        // cert目录
        $filePath = root_path() . 'runtime/cert/app/' . $wxConfig['app_id'] . '/';

        $config = [
            'app_id' => $wxConfig['mpapp_id'],
            'secret' => $wxConfig['wxapp_secret'],
            'mch_id' => $app['mchid'],
            'secret_key' => $app['apikey'],   // API 密钥
            // 如需使用敏感接口（如退款、发送红包等）需要配置 API 证书路径(登录商户平台下载 API 证书)
            'certificate' => $filePath . 'cert.pem',
            'private_key' => $filePath . 'key.pem',
            'http' => [
                'throw' => true, // 状态码非 200、300 时是否抛出异常，默认为开启
                'timeout' => 5.0,
            ],
        ];
        $payApp = new payApp($config);
        return $payApp;
    }

}
