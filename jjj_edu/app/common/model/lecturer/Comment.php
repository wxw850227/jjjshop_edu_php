<?php

namespace app\common\model\lecturer;

use app\common\model\BaseModel;

/**
 * 讲师评论模型
 */
class Comment extends BaseModel
{
    protected $name = 'lecturer_comment';
    protected $pk = 'comment_id';

    /**
     * 讲师
     */
    public function lecturer()
    {
        return $this->belongsTo('app\\common\\model\\lecturer\\Lecturer', 'lecturer_id', 'lecturer_id');
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
        return $this->hasMany('app\\common\\model\\lecturer\\CommentImage', 'comment_id', 'comment_id')->order(['id' => 'asc']);
    }

    /**
     * 评价详情
     */
    public function detail($comment_id)
    {
        return $this->where('comment_id', '=', $comment_id)->with(['user', 'image.file', 'lecturer.image'])->find();
    }

    /**
     * 获取评价列表
     */
    public function getList($params)
    {
        $model = $this->alias('c');
        if (isset($params['score']) && $params['score'] > 0) {
            $model = $model->where('score', '=', $params['score']);
        }
        if (isset($params['status']) && $params['status'] > -1) {
            $model = $model->where('c.status', '=', $params['status']);
        }
        if (isset($params['name']) && $params['name']) {
            $model = $model->where('l.name', 'like', '%' . $params['name'] . '%');
        }

        return $model->with(['user', 'lecturer.image', 'image.file'])
            ->join('lecturer l', 'l.lecturer_id=c.lecturer_id')
            ->where('c.is_delete', '=', 0)
            ->field('c.*')
            ->order(['c.sort' => 'asc', 'c.create_time' => 'desc'])
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