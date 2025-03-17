<?php

namespace app\shop\controller\data;

use app\shop\controller\Controller;
use app\shop\model\user\User as UserModel;

/**
 * 用户数据控制器
 */
class User extends Controller
{
    /**
     * 商品列表
     */
    public function lists()
    {
        $model = new UserModel();
        $params = $this->postData();
        $list = $model->getList($params);
        return $this->renderSuccess('', compact('list'));
    }

}
