<?php

namespace app\shop\model\service;

use app\common\model\service\Category as CategoryModel;
use app\shop\model\service\Service as ServiceModel;

/**
 * 分类模型
 */
class Category extends CategoryModel
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
        //查询上级
        if ($data['parent_id'] > 0) {
            $parentInfo = $this->where('category_id', '=', $data['parent_id'])->find();
            $data['level'] = $parentInfo['level'] + 1;
        }
        return $this->save($data);
    }

    /**
     * 编辑记录
     */
    public function edit($data)
    {
        //查询上级
        if ($data['parent_id'] > 0) {
            $parentInfo = $this->where('category_id', '=', $data['parent_id'])->find();
            $data['level'] = $parentInfo['level'] + 1;
        }
        $data['create_time'] = strtotime($data['create_time']);
        $data['update_time'] = time();
        return $this->save($data);
    }

    /**
     * 删除分类
     */
    public function remove()
    {
        // 判断是否存在消息
        $serviceCount = ServiceModel::getServiceTotal(['category_id' => $this['category_id']]);
        if ($serviceCount > 0) {
            $this->error = '该分类下存在' . $serviceCount . '个消息，不允许删除';
            return false;
        }
        $isExist = $this->where('parent_id', '=', $this['category_id'])->find();
        if ($isExist) {
            $this->error = '该分类下存在分类，不允许删除';
            return false;
        }
        return $this->delete();
    }

}