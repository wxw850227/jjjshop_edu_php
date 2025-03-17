<?php

namespace app\api\service\order\paysuccess\source;

use app\common\enum\order\OrderSourceEnum;

/**
 * 支付成功辅助工厂类
 */
class PaySourceSuccessFactory
{
    public static function getFactory($type = OrderSourceEnum::COURSE)
    {
        switch ($type) {
            case OrderSourceEnum::COURSE:
                return new CoursePaySuccessService();
                break;
            case OrderSourceEnum::EDU;
                return new EduPaySuccessService();
                break;
        }
    }
}