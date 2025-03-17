<?php


namespace app\common\model\paper;

use app\common\model\BaseModel;

/**
 * 收藏模型
 */
class Favorite extends BaseModel
{
    protected $name = 'paper_favorite';
    protected $pk = 'favorite_id';

    //获取收藏试题列表
    public function getList($user_id, $param)
    {
        $list = $this->where('user_id', '=', $user_id)
            ->with(['paper' => ['image'], 'question'])
            ->field("*")
            ->order('create_time desc')
            ->paginate($param);
        return $list;
    }

    /**
     * 关联试题表
     */
    public function paper()
    {
        return $this->belongsTo('app\\common\\model\\paper\\Paper', 'paper_id', 'paper_id');
    }

    /**
     * 关联试题表
     */
    public function question()
    {
        return $this->belongsTo('app\\common\\model\\question\\Question', 'question_id', 'question_id');
    }

    /**
     * 关联问题表
     */
    public function knowledge()
    {
        return $this->hasMany('app\\common\\model\\question\\Relation', 'question_id', 'question_id');
    }

    /**
     * 收藏详情
     */
    public static function detail($data, $user_id)
    {
        return (new static())->where('paper_id', '=', $data['paper_id'])
            ->where('question_id', '=', $data['question_id'])
            ->where('user_id', '=', $user_id)
            ->find();
    }

    /**
     * 判断用户是否收藏
     */
    public static function isFav($data, $user_id)
    {
        $detail = static::detail($data, $user_id);
        if ($detail) {
            return true;
        }
        return false;
    }

    /**
     * 获取试卷问题详情
     */
    public static function getDetail($where, $with = ['paper', 'question', 'knowledge.course'])
    {
        !is_array($where) && $where = ['favorite_id' => (int)$where];
        return (new static())->where($where)->with($with)->find();
    }
}