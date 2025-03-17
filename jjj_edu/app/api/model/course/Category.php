<?php

namespace app\api\model\course;

use app\common\model\course\Category as CategoryModel;

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