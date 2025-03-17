<?php

namespace app\job\model\paper;

use app\common\model\paper\Grade as GradeModel;
use app\common\model\paper\Record as RecordModel;

/**
 * 课程模型
 */
class Record extends RecordModel
{
    /**
     * 隐藏字段
     */
    protected $hidden = [];

    //答题记录
    public function getRecord($app_id)
    {
        $list = $this->with(['paper', 'user', 'question.question'])
            ->where('is_submit', '=', 0)
            ->where('paper_type', '=', 2)
            ->where('exam_end_time', '<=', time())
            ->where('app_id', '<=', $app_id)
            ->order('record_id desc')
            ->limit(100)
            ->select();
        return $list;
    }

    /**
     * 提交答题
     */
    public function submit($list)
    {
        $updateData = [];
        foreach ($list as $value) {
            $right_question = 0;//正确数
            $wrong_question = 0;//错误数
            $score = 0;//总分
            foreach ($value['question'] as $item) {
                if ($item['answer_state'] > 0) {
                    if ($item['answer_state'] == 1) {
                        $right_question++;
                    } else {
                        $wrong_question++;
                    }
                    $score += $item['score'];
                }
            }
            //答题总数
            $total = $right_question + $wrong_question;
            $accuracy = $total > 0 ? round($right_question / $total * 100, 2) : 0;
            $duration = time() - $value['start_time'];
            $grade = (new GradeModel)->where('paper_id', '=', $value['paper_id'])
                ->where('min', '<=', $score)
                ->where('max', '>=', $score)
                ->value('name');
            $updateData[] = [
                'data' => [
                    'right_question' => $right_question,
                    'wrong_question' => $wrong_question,
                    'is_submit' => 1,
                    'score' => $score,
                    'accuracy' => $accuracy,
                    'duration' => $duration,
                    'grade' => $grade,
                    'end_time' => time(),
                ],
                'where' => [
                    'record_id' => $value['record_id'],
                ],
            ];
        }
        return $this->updateAll($updateData);
    }

}