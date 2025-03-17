<?php

namespace app\api\service\order\settled;

use app\api\model\order\Order as OrderModel;
use app\api\model\order\OrderProduct;
use app\common\enum\order\OrderPayTypeEnum;
use app\common\model\settings\Setting as SettingModel;
use app\common\library\helper;
use app\common\service\BaseService;

/**
 * 课程订单结算服务基类
 */
abstract class OrderSettledService extends BaseService
{
    /* $model OrderModel 订单模型 */
    public $model;

    // 当前应用id
    protected $app_id;

    protected $user;

    // 订单结算商品列表
    protected $productList = [];

    protected $params;

    /**
     * 订单结算数据
     */
    protected $orderData = [];
    /**
     * 订单来源
     */
    protected $orderSource;

    /**
     * 构造函数
     */
    public function __construct($user, $productList, $params)
    {
        $this->model = new OrderModel;
        $this->app_id = OrderModel::$app_id;
        $this->user = $user;
        $this->productList = $productList;
        $this->params = $params;
    }

    /**
     * 订单确认-结算台
     */
    public function settlement()
    {
        // 整理订单数据
        $this->orderData = $this->getOrderData();
        // 验证商品状态, 是否允许购买
        $this->validateProductList();
        // 订单商品总数量
        $orderTotalNum = helper::getArrayColumnSum($this->productList, 'total_num');
        // 计算订单最终金额
        $this->setOrderPayPrice();
        // 返回订单数据
        return array_merge([
            'productList' => array_values($this->productList),   // 课程信息
            'order_total_num' => $orderTotalNum,        // 总数量
        ], $this->orderData);
    }

    /**
     * 验证订单商品的状态
     * @return bool
     */
    abstract function validateProductList();

    /**
     * 创建新订单
     */
    public function createOrder($order)
    {
        // 表单验证
        if (!$this->validateOrderForm($order)) {
            return false;
        }
        // 创建新的订单
        $order_id = $this->model->transaction(function () use ($order) {
            // 创建订单事件
            return $this->createOrderEvent($order);
        });
        if ($this->model['pay_price'] <= 0 && isset($this->params['pay_source'])) {
            $data['attach'] = '{"pay_source":"' . $this->params['pay_source'] . '"}';
            $this->model->onPaymentByBalance($this->model['trade_no'], $data);
        }
        return $order_id;
    }

    /**
     * 设置订单的实际支付金额(含配送费)
     */
    private function setOrderPayPrice()
    {
        // 订单金额(含优惠折扣)
        $this->orderData['order_price'] = helper::number2(helper::getArrayColumnSum($this->productList, 'total_price'));
        // 订单实付款金额(订单金额 - 海星抵扣)
        $this->orderData['order_pay_price'] = $this->orderData['order_price'];
    }

    /**
     * 整理订单数据(结算台初始化)
     */
    private function getOrderData()
    {
        return [
            // 支付方式
            'pay_type' => isset($this->params['pay_type']) ? $this->params['pay_type'] : 10,
            //使用余额
            'use_balance' => isset($this->params['use_balance']) ? $this->params['use_balance'] : 0,
        ];
    }

    /**
     * 表单验证 (订单提交)
     */
    private function validateOrderForm($order)
    {
        return true;
    }

    /**
     * 创建订单事件
     */
    private function createOrderEvent($order)
    {
        // 新增订单记录
        $status = $this->add($order);
        // 保存订单信息
        $this->saveOrderProduct($order, $status);
        return $status;
    }

    /**
     * 新增订单记录
     */
    private function add($order)
    {
        // 订单数据
        $data = [
            'user_id' => $this->user['user_id'],
            'order_no' => $this->model->orderNo(),
            'trade_no' => $this->model->tradeNo(),
            'total_price' => $order['order_price'],
            'order_price' => $order['order_price'],
            'pay_price' => $order['order_pay_price'],
            'pay_type' => $order['pay_type'],
            'order_source' => $this->orderSource['source'],
            'activity_id' => $this->orderSource['activity_id'],
            'app_id' => $this->app_id,
            'lecturer_id' => $this->orderSource['source'] != 20 ? $order['productList'][0]['lecturer_id'] : 0,
        ];
        //随主订单配置
        $config = SettingModel::getItem('trade');
        $closeDays = $config['order']['close_days'];
        $closeDays != 0 && $data['pay_end_time'] = time() + ((int)$closeDays * 86400);
        // 保存订单记录
        $this->model->save($data);
        return $this->model['order_id'];
    }

    /**
     * 保存订单课程信息
     */
    private function saveOrderProduct($order, $status)
    {
        // 订单商品列表
        $productList = [];
        foreach ($order['productList'] as $product) {
            $item = [
                'order_id' => $status,
                'user_id' => $this->user['user_id'],
                'app_id' => $this->app_id,
                'product_id' => $product['product_id'],
                'title' => $product['title'],
                'image_id' => $product['image_id'],
                'content' => isset($product['content']) ? $product['content'] : '',
                'product_price' => $product['product_price'],
                'total_num' => $product['total_num'],
                'total_price' => $product['total_price'],
                'total_pay_price' => $product['total_price'],
                'wx_image' => $product['wx_image'],
                'qq_image' => $product['qq_image']
            ];
            $productList[] = $item;
        }
        $model = new OrderProduct();
        return $model->saveAll($productList);
    }
}