<?php

namespace app\shop\model\paper;

use think\facade\Cache;
use app\common\model\paper\Category as CategoryModel;

/**
 * 试卷分类模型
 */
class Category extends CategoryModel
{
    /**
     * 添加新记录
     */
    public function add($data, $type = 1)
    {
        $data['app_id'] = self::$app_id;
        $data['type'] = $type;
        $this->deleteCache($type);
        return $this->save($data);
    }

    /**
     * 编辑记录
     */
    public function edit($data)
    {
        $this->deleteCache($this['type']);
        return $this->save($data) !== false;
    }

    /**
     * 删除商品分类
     */
    public function remove($categoryId)
    {
        // 判断是否存在讲师
        if ($Count = (new Paper())->getTotal(['category_id' => $categoryId])) {
            $this->error = '该分类下存在' . $Count . '个试卷，不允许删除';
            return false;
        }
        $this->deleteCache($this['type']);
        return $this->delete();
    }

    /**
     * 编辑记录
     */
    public function setStatus($data)
    {
        $this->deleteCache($this['type']);
        return $this->save($data) !== false;
    }

    /**
     * 删除缓存
     */
    public function deleteCache($type = 1)
    {
        return Cache::delete('paper_category_' . $type . static::$app_id);
    }

}
