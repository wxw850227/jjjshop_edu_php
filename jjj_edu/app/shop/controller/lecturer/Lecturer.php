<?php

namespace app\shop\controller\lecturer;

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
     * 添加
     */
    public function add()
    {
        // get请求
        if ($this->request->isGet()) {
            // 分类
            $category = CategoryModel::getCacheTree();
            return $this->renderSuccess('', compact('category'));
        }
        //post请求
        $model = new LecturerModel;
        if ($model->add($this->postData())) {
            return $this->renderSuccess('添加成功');
        }
        return $this->renderError($model->getError() ?: '添加失败');
    }

    /**
     * 编辑
     */
    public function edit($lecturer_id)
    {
        $model = LecturerModel::detail($lecturer_id);
        if ($this->request->isGet()) {
            // 分类
            $category = CategoryModel::getCacheTree();
            return $this->renderSuccess('', compact('category', 'model'));
        }
        // 更新记录
        if ($model->edit($this->postData())) {
            return $this->renderSuccess('更新成功');
        }
        return $this->renderError($model->getError() ?: '更新失败');
    }

    /**
     * 修改状态
     */
    public function state($lecturer_id, $state)
    {
        // 商品详情
        $model = LecturerModel::detail($lecturer_id);
        if (!$model->setStatus($state)) {
            return $this->renderError('操作失败');
        }
        return $this->renderSuccess('操作成功');
    }

    /**
     * 设置推荐
     */
    public function settop($lecturer_id, $state)
    {
        // 详情
        $model = LecturerModel::detail($lecturer_id);
        if (!$model->setTop($state)) {
            return $this->renderError('操作失败');
        }
        return $this->renderSuccess('操作成功');
    }

    /**
     * 删除
     */
    public function delete($lecturer_id)
    {
        // 详情
        $model = LecturerModel::detail($lecturer_id);
        if (!$model->setDelete()) {
            return $this->renderError($model->getError() ?: '删除失败');
        }
        return $this->renderSuccess('删除成功');
    }

}
