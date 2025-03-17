<?php

namespace app\shop\controller\plus\points;

use app\shop\model\plus\points\Product as ProductModel;
use app\shop\model\plus\points\Category as CategoryModel;
use app\shop\controller\Controller;

/**
 * 积分商品管理控制器
 */
class Product extends Controller
{
    /**
     * 商品列表(全部)
     */
    public function index()
    {
        // 获取全部商品列表
        $model = new ProductModel;
        $list = $model->getList($this->postData());
        return $this->renderSuccess('', compact('list'));
    }

    /**
     * 添加商品
     */
    public function add()
    {
        //post请求
        $data = json_decode($this->postData()['params'], true);
        $model = new ProductModel;
        if ($model->add($data)) {
            return $this->renderSuccess('添加成功');
        }
        return $this->renderError($model->getError() ?: '添加失败');
    }

    /**
     * 商品编辑
     */
    public function edit($product_id)
    {
        if ($this->request->isGet()) {
            $model = ProductModel::detail($product_id);
            return $this->renderSuccess('', compact('model'));
        }
        // 商品详情
        $model = ProductModel::detail($product_id);
        // 更新记录
        if ($model->edit(json_decode($this->postData()['params'], true))) {
            return $this->renderSuccess('更新成功');
        }
        return $this->renderError($model->getError() ?: '更新失败');
    }

    /**
     * 删除商品
     */
    public function delete($product_id)
    {
        // 商品详情
        $model = ProductModel::detail($product_id);
        if (!$model->setDelete()) {
            return $this->renderError($model->getError() ?: '删除失败');
        }
        return $this->renderSuccess('删除成功');
    }

}
