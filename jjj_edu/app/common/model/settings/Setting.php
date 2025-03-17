<?php

namespace app\common\model\settings;

use app\common\enum\settings\SettingEnum;
use think\facade\Cache;
use app\common\model\BaseModel;
use think\Model;

/**
 * 系统设置模型
 */
class Setting extends BaseModel
{
    protected $name = 'setting';
    protected $createTime = false;

    /**
     * 获取器: 转义数组格式
     */
    public function getValuesAttr($value)
    {
        return json_decode($value, true);
    }

    /**
     * 修改器: 转义成json格式
     */
    public function setValuesAttr($value)
    {
        return json_encode($value);
    }

    /**
     * 获取指定项设置
     */
    public static function getItem($key, $app_id = null)
    {
        $data = self::getAll($app_id);
        $data_key = $data[$key];
        if (isset($data_key)) {
            $data_key = $data[$key]['values'];
            jsonRecursive($data_key);
        } else {
            $data_key = [];
        }
        return $data_key;
    }

    /**
     * 获取系统配置
     */
    public static function getSysConfig()
    {
        $model = new static;
        $result = $model->withoutGlobalScope()->where('key', '=', SettingEnum::SYS_CONFIG)->value('values');
        if (!$result) {
            $result = $model->defaultData()[SettingEnum::SYS_CONFIG]['values'];
        } else {
            $result = json_decode($result, true);
            $result = array_merge_multiple($model->defaultData()[SettingEnum::SYS_CONFIG]['values'], $result);
        }
        return $result;
    }

    /**
     * 获取指定项设置
     */
    public static function getSupplierItem($key, $shop_supplier_id, $app_id = null)
    {
        $data = self::getAll($app_id, $shop_supplier_id);
        $data_key = $data[$key];
        if (isset($data_key)) {
            $data_key = $data[$key]['values'];
            jsonRecursive($data_key);
        } else {
            $data_key = [];
        }

        return $data_key;
    }

    /**
     * 获取设置项信息
     */
    public static function detail($key, $shop_supplier_id = 0)
    {
        $where = [];
        if ($shop_supplier_id) {
            $where['shop_supplier_id'] = $shop_supplier_id;
        }

        return (new static())->where('key', '=', $key)->where($where)->find();
    }

    /**
     * 全局缓存: 系统设置
     */
    public static function getAll($app_id = null, $shop_supplier_id = 0)
    {
        $static = new static;
        is_null($app_id) && $app_id = $static::$app_id;
        if (!$data = Cache::get('setting_' . $app_id . '_' . $shop_supplier_id)) {
            $setting = $static->where(compact('app_id'))->where('shop_supplier_id', $shop_supplier_id)->select();
            $data = empty($setting) ? [] : array_column($static->collection($setting)->toArray(), null, 'key');
            Cache::tag('cache')->set('setting_' . $app_id . '_' . $shop_supplier_id, $data);
        }
        return $static->getMergeData($data);
    }

    /**
     * 数组转换为数据集对象
     */
    public function collection($resultSet)
    {
        $item = current(get_mangled_object_vars($resultSet));
        if ($item instanceof Model) {
            return \think\model\Collection::make($resultSet);
        } else {
            return \think\Collection::make($resultSet);
        }
    }


    /**
     * 合并用户设置与默认数据
     */
    private function getMergeData($userData)
    {
        $defaultData = $this->defaultData();
        return array_merge_multiple($defaultData, $userData);
    }

