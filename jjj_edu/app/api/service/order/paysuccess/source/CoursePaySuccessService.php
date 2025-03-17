<?php

namespace app\api\service\order\paysuccess\source;

/**
 * 课程订单支付成功后的回调
 */
class CoursePaySuccessService
{
    /**
     * 回调方法
     */
    public function onPaySuccess($order)
    {
        return true;
    }


}