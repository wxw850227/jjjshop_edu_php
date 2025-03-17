<?php

namespace app\api\model\plus\points;

use app\api\service\order\PaymentService;
use app\api\model\settings\Setting as SettingModel;
use app\api\service\order\paysuccess\type\PointsPaySuccessService;
use app\common\enum\order\OrderPayTypeEnum;
use app\common\enum\order\OrderTypeEnum;
use app\common\enum\order\OrderPayStatusEnum;
use app\common\enum\order\OrderStatusEnum;
use app\common\exception\BaseException;
use app\common\enum\settings\DeliveryTypeEnum;
use app\common\model\plus\points\Order as OrderModel;
use app\api\service\order\checkpay\CheckPayFactory;
use app\api\model\user\User as UserModel;

/**
 * 积分订单模型
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
     * 创建新订单
     */
    public function createOrder($order, $user)
    {
        // 表单验证
        if (!$this->validateOrderForm($order, $user)) {
            return false;
        }
        // 创建新的订单
        $order_id = $this->transaction(function () use ($order, $user) {
            // 创建订单事件
            return $this->createOrderEvent($order, $user);
        });
        return $order_id;
    }

    /**
     * 创建订单事件
     */
    private function createOrderEvent($order, $user)
    {
        // 新增订单记录
        return $this->add($order, $user);
    }

    /**
     * 表单验证 (订单提交)
     */
    private function validateOrderForm($order, $user)
    {
        if ($order['delivery'] == DeliveryTypeEnum::EXPRESS) {
            if (empty($order['address'])) {
                $this->error = '请先选择收货地址';
                return false;
            }
        }
        if ($order['delivery'] == DeliveryTypeEnum::EXTRACT) {
            if (empty($order['shop_supplier_id'])) {
                $this->error = '请先选择自提点';
                return false;
            }
        }
        //如果是积分兑换，判断用户积分是否足够
        if ($order['total_points'] && $user['points'] < $order['total_points']) {
            $this->error = '用户积分不足，无法使用积分兑换';
            return false;
        }
        return true;
    }

    /**
     * 新增订单记录
     */
    private function add($order, $user)
    {
        // 订单数据
        $data = [
            'product_id' => $order['product_id'],
            'image_id' => $order['image_id'],
            'product_name' => $order['product_name'],
            'product_price' => $order['product_price'],
            'product_points' => $order['product_points'],
            'total_num' => $order['total_num'],
            'user_id' => $user['user_id'],
            'order_no' => $this->orderNo(),
            'trade_no' => $this->tradeNo(),
            'total_price' => $order['total_price'],
            'order_price' => $order['order_pay_price'],
            'pay_price' => $order['order_pay_price'],
            'points_num' => $order['total_points'],
            'pay_type' => $order['pay_type'],
            'pay_source' => $order['pay_source'],
            'express_price' => $order['express_price'],
            'app_id' => self::$app_id,
        ];
        $address = [
            'name' => $order['address']['name'],
            'phone' => $order['address']['phone'],
            'detail' => $order['address']['detail'] . $order['address']['address'],
        ];
        $data['address'] = $address;
        //随主订单配置
        $config = SettingModel::getItem('trade');
        $closeDays = $config['order']['close_days'];
        $data['pay_end_time'] = time() + ($closeDays * 60);
        // 保存订单记录
        $this->save($data);
        return $this['order_id'];
    }

    /**
     * 订单支付事件
     */
    public function onPay()
    {
        // 判断订单状态
        if ($this['order_status']['value'] != OrderStatusEnum::NORMAL || $this['pay_status']['value'] != OrderPayStatusEnum::PENDING) {
            $this->error = '很抱歉，当前订单不合法，无法支付';
            return false;
        }
        return true;
    }

    /**
     * 用户中心订单列表
     */
    public function getList($user_id, $params)
    {
        $model = $this;
        switch ($params['dataType']) {
            case '0':
                break;
            case '1'://进行中
                $model = $model->where('pay_status', '=', 20)->where('order_status', '=', 10);
                break;
            case '2'://已完成
                $model = $model->where('pay_status', '=', 20)->where('order_status', '=', 30);
                break;
        }
        return $model->with(['image'])
            ->where('user_id', '=', $user_id)
            ->where('pay_status', '=', 20)
            ->where('is_delete', '=', 0)
            ->order(['create_time' => 'desc'])
            ->paginate($params);
    }

    /**
     * 取消订单
     */
    public function cancel($user)
    {
        if ($this['pay_status']['value'] == 20) {
            $this->error = '已支付订单不可取消';
            return false;
        }
        // 订单取消事件
        return $this->transaction(function () use ($user) {
            // 订单是否已支付
            $isPay = $this['pay_status']['value'] == OrderPayStatusEnum::SUCCESS;
            // 更新订单状态
            return $this->save(['order_status' => $isPay ? OrderStatusEnum::APPLY_CANCEL : OrderStatusEnum::CANCELLED]);
        });
    }

    /**
     * 确认收货
     */
    public function receipt()
    {
        // 验证订单是否合法
        // 条件1: 订单必须已发货
        // 条件2: 订单必须未收货
        if ($this['delivery_status']['value'] != 20 || $this['receipt_status']['value'] != 10) {
            $this->error = '该订单不合法';
            return false;
        }
        return $this->transaction(function () {
            // 更新订单状态
            $status = $this->save([
                'receipt_status' => 20,
                'receipt_time' => time(),
                'order_status' => 30
            ]);
            $data['user_id'] = $this['user_id'];
            $data['money'] = $this['pay_price'];
            $data['money'] && (new UserModel)->IncExpendMoney($data);
            return $status;
        });
    }

    /**
     * 订单详情
     */
    public static function getUserOrderDetail($order_id, $user_id)
    {
        $model = new static();
        $order = $model->where(['order_id' => $order_id, 'user_id' => $user_id,])->with(['product', 'user', 'image', 'express'])->find();
        if (empty($order)) {
            throw new BaseException(['msg' => '订单不存在']);
        }
        return $order;
    }

    /**
     * 余额支付标记订单已支付
     */
    public function onPaymentByBalance($orderNo)
    {
        // 获取订单详情
        $PaySuccess = new PointsPaySuccessService($orderNo);
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
    protected static function onPaymentByWechat($user, $order, $pay_source)
    {
        return PaymentService::wechat(
            $user,
            $order['trade_no'],
            OrderTypeEnum::POINTS,
            $pay_source,
            $order['online_money']
        );
    }

    /**
     * 构建支付宝请求
     */
    protected static function onPaymentByAlipay($user, $order, $pay_source)
    {
        return PaymentService::alipay(
            $user,
            $order['trade_no'],
            OrderTypeEnum::POINTS,
            $pay_source,
            $order['online_money']
        );
    }

    /**
     * 待支付订单详情
     */
    public static function getPayDetail($orderNo)
    {
        $model = new static();
        return $model->where(['trade_no' => $orderNo, 'pay_status' => 10, 'is_delete' => 0])->with(['product', 'user'])->find();
    }

    /**
     * 构建支付请求的参数
     */
    public static function onOrderPayment($user, $order, $payType, $pay_source)
    {
        if ($payType == OrderPayTypeEnum::WECHAT) {
            return self::onPaymentByWechat($user, $order, $pay_source);
        }
        if ($payType == OrderPayTypeEnum::ALIPAY) {
            return self::onPaymentByAlipay($user, $order, $pay_source);
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
     * 主订单购买的数量
     * 未取消的订单
     */
    public static function getHasBuyOrderNum($user_id, $product_id)
    {
        $model = new static();
        return $model->where('user_id', '=', $user_id)
            ->where('product_id', '=', $product_id)
            ->where('pay_status', '=', 20)
            ->sum('total_num');
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
                $this->onPaymentByBalance($order['trade_no']);
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
        $online_money > 0 && $payment = self::onOrderPayment($user, $order, $payType, $params['pay_source']);

        $result['order_id'] = $order['order_id'];
        $result['payType'] = $payType;
        $result['payment'] = $payment;
        return $result;
    }

}