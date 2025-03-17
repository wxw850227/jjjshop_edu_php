<?php

namespace app\common\service\message;

use app\common\library\easywechat\AppMp;

/**
 * 公众号消息通知服务
 */
class MpMessageService
{
    /**
     * 订单支付成功后通知
     */
    public static function send($data, $mp_template, $touser, $app_id)
    {
        try{
            $mp_template = json_decode($mp_template, true);

            $var_data = $mp_template['var_data'];
            $send_data = [];
            foreach ($var_data as $key => $value){
                if(isset($data[$key])){
                    $send_data[$value['field_name']] = $data[$key];
                }else{
                    $send_data[$key] = $value['filed_value'];
                }
            }

            $app = AppMp::getApp($app_id);
            $api = $app->getClient();
            $accessToken = $app->getAccessToken(); // 使用easywechat自带的方法,获取访问令牌
            $token = $accessToken->getToken(); // string
            $template = [
                'touser' => $touser,
                'template_id' => $mp_template['template_id'],
                'url' => '',
                'data' => $send_data
            ];
            $url = "https://api.weixin.qq.com/cgi-bin/message/template/send?access_token=" . $token;
            $result = $api->postJson($url, $template);
        }catch (\Exception $e){
            log_write('公众号消息发送失败');
            log_write($e->getMessage());
        }
    }
}