<?php

namespace app\api\controller\paper;

use app\api\controller\Controller;
use app\api\model\paper\Favorite as FavoriteModel;

/**
 * 我的问题收藏
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
    public function fav()
    {
        $user_id = $this->user['user_id'];
        $model = FavoriteModel::detail($this->postData(), $user_id);
        if ($model) {
            if ($model->cancelFav()) {
                return $this->renderSuccess('取消成功');
            }
        } else {
            // 新增
            $model = new FavoriteModel();
            if ($model->addFav($this->postData(), $user_id)) {
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

    /**
     * 我的收藏详情
     */
    public function detail($favorite_id)
    {
        $detail = FavoriteModel::getDetail($favorite_id);
        return $this->renderSuccess('', compact('detail'));
    }

    /**
     * 删除错题集
     */
    public function delete($favorite_id)
    {
        // 获取列表数据
        $model = FavoriteModel::getDetail($favorite_id);
        if ($model->cancelFav()) {
            return $this->renderSuccess('');
        } else {
            return $this->renderError($model->getError() ?: '提交失败');
        }
    }
}