<?php

namespace app\shop\controller\paper\train;

use app\shop\model\paper\Category as CategoryModel;
use app\shop\model\paper\Paper as PaperModel;
use app\shop\controller\Controller;

/**
 * 练习管理控制器
 */
class Paper extends Controller
{
    /**
     * 练习列表(全部)
     */
    public function index()
    {
        // 获取全部列表
        $model = new PaperModel;
        $list = $model->getList($this->postData(), 1);
        // 分类
        $category = CategoryModel::getList(1);
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
            $category = CategoryModel::getALL(1);
            return $this->renderSuccess('', compact('category'));
        }
        //post请求
        $model = new PaperModel;
        $data = json_decode($this->postData()['params'], true);
        if ($model->add($data, 1)) {
            return $this->renderSuccess('添加成功');
        }
        return $this->renderError($model->getError() ?: '添加失败');
    }

    /**
     * 编辑
     */
    public function edit()
    {
        if ($this->request->isGet()) {
            $model = (new PaperModel)->getDetail($this->postData()['paper_id']);
            // 分类
            $category = CategoryModel::getALL(1);
            return $this->renderSuccess('', compact('category', 'model'));
        }
        $data = json_decode($this->postData()['params'], true);
        $model = PaperModel::detail($data['paper_id']);
        // 更新记录
        if ($model->edit($data)) {
            return $this->renderSuccess('更新成功');
        }
        return $this->renderError($model->getError() ?: '更新失败');
    }

    /**
     * 修改状态
     */
    public function state($paper_id, $state)
    {
        // 商品详情
        $model = PaperModel::detail($paper_id);
        if (!$model->setStatus($state)) {
            return $this->renderError('操作失败');
        }
        return $this->renderSuccess('操作成功');
    }


    /**
     * 删除
     */
    public function delete($paper_id)
    {
        // 详情
        $model = PaperModel::detail($paper_id);
        if (!$model->setDelete()) {
            return $this->renderError($model->getError() ?: '删除失败');
        }
        return $this->renderSuccess('删除成功');
    }

}
