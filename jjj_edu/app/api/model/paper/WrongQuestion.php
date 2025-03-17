<?php

namespace app\api\model\paper;

use app\common\model\paper\WrongQuestion as WrongQuestionModel;

/**
 * 问题模型
 */
class WrongQuestion extends WrongQuestionModel
{
    /**
     * 隐藏字段
     */
    protected $hidden = [];

    //获取列表
    public function getWrongList($data, $user)
    {
        $model = $this;
        $list = $model->with(['paper'])
            ->where('is_delete', '=', 0)
            ->where('user_id', '=', $user['user_id'])
            ->group('paper_id')
            ->order(['wrong_id' => 'desc'])
            ->paginate($data);
        foreach ($list as &$item) {
            $item['wrongTotal'] = $this->where('paper_id', '=', $item['paper_id'])
                ->where('user_id', '=', $user['user_id'])
                ->where('is_delete', '=', 0)
                ->count();
            $record_status = 0;//未答题
            $record = (new Record())->getRecord($item['paper_id'], $user);
            if ($record) {
                if ($record['is_submit'] == 0) {
                    $record_status = 1;//继续答题
                } else {
                    $record_status = 2;//再次答题
                }
            }
            $item['record_status'] = $record_status;
        }
        return $list;
    }

    //获取详情
    public function getWrongDetail($paper_id, $user)
    {
        $list = $this->with(['paper', 'question.knowledge.course'])
            ->where('is_delete', '=', 0)
            ->where('user_id', '=', $user['user_id'])
            ->where('paper_id', '=', $paper_id)
            ->order(['wrong_id' => 'desc'])
            ->select();
        foreach ($list as &$item) {
            $is_fav = (new Favorite())->where('user_id', '=', $user['user_id'])
                ->where('paper_id', '=', $paper_id)
                ->where('question_id', '=', $item['question_id'])
                ->where('paper_question_id', '=', $item['paper_question_id'])
                ->count();
            $item['is_fav'] = $is_fav;
        }
        return $list;
    }

    //获取详情
    public function submit($wrong_id)
    {
        $is_know = $this['is_know'] == 1 ? 0 : 1;
        return $this->where('wrong_id', '=', $wrong_id)->update(['is_know' => $is_know]);
    }

    /**
     * 新增错题
     */
    public function addWrong($paper_id, $question_id, $answer, $question_answer, $paper_question_id, $user)
    {
        $num = $this->where('paper_id', '=', $paper_id)
            ->where('question_id', '=', $question_id)
            ->where('user_id', '=', $user['user_id'])
            ->count();
        if ($num <= 0) {
            $this->save([
                'user_id' => $user['user_id'],
                'paper_id' => $paper_id,
                'question_id' => $question_id,
                'answer' => $answer,
                'question_answer' => $question_answer,
                'paper_question_id' => $paper_question_id,
                'app_id' => self::$app_id
            ]);
        }
        return true;
    }

    //获取详情
    public function remove($wrong_id)
    {
        return $this->where('wrong_id', '=', $wrong_id)->update(['is_delete' => 1]);
    }

    //删除错题
    public function setDelete($paper_id, $question_id, $user)
    {
        return $this->where('paper_id', '=', $paper_id)
            ->where('question_id', '=', $question_id)
            ->where('user_id', '=', $user['user_id'])
            ->delete();
    }

}