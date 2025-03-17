<?php

namespace app\shop\controller\paper\train;

use app\shop\model\paper\Category as CategoryModel;
use app\shop\controller\Controller;

/**
 * 练习分类
 */
class Category extends Controller
{
    /**
     * 题库分类列表
     */
    public function index()
    {
        $model = new CategoryModel;
        $list = $model->getALL(1);
        return $this->renderSuccess('', compact('list'));
    }

    /**
     * 删除题库分类
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
     * 添加分类
     */
    public function add()
    {
        $model = new CategoryModel;
        // 新增记录
        if ($model->add($this->request->post(),1)) {
            return $this->renderSuccess('添加成功');
        }
        return $this->renderError($model->getError() ?: '添加失败');
    }

    /**
     * 编辑分类
     */
    public function edit($category_id)
    {
        // 详情
        $model = CategoryModel::detail($category_id);
        // 更新记录
        if ($model->edit($this->request->post())) {
            return $this->renderSuccess('更新成功');
        }
        return $this->renderError($model->getError() ?: '更新失败');
    }

    /**
     * 设置分类状态
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
