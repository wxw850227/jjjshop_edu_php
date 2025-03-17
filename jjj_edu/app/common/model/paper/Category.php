<?php

namespace app\common\model\paper;

use think\facade\Cache;
use app\common\model\BaseModel;

/**
 * 试卷分类模型
 */
class Category extends BaseModel
{
    protected $pk = 'category_id';
    protected $name = 'paper_category';
    protected $append = ['questionCount'];

    /**
     * 获取上课时间
     */
    public function getQuestionCountAttr($value, $data)
    {
        return (new Paper())->where('category_id', '=', $data['category_id'])->where('is_delete', '=', 0)->count();
    }

    /**
     * 详情
     */
    public static function detail($category_id)
    {
        return (new static())->with(['image'])->find($category_id);
    }

    /**
     * 所有分类
     */
    public static function getALL($type = 1)
    {
        $model = new static;
        if (!Cache::get('paper_category_' . $type . $model::$app_id)) {
            $data = $model->where('type', '=', $type)
                ->order(['sort' => 'asc', 'create_time' => 'asc'])
                ->select();
            $all = !empty($data) ? $data->toArray() : [];
            Cache::set('paper_category_' . $type . $model::$app_id, $all);
        }
        return Cache::get('paper_category_' . $type . $model::$app_id);
    }

    /**
     * 获取所有列表
     */
    public static function getList($type)
    {
        $model = new static;
        $data = $model->where('status', '=', 1)
            ->where('type', '=', $type)
            ->with(['image'])
            ->field("*")
            ->order(['sort' => 'asc', 'create_time' => 'asc'])
            ->select();
        $all = !empty($data) ? $data->toArray() : [];
        return $all;
    }

    /**
     * 关联图片
     */
    public function image()
    {
        return $this->belongsTo('app\common\model\file\UploadFile', 'image_id', 'file_id');
    }
}
