<?php

namespace app\shop\controller\data;

use app\shop\model\paper\Category as CategoryModel;
use app\shop\model\paper\Paper as PaperModel;
use app\shop\controller\Controller;

/**
 * 试题管理控制器
 */
class Paper extends Controller
{
    /**
     * 课程列表(全部)
     */
    public function index()
    {
        // 获取全部列表
        $model = new PaperModel;
        $data = $this->postData();
        $list = $model->getList($this->postData(), $data['paper_type']);
        $category = CategoryModel::getList($data['paper_type']);
        return $this->renderSuccess('', compact('list', 'category'));
    }

    /**
     * 课程分类列表
     */
    public function category($paper_type)
    {
        $list = CategoryModel::getList($paper_type);
        return $this->renderSuccess('', compact('list'));
    }
}
