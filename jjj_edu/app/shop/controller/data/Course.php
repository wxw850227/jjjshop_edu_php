<?php

namespace app\shop\controller\data;

use app\shop\model\course\Course as CourseModel;
use app\shop\model\course\Category as CategoryModel;
use app\shop\controller\Controller;

/**
 * 课程管理控制器
 */
class Course extends Controller
{
    /**
     * 课程列表(全部)
     */
    public function index()
    {
        // 获取全部列表
        $model = new CourseModel;
        $data = $this->postData();
        $list = $model->getList($this->postData());
        return $this->renderSuccess('', compact('list'));
    }

    /**
     * 课程分类列表
     */
    public function category()
    {
        $model = new CategoryModel;
        $list = $model->getCacheTree();
        return $this->renderSuccess('', compact('list'));
    }
}
