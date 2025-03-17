<?php

namespace app\common\model\paper;

use app\common\model\BaseModel;

/**
 * 问题模型
 */
class WrongQuestion extends BaseModel
{
    protected $name = 'paper_wrong_question';
    protected $pk = 'wrong_id';

    /**
     * 关联试卷表
     */
    public function paper()
    {
        return $this->belongsTo('app\\common\\model\\paper\\Paper', 'paper_id', 'paper_id');
    }

    /**
     * 关联题库表
     */
    public function question()
    {
        return $this->belongsTo('app\\common\\model\\question\\Question', 'question_id', 'question_id');
    }

    /**
     * 关联用户表
     */
    public function user()
    {
        return $this->belongsTo('app\\common\\model\\user\\User', 'user_id', 'user_id');
    }

    /**
     * 关联问题表
     */
    public function knowledge()
    {
        return $this->hasMany('app\\common\\model\\question\\Relation', 'question_id', 'question_id');
    }

    /**
     * 获取试卷问题详情
     */
    public static function detail($where, $with = ['paper', 'question', 'knowledge.course'])
    {
        !is_array($where) && $where = ['wrong_id' => (int)$where];
        return (new static())->where($where)->with($with)->find();
    }

}
