<?php

namespace app\common\model\lecturer;

use app\common\model\BaseModel;

/**
 * 讲师评价图片模型
 */
class CommentImage extends BaseModel
{
    protected $name = 'lecturer_comment_image';
    protected $pk = 'id';
    protected $updateTime = false;

    /**
     * 关联文件库
     */
    public function file()
    {
        return $this->belongsTo('app\\common\\model\\file\\UploadFile', 'image_id', 'file_id')
            ->bind(['file_path', 'file_name', 'file_url']);
    }

}
