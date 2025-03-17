<?php

namespace app\shop\controller\course;

use app\shop\controller\Controller;
use app\shop\model\course\Category as CategoryModel;

/**
 * 课程分类
 */
class Category extends Controller
{
    /**
     * 课程分类列表
     */
    public function index()
    {
        $model = new CategoryModel;
        $list = $model->getCacheTree();
        return $this->renderSuccess('', compact('list'));
    }

    /**
     * 删除课程分类
     */
    public function delete($category_id)
    {
        $model = CategoryModel::detail($category_id);
        if ($model->remove($category_id)) {
            return $this->renderSuccess('删除成功');
        }
        return $this->renderError($model->getError() ?: '删除失败');
    }

    /**
     * 添加课程分类
     */
    public function add()
    {
        $model = new CategoryModel;
        // 新增记录
        if ($model->add($this->request->post())) {
            return $this->renderSuccess('添加成功');
        }
        return $this->renderError($model->getError() ?: '添加失败');
    }

    /**
     * 编辑课程分类
     */
    public function edit($category_id)
    {
        // 模板详情
        $model = CategoryModel::detail($category_id);
        // 更新记录
        if ($model->edit($this->request->post())) {
            return $this->renderSuccess('更新成功');
        }
        return $this->renderError($model->getError() ?: '更新失败');
    }

    /**
     * 设置课程分类状态
     */
    public function set($category_id)
    {
        // 详情
        $model = CategoryModel::detail($category_id);
        // 更新记录
        if ($model->setStatus($this->request->post())) {
            return $this->renderSuccess('设置成功');
        }
        return $this->renderError($model->getError() ?: '设置失败');
    }
}
