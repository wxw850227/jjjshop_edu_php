<?php

namespace app\common\enum\settings;

use MyCLabs\Enum\Enum;

/**
 * 商城设置枚举类
 */
class SettingEnum extends Enum
{
    // 商城设置
    const STORE = 'store';
    // 交易设置
    const TRADE = 'trade';
    // 模板消息
    const TPL_MSG = 'tplMsg';
    // 上传设置
    const STORAGE = 'storage';
    // 充值设置
    const RECHARGE = 'recharge';
    // 积分设置
    const POINTS = 'points';
    // 公众号设置
    const OFFICIA = 'officia';
    // 签到有礼
    const SIGN = 'sign';
    // 首页推送
    const HOMEPUSH = 'homepush';
    // 引导收藏
    const COLLECTION = 'collection';
    // 获取手机号
    const GETPHOME = 'getPhone';
    // 系统配置
    const SYS_CONFIG = 'sys_config';
    // 充值设置
    const BALANCE = 'balance';

    /**
     * 获取订单类型值
     */
    public static function data()
    {
        return [
            self::STORE => [
                'value' => self::STORE,
                'describe' => '商城设置',
            ],
            self::TRADE => [
                'value' => self::TRADE,
                'describe' => '交易设置',
            ],
            self::TPL_MSG => [
                'value' => self::TPL_MSG,
                'describe' => '模板消息',
            ],
            self::STORAGE => [
                'value' => self::STORAGE,
                'describe' => '上传设置',
            ],
            self::RECHARGE => [
                'value' => self::RECHARGE,
                'describe' => '充值设置',
            ],
            self::POINTS => [
                'value' => self::POINTS,
                'describe' => '积分设置',
            ],
            self::OFFICIA => [
                'value' => self::OFFICIA,
                'describe' => '公众号设置',
            ],
            self::SIGN => [
                'value' => self::SIGN,
                'describe' => '签到有礼',
            ],
            self::HOMEPUSH => [
                'value' => self::HOMEPUSH,
                'describe' => '首页推送',
            ],
            self::COLLECTION => [
                'value' => self::COLLECTION,
                'describe' => '引导收藏',
            ],
            self::GETPHOME => [
                'value' => self::GETPHOME,
                'describe' => '获取手机号',
            ],
            self::SYS_CONFIG => [
                'value' => self::SYS_CONFIG,
                'describe' => '系统设置',
            ],
            self::BALANCE => [
                'value' => self::BALANCE,
                'describe' => '充值设置',
            ],
        ];
    }

}