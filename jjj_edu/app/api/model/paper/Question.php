<?php

namespace app\api\model\paper;

use app\common\model\paper\Question as QuestionModel;

/**
 * 试题问题模型
 */
class Question extends QuestionModel
{
    /**
     * 隐藏字段
     */
    protected $hidden = [];

    public function getQuestion($paper_id)
    {
        return $this->with(['question'])
            ->where('paper_id', '=', $paper_id)
            ->order('question_type asc,sort asc')
            ->select();
    }

}