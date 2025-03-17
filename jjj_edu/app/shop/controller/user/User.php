<?php

namespace app\shop\controller\user;

use app\common\library\helper;
use app\common\model\user\Tag as TagModel;
use app\common\model\user\UserTag as UserTagModel;
use app\shop\controller\Controller;
use app\shop\model\user\User as UserModel;

/**
 * 用户管理
 */
class User extends Controller
{
    /**
     * 商户列表
     */
    public function index()
    {
        $list = UserModel::getList($this->postData());
        // 所有标签
        $allTag = TagModel::getAll();
        return $this->renderSuccess('', compact('list', 'allTag'));
    }


    /**
     * 删除用户
     */
    public function delete($user_id)
    {
        // 用户详情
        $model = UserModel::detail($user_id);
        if ($model && $model->setDelete()) {
            return $this->renderSuccess('删除成功');
        }
        return $this->renderError($model->getError() ?: '删除失败');
    }

    /**
     * 用户充值
     */
    public function recharge($user_id, $source)
    {
        // 用户详情
        $model = UserModel::detail($user_id);

        if ($model->recharge($this->store['user']['user_name'], $source, $this->postData('params'))) {
            return $this->renderSuccess('操作成功');
        }
        return $this->renderError($model->getError() ?: '操作失败');
    }

    /**
     * 等级改用户
     */
    public function edit($user_id)
    {
        // 用户详情
        $model = UserModel::detail($user_id);
        if ($this->request->isGet()) {
            return $this->renderSuccess('', compact('model'));
        }
        // 修改记录
        if ($model->edit($this->postData())) {
            return $this->renderSuccess('修改成功');
        }
        return $this->renderError($model->getError() ?: '修改失败');
    }

    public function tag($user_id)
    {
        if ($this->request->isGet()) {
            // 用户详情
            $user = UserModel::detail($user_id);
            // 标签
            $userTag = UserTagModel::getListByUser($user_id);
            $userTag = helper::getArrayColumn($userTag, 'tag_id');
            // 所有标签
            $allTag = TagModel::getAll();
            return $this->renderSuccess('', compact('user', 'userTag', 'allTag'));
        }
        $model = UserModel::detail($user_id);
        if ($model->editTag($this->postData())) {
            return $this->renderSuccess('修改成功');
        }
        return $this->renderError($model->getError() ?: '修改失败');
    }

}
