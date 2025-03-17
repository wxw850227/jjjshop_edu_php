<?php

namespace app\api\model\order;

use app\api\service\order\paysuccess\type\MasterPaySuccessService;
use app\api\service\order\PaymentService;
use app\common\enum\order\OrderPayStatusEnum;
use app\common\enum\order\OrderPayTypeEnum;
use app\common\enum\order\OrderSourceEnum;
use app\common\enum\order\OrderTypeEnum;
use app\common\exception\BaseException;
use app\common\model\order\Order as OrderModel;
use app\api\service\order\checkpay\CheckPayFactory;

/**
 * 普通订单模型
 */
class Order extends OrderModel
{
    /**
     * 隐藏字段
     * @var array
     */
    protected $hidden = [
        'update_time'
    ];

    /**
     * 订单支付事件
     * 返回0，失败 1，需要继续支付 2，无需继续支付，余额支付成功
     */
    public function onPay()
    {
        // 判断订单状态
        $checkPay = CheckPayFactory::getFactory($this['order_source']);
        if (!$checkPay->checkOrderStatus($this)) {
            $this->error = $checkPay->getError();
            return false;
        }
        return true;
    }

    /**
     * 用户中心订单列表
     */
    public function getList($user_id, $params)
    {
        $model = new self;
        if (isset($params['order_type']) && $params['order_type'] > 0) {
            $model = $model->where('order_source', '=', $params['order_type']);
        }
        if (!isset($params['type'])) {
            $params['type'] = 'all';
        }
        // 筛选条件
        $filter = [];
        // 订单数据类型
        switch ($params['type']) {
            case 'all'://全部订单
                break;
            case 'payment';//待支付
                $filter['pay_status'] = OrderPayStatusEnum::PENDING;
                $filter['order_status'] = 10;
                break;
            case 'comment';//待评价
                $filter['pay_status'] = OrderPayStatusEnum::SUCCESS;
                $filter['is_comment'] = 0;
                $filter['order_status'] = 30;
                break;
            case 'finish';//已完成
                if ($params['order_type'] == OrderSourceEnum::COURSE) {
                    $filter['is_comment'] = 1;
                }
                $filter['order_status'] = 30;
                break;
        }
        $list = $model->with(['product' => ['paper', 'course', 'image']])
            ->where('user_id', '=', $user_id)
            ->where($filter)
            ->where('is_delete', '=', 0)
            ->order(['create_time' => 'desc'])
            ->paginate($params);
        return $list;
    }

    /**
     * 订单详情
     */
    public static function getUserOrderDetail($order_id, $user_id)
    {
        $model = new static();
        $order = $model->where(['order_id' => $order_id, 'user_id' => $user_id])->with(['product' => ['course', 'image', 'paper']])->find();
        if (empty($order)) {
            throw new BaseException(['msg' => '订单不存在']);
        }
        return $order;
    }

    /**
     * 余额支付标记订单已支付
     */
    public function onPaymentByBalance($orderNo, $data)
    {
        // 获取订单详情
        $PaySuccess = new MasterPaySuccessService($orderNo, $data);
        // 发起余额支付
        $status = $PaySuccess->onPaySuccess(OrderPayTypeEnum::BALANCE);
        if (!$status) {
            $this->error = $PaySuccess->getError();
        }
        return $status;
    }

    /**
     * 构建微信支付请求
     */
    protected static function onPaymentByWechat($user, $order_no, $pay_source, $online_money)
    {
        return PaymentService::wechat(
            $user,
            $order_no,
            OrderTypeEnum::MASTER,
            $pay_source,
            $online_money
        );
    }

    /**
     * 待支付订单详情
     */
    public static function getPayDetail($orderNo)
    {
        $model = new static();
        return $model->where(['trade_no' => $orderNo, 'pay_status' => 10, 'is_delete' => 0])->with(['user', 'product'])->find();
    }

    /**
     * 构建支付请求的参数
     */
    public static function onOrderPayment($user, $order_no, $payType, $pay_source, $online_money)
    {
        if ($payType == OrderPayTypeEnum::WECHAT) {
            return self::onPaymentByWechat($user, $order_no, $pay_source, $online_money);
        }
        return [];
    }


    /**
     * 设置错误信息
     */
    protected function setError($error)
    {
        empty($this->error) && $this->error = $error;
    }

    /**
     * 是否存在错误
     */
    public function hasError()
    {
        return !empty($this->error);
    }

    /**
     * 查询用户是否已购买
     */
    public function getOrderState($product_id, $user, $order_source)
    {
        $count = 0;
        if ($user) {
            $count = $this->alias('o')
                ->join('order_product c', 'c.order_id=o.order_id')
                ->where('product_id', '=', $product_id)
                ->where('order_source', '=', $order_source)
                ->where('o.user_id', '=', $user['user_id'])
                ->where('pay_status', '=', 20)
                ->where('o.is_delete', '=', 0)
                ->count();
        }
        return $count;
    }

    /**
     * 创建新订单
     */
    public function OrderPay($params, $order, $user)
    {
        $payType = $params['payType'];
        $payment = '';
        $online_money = 0;
        $order->save(['balance' => 0, 'online_money' => 0, 'trade_no' => $this->tradeNo()]);
        if ($order['pay_price'] == 0) {
            $params['use_balance'] = 1;
        }
        // 余额支付标记订单已支付
        if ($params['use_balance'] == 1) {
            if ($user['balance'] >= $order['pay_price']) {
                $payType = 10;
                $order->save(['balance' => $order['pay_price']]);
                $data['attach'] = '{"pay_source":"' . $params['pay_source'] . '"}';
                $this->onPaymentByBalance($order['trade_no'], $data);
            } else {
                if ($payType <= 10) {
                    $this->error = '用户余额不足';
                    return false;
                }
                $online_money = round($order['pay_price'] - $user['balance'], 2);
                $order->save(['balance' => $user['balance'], 'online_money' => $online_money]);
            }
        } else {
            if ($payType <= 10) {
                $this->error = '请选择支付方式';
                return false;
            }
            $online_money = $order['pay_price'];
            $order->save(['online_money' => $order['pay_price']]);
        }
        $online_money > 0 && $payment = self::onOrderPayment($user, $order['trade_no'], $payType, $params['pay_source'], $online_money);
        $result['order_id'] = $order['order_id'];
        $result['payType'] = $payType;
        $result['payment'] = $payment;
        return $result;
    }

    /**
     * 删除订单
     */
    public function remove()
    {
        return $this->save(['is_delete' => 1]);
    }


    private function formatPayEndTime($leftTime)
    {
        if ($leftTime <= 0) {
            return '';
        }
        $str = '';
        $day = floor($leftTime / 86400);
        $hour = floor(($leftTime - $day * 86400) / 3600);
        $min = floor((($leftTime - $day * 86400) - $hour * 3600) / 60);

        if ($day > 0) $str .= $day . '天';
        if ($hour > 0) $str .= $hour . '小时';
        if ($min > 0) $str .= $min . '分钟';
        return $str;
    }

}