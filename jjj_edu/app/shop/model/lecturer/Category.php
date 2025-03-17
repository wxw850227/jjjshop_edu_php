<?php

namespace app\shop\model\lecturer;

use think\facade\Cache;
use app\common\model\lecturer\Category as CategoryModel;

/**
 * 讲师分类模型
 */
class Category extends CategoryModel
{
    /**
     * 添加新记录
     */
    public function add($data)
    {
        $data['app_id'] = self::$app_id;
        $this->deleteCache();
        return $this->save($data);
    }

    /**
     * 编辑记录
     */
    public function edit($data)
    {
        // 验证：一级分类如果存在子类，则不允许移动
        if ($data['parent_id'] > 0 && static::hasSubCategory($this['category_id'])) {
            $this->error = '该分类下存在子分类，不可以移动';
            return false;
        }
        $this->deleteCache();
        !array_key_exists('image_id', $data) && $data['image_id'] = 0;
        return $this->save($data) !== false;
    }

    /**
     * 删除商品分类
     */
    public function remove($categoryId)
    {
        // 判断是否存在讲师
        if ($Count = (new Lecturer())->getTotal(['category_id' => $categoryId])) {
            $this->error = '该分类下存在' . $Count . '个讲师，不允许删除';
            return false;
        }
        // 判断是否存在子分类
        if (static::hasSubCategory($categoryId)) {
            $this->error = '该分类下存在子分类，请先删除';
            return false;
        }
        $this->deleteCache();
        return $this->delete();
    }

    /**
     * 编辑记录
     */
    public function setStatus($data)
    {
        $this->deleteCache();
        return $this->save($data) !== false;
    }

    /**
     * 删除缓存
     */
    private function deleteCache()
    {
        return Cache::delete('lecturer_category_' . static::$app_id);
    }

}
