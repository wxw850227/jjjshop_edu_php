<?php

namespace app\shop\model\plus\points;

use app\common\model\plus\points\Product as ProductModel;

/**
 * 商品模型
 */
class Product extends ProductModel
{
    /**
     * 添加商品
     */
    public function add(array $data)
    {
        $data['content'] = isset($data['content']) ? $data['content'] : '';
        $data['app_id']  = self::$app_id;
        // 开启事务
        $this->startTrans();
        try {
            // 添加商品
            $this->save($data);
            $this->commit();
            return true;
        } catch (\Exception $e) {
            $this->error = $e->getMessage();
            $this->rollback();
            return false;
        }
    }

    /**
     * 编辑商品
     */
    public function edit($data)
    {
        $data['content'] = isset($data['content']) ? $data['content'] : '';
        return $this->save($data);
    }

    /**
     * 修改商品状态
     */
    public function setStatus($state)
    {
        return $this->allowField(true)->save(['product_status' => $state ? 10 : 20]) !== false;
    }

    /**
     * 软删除
     */
    public function setDelete()
    {
        return $this->save(['is_delete' => 1]);
    }

    /**
     * 获取商品告急数量总数
     */
    public function getProductStockTotal()
    {

        return $this->where('is_delete', '=', 0)->where('product_stock', '<', 20)->count();
    }

    public function getProductId($search)
    {
        $res = $this->where('product_name', 'like', '%' . $search . '%')->select()->toArray();
        return array_column($res, 'product_id');
    }

    /**
     * 查询指定商品
     * @param $value
     */
    public function getProduct($value)
    {
        return $this->with(['image.file'])->where('product_id', 'in', $value)->hidden(['content'])->select();
    }
}
