<?php

namespace app\api\controller\lecturer;

use app\api\model\lecturer\Category as CategoryModel;
use app\api\controller\Controller;

/**
 * 讲师分类控制器
 */
class Category extends Controller
{
    /**
     *讲师分类
     */
    public function list()
    {
        // 讲师分类列表
        $list = CategoryModel::getLists();
        return $this->renderSuccess('', compact('list'));
    }

}