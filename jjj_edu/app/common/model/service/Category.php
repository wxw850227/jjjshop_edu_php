<?php

namespace app\common\model\service;

use app\common\model\BaseModel;

/**
 * 分类模型
 */
class Category extends BaseModel
{
    protected $name = 'service_category';
    protected $pk = 'category_id';

    /**
     * 所有分类
     */
    public function getALL()
    {
        return $this->order(['sort' => 'asc', 'create_time' => 'asc'])->select();
    }

}