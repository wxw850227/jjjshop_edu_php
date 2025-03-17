<?php

namespace app\common\model\ad;

use app\common\model\BaseModel;

/**
 * 广告分类模型
 */
class AdCategory extends BaseModel
{
    protected $name = 'ad_category';
    protected $pk = 'category_id';

    /**
     * 所有分类
     * @return \think\Collection
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public static function getALL($category_id=0)
    {   
        $where = [];
        if($category_id){
            $where['category_id'] = $category_id;
        }
        $model = new static;
        return $model->where($where)->order(['create_time' => 'asc'])->select();
    }

}