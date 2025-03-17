<?php

namespace app\api\controller\paper;

use app\api\model\paper\Category as CategoryModel;
use app\api\controller\Controller;

/**
 * 课程分类控制器
 */
class Category extends Controller
{
    /**
     *试卷分类
     */
    public function index($type)
    {
        // 课程分类列表
        $list = CategoryModel::getList($type);
        return $this->renderSuccess('', compact('list'));
    }

}