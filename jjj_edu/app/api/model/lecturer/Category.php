<?php

namespace app\api\model\lecturer;

use app\common\model\lecturer\Category as CategoryModel;

/**
 * 课程分类模型
 */
class Category extends CategoryModel
{
    /**
     * 隐藏字段
     */
    protected $hidden = [
        'app_id',
        'update_time'
    ];

}