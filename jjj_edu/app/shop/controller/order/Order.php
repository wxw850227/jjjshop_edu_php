<?php

namespace app\shop\controller\order;

use app\common\enum\order\OrderSourceEnum;
use app\shop\controller\Controller;
use app\shop\model\order\Order as OrderModel;

/**
 * 订单控制器
 */
class Order extends Controller
{
    /**
     * 订单列表
     */
    public function index($dataType = 'all')
    {
        // 订单列表
        $model = new OrderModel();
        $list = $model->getList($dataType, $this->postData());
        $order_count = [
            'order_count' => [
                'payment' => $model->getCount('payment', $this->postData()),
                'comment' => $model->getCount('comment', $this->postData()),
                'complete' => $model->getCount('complete', $this->postData()),
                'cancel' => $model->getCount('cancel', $this->postData()),
            ],];
        $order_source = OrderSourceEnum::data();
        return $this->renderSuccess('', compact('list', 'order_count', 'order_source'));
    }

    /**
     * 订单详情
     */
    public function detail($order_id)
    {
        // 订单详情
        $detail = OrderModel::detail($order_id);
        return $this->renderSuccess('', compact('detail'));
    }

    /**
     * 订单导出
     */
    public function export($dataType)
    {
        $model = new OrderModel();
        return $model->exportList($dataType, $this->postData());
    }

}