<?php

namespace app\api\controller\lecturer;

use app\api\controller\Controller;
use app\api\model\lecturer\Comment as CommentModel;
use app\api\model\lecturer\Lecturer as LecturerModel;

/**
 * 课程评价控制器
 */
class Comment extends Controller
{
    /**
     * 课程评价列表
     */
    public function list($lecturer_id, $scoreType = -1)
    {
        $model = new CommentModel;
        $list = $model->getProductCommentList($lecturer_id, $scoreType, $this->postData());
        return $this->renderSuccess('', compact('list'));
    }

    /**
     * 添加讲师评价
     */
    public function add($lecturer_id)
    {
        if ($this->request->isGet()) {
            $detail = LecturerModel::detail($lecturer_id);
            return $this->renderSuccess('', compact('detail'));
        }
        // 用户信息
        $user = $this->getUser();
        $model = new CommentModel;
        // 提交评价
        if ($this->request->isPost()) {
            $formData = $this->request->post('formData');
            if ($model->add($formData, $user, $lecturer_id)) {
                return $this->renderSuccess('评价发表成功');
            }
            return $this->renderError($model->getError() ?: '评价发表失败');
        }
    }
}