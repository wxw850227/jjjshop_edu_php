<?php

namespace app\common\model\order;

use app\common\enum\order\OrderSourceEnum;
use app\common\model\BaseModel;
use app\common\enum\order\OrderPayStatusEnum;
use app\common\enum\order\OrderPayTypeEnum;
use app\common\library\helper;
use app\common\service\order\OrderService;

/**
 * 课程订单模型
 */
class Order extends BaseModel
{
    protected $pk = 'order_id';
    protected $name = 'order';

    /**
     * 追加字段
     * @var string[]
     */
    protected $append = [
        'state_text',
        'order_source_text',
        'pay_time_text'
    ];

    /**
     * 订单详情列表
     * @return \think\model\relation\HasMany
     */
    public function product()
    {
        return $this->hasMany('app\\common\\model\\order\\OrderProduct', 'order_id', 'order_id')->hidden(['content']);
    }

    /**
     * 关联用户表
     * @return \think\model\relation\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo('app\\common\\model\\user\\User', 'user_id', 'user_id');
    }

    /**
     * 关联讲师表
     * @return \think\model\relation\BelongsTo
     */
    public function lecturer()
    {
        return $this->belongsTo('app\\common\\model\\lecturer\\Lecturer', 'lecturer_id', 'lecturer_id');
    }

    /**
     * 订单状态文字描述
     * @param $value
     * @param $data
     * @return string
     */
    public function getStateTextAttr($value, $data)
    {
        // 订单状态
        if (in_array($data['order_status'], [20, 30])) {
            $orderStatus = [20 => '已关闭', 30 => '已完成'];
            return $orderStatus[$data['order_status']];
        }
        // 付款状态
        if ($data['pay_status'] == 10) {
            return '待付款';
        }
        return $value;
    }

    /**
     * 付款状态
     * @param $value
     * @return array
     */
    public function getPayTypeAttr($value)
    {
        return ['text' => OrderPayTypeEnum::data()[$value]['name'], 'value' => $value];
    }

    /**
     * 订单来源
     * @param $value
     * @return array
     */
    public function getOrderSourceTextAttr($value, $data)
    {
        return OrderSourceEnum::data()[$data['order_source']]['name'];
    }

    /**
     * 付款状态
     * @param $value
     * @return array
     */
    public function getPayStatusAttr($value)
    {
        return ['text' => OrderPayStatusEnum::data()[$value]['name'], 'value' => $value];
    }

    /**
     * 收货状态
     * @param $value
     * @return array
     */
    public function getOrderStatusAttr($value)
    {
        $status = [10 => '进行中', 20 => '已取消', 21 => '待取消', 30 => '已完成'];
        return ['text' => $status[$value], 'value' => $value];
    }

    /**
     * 订单支付时间
     * @param $value
     * @return array
     */
    public function getPayTimeTextAttr($value, $data)
    {
        return $data['pay_time'] ? date('Y-m-d H:i:s', $data['pay_time']) : '';
    }

    /**
     * 订单详情
     */
    public static function detail($where, $with = ['user', 'product' => ['image']])
    {
        is_array($where) ? $filter = $where : $filter['order_id'] = (int)$where;
        return (new static())->with($with)->where($filter)->find();
    }

    /**
     * 批量获取订单列表
     * @param $orderIds
     * @param array $with
     * @return array
     */
    public function getListByIds($orderIds, $with = [])
    {
        $data = $this->getListByInArray('order_id', $orderIds, $with);
        return helper::arrayColumn2Key($data, 'order_id');
    }

    /**
     * 批量更新订单
     * @param $orderIds
     * @param $data
     * @return bool
     */
    public function onBatchUpdate($orderIds, $data)
    {
        return $this->where('order_id', 'in', $orderIds)->save($data);
    }

    /**
     * 批量获取订单列表
     * @param $field
     * @param $data
     * @param array $with
     * @return \think\Collection
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    private function getListByInArray($field, $data, $with = [])
    {
        return $this->with($with)
            ->where($field, 'in', $data)
            ->where('is_delete', '=', 0)
            ->select();
    }

    /**
     * 生成订单号
     * @return string
     */
    public function orderNo()
    {
        return OrderService::createOrderNo();
    }

    /**
     * 生成交易号
     * @return string
     */
    public function tradeNo()
    {
        return OrderService::createTradeNo();
    }

}