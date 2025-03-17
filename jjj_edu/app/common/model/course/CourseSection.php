<?php

namespace app\common\model\course;

use app\common\library\helper;
use app\common\model\BaseModel;

/**
 * 课程章节模型
 */
class CourseSection extends BaseModel
{
    protected $name = 'course_section';
    protected $pk = 'section_id';
    protected $append = ['start_time_text', 'end_time_text', 'status'];

    /**
     * 设置上课时间
     */
    public function setStartTimeAttr($value)
    {
        return $value ? strtotime($value) : 0;
    }

    /**
     * 设置下课时间
     */
    public function setEndTimeAttr($value)
    {
        return $value ? strtotime($value) : 0;
    }

    /**
     * 获取上课时间
     */
    public function getStartTimeTextAttr($value, $data)
    {
        return $data['start_time'] ? date('Y-m-d H:i:s', $data['start_time']) : '';
    }

    /**
     * 获取下课时间
     */
    public function getEndTimeTextAttr($value, $data)
    {
        return $data['end_time'] ? date('Y-m-d H:i:s', $data['end_time']) : '';
    }

    /**
     * 获取上课状态
     */
    public function getStatusAttr($value, $data)
    {
        if ($data['start_time'] > time()) {//未开始
            $status = 0;
        } elseif ($data['start_time'] <= time() && $data['end_time'] >= time()) {//进行中
            $status = 1;
        } else {//已结束
            $status = 2;
        }
        return $status;
    }

    /**
     * 关联讲师表
     */
    public function lecturer()
    {
        return $this->belongsTo('app\\common\\model\\lecturer\\Lecturer', 'lecturer_id', 'lecturer_id');
    }

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
        !is_array($where) && $where = ['section_id' => (int)$where];
        return (new static())->where($where)->with($with)->find();
    }
}
