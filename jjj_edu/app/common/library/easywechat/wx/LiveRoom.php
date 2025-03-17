<?php

namespace app\common\library\easywechat\wx;

/**
 * 直播房间
 */
class LiveRoom extends WxBase
{
    /**
     * 同步小程序直播房间
     */
    public function syn()
    {
        // 获取 access token 实例
        $accessToken = $this->app->access_token;
        $token = $accessToken->getToken();
        // 微信接口url
        $apiUrl = "https://api.weixin.qq.com/wxa/business/getliveinfo?access_token={$token['access_token']}";
        // 请求参数
        $params = json_encode(['start' => 0, 'limit' => 100], JSON_UNESCAPED_UNICODE);
        // 执行请求
        $result = $this->post($apiUrl, $params);
        // 返回结果
        $response = $this->jsonDecode($result);
        if (!isset($response['errcode'])) {
            $this->error = '请求错误';
            return false;
        }
        if ($response['errcode'] != 0) {
            if($response['errcode'] == '9410000'){
                $this->error = 'empty';
            }else{
                if($response['errcode'] == 40001){
                    //防止token过期或更换,重新获取
                    $accessToken->getToken(true);
                }
                $this->error = $response['errmsg'];
            }

            return false;
        }
        return $response;
    }

}