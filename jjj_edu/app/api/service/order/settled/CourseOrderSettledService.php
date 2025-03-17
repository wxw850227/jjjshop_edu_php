<?php

namespace app\api\service\order\settled;

use app\api\model\order\Order as OrderModel;
use app\common\enum\order\OrderSourceEnum;

/**
 * 课程订单结算服务类
 */
class CourseOrderSettledService extends OrderSettledService
{
    /**
     * 构造函数
     */
    public function __construct($user, $productList, $params)
    {
        parent::__construct($user, $productList, $params);
        //订单来源
        $this->orderSource = [
            'source' => OrderSourceEnum::COURSE,
            'activity_id' => 0,
        ];
    }

    /**
     * 验证订单商品的状态
     */
    public function validateProductList()
    {
        foreach ($this->productList as $course) {
            // 判断课程是否下架
            if ($course['is_show'] != 0) {
                $this->error = "很抱歉，课程 [{$course['title']}] 已下架";
                return false;
            }
            $payStatus = (new OrderModel())->getOrderState($course['course_id'], $this->user, OrderSourceEnum::COURSE);
            if ($payStatus > 0) {
                $this->error = "很抱歉，课程 [{$course['title']}] 已购买";
                return false;
            }
        }
        return true;
    }
}