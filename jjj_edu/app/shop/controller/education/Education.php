<?php

namespace app\shop\controller\education;

use app\shop\model\course\Course as CourseModel;
use app\shop\model\course\Category as CategoryModel;
use app\shop\model\lecturer\Lecturer as LecturerModel;
use app\shop\controller\Controller;

/**
 * 课程管理控制器
 */
class Education extends Controller
{
    /**
     * 课程列表(全部)
     */
    public function index()
    {
        // 获取全部列表
        $model = new CourseModel;
        $data = $this->postData();
        $data['course_type'] = 2;
        $list = $model->getList($data);
        // 分类
        $category = CategoryModel::getCacheTree();
        return $this->renderSuccess('', compact('list', 'category'));
    }

    /**
     * 导出
     */
    public function export()
    {
        $model = new CourseModel();
        $data = $this->postData();
        $data['course_type'] = 2;
        return $model->exportList($data);
    }

    /**
     * 添加
     */
    public function add()
    {
        // get请求
        if ($this->request->isGet()) {
            // 分类
            $category = CategoryModel::getCacheTree();
            // 讲师
            $lecturer = LecturerModel::getAll();
            return $this->renderSuccess('', compact('category', 'lecturer'));
        }
        //post请求
        $model = new CourseModel;
        $data = $this->postData();
        $data['course_type'] = 2;
        if ($model->add($data)) {
            return $this->renderSuccess('添加成功');
        }
        return $this->renderError($model->getError() ?: '添加失败');
    }

    /**
     * 编辑
     */
    public function edit($course_id)
    {
        $model = CourseModel::detail($course_id);
        if ($this->request->isGet()) {
            // 分类
            $category = CategoryModel::getCacheTree();
            // 讲师
            $lecturer = LecturerModel::getAll();
            return $this->renderSuccess('', compact('category', 'lecturer', 'model'));
        }
        // 更新记录
        if ($model->edit($this->postData())) {
            return $this->renderSuccess('更新成功');
        }
        return $this->renderError($model->getError() ?: '更新失败');
    }

    /**
     * 编辑
     */
    public function detail($course_id)
    {
        $model = CourseModel::detail($course_id);
        return $this->renderSuccess('', compact('model'));
    }

    /**
     * 修改状态
     */
    public function state($course_id, $state)
    {
        // 详情
        $model = CourseModel::detail($course_id);
        if (!$model->setStatus($state)) {
            return $this->renderError('操作失败');
        }
        return $this->renderSuccess('操作成功');
    }

    /**
     * 设置推荐
     */
    public function settop($course_id, $state)
    {
        // 详情
        $model = CourseModel::detail($course_id);
        if (!$model->setTop($state)) {
            return $this->renderError('操作失败');
        }
        return $this->renderSuccess('操作成功');
    }

    /**
     * 删除
     */
    public function delete($course_id)
    {
        // 详情
        $model = CourseModel::detail($course_id);
        if (!$model->setDelete()) {
            return $this->renderError($model->getError() ?: '删除失败');
        }
        return $this->renderSuccess('删除成功');
    }

}
