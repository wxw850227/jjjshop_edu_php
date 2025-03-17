<?php


namespace app\common\model\course;

use app\common\model\BaseModel;

/**
 * 收藏模型
 */
class Favorite extends BaseModel
{
    protected $name = 'course_favorite';
    protected $pk = 'favorite_id';

    //获取收藏课程列表
    public function getList($user_id, $param)
    {
        $list = $this->alias('f')
            ->join('course c', 'c.course_id=f.course_id')
            ->where('c.is_delete', '=', 0)
            ->where('f.user_id', '=', $user_id)
            ->with(['course' => ['image']])
            ->field("f.*")
            ->order('f.create_time desc')
            ->paginate($param);
        return $list;
    }

    /**
     * 关联课程表
     */
    public function course()
    {
        return $this->belongsTo('app\\common\\model\\course\\Course', 'course_id', 'course_id');
    }

    /**
     * 收藏详情
     */
    public static function detail($course_id, $user_id)
    {
        return (new static())->where('course_id', '=', $course_id)
            ->where('user_id', '=', $user_id)
            ->find();
    }

    /**
     * 判断用户是否收藏
     */
    public static function isFav($course_id, $user_id)
    {
        $detail = static::detail($course_id, $user_id);
        if ($detail) {
            return true;
        }
        return false;
    }
}