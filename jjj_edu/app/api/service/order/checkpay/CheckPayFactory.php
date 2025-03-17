<?php

namespace app\api\service\order\checkpay;

use app\common\enum\order\OrderSourceEnum;

/**
 * 支付检查辅助工厂类
 */
class CheckPayFactory
{
    public static function getFactory($type = OrderSourceEnum::COURSE)
    {
        switch ($type) {
            case OrderSourceEnum::COURSE:
                return new CourseCheckPayService();
                break;
            case OrderSourceEnum::EDU:
                return new EduCheckPayService();
                break;
        }
    }
}