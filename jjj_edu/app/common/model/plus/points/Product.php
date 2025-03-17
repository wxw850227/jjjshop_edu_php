<?php

namespace app\common\model\plus\points;

use app\common\model\BaseModel;

/**
 * 积分商品模型
 */
class Product extends BaseModel
{
    protected $name = 'points_product';
    protected $pk = 'product_id';
    protected $append = [];

    /**
     * 关联商品图片表
     */
    public function image()
    {
        return $this->belongsTo('app\\common\\model\\file\\UploadFile', 'image_id', 'file_id')
            ->bind(['file_path', 'file_name', 'file_url']);
    }

    /**
     * 商品状态
     */
    public function getProductStatusAttr($value, $data)
    {
        $status = [10 => '已上架', 20 => '已下架'];
        return ['text' => $status[$value], 'value' => $value];
    }

    /**
     * 获取商品列表
     */
    public function getList($params)
    {
        // 筛选条件
        $filter = [];
        $model = $this;
        if (isset($params['category_id']) && $params['product_name']) {
            $model = $model->where('product_name', 'like', '%' . trim($params['product_name']) . '%');
        }
        if (isset($params['product_status']) && $params['product_status']) {
            $model = $model->where('product_status', '=', $params['product_status']);
        }
        $list = $model->with(['image'])
            ->where('is_delete', '=', 0)
            ->where($filter)
            ->order(['product_sort', 'product_id' => 'desc'])
            ->paginate($params);
        return $list;
    }

    /**
     * 获取商品详情
     */
    public static function detail($product_id)
    {
        $model = (new static())->with(['image'])
            ->where('product_id', '=', $product_id)
            ->find();
        return $model;
    }

    /**
     * 获取当前商品总数
     */
    public function getProductTotal($where = [])
    {
        return $this->where('is_delete', '=', 0)->where($where)->count();
    }

    /**
     * 获取商品详情
     */
    public static function updateStock($product_id, $total_num)
    {
        $model = new static();
        $model->where('product_id', '=', $product_id)->dec('product_stock', $total_num)->update();
        $model->where('product_id', '=', $product_id)->inc('sales_actual', $total_num)->update();
    }
}