    /**
     * 默认配置
     */
    public function defaultData($storeName = null)
    {
        return [
            SettingEnum::STORE => [
                'key' => 'store',
                'describe' => '商城设置',
                'values' => [
                    // 商城名称
                    'name' => $storeName ?: '知识付费商城',
                    // 是否记录日志
                    'is_get_log' => true,
                    // 政策隐私
                    'policy' => [
                        'service' => self::$base_url . 'service.html',
                        'privacy' => self::$base_url . 'privacy.html',
                    ],
                    //默认头像
                    'avatarUrl' => base_url() . 'image/user/avatarUrl.png',
                ],
            ],
            SettingEnum::TRADE => [
                'key' => 'trade',
                'describe' => '交易设置',
                'values' => [
                    'order' => [
                        'close_days' => '3',
                        'points_days' => '7'
                    ],
                ]
            ],
            SettingEnum::STORAGE => [
                'key' => 'storage',
                'describe' => '上传设置',
                'values' => [
                    'default' => 'local',
                    'max_image' => '2',
                    'max_video' => '20',
                    'engine' => [
                        'local' => [],
                        'qiniu' => [
                            'bucket' => '',
                            'access_key' => '',
                            'secret_key' => '',
                            'domain' => 'http://'
                        ],
                        'aliyun' => [
                            'bucket' => '',
                            'access_key_id' => '',
                            'access_key_secret' => '',
                            'domain' => 'http://'
                        ],
                        'qcloud' => [
                            'bucket' => '',
                            'region' => '',
                            'secret_id' => '',
                            'secret_key' => '',
                            'domain' => 'http://'
                        ],
                    ]
                ],
            ],
            SettingEnum::TPL_MSG => [
                'key' => 'tplMsg',
                'describe' => '模板消息',
                'values' => [
                    'payment' => [
                        'is_enable' => '0',
                        'template_id' => '',
                    ],
                    'delivery' => [
                        'is_enable' => '0',
                        'template_id' => '',
                    ],
                    'refund' => [
                        'is_enable' => '0',
                        'template_id' => '',
                    ],
                ],
            ],
            SettingEnum::RECHARGE => [
                'key' => 'recharge',
                'describe' => '用户充值设置',
                'values' => [
                    'is_entrance' => '1',   // 是否允许用户充值
                    'is_custom' => '1',   // 是否允许自定义金额
                    'is_match_plan' => '1',   // 自定义金额是否自动匹配合适的套餐
                    'describe' => "1. 账户充值仅限微信在线方式支付，充值金额实时到账；\n" .
                        "2. 账户充值套餐赠送的金额即时到账；\n" .
                        "3. 账户余额有效期：自充值日起至用完即止；\n" .
                        "4. 若有其它疑问，可拨打客服电话400-000-1234",     // 充值说明
                ],
            ],
            SettingEnum::POINTS => [
                'key' => 'points',
                'describe' => '积分设置',
                'values' => [
                    'points_name' => '积分',// 积分名称自定义
                    // 积分说明
                    'describe' => "a) 积分不可兑现、不可转让,仅可在本平台使用;\n" .
                        "b) 您在本平台参加特定活动也可使用积分,详细使用规则以具体活动时的规则为准;\n" .
                        "c) 积分的数值精确到个位(小数点后全部舍弃,不进行四舍五入)\n" .
                        "d) 买家在完成该笔交易(订单状态为“已签收”)后才能得到此笔交易的相应积分,如购买商品参加店铺其他优惠,则优惠的金额部分不享受积分获取;",
                ],
            ],
            SettingEnum::OFFICIA => [
                'key' => 'officia',
                'describe' => '公众号关注',
                'values' => [
                    'status' => 0
                ],
            ],
            SettingEnum::COLLECTION => [
                'key' => 'collection',
                'describe' => '引导收藏',
                'values' => [
                    'status' => 0
                ],
            ],
            SettingEnum::HOMEPUSH => [
                'key' => 'homepush',
                'describe' => '首页推送',
                'values' => [
                    // 是否开启
                    'is_open' => 0,
                    'type' => '1'
                ]
            ],
            SettingEnum::SIGN => [
                'key' => 'sign',
                'describe' => '签到打卡',
                'values' => [
                    // 是否开启
                    'is_open' => false
                ]
            ],
            SettingEnum::GETPHOME => [
                'key' => 'getPhone',
                'describe' => '获取手机号设置',
                'values' => [
                    // 显示区域
                    'area_type' => [],
                    // 不再提示天数
                    'send_day' => 7
                ],
            ],
            SettingEnum::SYS_CONFIG => [
                'key' => 'sys_config',
                'describe' => '系统设置',
                'values' => [
                    'shop_name' => '三勾商城管理系统',
                    'shop_bg_img' => '',
                    'supplier_name' => '三勾商城供应商管理系统',
                    'supplier_bg_img' => '',
                    'url' => 'wss://',
                    'service_open' => 0,
                    // 微信服务商支付
                    'weixin_service' => [
                        'is_open' => 0,
                        'app_id' => '',
                        'mch_id' => '',
                        'apikey' => '',
                        'cert_pem' => '',
                        'key_pem' => '',
                        'serial_no' => ''
                    ],
                ]
            ],
            SettingEnum::BALANCE => [
                'key' => 'balance',
                'describe' => '充值设置',
                'values' => [
                    // 是否开启
                    'is_open' => 0,
                    // 是否可以自定义
                    'is_plan' => 1,
                    // 最低充值金额
                    'min_money' => 1,
                    // 充值说明
                    'describe' => "a) 账户充值仅限在线方式支付，充值金额实时到账；\n" .
                        "b) 有问题请联系客服;\n",
                ]
            ],
        ];
    }

}
