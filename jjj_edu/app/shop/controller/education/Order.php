<?php

namespace app\shop\controller\education;

use app\shop\controller\Controller;
use app\shop\model\course\Course as CourseModel;

/**
 * 课程订单控制器
 */
class Order extends Controller
{
    /**
     * 课程订单列表
     */
    public function index()
    {
        // 订单列表
        $model = new CourseModel();
        $list = $model->getOderList($this->postData());
        return $this->renderSuccess('', compact('list'));
    }

}