<?php

namespace app\api\controller\user;

use app\api\model\user\Userapple as UserappleModel;
use app\api\controller\Controller;
use app\common\model\settings\Setting;

/**
 * 用户管理模型
 */
class Userapple extends Controller
{
    public function policy()
    {
        $config = Setting::getItem('store');
        return $this->renderSuccess('', [
            'service' => $config['policy']['service'],
            'privacy' => $config['policy']['privacy'],
        ]);
    }
}