<?php

namespace app\api\controller\course;

use app\api\model\course\Category as CategoryModel;
use app\api\controller\Controller;

/**
 * 课程分类控制器
 */
class Category extends Controller
{
    /**
     *课程分类
     */
    public function index()
    {
        // 课程分类列表
        $list = CategoryModel::getList();
        return $this->renderSuccess('', compact('list'));
    }

}