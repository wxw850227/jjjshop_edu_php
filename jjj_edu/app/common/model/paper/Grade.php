<?php

namespace app\common\model\paper;

use app\common\model\BaseModel;

/**
 * 试卷等级模型
 */
class Grade extends BaseModel
{
    protected $name = 'paper_grade';
    protected $pk = 'grade_id';

    /**
     * 关联试卷表
     */
    public function paper()
    {
        return $this->belongsTo('app\\common\\model\\paper\\Paper', 'paper_id', 'paper_id');
    }

    /**
     * 获取课程详情
     */
    public static function detail($where, $with = ['paper'])
    {
        !is_array($where) && $where = ['grade_id' => (int)$where];
        return (new static())->where($where)->with($with)->find();
    }

}
