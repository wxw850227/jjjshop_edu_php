<?php

namespace app\api\controller\paper;

use app\api\model\paper\WrongQuestion as WrongQuestionModel;
use app\api\controller\Controller;

/**
 * 错题集控制器
 */
class Wrong extends Controller
{
    /**
     * 错题集
     */
    public function index()
    {
        $model = new WrongQuestionModel();
        $detail = $model->getWrongList($this->postData(), $this->getUser());
        return $this->renderSuccess('', compact('detail'));
    }

    /**
     * 错题集详情
     */
    public function detail($paper_id)
    {
        $model = new WrongQuestionModel();
        $detail = $model->getWrongDetail($paper_id, $this->getUser());
        return $this->renderSuccess('', compact('detail'));
    }

    /**
     * 掌握错题集
     */
    public function submit($wrong_id)
    {
        // 获取列表数据
        $model = WrongQuestionModel::detail($wrong_id);
        if ($model->submit()) {
            return $this->renderSuccess('提交成功');
        } else {
            return $this->renderError($model->getError() ?: '提交失败');
        }
    }

    /**
     * 删除错题集
     */
    public function delete($wrong_id)
    {
        // 获取列表数据
        $model = new WrongQuestionModel;
        if ($model->remove($wrong_id)) {
            return $this->renderSuccess('');
        } else {
            return $this->renderError($model->getError() ?: '提交失败');
        }
    }
}