<?php

namespace app\shop\controller\service;

use app\shop\controller\Controller;
use app\shop\model\service\Service as ServiceModel;
use app\shop\model\service\Category as CategoryModel;

/**
 *消息控制器
 */
class Service extends Controller
{
    /**
     * 数据
     */
    public function index()
    {
        $model = new ServiceModel;
        $list = $model->getList($this->postData());
        return $this->renderSuccess('', compact('list'));
    }

    /**
     * 添加
     */
    public function add()
    {
        if ($this->request->isGet()) {
            // 分类
            $catgory = (new CategoryModel)->getAll();
            return $this->renderSuccess('', compact('catgory'));
        }
        // 新增记录
        $model = new ServiceModel;
        if ($model->add($this->postData())) {
            return $this->renderSuccess('添加成功');
        }
        return $this->renderError($model->getError() ?: '添加失败');
    }

    /**
     * 详情
     */
    public function detail($service_id)
    {
        // 详情
        $detail = ServiceModel::detail($service_id);
        $category = (new CategoryModel)->getAll();
        return $this->renderSuccess('', compact('detail', 'category'));

    }

    /**
     * 修改
     * @param $id
     * @return \think\response\Json
     */
    public function edit($service_id)
    {
        if ($this->request->isGet()) {
            return $this->detail($service_id);
        }
        $model = ServiceModel::detail($service_id);
        // 更新记录
        if ($model->edit($this->postData())) {
            return $this->renderSuccess('更新成功');
        }
        return $this->renderError($model->getError() ?: '更新失败');
    }

    /**
     * 删除记录
     */
    public function delete($service_id)
    {
        $model = ServiceModel::detail($service_id);
        if ($model->remove($service_id)) {
            return $this->renderSuccess('删除成功');
        }
        return $this->renderError($model->getError() ?: '删除失败');
    }
}
