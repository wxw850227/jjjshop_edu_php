<?php

namespace app\api\model\lecturer;

use app\common\model\lecturer\CommentImage as CommentImageModel;

/**
 * 讲师评价图片模型
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
