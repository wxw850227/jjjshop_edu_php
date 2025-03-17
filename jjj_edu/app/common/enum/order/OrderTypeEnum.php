<?php

namespace app\common\enum\order;

use MyCLabs\Enum\Enum;

/**
 * 订单类型枚举类,用于后期扩展，比如虚拟物品
 */
class OrderTypeEnum extends Enum
{
    // 商城订单
    const MASTER = 10;
    // 余额充值订单
    const BALANCE = 20;
    // 积分商城订单
    const POINTS = 30;

    /**
     * 获取订单类型值
     */
    public static function data()
    {
        return [
            self::MASTER => [
                'name' => '商城订单',
                'value' => self::MASTER,
            ],
            self::BALANCE => [
                'name' => '余额充值订单',
                'value' => self::BALANCE,
            ],
            self::POINTS => [
                'name' => '积分商城订单',
                'value' => self::POINTS,
            ],
        ];
    }

    /**
     * 获取订单类型名称
     */
    public static function getTypeName()
    {
        static $names = [];

        if (empty($names)) {
            foreach (self::data() as $item)
                $names[$item['value']] = $item['name'];
        }
        return $names;
    }

}