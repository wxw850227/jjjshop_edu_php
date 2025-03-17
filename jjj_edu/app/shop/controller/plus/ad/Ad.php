<?php

namespace app\shop\controller\plus\ad;

use app\shop\controller\Controller;
use app\shop\model\plus\ad\Ad as AdModel;
use app\shop\model\plus\ad\AdCategory as AdCategoryModel;

/**
 * 广告控制器
 */
class Ad extends Controller
{
    /**
     * 广告数据
     */
    public function index()
    {
        $model = new AdModel;
        $list = $model->getList($this->postData());
        return $this->renderSuccess('', compact('list'));
    }

    /**
     * 添加广告
     */
    public function add()
    {
        if ($this->request->isGet()) {
            // 文章分类
            $catgory = AdCategoryModel::getAll();
            return $this->renderSuccess('', compact('catgory'));
        }
        // 新增记录
        $model = new AdModel;
        if ($model->add($this->postData())) {
            return $this->renderSuccess('添加成功');
        }
        return $this->renderError($model->getError() ?: '添加失败');
    }

    /**
     * 广告详情
     */
    public function detail($ad_id)
    {
        // 广告详情
        $detail = AdModel::detail($ad_id);
        $catgory = AdCategoryModel::getAll();
        return $this->renderSuccess('', compact('detail', 'catgory'));

    }

    /**
     * 修改
     * @param $id
     * @return \think\response\Json
     */
    public function edit($ad_id)
    {
        if ($this->request->isGet()) {
            return $this->detail($ad_id);
        }
        $model = AdModel::detail($ad_id);
        // 更新记录
        if ($model->edit($this->postData())) {
            return $this->renderSuccess('更新成功');
        }
        return $this->renderError($model->getError() ?: '更新失败');
    }

    /**
     * 删除记录
     */
    public function delete($ad_id)
    {
        $model = AdModel::detail($ad_id);
        if ($model->remove($ad_id)) {
            return $this->renderSuccess('删除成功');
        }
        return $this->renderError($model->getError() ?: '删除失败');
    }
}
