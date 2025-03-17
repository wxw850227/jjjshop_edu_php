<?php

namespace app\api\controller\lecturer;

use app\api\model\lecturer\Lecturer as LecturerModel;
use app\api\controller\Controller;

/**
 * 讲师控制器
 */
class Lecturer extends Controller
{

    /**
     * 讲师列表
     */
    public function list()
    {
        // 获取列表数据
        $model = new LecturerModel;
        $list = $model->getList($this->postData(), $this->getUser(false));
        return $this->renderSuccess('', compact('list'));
    }

    /**
     * 讲师详情
     */
    public function detail()
    {
        // 获取列表数据
        $model = new LecturerModel;
        $detail = $model->getDetail($this->postData());
        return $this->renderSuccess('', compact('detail'));
    }
}