<?php


namespace app\common\model\user;

use app\common\library\sms\Driver as SmsDriver;
use app\common\model\BaseModel;
use app\common\model\settings\Setting as SettingModel;

/**
 * 短信模型
 */
class Sms extends BaseModel
{
    protected $pk = 'sms_id';
    protected $name = 'sms';

    /**
     * 短信发送
     * $sence 场景，login：登录 register：注册
     */
    public function send($mobile, $sence = 'login')
    {
        if (empty($mobile)) {
            $this->error = '手机号码不能为空';
            return false;
        }
        $smsConfig = SettingModel::getItem('sms', self::$app_id);
        $template_code = $smsConfig['engine'][$smsConfig['default']];
        $send_template = $template_code['template_code'];
        if (empty($template_code)) {
            $this->error = '短信登录未开启';
            return false;
        }
        if ($sence == 'login') {
            //判断用户是否存在
            $user = (new User)->where('mobile', '=', $mobile)
                ->where('is_delete', '=', 0)
                ->where('reg_source', '=', 'h5')
                ->find();
            if (!$user) {
                $this->error = '用户不存在';
                return false;
            }
        } else if ($sence == 'register') {
            //判断是否已经注册
            $user = (new User)->where('mobile', '=', $mobile)
                ->where('is_delete', '=', 0)
                ->where('reg_source', '=', 'h5')
                ->find();
            if ($user) {
                $this->error = '手机号码已存在';
                return false;
            }
        }
        $code = str_pad(mt_rand(100000, 999999), 6, "0", STR_PAD_BOTH);
        $SmsDriver = new SmsDriver($smsConfig);
        $send_data = [
            'code' => $code
        ];
        //短信模板
        $flag = $SmsDriver->sendSms($mobile, $send_template, $send_data);
        if ($flag) {
            $this->save([
                'mobile' => $mobile,
                'code' => $code,
                'sence' => $sence,
                'app_id' => self::$app_id
            ]);
        }
        return $flag;
    }

    /**
     * 短信发送
     */
    public function sendTemplate($mobile, $template_code)
    {
        if (empty($mobile)) {
            $this->error = '手机号码不能为空';
            return false;
        }
        $smsConfig = SettingModel::getItem('sms', self::$app_id);
        $template_code = $smsConfig['engine'][$smsConfig['default']][$template_code];
        if (empty($template_code)) {
            $this->error = '短信登录未开启';
            return false;
        }
        $SmsDriver = new SmsDriver($smsConfig);
        $send_data = [
            'code' => '112'
        ];
        //短信模板
        $flag = $SmsDriver->sendSms($mobile, $template_code, $send_data);
        return $flag;
    }
}