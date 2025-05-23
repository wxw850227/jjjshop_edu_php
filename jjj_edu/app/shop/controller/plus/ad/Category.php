<?php

namespace app\shop\controller\plus\ad;

use app\shop\controller\Controller;
use app\shop\model\plus\ad\AdCategory as AdCategoryModel;

/**
 * 广告分类控制器
 */
class Category extends Controller
{
    /**
     * 获取分类
     */
    public function index()
    {
        // 广告分类
        $model = new AdCategoryModel;
        $category = $model->getAll();
        return $this->renderSuccess('', compact('category'));
    }

    /**
     * 添加分类
     */
    public function add()
    {
        $model = new AdCategoryModel;
        // 新增记录
        if ($model->add($this->postData())) {
            return $this->renderSuccess('添加成功');
        }
        return $this->renderError($model->getError() ?: '添加失败');
    }

    /**
     * 编辑分类
     */
    public function edit($category_id)
    {
        // 分类详情
        $model = AdCategoryModel::detail($category_id);
        // 更新记录
        if ($model->edit($this->postData())) {
            return $this->renderSuccess('更新成功');
        }
        return $this->renderError($model->getError() ?: '更新失败');
    }

    /**
     * 删除分类
     */
    public function delete($category_id)
    {
        $model = AdCategoryModel::detail($category_id);
        if (!$model->remove()) {
            return $this->renderError('该分类下存在广告，删除失败');
        }
        return $this->renderSuccess('删除成功');
    }
}