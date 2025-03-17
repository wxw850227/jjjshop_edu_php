<?php

namespace app\common\service\statistics;

use app\common\model\order\OrderProduct as OrderProductModel;
use app\common\enum\order\OrderStatusEnum;
use app\common\enum\order\OrderPayStatusEnum;

/**
 * 数据统计-商品销售榜
 */
class ProductRankingService
{
    /**
     * 商品销售榜
     */
    public function getSaleRanking($shop_supplier_id = 0)
    {
        $model = new OrderProductModel();
        if ($shop_supplier_id > 0) {
            $model = $model->where('order.shop_supplier_id', '=', $shop_supplier_id);
        }
        $list = $model->alias('o_product')
            ->field([
                'o_product.product_id',
                'SUM(total_pay_price) AS sales_volume',
                'SUM(total_num) AS total_sales_num'
            ])->join('order', 'order.order_id = o_product.order_id')
            ->where('order.pay_status', '=', OrderPayStatusEnum::SUCCESS)
            ->where('order.order_status', '<>', OrderStatusEnum::CANCELLED)
            ->group('o_product.product_id')
            ->having('total_sales_num>0')
            ->order(['total_sales_num' => 'DESC'])
            ->limit(10)
            ->select();
        foreach ($list as &$item) {
            $detail = $model->with(['image'])->where('product_id', '=', $item['product_id'])->find();
            $item['image_path'] = isset($detail['image']) ? $detail['image']['file_path'] : '';
            $item['product_name'] = $detail ? $detail['product_name'] : '';
        }
        return $list;
    }

}