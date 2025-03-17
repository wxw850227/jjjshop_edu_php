<?php

namespace app\shop\model\order;

use app\common\model\order\Order as OrderModel;
use app\common\enum\order\OrderPayStatusEnum;
use app\common\model\order\OrderProduct;
use app\shop\service\order\ExportService;

/**
 * 订单模型
 */
class Order extends OrderModel
{
    /**
     * 订单列表
     */
    public function getList($dataType, $data = null)
    {
        $model = $this;
        // 检索查询条件
        $model = $model->setWhere($model, $data);
        // 获取数据列表
        return $model->alias('order')->with(['product' => ['image'], 'user'])
            ->order(['order.create_time' => 'desc'])
            ->where($this->transferDataType($dataType))
            ->paginate($data);
    }

    /**
     * 获取订单总数
     */
    public function getCount($dataType, $data)
    {
        $model = $this;
        // 检索查询条件
        $model = $model->setWhere($model, $data);
        // 获取数据列表
        return $model->alias('order')
            ->where($this->transferDataType($dataType))
            ->count();
    }

    /**
     * 订单列表(全部)
     */
    public function getListAll($dataType, $query = [])
    {
        $model = $this;
        // 检索查询条件
        $model = $model->setWhere($model, $query);
        // 获取数据列表
        return $model->with(['product.image', 'address', 'user', 'extract', 'extract_store', 'advance'])
            ->alias('order')
            ->field('order.*')
            ->join('user', 'user.user_id = order.user_id')
            ->where($this->transferDataType($dataType))
            ->where('order.is_delete', '=', 0)
            ->order(['order.create_time' => 'desc'])
            ->select();
    }

    /**
     * 订单导出
     */
    public function exportList($dataType, $query)
    {
        // 获取订单列表
        $list = $this->getListAll($dataType, $query);
        // 导出excel文件
        (new Exportservice)->orderList($list);
    }

    /**
     * 设置检索查询条件
     */
    private function setWhere($model, $data)
    {
        //搜索订单号
        if (isset($data['order_no']) && $data['order_no'] != '') {
            $model = $model->where('order.order_no', 'like', '%' . trim($data['order_no']) . '%');
        }
        //搜索订单类型
        if (isset($data['order_source']) && $data['order_source']) {
            $model = $model->where('order.order_source', 'like', $data['order_source']);
        }
        //搜索时间段
        if (isset($data['create_time']) && $data['create_time'] != '') {
            $model = $model->where('order.create_time', 'between', [strtotime($data['create_time'][0]), strtotime($data['create_time'][1]) + 86399]);
        }
        return $model;
    }

    /**
     * 转义数据类型条件
     */
    private function transferDataType($dataType)
    {
        $filter = [];
        // 订单数据类型
        switch ($dataType) {
            case 'all':
                break;
            case 'payment';
                $filter['pay_status'] = OrderPayStatusEnum::PENDING;
                $filter['order_status'] = 10;
                break;
            case 'comment';
                $filter['order.is_comment'] = 0;
                $filter['order.order_status'] = 30;
                break;
            case 'complete';
                $filter['order.is_comment'] = 1;
                $filter['order.order_status'] = 30;
                break;
            case 'cancel';
                $filter['order.order_status'] = 20;
                break;
        }
        return $filter;
    }

    /**
     * 获取已付款订单总数 (可指定某天)
     */
    public function getOrderData($startDate, $endDate, $type, $order_type = '')
    {
        $model = $this;

        !is_null($startDate) && $model = $model->where('pay_time', '>=', strtotime($startDate));

        if (is_null($endDate)) {
            !is_null($startDate) && $model = $model->where('pay_time', '<', strtotime($startDate) + 86400);
        } else {
            $model = $model->where('pay_time', '<', strtotime($endDate) + 86400);
        }
        if ($order_type) {
            $model = $model->where('order_source', '=', $order_type);
        }
        $model = $model->where('is_delete', '=', 0)
            ->where('pay_status', '=', 20)
            ->where('order_status', '<>', 20);
        if ($type == 'order_total') {
            // 订单数量
            return $model->count();
        } else if ($type == 'order_total_price') {
            // 订单总金额
            return $model->sum('pay_price');
        } else if ($type == 'order_user_total') {
            // 支付用户数
            return count($model->distinct(true)->column('user_id'));
        }
        return 0;
    }

    /**
     * 获取待处理订单
     */
    public function getReviewOrderTotal()
    {
        $filter['pay_status'] = OrderPayStatusEnum::SUCCESS;
        $filter['delivery_status'] = 10;
        $filter['order_status'] = 10;
        return $this->where($filter)->count();
    }

    /**
     * 获取某天的总销售额
     * 结束时间不传则查一天
     */
    public function getOrderTotalPrice($startDate, $endDate = null)
    {
        $model = $this;
        $model = $model->where('pay_time', '>=', strtotime($startDate));
        if (is_null($endDate)) {
            $model = $model->where('pay_time', '<', strtotime($startDate) + 86400);
        } else {
            $model = $model->where('pay_time', '<', strtotime($endDate) + 86400);
        }
        return $model->where('pay_status', '=', 20)
            ->where('order_status', '<>', 20)
            ->where('is_delete', '=', 0)
            ->sum('pay_price');
    }

    /**
     * 获取某天的客单价
     * 结束时间不传则查一天
     */
    public function getOrderPerPrice($startDate, $endDate)
    {
        $model = $this;
        $model = $model->where('pay_time', '>=', strtotime($startDate));
        if (is_null($endDate)) {
            $model = $model->where('pay_time', '<', strtotime($startDate) + 86400);
        } else {
            $model = $model->where('pay_time', '<', strtotime($endDate) + 86400);
        }
        return $model->where('pay_status', '=', 20)
            ->where('order_status', '<>', 20)
            ->where('is_delete', '=', 0)
            ->avg('pay_price');
    }

    /**
     * 获取某天的下单用户数
     */
    public function getPayOrderUserTotal($day)
    {
        $startTime = strtotime($day);
        $userIds = $this->distinct(true)
            ->where('pay_time', '>=', $startTime)
            ->where('pay_time', '<', $startTime + 86400)
            ->where('pay_status', '=', 20)
            ->where('is_delete', '=', 0)
            ->column('user_id');
        return count($userIds);
    }

    /**
     * 获取销量
     */
    public function getOrderRank($order_source)
    {
        $model = new OrderProduct;
        $list = $model->alias('op')
            ->where('o.pay_status', '=', 20)
            ->where('o.order_status', '<>', 20)
            ->where('order_source', '=', $order_source)
            ->join('order o', 'op.order_id=o.order_id')
            ->join('course c', 'c.course_id=op.product_id')
            ->field('c.title,sum(total_pay_price) as total_price,sum(total_num) as total_num')
            ->group('op.product_id')
            ->order('total_price desc')
            ->limit(10)
            ->select();
        return $list;
    }


}