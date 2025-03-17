<?php

namespace app\api\controller\paper;

use app\api\model\paper\Paper as PaperModel;
use app\api\controller\Controller;

/**
 * 试卷控制器
 */
class Paper extends Controller
{
    /**
     * 试卷首页
     */
    public function index()
    {
        $model = new PaperModel();
        $detail = $model->getBaseInfo($this->getUser(false));
        return $this->renderSuccess('', compact('detail'));
    }

    /**
     * 列表
     */
    public function list()
    {
        // 获取列表数据
        $model = new PaperModel;
        $list = $model->getList($this->postData());
        return $this->renderSuccess('', compact('list'));
    }

    /**
     * 详情
     */
    public function detail($paper_id)
    {
        // 获取列表数据
        $model = new PaperModel;
        $detail = $model->getDetail($paper_id, $this->getUser(false));
        return $this->renderSuccess('', compact('detail'));
    }

    /**
     * 开始答题
     */
    public function startAnswer($paper_id)
    {
        // 获取列表数据
        $model = new PaperModel;
        $detail = $model->startAnswer($paper_id, $this->getUser());
        if ($detail) {
            return $this->renderSuccess('', compact('detail'));
        } else {
            return $this->renderError($model->getError() ?: '开始答题失败');
        }
    }

    /**
     * 提交答题
     */
    public function submitAnswer()
    {
        $model = new PaperModel;
        if ($model->submitAnswer($this->postData(), $this->getUser())) {
            return $this->renderSuccess('提交成功');
        } else {
            return $this->renderError($model->getError() ?: '提交失败');
        }
    }

    /**
     * 提交答题
     */
    public function submit()
    {
        $model = new PaperModel;
        if ($model->submit($this->postData())) {
            return $this->renderSuccess('');
        } else {
            return $this->renderError($model->getError() ?: '提交失败');
        }

    }

    /**
     * 答题结果
     */
    public function resultAnswer($paper_id)
    {
        // 获取列表数据
        $model = new PaperModel;
        $user = $this->getUser();
        $detail = $model->resultAnswer($paper_id, $this->getUser());
        return $this->renderSuccess('', compact('detail', 'user'));
    }

}