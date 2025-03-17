<?php

namespace app\shop\controller\question;

use app\shop\model\course\Category as CategoryModel;
use app\shop\model\question\Question as QuestionModel;
use app\shop\controller\Controller;

/**
 * 讲师管理控制器
 */
class Question extends Controller
{
    /**
     * 讲师列表(全部)
     */
    public function index()
    {
        // 获取全部列表
        $model = new QuestionModel;
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
        $model = new QuestionModel;
        // get请求
        if ($this->request->isGet()) {
            // 分类
            $category = CategoryModel::getCacheTree();
            $questionType = $model::questionType();
            return $this->renderSuccess('', compact('category', 'questionType'));
        }
        //post请求
        if ($model->add($this->postData())) {
            return $this->renderSuccess('添加成功');
        }
        return $this->renderError($model->getError() ?: '添加失败');
    }

    /**
     * 编辑
     */
    public function edit($question_id)
    {
        $model = QuestionModel::detail($question_id);
        if ($this->request->isGet()) {
            // 分类
            $category = CategoryModel::getCacheTree();
            $questionType = $model::questionType();
            return $this->renderSuccess('', compact('category', 'model', 'questionType'));
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
    public function state($question_id, $state)
    {
        // 商品详情
        $model = QuestionModel::detail($question_id);
        if (!$model->setStatus($state)) {
            return $this->renderError('操作失败');
        }
        return $this->renderSuccess('操作成功');
    }

    /**
     * 设置推荐
     */
    public function settop($question_id, $state)
    {
        // 详情
        $model = QuestionModel::detail($question_id);
        if (!$model->setTop($state)) {
            return $this->renderError('操作失败');
        }
        return $this->renderSuccess('操作成功');
    }

    /**
     * 删除
     */
    public function delete($question_id)
    {
        // 详情
        $model = QuestionModel::detail($question_id);
        if (!$model->setDelete()) {
            return $this->renderError($model->getError() ?: '删除失败');
        }
        return $this->renderSuccess('删除成功');
    }

}
