<?php

namespace app\job\service;

use app\job\model\order\Order as OrderModel;
use app\common\library\helper;

class OrderService
{
    // 模型
    private $model;

    // 自动关闭的订单id集
    private $closeOrderIds = [];

    /**
     * 构造方法
     * Order constructor.
     */
    public function __construct()
    {
        $this->model = new OrderModel;
    }

    /**
     * 未支付订单自动关闭
     */
    public function close()
    {
        // 查询截止时间未支付的订单
        $list = $this->model->getCloseList(['product', 'user']);
        $this->closeOrderIds = helper::getArrayColumn($list, 'order_id');
        // 取消订单事件
        if (!empty($this->closeOrderIds)) {
            // 批量更新订单状态为已取消
            return $this->model->onBatchUpdate($this->closeOrderIds, ['order_status' => 20]);
        }
        return true;
    }

    /**
     * 获取自动关闭的订单id集
     */
    public function getCloseOrderIds()
    {
        return $this->closeOrderIds;
    }

}