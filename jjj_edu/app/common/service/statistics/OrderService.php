<?php

namespace app\common\service\statistics;

use app\common\library\helper;
use app\shop\model\order\Order as OrderModel;
use app\common\model\order\OrderProduct as OrderProductModel;

/**
 * 订单数据概况
 */
class OrderService
{

    public function __construct()
    {
    }

    /**
     * 获取数据概况
     */
    public function getData()
    {
        $today = date('Y-m-d');
        $yesterday = date('Y-m-d', strtotime('-1 day'));
        $data = [
            // 成交额(元)
            'order_total_price' => [
                'total' => helper::number2($this->getOrderData(null, null, 'order_total_price')),
                'today' => helper::number2($this->getOrderData($today, null, 'order_total_price')),
                'yesterday' => helper::number2($this->getOrderData($yesterday, null, 'order_total_price'))
            ],
            // 课程成交额(元)
            'order_course_total_price' => [
                'total' => helper::number2($this->getOrderData(null, null, 'order_total_price', 10)),
                'today' => helper::number2($this->getOrderData($today, null, 'order_total_price', 10)),
                'yesterday' => helper::number2($this->getOrderData($yesterday, null, 'order_total_price', 10))
            ],
            // 教务成交额(元)
            'order_education_total_price' => [
                'total' => helper::number2($this->getOrderData(null, null, 'order_total_price', 30)),
                'today' => helper::number2($this->getOrderData($today, null, 'order_total_price', 30)),
                'yesterday' => helper::number2($this->getOrderData($yesterday, null, 'order_total_price', 30))
            ],
            // 支付订单数
            'order_total' => [
                'total' => number_format($this->getOrderData(null, null, 'order_total')),
                'today' => number_format($this->getOrderData($today, null, 'order_total')),
                'yesterday' => number_format($this->getOrderData($yesterday, null, 'order_total'))
            ],
            // 下单用户数
            'order_user_total' => [
                'total' => number_format($this->getOrderData(null, null, 'order_user_total')),
                'today' => number_format($this->getOrderData($today, null, 'order_user_total')),
                'yesterday' => number_format($this->getOrderData($yesterday, null, 'order_user_total'))
            ],
        ];
        return $data;
    }

    /**
     * 通过时间段查询订单数据
     */
    public function getDataByDate($days, $order_type = '')
    {
        $data = [];
        foreach ($days as $day) {
            $data[] = [
                'day' => $day,
                'total_money' => $this->getOrderData($day, null, 'order_total_price', $order_type),
                'total_num' => $this->getOrderData($day, null, 'order_total', $order_type)
            ];
        }
        return $data;
    }

    /**
     * 获取订单数据
     */
    private function getOrderData($startDate, $endDate, $type, $order_type = '')
    {
        return (new OrderModel)->getOrderData($startDate, $endDate, $type, $order_type);
    }

    /**
     * 获取订单商品数据
     */
    private function getOrderProductData($startDate, $endDate, $type)
    {
        return (new OrderProductModel)->getProductData($startDate, $endDate, $type);
    }


    /**
     * 通过时间段查询商品订单数据
     */
    public function getProductDataByDate($days)
    {
        $data = [];
        foreach ($days as $day) {
            $data[] = [
                'day' => $day,
                'total_num' => $this->getOrderProductData($day, null, 'pay')
            ];
        }
        return $data;
    }
}