<?php

namespace app\common\model\order;

use app\common\model\BaseModel;

/**
 * 订单详情模型
 */
class OrderProduct extends BaseModel
{
    protected $name = 'order_product';
    protected $pk = 'order_product_id';

    /**
     * 订单课程图片
     * @return \think\model\relation\BelongsTo
     */
    public function image()
    {
        return $this->belongsTo('app\\common\\model\\file\\UploadFile', 'image_id', 'file_id');
    }

    /**
     * 关联课程表
     * @return \think\model\relation\BelongsTo
     */
    public function course()
    {
        return $this->belongsTo('app\\common\\model\\course\\Course', 'product_id', 'course_id');
    }

    /**
     * 关联试题表
     * @return \think\model\relation\BelongsTo
     */
    public function paper()
    {
        return $this->belongsTo('app\\common\\model\\paper\\Paper', 'product_id', 'paper_id');
    }

    /**
     * 关联订单主表
     * @return \think\model\relation\BelongsTo
     */
    public function orderM()
    {
        return $this->belongsTo('Order', 'order_id', 'order_id');
    }

    /**
     * 订单商品详情
     * @param $where
     * @return array|\think\Model|null
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public static function detail($where)
    {
        return (new static())->with(['image', 'orderM'])->find($where);
    }

}