<?php

namespace app\common\model\lecturer;

use think\facade\Cache;
use app\common\model\BaseModel;

/**
 * 讲师分类模型
 */
class Category extends BaseModel
{
    protected $pk = 'category_id';
    protected $name = 'lecturer_category';

    /**
     * 详情
     */
    public static function detail($category_id)
    {
        return (new static())->with(['image'])->find($category_id);
    }

    /**
     * 所有分类
     */
    public static function getALL()
    {
        $model = new static;
        if (!Cache::get('lecturer_category_' . $model::$app_id)) {
            $data = $model->with(['image'])->order(['sort' => 'asc', 'create_time' => 'asc'])->select();
            $all = !empty($data) ? $data->toArray() : [];
            $tree = [];
            foreach ($all as $first) {
                if ($first['parent_id'] != 0) continue;
                $twoTree = [];
                foreach ($all as $two) {
                    if ($two['parent_id'] != $first['category_id']) continue;
                    $threeTree = [];
                    foreach ($all as $three)
                        $three['parent_id'] == $two['category_id']
                        && $threeTree[$three['category_id']] = $three;
                    !empty($threeTree) && $two['child'] = $threeTree;
                    array_push($twoTree, $two);
                }
                if (!empty($twoTree)) {
                    $temp_two_tree = array_column($twoTree, 'sort');
                    array_multisort($temp_two_tree, SORT_ASC, $twoTree);
                    $first['child'] = $twoTree;
                }
                array_push($tree, $first);
            }
            Cache::set('lecturer_category_' . $model::$app_id, compact('all', 'tree'));
        }
        return Cache::get('lecturer_category_' . $model::$app_id);
    }

    /**
     * 获取所有分类
     */
    public static function getCacheAll()
    {
        return self::getALL()['all'];
    }

    /**
     * 获取所有列表
     */
    public static function getList()
    {
        return (new static())->where('status', '=', 1)->order(['sort' => 'asc', 'create_time' => 'asc'])->select();;
    }

    /**
     * 获取所有列表
     */
    public static function getLists()
    {
        $model = new static;
        $data = $model->where('status', '=', 1)
            ->with(['image'])
            ->field("*")
            ->order(['sort' => 'asc', 'create_time' => 'asc'])
            ->select();
        $all = !empty($data) ? $data->toArray() : [];
        $tree = [];
        foreach ($all as $first) {
            if ($first['parent_id'] != 0) continue;
            $twoTree = [];
            foreach ($all as $two) {
                if ($two['parent_id'] != $first['category_id']) continue;
                $threeTree = [];
                foreach ($all as $three)
                    $three['parent_id'] == $two['category_id']
                    && $threeTree[$three['category_id']] = $three;
                !empty($threeTree) && $two['child'] = $threeTree;
                array_push($twoTree, $two);
            }
            if (!empty($twoTree)) {
                $temp_two_tree = array_column($twoTree, 'sort');
                array_multisort($temp_two_tree, SORT_ASC, $twoTree);
                $first['child'] = $twoTree;
            }
            array_push($tree, $first);
        }
        return $tree;
    }

    /**
     * 获取所有分类(树状结构)
     */
    public static function getCacheTree()
    {
        return self::getALL()['tree'];
    }

    /**
     * 获取所有分类(树状结构)
     * @return string
     */
    public static function getCacheTreeJson()
    {
        return json_encode(static::getCacheTree());
    }

    /**
     * 获取指定分类下的所有子分类id
     */
    public static function getSubCategoryId($parent_id, $all = [])
    {
        $arrIds = [$parent_id];
        empty($all) && $all = self::getCacheAll();
        foreach ($all as $key => $item) {
            if ($item['parent_id'] == $parent_id) {
                unset($all[$key]);
                $subIds = self::getSubCategoryId($item['category_id'], $all);
                !empty($subIds) && $arrIds = array_merge($arrIds, $subIds);
            }
        }
        return $arrIds;
    }

    /**
     * 指定的分类下是否存在子分类
     */
    protected static function hasSubCategory($parentId)
    {
        $all = self::getCacheAll();
        foreach ($all as $item) {
            if ($item['parent_id'] == $parentId) {
                return true;
            }
        }
        return false;
    }

    /**
     * 关联图片
     */
    public function image()
    {
        return $this->belongsTo('app\common\model\file\UploadFile', 'image_id', 'file_id');
    }

    public function getListByIds($ids)
    {
        return $this->field(['category_id', 'name'])->where('category_id', 'in', $ids)->select();
    }
}
