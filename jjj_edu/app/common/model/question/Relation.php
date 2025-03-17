<?php

namespace app\common\model\question;

use app\common\model\BaseModel;

/**
 * 关联课程模型
 */
class Relation extends BaseModel
{
    protected $name = 'question_relation';
    protected $pk = 'id';

    /**
     * 关联课程表
     */
    public function course()
    {
        return $this->belongsTo('app\\common\\model\\course\\Course', 'course_id', 'course_id');
    }

    /**
     * 获取课程详情
     */
    public static function detail($where, $with = [])
    {
        !is_array($where) && $where = ['id' => (int)$where];
        return (new static())->where($where)->with($with)->find();
    }

}
