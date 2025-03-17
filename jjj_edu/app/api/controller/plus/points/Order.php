<?php

namespace app\api\controller\plus\points;

use app\api\model\plus\points\Product as ProductModel;
use app\api\controller\Controller;
use app\api\model\settings\Message as MessageModel;
use app\api\model\plus\points\Order as OrderModel;
use app\common\enum\order\OrderTypeEnum;
use app\api\model\settings\Setting as SettingModel;
use app\common\model\app\App as AppModel;

/**
 * 积分商城兑换订单
 */
class Order extends Controller
{
    // user
    private $user;

    /**
     * 构造方法
     */
    public function initialize()
    {
        parent::initialize();
        $this->user = $this->getUser();   // 用户信息

    }

    /**
     * 订单确认
     */
    public function buy()
    {
        $params = $this->request->param();
        $ProductModel = new ProductModel;
        $order = $ProductModel->getProductOrder($params, $this->user);
        if (!$order) {
            return $this->renderError($ProductModel->getError() ?: '商品id不能为空');
        }
        if ($this->request->isGet()) {
            // 如果来源是小程序, 则获取小程序订阅消息id.获取支付成功.
            $template_arr = MessageModel::getMessageByNameArr($params['pay_source'], ['order_pay_user', 'order_delivery_user']);
            return $this->renderSuccess('', compact('order', 'template_arr'));
        }
        $orderModel = new OrderModel();
        // 创建订单
        $order_id = $orderModel->createOrder($order, $this->user);
        if (!$order_id) {
            return $this->renderError($orderModel->getError() ?: '订单创建失败');
        }
        // 返回结算信息
        return $this->renderSuccess('', [
            'order_id' => $order_id,   // 订单id
            'order_type' => OrderTypeEnum::POINTS, //订单类型
        ]);
    }

    /**
     * 我的订单列表
     */
    public function lists()
    {
        $data = $this->postData();
        $model = new OrderModel;
        $list = $model->getList($this->user['user_id'], $data);
        return $this->renderSuccess('', compact('list'));
    }

    /**
     * 订单详情信息
     */
    public function detail($order_id)
    {
        // 订单详情
        $model = OrderModel::getUserOrderDetail($order_id, $this->user['user_id']);
        return $this->renderSuccess('', [
            'order' => $model,  // 订单详情
        ]);
    }

    /**
     * 支付成功详情信息
     */
    public function paySuccess($order_id)
    {
        $order = OrderModel::getUserOrderDetail($order_id, $this->user['user_id']);
        return $this->renderSuccess('', compact('order'));
    }

    /**
     * 立即支付
     */
    public function pay($order_id)
    {
        // 获取订单详情
        $model = OrderModel::getUserOrderDetail($order_id, $this->getUser()['user_id']);
        $params = $this->postData();
        if ($this->request->isGet()) {
            // 支付金额
            $payPrice = $model['pay_price'];
            // 开启的支付类型
            $payTypes = AppModel::getPayType($model['app_id'], $params['pay_source']);
            $balance = $this->getUser()['balance'];
            return $this->renderSuccess('', compact('payPrice', 'payTypes', 'balance'));
        }
        // 订单支付事件
        if (!$model->onPay()) {
            return $this->renderError($model->getError() ?: '订单支付失败');
        }
        $params = $this->postData();
        $OrderModel = new OrderModel;
        // 构建微信支付请求
        $payInfo = $OrderModel->OrderPay($params, $model, $this->getUser());
        if (!$payInfo) {
            return $this->renderError($OrderModel->getError() ?: '订单支付失败');
        }
        // 支付状态提醒
        return $this->renderSuccess('', [
            'order_id' => $model['order_id'],   // 订单id
            'pay_type' => $payInfo['payType'],  // 支付方式
            'payment' => $payInfo['payment'],   // 微信支付参数
            'order_type' => OrderTypeEnum::POINTS, //订单类型
            'return_Url' => $params['pay_source'] == 'h5' ? urlencode(base_url() . "h5/pages/user/points/points") : '', //h5支付跳转地址
        ]);
    }

    /**
     * 获取物流信息
     */
    public function express($order_id)
    {
        // 订单信息
        $order = OrderModel::getUserOrderDetail($order_id, $this->user['user_id']);
        if (!$order['express_no']) {
            return $this->renderError('没有物流信息');
        }
        // 获取物流信息
        $model = $order['express'];
        $express = $model->dynamic($model['express_name'], $model['express_code'], $order['express_no']);
        if ($express === false) {
            return $this->renderError($model->getError());
        }
        return $this->renderSuccess('', compact('express'));
    }

    /**
     * 确认收货
     */
    public function receipt($order_id)
    {
        $model = OrderModel::getUserOrderDetail($order_id, $this->user['user_id']);
        if ($model->receipt()) {
            return $this->renderSuccess('收货成功');
        }
        return $this->renderError($model->getError() ?: '收货失败');
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