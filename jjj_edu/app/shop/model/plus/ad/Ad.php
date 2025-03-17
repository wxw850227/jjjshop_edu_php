<?php

namespace app\shop\model\plus\ad;

use app\common\model\ad\Ad as AdModel;

/**
 * 广告模型
 */
class Ad extends AdModel
{

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
        return $this->save($data);
    }

    /**
     * 删除记录
     */
    public function remove()
    {
        return $this->delete();
    }

    /**
     * 获取广告总数量
     */
    public static function getAdTotal($where)
    {
        $model = new static;
        return $model->where($where)->count();
    }
}