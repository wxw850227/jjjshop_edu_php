<?php

namespace app\api\controller\user;

use app\api\controller\Controller;
use app\api\model\user\UserMp as UserMpModel;
use app\common\library\easywechat\AppMp;

/**
 * 公众号用户管理
 */
class Usermp extends Controller
{

    /**
     * 用户自动登录
     */
    public function login($referee_id = 0)
    {
        $app = AppMp::getApp($this->app_id, $referee_id);
        $oauth = $app->getOAuth();
        //生成完整的授权URL
        $redirectUrl = $oauth->scopes(['snsapi_userinfo'])->redirect();
        return redirect($redirectUrl);
    }

    /**
     * 用户自动登录
     */
    public function login_callback()
    {
        $app = AppMp::getApp($this->app_id);
        $oauth = $app->getOauth();
        // 获取 OAuth 授权用户信息
        $user = $oauth->userFromCode($this->request->param('code'));
        $userInfo = $user->toArray();
        $model = new UserMpModel;
        $referee_id = $this->request->param('referee_id');
        $user_id = $model->login($userInfo, $referee_id);
        return redirect(base_url() . 'h5/pages/login/mplogin?app_id=' . $this->app_id . '&token=' . $model->getToken() . '&user_id=' . $user_id);
    }
}
