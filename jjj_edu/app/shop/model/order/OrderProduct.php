<?php

namespace app\shop\model\order;

use app\common\model\order\OrderProduct as OrderProductModel;

/**
 * 订单商品模型
 */
class OrderProduct extends OrderProductModel
{
    /**
     * 获取商品数据 (可指定某天)
     */
    public function getProductData($startDate, $endDate, $type)
    {
        $model = $this;

        $model = $model->alias('order_product')
            ->join('order order', 'order_product.order_id = order.order_id','left');

        $model = $model->where('order.create_time', '>=', strtotime($startDate));
        if(is_null($endDate)){
            $model = $model->where('order.create_time', '<', strtotime($startDate) + 86400);
        }else{
            $model = $model->where('order.create_time', '<', strtotime($endDate) + 86400);
        }

        if($type == 'no_pay'){
            // 未支付
            return $model->where('order.pay_status', '=', 10)->sum('order_product.total_num');
        }else if($type == 'pay'){
            // 已支付
            return $model->where('order.pay_status', '=', 20)->sum('order_product.total_num');
        }
        return 0;
    }
}