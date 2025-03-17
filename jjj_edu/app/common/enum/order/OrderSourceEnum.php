<?php

namespace app\common\enum\order;

use MyCLabs\Enum\Enum;

/**
 * 订单来源
 */
class OrderSourceEnum extends Enum
{
    // 课程订单
    const COURSE = 10;
    // 教务订单
    const EDU = 30;

    /**
     * 获取枚举数据
     */
    public static function data()
    {
        return [
            self::COURSE => [
                'name' => '课程',
                'value' => self::COURSE,
            ],
            self::EDU => [
                'name' => '教务',
                'value' => self::EDU,
            ],
        ];
    }

}