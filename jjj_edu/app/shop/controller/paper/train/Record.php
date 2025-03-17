<?php

namespace app\shop\controller\paper\train;

use app\shop\model\paper\Category as CategoryModel;
use app\shop\model\paper\Record as RecordModel;
use app\shop\model\paper\RecordQuestion as RecordQuestionModel;
use app\shop\controller\Controller;

/**
 * 考试管理控制器
 */
class Record extends Controller
{
    /**
     * 考试列表(全部)
     */
    public function index()
    {
        // 获取全部列表
        $model = new RecordModel;
        $data = $this->postData();
        $data['paper_type'] = 1;
        $list = $model->getList($data);
        // 分类
        $category = CategoryModel::getALL(1);
        return $this->renderSuccess('', compact('list', 'category'));
    }

    /**
     * 编辑
     */
    public function question($record_id)
    {
        $detail = RecordModel::detail($record_id);
        $list = (new RecordQuestionModel)->getList($record_id);
        return $this->renderSuccess('', compact('list', 'detail'));
    }

}
