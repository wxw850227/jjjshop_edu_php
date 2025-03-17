<?php

namespace app\api\model\course;

use app\common\model\course\CommentImage as CommentImageModel;

/**
 * 课程评价图片模型
 */
class CommentImage extends CommentImageModel
{
    /**
     * 隐藏字段
     */
    protected $hidden = [
        'app_id',
        'create_time',
    ];

}
