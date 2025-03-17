<?php

namespace app\shop\model\paper;

use app\common\library\helper;
use app\common\model\paper\Paper as PaperModel;

/**
 * 试卷模型
 */
class Paper extends PaperModel
{
    /**
     * 讲师列表
     */
    public function getList($data, $paper_type)
    {
        $model = $this;
        if (isset($data['search']) && $data['search']) {
            $model = $model->where('title', 'like', '%' . $data['search'] . '%');
        }
        if (isset($data['category_id']) && $data['category_id']) {
            $model = $model->where('category_id', '=', $data['category_id']);
        }
        if (isset($data['is_show']) && $data['is_show'] > -1) {
            $model = $model->where('is_show', '=', $data['is_show']);
        }
        $list = $model->with(['category', 'image'])
            ->where('paper_type', '=', $paper_type)
            ->where('is_delete', '=', 0)
            ->order(['sort' => 'asc', 'paper_id' => 'desc'])
            ->paginate($data);
        return $list;
    }

    /**
     * 添加
     */
    public function add($data, $type)
    {
        $data['app_id'] = self::$app_id;
        $data['paper_type'] = $type;

        // 开启事务
        $this->startTrans();
        try {
            // 添加题库
            $this->save($data);
            // 添加题库
            $data['question'] && $this->addQuestion($data['question'], $type);
            // 添加等级
            if (isset($data['grade']) && $data['grade']) {
                $this->addGrade($data['grade']);
            }
            (new Category())->deleteCache($type);
            $this->commit();
            return true;
        } catch (\Exception $e) {
            $this->error = $e->getMessage();
            $this->rollback();
            return false;
        }
    }

    /**
     * 编辑
     */
    public function edit($data)
    {
        return $this->transaction(function () use ($data) {
            // 保存
            $this->save($data);
            // 添加题库
            $data['question'] && $this->addQuestion($data['question'], $this['paper_type'], true);
            // 添加等级
            if (isset($data['grade']) && $data['grade']) {
                $this->addGrade($data['grade']);
            }
            (new Category())->deleteCache($this['paper_type']);
            return true;
        });
    }

    /**
     * 添加问题
     */
    public function addQuestion($data, $type, $isUpdate = false)
    {
        $QuestionModel = new Question();
        $addData = [];
        $updateData = [];
        $questionIds = [];
        foreach ($data as $item) {
            if (isset($item['paper_question_id']) && $item['paper_question_id'] > 0) {
                $questionIds[] = $item['paper_question_id'];
                $updateData[] = [
                    'data' => $item,
                    'where' => [
                        'paper_question_id' => $item['paper_question_id'],
                    ]
                ];
            } else {
                $addData[] = [
                    'question_type' => $item['question_type'],
                    'paper_type' => $type,
                    'paper_id' => $this['paper_id'],
                    'question_id' => $item['question_id'],
                    'sort' => $item['sort'],
                    'app_id' => self::$app_id
                ];
            }
        }
        count($questionIds) > 0 && $QuestionModel->where('paper_id', '=', $this['paper_id'])->where('paper_question_id', 'not in', $questionIds)->delete();
        count($addData) > 0 && $QuestionModel->saveAll($addData);
        count($updateData) > 0 && $QuestionModel->updateAll($updateData);

    }

    /**
     * 添加等级
     */
    public function addGrade($data, $isUpdate = false)
    {
        $GradeModel = new Grade();
        $addGrade = [];
        $updateGrade = [];
        $gradeIds = [];
        foreach ($data as $item) {
            if (isset($item['grade_id']) && $item['grade_id'] > 0) {
                $gradeIds[] = $item['grade_id'];
                $updateGrade[] = [
                    'data' => $item,
                    'where' => [
                        'grade_id' => $item['grade_id'],
                    ]
                ];
            } else {
                $addGrade[] = [
                    'paper_id' => $this['paper_id'],
                    'name' => $item['name'],
                    'min' => $item['min'],
                    'max' => $item['max'],
                    'app_id' => self::$app_id
                ];
            }
        }
        count($gradeIds) > 0 && $GradeModel->where('paper_id', '=', $this['paper_id'])->where('grade_id', 'not in', $gradeIds)->delete();
        count($addGrade) > 0 && $GradeModel->saveAll($addGrade);
        count($updateGrade) > 0 && $GradeModel->updateAll($updateGrade);

    }

    /**
     * 获取详情
     */
    public function getDetail($paper_id)
    {
        $detail = self::detail($paper_id);
        $detail['single'] = $this->getQuestion($paper_id, 1);
        $detail['many'] = $this->getQuestion($paper_id, 2);
        $detail['judge'] = $this->getQuestion($paper_id, 3);
        return $detail;

    }

    /**
     * 获取题目
     */
    public function getQuestion($paper_id, $question_type)
    {
        return (new Question())->with(['question.category'])
            ->where('paper_id', '=', $paper_id)
            ->where('question_type', '=', $question_type)
            ->order('sort asc,create_time desc')
            ->select();
    }

    /**
     * 修改状态
     */
    public function setStatus($state)
    {
        return $this->save(['is_show' => $state]) !== false;
    }

    /**
     * 软删除
     */
    public function setDelete()
    {
        (new Category())->deleteCache($this['type']);
        return $this->save(['is_delete' => 1]);
    }

    /**
     * 获取总数
     */
    public function getTotal($where = [])
    {
        return $this->where('is_delete', '=', 0)->where($where)->count();
    }

}
