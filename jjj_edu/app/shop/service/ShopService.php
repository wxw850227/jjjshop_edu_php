<?php

namespace app\shop\service;

use app\shop\model\order\Order;
use app\shop\model\course\Course as CourseModel;
use app\shop\model\user\User;

/**
 * 商城模型
 */
class ShopService
{
    // 订单模型
    private $OrderModel;
    // 用户模型
    private $UserModel;
    // 课程模型
    private $CourseModel;

    /**
     * 构造方法
     */
    public function __construct()
    {
        $this->OrderModel = new Order();
        $this->UserModel = new User();
        $this->CourseModel = new CourseModel();
    }

    /**
     * 后台首页数据
     */
    public function getHomeData()
    {
        $today = date('Y-m-d');
        $yesterday = date('Y-m-d', strtotime('-1 day'));
        // 最近七天日期
        $lately7days = $this->getLately7days();
        $data = [
            'top_data' => [
                // 营业额
                'order_money' => $this->getOrderMoney(),
                // 订单数量
                'order_count' => $this->getOrderTotal(),
                // 用户总量
                'user_count' => $this->getUserTotal(),
                // 课程总量
                'course_count' => $this->getCourseTotal()
            ],
            'today_data' => [
                // 销售额(元)
                'order_total_price' => [
                    'tday' => $this->getOrderTotalPrice($today),
                    'ytd' => $this->getOrderTotalPrice($yesterday)
                ],
                // 支付订单数
                'order_total' => [
                    'tday' => $this->getOrderTotal($today),
                    'ytd' => $this->getOrderTotal($yesterday)
                ],
                // 新增用户数
                'new_user_total' => [
                    'tday' => $this->getUserTotal($today),
                    'ytd' => $this->getUserTotal($yesterday)
                ],
                // 新增课程
                'new_course_total' => [
                    'tday' => $this->getCourseTotal($today),
                    'ytd' => $this->getCourseTotal($yesterday),
                ],
            ],
            'statistics' => [
                // 日期
                'days' => $lately7days,
                // 数据
                'data' => $this->getorderDataByDate($lately7days)
            ],
            'rank_data' => [
                // 课程排行
                'courseRank' => $this->OrderModel->getOrderRank(10),
            ],
        ];
        return $data;
    }

    /**
     * 最近七天日期
     */
    private function getLately7days()
    {
        // 获取当前周几
        $date = [];
        for ($i = 0; $i < 7; $i++) {
            $date[] = date('Y-m-d', strtotime('-' . $i . ' days'));
        }
        return array_reverse($date);
    }

    /**
     * 获取用户总量
     */
    private function getCourseTotal($day = null)
    {
        return number_format($this->CourseModel->getCourseTotal($day));
    }

    /**
     * 获取课程总量
     */
    private function getUserTotal($day = null)
    {
        return number_format($this->UserModel->getUserTotal($day));
    }

    /**
     * 获取订单总量
     */
    private function getOrderTotal($day = null)
    {
        return number_format($this->OrderModel->getOrderData($day, null, 'order_total'));
    }

    /**
     * 获取订单总量
     */
    private function getOrderMoney($day = null)
    {
        return number_format($this->OrderModel->getOrderData($day, null, 'order_total_price'));
    }

    /**
     * 获取待处理订单总量
     */
    private function getReviewOrderTotal()
    {
        return number_format($this->OrderModel->getReviewOrderTotal());
    }

    /**
     * 获取某天的总销售额
     */
    private function getOrderTotalPrice($day)
    {
        return sprintf('%.2f', $this->OrderModel->getOrderTotalPrice($day));
    }

    /**
     * 通过时间段查询订单数据
     */
    public function getorderDataByDate($days)
    {
        $data = [];
        foreach ($days as $day) {
            $data[] = [
                'day' => $day,
                'total_money' => $this->getOrderTotalPrice($day),
                'total_num' => $this->getOrderTotal($day)
            ];
        }
        return $data;
    }
}