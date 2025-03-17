<?php

namespace app\api\controller\paper;

use app\api\model\paper\Paper as PaperModel;
use app\api\model\paper\Record as RecordModel;
use app\api\controller\Controller;

/**
 * 试卷记录控制器
 */
class Record extends Controller
{
    /**
     * 记录
     */
    public function index()
    {
        $model = new RecordModel();
        $detail = $model->getList($this->postData(),$this->getUser());
        return $this->renderSuccess('', compact('detail'));
    }
}