<?php

namespace app\common\model\paper;

use app\common\model\BaseModel;

/**
 * 记录模型
 */
class Record extends BaseModel
{
    protected $name = 'paper_record';
    protected $pk = 'record_id';

    /**
     * 关联试卷表
     */
    public function paper()
    {
        return $this->belongsTo('app\\common\\model\\paper\\Paper', 'paper_id', 'paper_id');
    }

    /**
     * 关联试卷表
     */
    public function question()
    {
        return $this->hasMany('app\\common\\model\\paper\\RecordQuestion', 'record_id', 'record_id');
    }

    /**
     * 关联用户表
     */
    public function user()
    {
        return $this->belongsTo('app\\common\\model\\user\\User', 'user_id', 'user_id');
    }

    /**
     * 获取课程详情
     */
    public static function detail($where, $with = ['paper', 'user', 'question.question'])
    {
        !is_array($where) && $where = ['record_id' => (int)$where];
        return (new static())->where($where)->with($with)->find();
    }

}
