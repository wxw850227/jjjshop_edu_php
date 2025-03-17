<?php

namespace app\api\model\paper;

use app\common\model\paper\Paper as paperModel;
use app\common\model\question\Question as QuestionModel;
use app\api\model\page\Ad as AdModel;

/**
 * 试题模型
 */
class Paper extends paperModel
{
    /**
     * 隐藏字段
     */
    protected $hidden = [];

    /**
     * 获取课程首页
     */
    public function getBaseInfo($user = false)
    {
        //banner图
        $adList = (new AdModel)->getIndex([], 5);
        //练习列表
        $realList = $this->with(['image'])
            ->where('is_show', '=', 0)
            ->where('is_delete', '=', 0)
            ->where('paper_type', '=', 1)
            ->order(['is_real' => 'desc', 'sort' => 'asc', 'create_time' => 'desc'])
            ->limit(9)
            ->select();
        $detail['adList'] = $adList;
        $detail['realList'] = $realList;
        return $detail;
    }

    //获取列表
    public function getList($data)
    {
        $model = $this;
        if (isset($data['category_id']) && $data['category_id'] > 0) {
            $model = $model->where('category_id', '=', $data['category_id']);
        }
        if (isset($data['paper_id']) && $data['paper_id']) {
            $model = $model->where('paper_id', 'not in', $data['paper_id']);
        }
        if (isset($data['search']) && $data['search']) {
            $model = $model->where('title', 'like', '%' . $data['search'] . '%');
        }
        if (isset($data['paper_type']) && $data['paper_type']) {
            $model = $model->where('paper_type', '=', $data['paper_type']);
        }
        $sort = ['sort' => 'asc', 'paper_id' => 'desc'];
        if (isset($data['sortType']) && $data['sortType'] === 'sales') {
            $sort = ['total_sales' => 'desc'];
        }
        $list = $model->with(['image'])
            ->where('is_show', '=', 0)
            ->where('is_delete', '=', 0)
            ->field("*,(real_sales+virtual_sales) as total_sales")
            ->order($sort)
            ->paginate($data);
        return $list;
    }

    //课程详情
    public function getDetail($paper_id, $user = false)
    {
        $detail = self::detail($paper_id);
        //查询是否购买
        $detail['payStatus'] = 0;
        //判断是否答题
        $record_status = 0;//未答题
        $record = (new Record())->getRecord($paper_id, $user);
        if ($record) {
            if ($record['is_submit'] == 0) {
                $record_status = 1;//继续答题
            } else {
                $record_status = 2;//再次答题
            }
        }
        $detail['record_status'] = $record_status;
        return $detail;
    }

    /**
     * 开始答题
     */
    public function startAnswer($paper_id, $user)
    {
        $record = (new Record())->getRecord($paper_id, $user);
        if ($record) {
            return $record;
        }
        $paper = PaperModel::detail($paper_id);
        //查询答题次数
        if ($paper['paper_type'] == 2) {
            $recordNum = (new Record())->getNum($paper_id, $user);
            if ($recordNum >= $paper['times'] && $paper['times'] > 0) {
                $this->error = '超过最大答题次数';
                return false;
            }
        }
        // 开启事务
        $this->startTrans();
        try {
            $question = $paper['question'];
            $paperQuestionData = [];
            $paperData = [
                'paper_id' => $paper['paper_id'],
                'exam_time' => $paper['exam_time'],
                'exam_end_time' => $paper['exam_time'] * 60 + time(),
                'paper_type' => $paper['paper_type'],
                'start_time' => time(),
                'user_id' => $user['user_id'],
                'app_id' => self::$app_id,
            ];
            $recordModel = new Record();
            $recordModel->save($paperData);
            foreach ($question as $value) {
                $paperQuestionData[] = [
                    'record_id' => $recordModel['record_id'],
                    'user_id' => $user['user_id'],
                    'paper_type' => $paper['paper_type'],
                    'question_id' => $value['question_id'],
                    'paper_question_id' => $value['paper_question_id'],
                    'question_type' => $value['question_type'],
                    'question_answer' => $value['question']['answer'],
                    'app_id' => self::$app_id,
                ];
            }
            $paperQuestionData && (new RecordQuestion())->saveAll($paperQuestionData);
            $this->commit();
            //更新答题人数
            $paper->save(['real_answer' => $paper['real_answer'] + 1]);
            $detail = (new Record())->getRecord($paper_id, $user);
            return $detail;
        } catch (\Exception $e) {
            $this->error = $e->getMessage();
            $this->rollback();
            return false;
        }
    }

