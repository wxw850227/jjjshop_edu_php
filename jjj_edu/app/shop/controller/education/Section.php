<?php

namespace app\shop\controller\education;

use app\shop\model\course\CourseSection as CourseSectionModel;
use app\shop\controller\Controller;
use app\shop\model\lecturer\Lecturer as LecturerModel;

/**
 * 课程章节管理控制器
 */
class Section extends Controller
{
    /**
     * 课程列表(全部)
     */
    public function index()
    {
        // 获取全部列表
        $model = new CourseSectionModel;
        $list = $model->getList($this->postData());
        return $this->renderSuccess('', compact('list'));
    }

    /**
     * 添加
     */
    public function add()
    {
        // get请求
        if ($this->request->isGet()) {
            // 讲师
            $lecturer = LecturerModel::getAll();
            return $this->renderSuccess('', compact('lecturer'));
        }
        //post请求
        $model = new CourseSectionModel;
        if ($model->add($this->postData())) {
            return $this->renderSuccess('添加成功');
        }
        return $this->renderError($model->getError() ?: '添加失败');
    }

    /**
     * 编辑
     */
    public function edit($section_id)
    {
        $model = CourseSectionModel::detail($section_id, ['course' => ['image', 'lecturer']]);
        if ($this->request->isGet()) {
            // 讲师
            $lecturer = LecturerModel::getAll();
            return $this->renderSuccess('', compact('model', 'lecturer'));
        }
        // 更新记录
        if ($model->edit($this->postData())) {
            return $this->renderSuccess('更新成功');
        }
        return $this->renderError($model->getError() ?: '更新失败');
    }

    /**
     * 修改状态
     */
    public function state($section_id, $state)
    {
        // 商品详情
        $model = CourseSectionModel::detail($section_id);
        if (!$model->setStatus($state)) {
            return $this->renderError('操作失败');
        }
        return $this->renderSuccess('操作成功');
    }

    /**
     * 删除
     */
    public function delete($section_id)
    {
        // 商品详情
        $model = CourseSectionModel::detail($section_id);
        if (!$model->setDelete()) {
            return $this->renderError($model->getError() ?: '删除失败');
        }
        return $this->renderSuccess('删除成功');
    }

}
