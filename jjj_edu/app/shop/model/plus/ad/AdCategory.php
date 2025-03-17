<?php

namespace app\shop\model\plus\ad;

use app\common\model\ad\AdCategory as AdCategoryModel;
use app\shop\model\plus\ad\Ad as AdModel;

/**
 * 广告分类模型
 */
class AdCategory extends AdCategoryModel
{
    /**
     * 分类详情
     */
    public static function detail($category_id)
    {
        return static::find($category_id);
    }

    /**
     * 添加新记录
     */
    public function add($data)
    {
        $data['app_id'] = self::$app_id;
        return $this->save($data);
    }

    /**
     * 编辑记录
     */
    public function edit($data)
    {
        $data['create_time'] = strtotime($data['create_time']);
        $data['update_time'] = time();
        return $this->save($data);
    }

    /**
     * 删除分类
     */
    public function remove()
    {
        // 判断是否存在文章
        $articleCount = AdModel::getAdTotal(['category_id' => $this['category_id']]);
        if ($articleCount > 0) {
            $this->error = '该分类下存在' . $articleCount . '个广告，不允许删除';
            return false;
        }
        return $this->delete();
    }

}