    /**
     * 提交答题
     */
    public function submitAnswer($data, $user)
    {
        $detail = (new RecordQuestion())::detail($data['id']);
        $question = QuestionModel::detail($detail['question_id']);
        $WrongQuestion = new WrongQuestion();
        $this->startTrans();
        try {
            $score = 0;
            $data['answer'] = explode(',', $data['answer']);
            sort($data['answer']);
            $data['answer'] = implode(',', $data['answer']);
            if ($question['answer'] == $data['answer']) {
                $answer_state = 1;
                if ($detail['question_type'] == 1) {
                    $score = $detail['record']['paper']['single_score'];
                } elseif ($detail['question_type'] == 2) {
                    $score = $detail['record']['paper']['many_score'];
                } else {
                    $score = $detail['record']['paper']['judge_score'];
                }
                //删除错题
                $WrongQuestion->setDelete($detail['record']['paper_id'], $detail['question_id'], $user);
            } else {
                //添加错题集
                $WrongQuestion->addWrong($detail['record']['paper_id'], $detail['question_id'], $data['answer'], $question['answer'], $detail['paper_question_id'], $user);
                $answer_state = 2;
            }
            $detail->save([
                'answer' => $data['answer'],
                'answer_state' => $answer_state,
                'score' => $score,
            ]);
            $this->commit();
            return true;
        } catch (\Exception $e) {
            $this->error = $e->getMessage();
            $this->rollback();
            return false;
        }
    }

    /**
     * 提交答题
     */
    public function submit($data)
    {
        $recordModel = new Record();
        $detail = $recordModel::detail($data['record_id']);
        $right_question = 0;//正确数
        $wrong_question = 0;//错误数
        $score = 0;//总分
        $this->startTrans();
        try {
            foreach ($detail['question'] as $item) {
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
            $duration = time() - $detail['start_time'];
            $grade = '';
            $detail->save([
                'right_question' => $right_question,
                'wrong_question' => $wrong_question,
                'is_submit' => 1,
                'score' => $score,
                'accuracy' => $accuracy,
                'duration' => $duration,
                'grade' => $grade,
                'end_time' => time(),
            ]);
            $this->commit();
            return true;
        } catch (\Exception $e) {
            $this->error = $e->getMessage();
            $this->rollback();
            return false;
        }
    }

    /**
     * 继续答题
     */
    public function resultAnswer($paper_id, $user)
    {
        $recordModel = new Record();
        $detail = $recordModel->with(['paper', 'question' => ['question', 'knowledge.course']])
            ->where('paper_id', '=', $paper_id)
            ->where('user_id', '=', $user['user_id'])
            ->where('is_submit', '=', 1)
            ->order('record_id desc')
            ->find();
        foreach ($detail['question'] as &$item) {
            $is_fav = (new Favorite())->where('user_id', '=', $user['user_id'])
                ->where('paper_id', '=', $paper_id)
                ->where('question_id', '=', $item['question_id'])
                ->where('paper_question_id', '=', $item['paper_question_id'])
                ->count();
            $item['is_fav'] = $is_fav;
        }
        $detail['no_answer'] = round($detail['paper']['item_number'] - $detail['right_question'] - $detail['wrong_question'], 0);
        return $detail;
    }

    //获取列表
    public function getListByIdsFromApi($paperIds)
    {
        $list = $this->with(['image'])
            ->where('paper_id', 'in', $paperIds)
            ->where('is_show', '=', 0)
            ->where('is_delete', '=', 0)
            ->order(['sort' => 'asc', 'paper_id' => 'desc'])
            ->select();
        return $list;
    }
}