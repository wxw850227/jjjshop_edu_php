<?php

namespace app\api\controller\user;

use app\api\controller\Controller;
use app\api\model\order\Order as OrderModel;
use app\api\model\user\UserClasses as UserClassesModel;
use app\common\model\app\App as AppModel;
use app\common\enum\order\OrderTypeEnum;

/**
 * 我的订单
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
        $model = OrderModel::getUserOrderDetail($order_id, $this->getUser()['user_id']);
        return $this->renderSuccess('', [
            'order' => $model,  // 订单详情
        ]);
    }

    /**
     * 立即支付
     */
    public function pay($order_id)
    {
        // 获取订单详情
        $model = OrderModel::getUserOrderDetail($order_id, $this->user['user_id']);
        $params = $this->postData();
        if ($this->request->isGet()) {
            // 开启的支付类型
            $payTypes = AppModel::getPayType($model['app_id'], $params['pay_source']);
            // 支付金额
            $payPrice = $model['pay_price'];
            $balance = $this->user['balance'];
            return $this->renderSuccess('', compact('payTypes', 'payPrice', 'balance'));
        }
        // 订单支付事件
        if (!$model->onPay()) {
            return $this->renderError($model->getError() ?: '订单支付失败');
        }
        $OrderModel = new OrderModel;
        // 构建微信支付请求
        $payInfo = $OrderModel->OrderPay($params, $model, $this->getUser());
        if (!$payInfo) {
            return $this->renderError($OrderModel->getError() ?: '订单支付失败');
        }
        // 支付状态提醒
        return $this->renderSuccess('', [
            'order_id' => $order_id,   // 订单id
            'pay_type' => $payInfo['payType'],  // 支付方式
            'payment' => $payInfo['payment'],   // 微信支付参数
            'order_type' => OrderTypeEnum::MASTER, //订单类型
            'order_source' => $model['order_source'], //订单类型
            'return_Url' => $params['pay_source'] == 'h5' ? urlencode(base_url() . "h5/pages/order/myorder") : '', //h5支付跳转地址
        ]);
    }

    /**
     * 删除订单
     */
    public function delete($order_id)
    {
        $detail = OrderModel::detail($order_id);
        if (!$detail->remove()) {
            return $this->renderError($detail->getError() ?: '删除失败');
        }
        return $this->renderSuccess('删除成功');
    }

    /**
     * 我的班级群
     */
    public function myClasses()
    {
        $list = (new UserClassesModel)->getList($this->getUser(), $this->postData());
        return $this->renderSuccess('', compact('list'));
    }


}