<?php

namespace app\api\controller\course;

use app\api\controller\Controller;
use app\api\model\course\Comment as CommentModel;
use app\api\model\order\Order as OrderModel;

/**
 * 课程评价控制器
 */
class Comment extends Controller
{
    /**
     * 课程评价列表
     */
    public function list($course_id, $scoreType = -1)
    {
        $model = new CommentModel;
        $list = $model->getProductCommentList($course_id, $scoreType, $this->postData());
        return $this->renderSuccess('', compact('list'));
    }

    /**
     * 添加课程评价
     */
    public function order($order_id)
    {
        // 用户信息
        $user = $this->getUser();
        // 订单信息
        $order = OrderModel::getUserOrderDetail($order_id, $user['user_id']);
        // 验证订单是否已完成
        $model = new CommentModel;
        if (!$model->checkOrderAllowComment($order)) {
            return $this->renderError($model->getError());
        }
        // 提交评价
        if ($this->request->isPost()) {
            $formData = $this->request->post('formData');
            if ($model->addForOrder($order, $formData)) {
                return $this->renderSuccess('评价发表成功');
            }
            return $this->renderError($model->getError() ?: '评价发表失败');
        }
        return $this->renderSuccess('', compact('order'));
    }

}