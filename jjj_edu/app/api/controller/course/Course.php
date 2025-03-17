<?php

namespace app\api\controller\course;

use app\api\model\course\Course as CourseModel;
use app\api\model\course\CourseSection as CourseSectionModel;
use app\api\controller\Controller;

/**
 * 课程控制器
 */
class Course extends Controller
{
    /**
     * 课程列表
     */
    public function list()
    {
        // 获取列表数据
        $model = new CourseModel;
        $data = $this->postData();
        $data['course_type'] = 1;
        $list = $model->getList($data);
        return $this->renderSuccess('', compact('list'));
    }

    /**
     * 教务列表
     */
    public function lists()
    {
        // 获取列表数据
        $model = new CourseModel;
        $data = $this->postData();
        $data['course_type'] = 2;
        $list = $model->getList($data);
        return $this->renderSuccess('', compact('list'));
    }

    /**
     * 课程详情
     */
    public function detail($course_id)
    {
        // 获取列表数据
        $model = new CourseModel;
        $detail = $model->getDetail($course_id, $this->getUser(false));
        return $this->renderSuccess('', compact('detail'));
    }

    /**
     * 课程章节详情
     */
    public function sectionDetail()
    {
        $user = $this->getUser(false);
        // 获取列表数据
        $model = new CourseSectionModel;
        $detail = $model->getDetail($this->postData(), $user);
        if ($detail) {
            return $this->renderSuccess('', compact('detail'));
        } else {
            return $this->renderError($model->getError() ?: '查看失败');
        }
    }
}