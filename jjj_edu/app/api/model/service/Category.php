<?php

namespace app\api\model\service;

use app\common\model\service\Category as CategoryModel;

/**
 * 分类模型
 */
class Category extends CategoryModel
{
    /**
     * 所有分类
     */
    public function getList()
    {
        $model = $this;
        return $model->order(['sort' => 'asc', 'create_time' => 'asc'])->select();
    }
}