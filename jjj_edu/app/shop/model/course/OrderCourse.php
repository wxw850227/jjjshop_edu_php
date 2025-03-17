<?php

namespace app\shop\model\order;

use app\common\model\course\OrderCourse as OrderCourseModel;

/**
 * 订单课程模型
 */
class OrderCourse extends OrderCourseModel
{
    /**
     * 获取商品数据 (可指定某天)
     */
    public function getProductData($startDate, $endDate, $type)
    {
        $model = $this;
        $model = $model->alias('order_course')
            ->join('course_order order', 'course_order_course.order_id = order.order_id', 'left');
        $model = $model->where('order.create_time', '>=', strtotime($startDate));
        if (is_null($endDate)) {
            $model = $model->where('order.create_time', '<', strtotime($startDate) + 86400);
        } else {
            $model = $model->where('order.create_time', '<', strtotime($endDate) + 86400);
        }
        if ($type == 'no_pay') {
            // 未支付
            return $model->where('order.pay_status', '=', 10)->sum('order_course.total_num');
        } else if ($type == 'pay') {
            // 已支付
            return $model->where('order.pay_status', '=', 20)->sum('order_course.total_num');
        }
        return 0;
    }
}