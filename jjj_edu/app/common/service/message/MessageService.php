<?php

namespace app\common\service\message;

use app\common\enum\order\OrderTypeEnum;
use app\common\model\settings\MessageSettings as MessageSettingsModel;
use app\common\model\settings\Message as MessageModel;
use app\common\enum\order\OrderPayTypeEnum;

/**
 * 消息通知服务
 */
class MessageService
{
    /**
     * 订单支付成功后通知
     */
    public function payment($order, $orderType = OrderTypeEnum::MASTER)
    {
        $message = MessageModel::detailByEname('order_pay_user');
        $settings = MessageSettingsModel::detailByMessageId($message['message_id']);
        if (!$settings) {
            return;
        }
        $data = [
            // 订单编号
            'order_no' => $order['order_no'],
            // 商品名称
            'product_name' => $this->formatProductName($order['product']),
            // 订单金额
            'pay_price' => $order['pay_price'],
            // 支付方式
            'pay_type' => OrderPayTypeEnum::data()[$order['pay_type']['value']]['name'],
            // 支付时间
            'pay_time' => date('Y-m-d H:i:s', $order['pay_time'])
        ];
        //发送小程序订阅消息
        if ($settings['wx_status'] == 1 && $order['user']['open_id'] != '') {
            WxMessageService::send($data, $settings['wx_template'], $order['user']['open_id'], $order['app_id']);
        }
    }

    /**
     * 积分订单支付成功后通知
     */
    public function pointsPayment($order)
    {
        $message = MessageModel::detailByEname('order_pay_user');
        $settings = MessageSettingsModel::detailByMessageId($message['message_id']);
        if (!$settings) {
            return;
        }
        $data = [
            // 订单编号
            'order_no' => $order['order_no'],
            // 商品名称
            'product_name' => $order['product_name'],
            // 订单金额
            'pay_price' => $order['pay_price'],
            // 支付方式
            'pay_type' => $order['pay_type']['text'],
            // 支付时间
            'pay_time' => date('Y-m-d H:i:s', $order['pay_time'])
        ];
        //发送小程序订阅消息
        if ($settings['wx_status'] == 1 && $order['user']['open_id'] != '') {
            WxMessageService::send($data, $settings['wx_template'], $order['user']['open_id'], $order['app_id']);
        }
    }

    /**
     * 后台积分订单发货通知
     */
    public function pointsDelivery($order)
    {
        $message = MessageModel::detailByEname('order_delivery_user');
        $settings = MessageSettingsModel::detailByMessageId($message['message_id']);
        if (!$settings) {
            return;
        }
        $data = [
            // 订单编号
            'order_no' => $order['order_no'],
            // 商品信息
            'product_name' => $order['product_name'],
            //收货人
            'name' => $order['address']['name'],
            //收货人电话
            'phone' => $order['address']['phone'],
            //物流公司名称
            'express_name' => $order['express']['express_name'],
            //物流单号
            'express_no' => $order['express_no'],
            //发货时间
            'express_time' => date('Y-m-d H:i:s'),
            // 物流单号
            'remark' => '您的订单已发货，请注意查收',
        ];
        //发送小程序订阅消息
        if ($settings['wx_status'] == 1 && $order['user']['open_id'] != '') {
            WxMessageService::send($data, $settings['wx_template'], $order['user']['open_id'], $order['app_id']);
        }
    }

    /**
     * 格式化商品名称
     */
    private function formatProductName($productData)
    {
        $str = '';
        foreach ($productData as $product) {
            $str .= $product['title'] . ' ';
        }
        return $str;
    }

}