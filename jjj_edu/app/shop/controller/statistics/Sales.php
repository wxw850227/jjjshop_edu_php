<?php

namespace app\shop\controller\statistics;

use app\shop\controller\Controller;
use app\common\service\statistics\OrderService;

/**
 * 销售数据控制器
 */
class Sales extends Controller
{
    /**
     * 销售数据统计
     */
    public function index()
    {
        return $this->renderSuccess('', [
            // 成交订单统计
            'order' => (new OrderService())->getData(),
        ]);
    }

    /**
     * 通过时间段查询本期上期金额
     * $type类型：order refund
     */
    public function order($search_time = '', $type = 'order')
    {
        $days = $this->getDays($search_time);
        $data = [];
        if ($type == 'order') {
            $data = (new OrderService())->getDataByDate($days);
        } else if ($type == 'course') {
            $data = (new OrderService())->getDataByDate($days, 10);
        } else if ($type == 'paper') {
            $data = (new OrderService())->getDataByDate($days, 20);
        } else if ($type == 'edu') {
            $data = (new OrderService())->getDataByDate($days, 30);
        }
        return $this->renderSuccess('', [
            // 日期
            'days' => $days,
            // 数据
            'data' => $data,
        ]);
    }

    /**
     * 通过时间段查询本期上期金额
     */
    public function product($search_time)
    {
        $days = $this->getDays($search_time);
        return $this->renderSuccess('', [
            // 日期
            'days' => $days,
            // 数据
            'data' => (new OrderService())->getProductDataByDate($days),
        ]);
    }

    /**
     * 获取具体日期数组
     */
    private function getDays($search_time)
    {
        //搜索时间段
        if (!isset($search_time) || empty($search_time)) {
            //没有传，则默认为最近7天
            $end_time = date('Y-m-d', time());
            $start_time = date('Y-m-d', strtotime('-7 day', time()));
        } else {
            $start_time = array_shift($search_time);
            $end_time = array_pop($search_time);
        }

        $dt_start = strtotime($start_time);
        $dt_end = strtotime($end_time);
        $date = [];
        $date[] = date('Y-m-d', strtotime($start_time));
        while ($dt_start < $dt_end) {
            $date[] = date('Y-m-d', strtotime('+1 day', $dt_start));
            $dt_start = strtotime('+1 day', $dt_start);
        }
        return $date;
    }
}