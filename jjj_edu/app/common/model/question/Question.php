<?php

namespace app\common\model\question;

use app\common\model\BaseModel;

/**
 * 题库模型
 */
class Question extends BaseModel
{
    protected $name = 'question';
    protected $pk = 'question_id';
    protected $append = ['type_name'];
    /**
     * 获取标签
     */
    public function getTypeNameAttr($value, $data)
    {
        return isset(self::questionType()[$data['question_type'] - 1]) ? self::questionType()[$data['question_type'] - 1]['name'] : '';
    }

    /**
     * 设置标签
     */
    public function setAnswerAttr($value)
    {
        return $value ? implode(',', $value) : '';
    }

    /**
     * 获取标签
     */
    public function getOptionAttr($value)
    {
        return $value ? json_decode($value, true) : [];
    }

    /**
     * 设置标签
     */
    public function setOptionAttr($value)
    {
        return $value ? json_encode($value) : '';
    }

    /**
     * 关联分类表
     */
    public function category()
    {
        return $this->belongsTo('app\\common\\model\\course\\Category', 'category_id', 'category_id');
    }

    /**
     * 关联封面图片表
     */
    public function image()
    {
        return $this->belongsTo('app\\common\\model\\file\\UploadFile', 'image_id', 'file_id');
    }

    /**
     * 关联知识点表
     */
    public function knowledge()
    {
        return $this->hasMany('app\\common\\model\\question\\Relation', 'question_id', 'question_id');
    }

    /**
     * 获取课程详情
     */
    public static function detail($where, $with = ['category', 'image'])
    {
        !is_array($where) && $where = ['question_id' => (int)$where];
        return (new static())->where($where)->with($with)->find();
    }

    /**
     * 获取试题类型:1单选2多选3判断
     */
    public static function questionType()
    {
        $data = [
            ['id' => 1, 'name' => '单选'],
            ['id' => 2, 'name' => '多选'],
            ['id' => 3, 'name' => '判断']
        ];
        return $data;
    }

}
