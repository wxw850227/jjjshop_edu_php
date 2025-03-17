<?php

namespace app\api\service\order\checkpay;

/**
 * 主订单支付检查服务类
 */
class CourseCheckPayService extends CheckPayService
{
    /**
     * 判断订单是否允许付款
     */
    public function checkOrderStatus($order)
    {
        // 判断订单状态
        if (!$this->checkOrderStatusCommon($order)) {
            return false;
        }
        // 判断商品状态、库存
        if (!$this->checkProductStatus($order['product'])) {
            return false;
        }
        return true;
    }

    /**
     * 判断课程状态(未付款订单)
     */
    protected function checkProductStatus($courseList)
    {
        foreach ($courseList as $course) {
            // 判断是否下架
            if (
                empty($course['course'])
                || $course['course']['is_show'] != 0
                || $course['course']['is_delete'] != 0
            ) {
                $this->error = "很抱歉，课程 [{$course['title']}] 已下架";
                return false;
            }
        }
        return true;
    }

}