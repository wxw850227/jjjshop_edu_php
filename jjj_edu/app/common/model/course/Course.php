<?php

namespace app\common\model\course;

use app\common\library\helper;
use app\common\model\BaseModel;

/**
 * 课程模型
 */
class Course extends BaseModel
{
    protected $name = 'course';
    protected $pk = 'course_id';
    protected $append = ['isFree', 'sectionNum', 'start_time_text', 'end_time_text'];

    /**
     * 设置课程开始时间
     */
    public function setStartTimeAttr($value)
    {
        return $value ? strtotime($value) : 0;
    }

    /**
     * 设置课程结束时间
     */
    public function setEndTimeAttr($value)
    {
        return $value ? strtotime($value) : 0;
    }

    /**
     * 获取课程开始时间
     */
    public function getStartTimeTextAttr($value, $data)
    {
        return $data['start_time'] ? date('Y-m-d', $data['start_time']) : '';
    }

    /**
     * 获取课程结束时间
     */
    public function getEndTimeTextAttr($value, $data)
    {
        return $data['end_time'] ? date('Y-m-d', $data['end_time']) : '';
    }

    /**
     * 获取标签
     */
    public function getIsFreeAttr($value, $data)
    {
        $isSee = (new CourseSection())->where('course_id', '=', $data['course_id'])
            ->where('is_show', '=', 0)
            ->where('is_delete', '=', 0)
            ->where('is_see', '=', 1)
            ->count();
        if ($data['is_pay'] == 0) {//免费
            $isFree = 1;
        } elseif ($isSee > 0 && $data['is_pay'] == 1) {//免费试看
            $isFree = 2;
        } elseif ($isSee <= 0 && $data['is_pay'] == 1) {//收费
            $isFree = 3;
        } else {//密码观看
            $isFree = 4;
        }
        return $isFree;
    }

    /**
     * 获取标签
     */
    public function getSectionNumAttr($value, $data)
    {
        return (new CourseSection())->where('course_id', '=', $data['course_id'])
            ->where('is_show', '=', 0)
            ->where('is_delete', '=', 0)
            ->count();
    }

    /**
     * 获取标签
     */
    public function getLabelAttr($value)
    {
        return $value ? explode(',', $value) : [];
    }

    /**
     * 设置标签
     */
    public function setLabelAttr($value)
    {
        return $value ? implode(',', $value) : [];
    }

    /**
     * 关联分类表
     */
    public function category()
    {
        return $this->belongsTo('app\\common\\model\\course\\Category', 'category_id', 'category_id');
    }

    /**
     * 关联讲师表
     */
    public function lecturer()
    {
        return $this->belongsTo('app\\common\\model\\lecturer\\Lecturer', 'lecturer_id', 'lecturer_id');
    }

    /**
     * 关联章节表
     */
    public function section()
    {
        return $this->hasMany('app\\common\\model\\course\\CourseSection', 'course_id', 'course_id')->where(['is_show' => 0, 'is_delete' => 0])->order(['sort' => 'asc', 'section_id' => 'asc']);
    }

    /**
     * 关联banner表
     */
    public function banner()
    {
        return $this->hasMany('app\\common\\model\\course\\CourseImage')->order(['id' => 'asc']);
    }

    /**
     * 关联封面图片表
     */
    public function image()
    {
        return $this->belongsTo('app\\common\\model\\file\\UploadFile', 'image_id', 'file_id');
    }

    /**
     * 关联视频封面图片表
     */
    public function videoImage()
    {
        return $this->belongsTo('app\\common\\model\\file\\UploadFile', 'video_image', 'file_id')
            ->bind(['file_path', 'file_name', 'file_url']);
    }

    /**
     * 关联订单评价表
     */
    public function commentData()
    {
        return $this->hasMany('app\\common\\model\\course\\Comment', 'course_id', 'course_id');
    }

    /**
     * 获取课程详情
     */
    public static function detail($where, $with = ['category', 'lecturer.image', 'banner.file', 'image', 'section' => ['lecturer.image']])
    {
        !is_array($where) && $where = ['course_id' => (int)$where];
        return (new static())->where($where)->with($with)->find();
    }

    /**
     * 根据课程名称得到相关列表
     */
    public function getWhereData($title)
    {
        return $this->where('title', 'like', '%' . trim($title) . '%')->select();
    }

}
