<?php

namespace app\api\model\plus\points;

use app\common\model\plus\points\Product as ProductModel;
use app\common\enum\order\OrderPayTypeEnum;

/**
 * 商品模型
 */
class Product extends ProductModel
{
    /**
     * 隐藏字段
     */
    protected $hidden = [
        'is_delete',
        'app_id',
        'create_time',
        'update_time'
    ];

    /**
     * 获取商品列表
     * @param $params
     */
    public function getProductList($params)
    {
        $list = $this->where('product_status', '=', 10)
            ->where('is_delete', '=', 0)
            ->with(['image'])
            ->paginate($params);
        return $list;
    }

    /**
     * 获取兑换商品信息
     * @param $params
     */
    public function getProductOrder($params, $user)
    {
        $model = $this;
        $detail = $model->where('product_status', '=', 10)
            ->where('product_id', '=', $params['product_id'])
            ->where('is_delete', '=', 0)
            ->with(['image'])
            ->find();
        $validate = $this->validateProduct($detail, $user, $params);
        if (!$validate) {
            return false;
        }
        // 默认地址
        $detail['address'] = $user['address_default'];
        // 是否存在收货地址
        $detail['exist_address'] = $user['address_id'] > 0;
        $detail['total_price'] = round($detail['product_price'] * $params['total_num'], 2);
        $detail['total_points'] = round($detail['product_points'] * $params['total_num'], 2);
        $detail['order_pay_price'] = $detail['total_price'];
        $detail['total_num'] = $params['total_num'];
        $detail['pay_source'] = isset($params['pay_source']) ? $params['pay_source'] : '';
        $detail['pay_type'] = isset($params['pay_type']) ? $params['pay_type'] : OrderPayTypeEnum::WECHAT;
        $detail['order_pay_price'] = $detail['order_pay_price'] + $detail['express_price'];
        return $detail;
    }

    public function validateProduct($detail, $user,$params)
    {
        if (!$detail) {
            $this->error = "商品已下架";
            return false;
        }
        if ($detail['product_stock'] <= $detail['total_num']) {
            $this->error = "商品库存不足";
            return false;
        }
        if ($detail['limit_num'] > 0) {
            $hasNum = (new Order)->getHasBuyOrderNum($user['user_id'], $detail['product_id']);
            if ($hasNum + $params['total_num'] > $detail['limit_num']) {
                $this->error = "很抱歉，兑换超过此商品最大限购数量";
                return false;
            }
        }
        return true;
    }
}