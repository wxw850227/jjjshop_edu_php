<?php

namespace app\common\model\course;

use app\common\model\BaseModel;

/**
 * 评论模型
 */
class Comment extends BaseModel
{
    protected $name = 'course_comment';
    protected $pk = 'comment_id';

    /**
     * 所属订单
     */
    public function orderM()
    {
        return $this->belongsTo('app\\common\\model\\order\\Order', 'order_id', 'order_id');
    }

    /**
     * 订单课程
     */
    public function OrderProduct()
    {
        return $this->belongsTo('app\\common\\model\\order\\OrderProduct', 'order_product_id', 'order_product_id');
    }

    /**
     * 商品
     */
    public function course()
    {
        return $this->belongsTo('app\\common\\model\\course\\Course', 'course_id', 'course_id');
    }

    /**
     * 关联用户表
     */
    public function user()
    {
        return $this->belongsTo('app\\common\\model\\user\\User', 'user_id', 'user_id');
    }

    /**
     * 关联评价图片表
     */
    public function image()
    {
        return $this->hasMany('app\\common\\model\\course\\CommentImage', 'comment_id', 'comment_id')->order(['id' => 'asc']);
    }

    /**
     * 评价详情
     */
    public function detail($comment_id)
    {
        return $this->where('comment_id', '=', $comment_id)->with(['user', 'image.file', 'orderM', 'course.image'])->find();
    }

    /**
     * 获取评价列表
     */
    public function getList($params)
    {
        $model = $this;
        if (isset($params['name']) && !empty(trim($params['name']))) {
            $model1 = new Course();
            $res = $model1->getWhereData($params['name'])->toArray();
            $str = implode(',', array_column($res, 'course_id'));
            $model = $model->where('course_id', 'in', $str);
        }
        if (isset($params['score']) && $params['score'] > 0) {
            $model = $model->where('score', '=', $params['score']);
        }
        if (isset($params['status']) && $params['status'] > -1) {
            $model = $model->where('status', '=', $params['status']);
        }
        if (isset($params['course_id']) && $params['course_id'] > 0) {
            $model = $model->where('course_id', '=', $params['course_id']);
        }

        return $model->with(['user', 'orderM', 'course.image', 'image.file'])
            ->where('is_delete', '=', 0)
            ->order(['sort' => 'asc', 'create_time' => 'desc'])
            ->paginate($params);
    }

    /**
     * 获取评论数
     */
    public function getStatusNum($where)
    {
        return $this->where($where)->count();
    }

}