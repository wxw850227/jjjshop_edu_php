<?php

namespace app\shop\controller\data;

use app\shop\controller\Controller;
use app\shop\model\plus\article\Article as ArticleModel;
use app\shop\model\plus\article\Category as CategoryModel;

/**
 * 文章控制器
 */
class Article extends Controller
{
    /**
     * 文章列表
     */
    public function index()
    {
        $model = new ArticleModel;
        $list = $model->getList($this->postData());
        return $this->renderSuccess('', compact('list'));
    }

    /**
     * 获取分类
     */
    public function category()
    {
        // 文章分类
        $model = new CategoryModel;
        $category = $model->getAll();
        return $this->renderSuccess('', compact('category'));
    }

}