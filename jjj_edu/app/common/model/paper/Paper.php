<?php

namespace app\common\model\paper;

use app\common\model\BaseModel;

/**
 * 试卷模型
 */
class Paper extends BaseModel
{
    protected $name = 'paper';
    protected $pk = 'paper_id';
    protected $append = ['total_answer'];

    /**
     * 计算答题人数
     */
    public function getTotalAnswerAttr($value, $data)
    {
        return $data['virtual_answer'] + $data['real_answer'];
    }

    /**
     * 关联分类表
     */
    public function category()
    {
        return $this->belongsTo('app\\common\\model\\paper\\Category', 'category_id', 'category_id');
    }

    /**
     * 关联封面图片表
     */
    public function image()
    {
        return $this->belongsTo('app\\common\\model\\file\\UploadFile', 'image_id', 'file_id');
    }

    /**
     * 关联等级表
     */
    public function grade()
    {
        return $this->hasMany('app\\common\\model\\paper\\Grade', 'paper_id', 'paper_id');
    }

    /**
     * 关联问题表
     */
    public function question()
    {
        return $this->hasMany('app\\common\\model\\paper\\Question', 'paper_id', 'paper_id')->order('question_type asc');
    }

    /**
     * 获取课程详情
     */
    public static function detail($where, $with = ['category', 'image', 'grade', 'question.question'])
    {
        !is_array($where) && $where = ['paper_id' => (int)$where];
        return (new static())->where($where)->with($with)->find();
    }

}
