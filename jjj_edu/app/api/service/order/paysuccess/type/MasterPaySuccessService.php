<?php

namespace app\api\service\order\paysuccess\type;

use app\api\model\user\User as UserModel;
use app\api\model\order\Order as OrderModel;
use app\common\enum\order\OrderSourceEnum;
use app\common\model\user\BalanceLog as BalanceLogModel;
use app\common\enum\order\OrderPayTypeEnum;
use app\common\enum\user\balanceLog\BalanceLogSceneEnum;
use app\common\service\BaseService;
use app\common\service\product\factory\ProductFactory;
use app\api\model\user\UserClasses as UserClassesModel;

/**
 * 订单支付成功服务类
 */
class MasterPaySuccessService extends BaseService
{
    // 订单模型
    public $model;
    // 当前用户信息
    private $user;
    // 交易号
    private $orderNo;
    // 交易附带信息
    private $attach;

    /**
     * 构造函数
     */
    public function __construct($orderNo, $attach = [])
    {
        $this->orderNo = $orderNo;
        $this->attach = $attach;
    }

    /**
     * 订单支付成功业务处理
     */
    public function onPaySuccess($payType, $payData = [])
    {
        // 实例化订单模型
        $this->model = OrderModel::getPayDetail($this->orderNo);
        // 获取用户信息
        $this->user = UserModel::detail($this->model['user_id']);
        $this->paySuccess($payType, $payData, []);
        if ($this->getError() != '') {
            return false;
        }
        return true;
    }

    /**
     * 订单支付成功业务处理
     */
    public function paySuccess($payType, $payData = [], $payInfo = [])
    {
        // 更新付款状态
        $status = $this->updatePayStatus($payType, $payData, $payInfo);
        // 订单支付成功行为
        if ($status == true) {
            // 获取订单详情
            $detail = OrderModel::getUserOrderDetail($this->model['order_id'], $this->user['user_id']);
            event('PaySuccess', $detail);
        }
    }

    /**
     * 更新付款状态
     */
    private function updatePayStatus($payType, $payData = [])
    {
        // 事务处理
        $this->model->transaction(function () use ($payType, $payData) {
            // 更新订单状态
            $this->updateOrderInfo($payType, $payData);
            // 累积用户总消费金额
            $this->user->setIncPayMoney($this->model['pay_price']);
            // 记录订单支付信息
            $this->updatePayInfo();
            // 创建我的班级群
            $this->createClasses();
        });
        return true;
    }

    /**
     * 更新订单记录
     */
    private function updateOrderInfo($payType, $payData)
    {
        // 更新商品库存、销量
        ProductFactory::getFactory($this->model['order_source'])->updateStockSales($this->model['product']);
        // 整理订单信息
        $pay_source = '';
        if (isset($payData['attach'])) {
            $attach = json_decode($payData['attach'], true);
            $pay_source = isset($attach['pay_source']) ? $attach['pay_source'] : '';
        }
        $order = [
            'pay_type' => $payType,
            'pay_status' => 20,
            'pay_time' => time(),
            'pay_source' => $pay_source,
            'order_status' => 30
        ];
        if ($payType == OrderPayTypeEnum::WECHAT) {
            $order['transaction_id'] = $payData['transaction_id'];
        }
        // 更新订单状态
        return $this->model->save($order);
    }

    /**
     * 记录订单支付信息
     */
    private function updatePayInfo()
    {
        // 余额支付
        if ($this->model['balance'] > 0) {
            // 更新用户余额
            (new UserModel())->where('user_id', '=', $this->user['user_id'])
                ->dec('balance', $this->model['balance'])
                ->update();
            BalanceLogModel::add(BalanceLogSceneEnum::CONSUME, [
                'user_id' => $this->user['user_id'],
                'money' => -$this->model['balance'],
                'app_id' => $this->user['app_id']
            ], ['order_no' => '购买' . OrderSourceEnum::data()[$this->model['order_source']]['name'] . '-' . $this->model['order_no']]);
        }
    }

    /**
     * 创建班级群
     */
    private function createClasses()
    {
        if ($this->model['order_source'] == OrderSourceEnum::EDU) {
            (new UserClassesModel())->add($this->model);
        }
    }

    /**
     * 返回app_id，大于0则存在订单信息
     * $pay_status 兼容支付宝支付
     */
    public function isExist($pay_status = 10)
    {
        // 订单信息
        $params = ['trade_no' => $this->orderNo, 'is_delete' => 0];
        if ($pay_status == 10) {
            $params['pay_status'] = 10;
        }
        $order = OrderModel::detail($params, []);
        !empty($order) && $app_id = $order['app_id'];
        return $app_id;
    }
}