<?php


namespace app\common\model\lecturer;

use app\common\model\BaseModel;

/**
 * 收藏模型
 */
class Favorite extends BaseModel
{
    protected $name = 'lecturer_favorite';
    protected $pk = 'favorite_id';

    //获取收藏讲师列表
    public function getList($user_id, $param)
    {
        $list = $this->alias('f')
            ->join('lecturer l', 'l.lecturer_id=f.lecturer_id')
            ->where('l.is_delete', '=', 0)
            ->where('f.user_id', '=', $user_id)
            ->with(['lecturer' => ['image']])
            ->field("f.*")
            ->order('f.create_time desc')
            ->paginate($param);
        return $list;
    }

    /**
     * 关联讲师表
     */
    public function lecturer()
    {
        return $this->belongsTo('app\\common\\model\\lecturer\\Lecturer', 'lecturer_id', 'lecturer_id');
    }

    /**
     * 收藏详情
     */
    public static function detail($lecturer_id, $user_id)
    {
        return (new static())->where('lecturer_id', '=', $lecturer_id)
            ->where('user_id', '=', $user_id)
            ->find();
    }

    /**
     * 判断用户是否收藏
     */
    public static function isFav($lecturer_id, $user_id)
    {
        $detail = static::detail($lecturer_id, $user_id);
        if ($detail) {
            return true;
        }
        return false;
    }
}