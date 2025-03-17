<?php

namespace app\api\controller\course;

use app\api\controller\Controller;
use app\api\model\course\Favorite as FavoriteModel;

/**
 * 我的课程收藏
 */
class Favorite extends Controller
{
    protected $user;

    /**
     * 构造方法
     */
    public function initialize()
    {
        parent::initialize();
        $this->user = $this->getUser();
    }

    /**
     * 取消或者收藏
     */
    public function fav($course_id)
    {
        $user_id = $this->user['user_id'];
        $model = FavoriteModel::detail($course_id, $user_id);
        if ($model) {
            if ($model->cancelFav()) {
                return $this->renderSuccess('取消成功');
            }
        } else {
            // 新增
            $model = new FavoriteModel();
            if ($model->addFav($course_id, $user_id)) {
                return $this->renderSuccess('收藏成功');
            }
        }
        return $this->renderSuccess($model->getError() ?: '操作失败');
    }

    /**
     * 我的收藏列表
     */
    public function list()
    {
        $favorite_model = new FavoriteModel;
        $list = $favorite_model->getList($this->user['user_id'], $this->postData());
        return $this->renderSuccess('', compact('list'));
    }
}