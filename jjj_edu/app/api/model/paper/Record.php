<?php

namespace app\api\model\paper;

use app\common\model\paper\Record as RecordModel;
use app\common\library\helper;

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
    public function getRecord($paper_id, $user = false)
    {
        $detail = '';
        if ($user) {
            $detail = $this->with(['paper', 'question.question'])
                ->where('paper_id', '=', $paper_id)
                ->where('user_id', '=', $user['user_id'])
                ->where('is_submit', '=', 0)
                ->order('record_id desc')
                ->find();
            if ($detail) {
                foreach ($detail['question'] as &$item) {
                    $is_fav = (new Favorite())->where('user_id', '=', $user['user_id'])
                        ->where('paper_id', '=', $paper_id)
                        ->where('question_id', '=', $item['question_id'])
                        ->where('paper_question_id', '=', $item['paper_question_id'])
                        ->count();
                    $item['is_fav'] = $is_fav;
                }
            }
        }
        return $detail;
    }

    //获取列表
    public function getList($data, $user)
    {
        $model = $this;
        if (isset($data['search']) && $data['search']) {
            $model = $model->where('title', 'like', '%' . $data['search'] . '%');
        }
        if (isset($data['paper_type']) && $data['paper_type']) {
            $model = $model->where('r.paper_type', '=', $data['paper_type']);
        }
        $list = $model->alias('r')
            ->with(['paper.image'])
            ->join('paper p', 'p.paper_id=r.paper_id')
            ->where('user_id', '=', $user['user_id'])
            ->group('r.paper_id')
            ->order(['score' => 'desc', 'is_submit' => 'desc', 'record_id' => 'desc'])
            ->field('r.*')
            ->paginate($data);
        return $list;
    }

    //答题次数
    public function getNum($paper_id, $user)
    {
        $num = 0;
        if ($user) {
            $num = $this->where('paper_id', '=', $paper_id)
                ->where('user_id', '=', $user['user_id'])
                ->count();
        }
        return $num;
    }

}