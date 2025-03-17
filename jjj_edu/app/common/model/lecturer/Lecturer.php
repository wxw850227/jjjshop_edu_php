<?php

namespace app\common\model\lecturer;

use app\common\model\BaseModel;
use app\common\model\course\CourseSection as CourseSectionModel;

/**
 * 讲师模型
 */
class Lecturer extends BaseModel
{
    protected $name = 'lecturer';
    protected $pk = 'lecturer_id';
    protected $append = ['course_count', 'browse_count', 'collect_count', 'like_count'];

    /**
     * 点赞人数
     */
    public function getLikeCountAttr($value, $data)
    {
        return $data['virtual_like'] + $data['real_like'];
    }

    /**
     * 收藏人数
     */
    public function getCollectCountAttr($value, $data)
    {
        return $data['virtual_collect'] + $data['real_collect'];
    }

    /**
     * 浏览人数
     */
    public function getBrowseCountAttr($value, $data)
    {
        return $data['virtual_browse'] + $data['real_browse'];
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
     * 获取课程数量
     */
    public function getCourseCountAttr($value, $data)
    {
        $count = (new CourseSectionModel())->alias('s')
            ->join('course c', 'c.course_id=s.course_id')
            ->where('s.lecturer_id', '=', $data['lecturer_id'])
            ->where('s.is_delete', '=', 0)
            ->where('c.is_delete', '=', 0)
            ->count();
        return $count;
    }

    /**
     * 关联分类表
     */
    public function category()
    {
        return $this->belongsTo('app\\common\\model\\lecturer\\Category', 'category_id', 'category_id');
    }

    /**
     * 关联课程表
     */
    public function course()
    {
        return $this->hasOne('app\\common\\model\\course\\Course', 'lecturer_id', 'lecturer_id');
    }

    /**
     * 关联超管
     */
    public function superUser()
    {
        return $this->hasOne('app\\common\\model\\lecturer\\User', 'lecturer_id', 'lecturer_id')
            ->where('is_super', '=', 1);
    }

    /**
     * 关联image
     */
    public function image()
    {
        return $this->hasOne('app\\common\\model\\file\\UploadFile', 'file_id', 'image_id');
    }

    /**
     * 获取讲师详情
     */
    public static function detail($where, $with = ['category', 'image'])
    {
        !is_array($where) && $where = ['lecturer_id' => (int)$where];
        return (new static())->where($where)->with($with)->find();
    }

    /**
     * 获取所有讲师
     */
    public static function getAll()
    {
        return (new static())->where('is_delete', '=', 0)
            ->where('is_show', '=', 0)
            ->select();
    }

}
