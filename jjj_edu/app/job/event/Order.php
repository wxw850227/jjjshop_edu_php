<?php

namespace app\job\event;

use app\api\model\user\User as UserModel;
use app\common\library\helper;
use app\common\model\plus\points\Order as PointsOrderModel;
use app\common\model\settings\Setting as SettingModel;
use app\job\model\order\Order as OrderModel;
use app\job\service\OrderService;
use think\facade\Cache;

/**
 * 订单事件管理
 */
class Order
{
    // 模型
    private $model;

    // 应用id
    private $appId;

    /**
     * 执行函数
     */
    public function handle($app_id)
    {
        try {
            $this->appId = $app_id;
            $this->model = new OrderModel();
            // 未支付订单自动关闭
            $this->close();
            // 积分订单行为管理
            $this->pointsMaster();
        } catch (\Throwable $e) {
            echo 'ERROR ORDER: ' . $e->getMessage() . PHP_EOL;
            log_write('ORDER TASK : ' . $app_id . '__ ' . $e->getMessage(), 'task');
        }
        return true;
    }

    /**
     * 未支付订单自动关闭
     */
    private function close()
    {
        $service = new OrderService();
        // 执行自动关闭
        $service->close();
        // 记录日志
        $this->dologs('close', [
            'orderIds' => json_encode($service->getCloseOrderIds()),
        ]);
        return true;
    }

    /**
     * 积分订单行为管理
     * 1分钟执行一次
     */
    private function pointsMaster()
    {
        $key = "task_space__points__order__{$this->appId}";
        if (Cache::has($key)) return true;
        // 获取商城交易设置
        $config = SettingModel::getItem('trade', $this->appId);
        $this->model->transaction(function () use ($config) {
            $this->pointsReceive($config['order']['points_days']);
        });
        Cache::set($key, time(), 60);
        return true;
    }

    /**
     * 已发货订单自动确认收货
     */
    private function pointsReceive($points_days)
    {
        // 截止时间
        if ($points_days <= 0) return false;
        $deadlineTime = time() - ($points_days * 86400);
        // 条件
        // 订单id集
        $model = new PointsOrderModel;
        $orderId_arr = $model->where('pay_status', '=', 20)
            ->where('delivery_status', '=', 20)
            ->where('delivery_type', '=', 10)
            ->where('receipt_status', '=', 10)
            ->where('app_id', '=', $this->appId)
            ->where('delivery_time', '<=', $deadlineTime)
            ->column('order_id');
        $orderIds = helper::getArrayColumnIds($orderId_arr);
        if (!empty($orderIds)) {
            // 更新订单收货状态
            $model->onBatchUpdate($orderIds, [
                'receipt_status' => 20,
                'receipt_time' => time(),
                'order_status' => 30
            ]);
        }
        if ($orderIds) {
            $list = $model->where('order_id', 'in', $orderId_arr)->select();
            foreach ($list as $item) {
                $data['user_id'] = $item['user_id'];
                $data['money'] = $item['pay_price'];
                $data['money'] && (new UserModel)->IncExpendMoney($data);
            }
        }
        // 记录日志
        $this->dologs('pointsReceive', [
            'points_days' => $points_days,
            'deadline_time' => $deadlineTime,
            'orderIds' => json_encode($orderIds),
        ]);
        return true;
    }

    /**
     * 记录日志
     */
    private function dologs($method, $params = [])
    {
        $value = 'behavior Order --' . $method;
        foreach ($params as $key => $val)
            $value .= ' --' . $key . ' ' . $val;
        return log_write($value, 'task');
    }

}
