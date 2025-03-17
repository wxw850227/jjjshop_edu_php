<?php

namespace app\shop\controller\data;

use app\shop\model\lecturer\Category as CategoryModel;
use app\shop\model\lecturer\Lecturer as LecturerModel;
use app\shop\controller\Controller;

/**
 * 讲师管理控制器
 */
class Lecturer extends Controller
{
    /**
     * 讲师列表(全部)
     */
    public function index()
    {
        // 获取全部列表
        $model = new LecturerModel;
        $list = $model->getList($this->postData());
        // 分类
        $category = CategoryModel::getCacheTree();
        return $this->renderSuccess('', compact('list', 'category'));
    }

    /**
     * 讲师分类列表
     */
    public function Category()
    {
        $model = new CategoryModel;
        $list = $model->getCacheTree();
        return $this->renderSuccess('', compact('list'));
    }

}
