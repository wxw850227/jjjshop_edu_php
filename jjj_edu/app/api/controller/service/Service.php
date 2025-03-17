<?php

namespace app\api\controller\service;

use app\api\model\service\Service as ServiceModel;
use app\api\model\service\Category as CategoryModel;
use app\api\controller\Controller;

/**
 * 消息控制器
 */
class Service extends Controller
{

    /**
     *分类
     */
    public function category()
    {
        // 分类列表
        $list = (new CategoryModel)->getList();
        return $this->renderSuccess('', compact('list'));
    }

    /**
     * 消息列表
     */
    public function list()
    {
        // 获取列表数据
        $model = new ServiceModel;
        $list = $model->list($this->postData());
        return $this->renderSuccess('', compact('list'));
    }

    /**
     * 消息详情
     */
    public function detail($service_id)
    {
        $detail = ServiceModel::detail($service_id);
        return $this->renderSuccess('', compact('detail'));
    }
}