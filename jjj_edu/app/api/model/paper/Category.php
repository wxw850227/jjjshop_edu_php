<?php

namespace app\api\model\paper;

use app\common\model\paper\Category as CategoryModel;

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