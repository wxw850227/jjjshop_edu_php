<?php

namespace app\common\model\course;

use app\common\model\BaseModel;

/**
 * 课程图片模型
 */
class CourseImage extends BaseModel
{
    protected $name = 'course_image';
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
