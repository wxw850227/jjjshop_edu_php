<?php

namespace app\shop\controller\question;

use app\shop\model\question\Relation as RelationModel;
use app\shop\controller\Controller;

/**
 * 关联课程管理控制器
 */
class Relation extends Controller
{
    /**
     * 列表(全部)
     */
    public function index()
    {
        // 获取全部列表
        $model = new RelationModel;
        $list = $model->getList($this->postData());
        return $this->renderSuccess('', compact('list'));
    }

    /**
     * 添加
     */
    public function add()
    {
        $model = new RelationModel;
        //post请求
        if ($model->add($this->postData())) {
            return $this->renderSuccess('添加成功');
        }
        return $this->renderError($model->getError() ?: '添加失败');
    }

    /**
     * 编辑
     */
    public function setsort($id)
    {
        $model = RelationModel::detail($id);
        // 更新记录
        if ($model->setsort($this->postData())) {
            return $this->renderSuccess('操作成功');
        }
        return $this->renderError($model->getError() ?: '操作失败');
    }

    /**
     * 删除
     */
    public function delete($id)
    {
        // 详情
        $model = RelationModel::detail($id);
        if (!$model->setDelete()) {
            return $this->renderError($model->getError() ?: '删除失败');
        }
        return $this->renderSuccess('删除成功');
    }

}
