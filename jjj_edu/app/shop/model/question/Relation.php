<?php

namespace app\shop\model\question;

use app\common\model\question\Relation as RelationModel;

/**
 * 关联课程模型
 */
class Relation extends RelationModel
{
    /**
     * 列表
     */
    public function getList($data)
    {
        $model = $this;
        if (isset($data['question_id']) && $data['question_id']) {
            $model = $model->where('question_id', '=', $data['question_id']);
        }
        $list = $model->with(['course.image'])
            ->order(['sort' => 'asc', 'id' => 'desc'])
            ->paginate($data);
        return $list;
    }

    /**
     * 添加
     */
    public function add(array $data)
    {
        // 开启事务
        $this->startTrans();
        try {
            $add = [];
            foreach ($data['course_id'] as $item) {
                $add[] = [
                    'question_id' => $data['question_id'],
                    'course_id' => $item,
                    'app_id' => self::$app_id,
                ];
            }
            // 添加关联课程
            $this->saveAll($add);
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
    public function setsort($data)
    {
        return $this->save($data);
    }

    /**
     * 软删除
     */
    public function setDelete()
    {
        return $this->delete();
    }

}
