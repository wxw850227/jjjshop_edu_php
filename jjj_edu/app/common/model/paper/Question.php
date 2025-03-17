<?php

namespace app\common\model\paper;

use app\common\model\BaseModel;

/**
 * 试卷问题模型
 */
class Question extends BaseModel
{
    protected $name = 'paper_question';
    protected $pk = 'paper_question_id';

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
     * 获取试卷问题详情
     */
    public static function detail($where, $with = ['paper', 'question'])
    {
        !is_array($where) && $where = ['paper_question_id' => (int)$where];
        return (new static())->where($where)->with($with)->find();
    }

}
