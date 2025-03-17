<?php

namespace app\shop\model\paper;

use app\common\model\paper\RecordQuestion as RecordQuestionModel;

/**
 * 试卷问题模型
 */
class RecordQuestion extends RecordQuestionModel
{
    /**
     * 移除试卷问题
     */
    public function getList($record_id)
    {
        $list = $this->where('record_id', '=', $record_id)->select();
        return $list;
    }
}
