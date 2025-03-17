<?php

namespace app\common\service\product\factory;

use app\common\enum\order\OrderSourceEnum;

/**
 * 商品辅助工厂类
 */
class ProductFactory
{
    public static function getFactory($type = OrderSourceEnum::COURSE)
    {
        switch ($type) {
            case OrderSourceEnum::COURSE:
                return new CourseProductService();
                break;
            case OrderSourceEnum::EDU:
                return new EduProductService();
                break;
        }
    }
}