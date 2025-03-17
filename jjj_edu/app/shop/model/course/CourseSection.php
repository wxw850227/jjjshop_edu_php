<?php

namespace app\shop\model\course;

use app\common\model\course\CourseSection as CourseSectionModel;

/**
 * 课程章节模型
 */
class CourseSection extends CourseSectionModel
{
    /**
     * 课程章节列表
     */
    public function getList($data)
    {
        $model = $this;
        if (isset($data['search']) && $data['search']) {
            $model = $model->where('title', 'like', '%' . $data['search'] . '%');
        }
        if (isset($data['course_id']) && $data['course_id'] > 0) {
            $model = $model->where('course_id', '=', $data['course_id']);
        }
        $list = $model->where('is_delete', '=', 0)
            ->order(['sort' => 'asc', 'section_id' => 'desc'])
            ->paginate($data);
        return $list;
    }

    /**
     * 添加
     */
    public function add($data)
    {
        $data['app_id'] = self::$app_id;
        return $this->save($data);
    }

    /**
     * 编辑
     */
    public function edit($data)
    {
        $status = $this->save($data);
        return $status;
    }

    /**
     * 修改状态
     */
    public function setStatus($state)
    {
        return $this->save(['is_show' => $state]) !== false;
    }

    /**
     * 软删除
     */
    public function setDelete()
    {
        return $this->save(['is_delete' => 1]);
    }

    /**
     * 更新课程价格
     */
    public function updateCourse($course_id)
    {
        $money = $this->where('course_id', '=', $course_id)
            ->where('is_delete', '=', 0)
            ->where('is_show', '=', 0)
            ->where('is_pay', '=', 1)
            ->sum('money');
        return (new Course())->where('course_id', '=', $course_id)->save(['course_price' => $money]);
    }
}
