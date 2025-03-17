<?php

namespace app\shop\model\course;

use app\common\model\course\Order as OrderModel;
use app\common\library\helper;
use app\common\enum\order\OrderPayStatusEnum;
use app\shop\service\order\ExportService;
use app\shop\service\export\LiveExportService;

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
        return $model->alias('order')
            ->with(['course' => ['image'], 'user'])
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
        return $model->with(['course.image', 'user'])
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
        (new Exportservice)->courseOrderList($list);
    }

    /**
     * 设置检索查询条件
     */
    private function setWhere($model, $data)
    {
        $model = $model->where('pay_status', '=', 20);
        //搜索订单号
        if (isset($data['user_id']) && $data['user_id'] != '') {
            $model = $model->where('user.mobile', 'like', '%' . trim($data['user_id']) . '%');
        }
        if (isset($data['nickName']) && $data['nickName'] != '') {
            $model = $model->where('user.nickName', 'like', '%' . trim($data['nickName']) . '%');
        }
        if (isset($data['order_no']) && $data['order_no'] != '') {
            $model = $model->where('order.order_no', 'like', '%' . trim($data['order_no']) . '%');
        }
        //搜索付款方式
        if (isset($data['pay_type']) && $data['pay_type']) {
            $model = $model->where('order.pay_type', '=', $data['pay_type']);
        }
        if (isset($data['is_comment']) && $data['is_comment'] > -1) {
            $model = $model->where('order.is_comment', '=', $data['is_comment']);
        }
        //搜索时间段
        if (isset($data['create_time']) && $data['create_time'] != '') {
            $sta_time = array_shift($data['create_time']);
            $end_time = array_pop($data['create_time']);
            $model = $model->whereBetweenTime('order.pay_time', $sta_time, $end_time);
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
                $filter['order.pay_status'] = OrderPayStatusEnum::PENDING;
                $filter['order.order_status'] = 10;
                break;
            case 'comment';
                $filter['order.is_comment'] = 0;
                $filter['order.order_status'] = 30;
                break;
            case 'six';
                $filter['order.is_comment'] = 1;
                $filter['order.order_status'] = 30;
                break;
        }
        return $filter;
    }

    /**
     * 获取已付款订单总数 (可指定某天)
     */
    public function getOrderData($startDate, $endDate, $type)
    {
        $model = $this;

        !is_null($startDate) && $model = $model->where('pay_time', '>=', strtotime($startDate));

        if (is_null($endDate)) {
            !is_null($startDate) && $model = $model->where('pay_time', '<', strtotime($startDate) + 86400);
        } else {
            $model = $model->where('pay_time', '<', strtotime($endDate) + 86400);
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
     * 获取某天的总销售额
     * 结束时间不传则查一天
     */
    public function getOrderTotalPrice($startDate, $endDate)
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
     * 获取兑换记录
     * @param $param array
     * @return \think\Paginator
     */
    public function getExchange($param)
    {
        $model = $this;
        if (isset($param['order_status']) && $param['order_status'] > -1) {
            $model = $model->where('order.order_status', '=', $param['order_status']);
        }
        if (isset($param['nickName']) && !empty($param['nickName'])) {
            $model = $model->where('user.nickName', 'like', '%' . trim($param['nickName']) . '%');
        }

        return $model->with(['user'])->alias('order')
            ->join('user', 'user.user_id = order.user_id')
            ->where('order.order_source', '=', 20)
            ->where('order.is_delete', '=', 0)
            ->order(['order.create_time' => 'desc'])
            ->paginate($param);
    }

    /**
     * 获取直播订单
     */
    public function getLiveOrder($params)
    {
        $model = $this->where('pay_status', '=', 20);
        if (isset($params['order_no']) && !empty($params['order_no'])) {
            $model = $model->where('order.order_no', 'like', '%' . trim($params['order_no']) . '%');
        }
        if (isset($params['room_name']) && !empty($params['room_name'])) {
            $model = $model->where('room.name', 'like', '%' . trim($params['room_name']) . '%');
        }
        if (isset($params['nickName']) && !empty($params['nickName'])) {
            $model = $model->where('u.nickName', 'like', '%' . trim($params['real_name']) . '%');
        }
        if (isset($params['user_id']) && !empty($params['user_id'])) {
            $model = $model->where('u.mobile', 'like', '%' . trim($params['user_id']) . '%');
        }
        if (isset($data['value1']) && $params['value1']) {
            $startTime = strtotime($params['value1'][0]);
            $endTime = strtotime($params['value1'][1]) + 86399;
            $model = $model->where('order.pay_time', 'between', [$startTime, $endTime]);
        }
        if (isset($params['pay_type']) && $params['pay_type'] > 0) {
            $model = $model->where('order.pay_type', '=', $params['pay_type']);
        }
        return $model->alias('order')
            ->field(['order.*'])
            ->with(['course.image', 'user', 'room.user'])
            ->join('live_room room', 'room.room_id = order.room_id', 'left')
            ->join('user user', 'user.user_id = room.user_id', 'left')
            ->join('user u', 'u.user_id = order.user_id', 'left')
            ->where('order.room_id', '>', 0)
            ->where('order.is_delete', '=', 0)
            ->order(['order.create_time' => 'desc'])
            ->paginate($params);
    }

    /**
     * 获取直播订单
     */
    public function getLiveListAll($params)
    {
        $model = $this->where('pay_status', '=', 20);
        if (isset($params['order_no']) && !empty($params['order_no'])) {
            $model = $model->where('order.order_no', 'like', '%' . trim($params['order_no']) . '%');
        }
        if (isset($params['room_name']) && !empty($params['room_name'])) {
            $model = $model->where('room.name', 'like', '%' . trim($params['room_name']) . '%');
        }
        if (isset($params['nickName']) && !empty($params['nickName'])) {
            $model = $model->where('u.nickName', 'like', '%' . trim($params['real_name']) . '%');
        }
        if (isset($params['user_id']) && !empty($params['user_id'])) {
            $model = $model->where('u.mobile', 'like', '%' . trim($params['user_id']) . '%');
        }
        if (isset($data['value1']) && $params['value1']) {
            $startTime = strtotime($params['value1'][0]);
            $endTime = strtotime($params['value1'][1]) + 86399;
            $model = $model->where('order.pay_time', 'between', [$startTime, $endTime]);
        }
        if (isset($params['pay_type']) && $params['pay_type'] > 0) {
            $model = $model->where('order.pay_type', '=', $params['pay_type']);
        }
        return $model->alias('order')
            ->field(['order.*'])
            ->with(['course.image', 'user', 'room.user'])
            ->join('live_room room', 'room.room_id = order.room_id', 'left')
            ->join('user user', 'user.user_id = room.user_id', 'left')
            ->join('user u', 'u.user_id = order.user_id', 'left')
            ->where('order.room_id', '>', 0)
            ->where('order.is_delete', '=', 0)
            ->order(['order.create_time' => 'desc'])
            ->select();
    }

    /**
     * 订单导出
     */
    public function liveExportList($query)
    {
        // 获取订单列表
        $list = $this->getLiveListAll($query);
        // 导出excel文件
        (new LiveExportService)->courseOrderList($list);
    }

    /**
     * 获取某天的总销售额
     */
    public function getTotalPrice($data)
    {
        $model = $this;
        if (isset($data['time']) && $data['time']) {
            $model = $model->where('pay_time', 'between', [strtotime($data['time'][0]), strtotime($data['time'][1]) + 86399]);
        }
        $money = $model->where('pay_status', '=', 20)
            ->where('order_status', '<>', 20)
            ->where('is_delete', '=', 0)
            ->sum('pay_price');
        return $money ? $money : 0;
    }

    /**
     * 获取某天的商品总销售量
     */
    public function getTotalCourseNum($data)
    {
        $model = $this;
        if (isset($data['time']) && $data['time']) {
            $model = $model->where('pay_time', 'between', [strtotime($data['time'][0]), strtotime($data['time'][1]) + 86399]);
        }
        return $model->where('pay_status', '=', 20)
            ->where('order_status', '<>', 20)
            ->where('is_delete', '=', 0)
            ->count();
    }
}