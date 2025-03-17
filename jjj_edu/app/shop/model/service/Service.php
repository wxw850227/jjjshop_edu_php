<?php

namespace app\shop\model\service;

use app\common\model\service\Service as ServiceModel;

/**
 * 消息模型
 */
class Service extends ServiceModel
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
     * 获取总数量
     */
    public static function getServiceTotal($where)
    {
        $model = new static;
        return $model->where($where)->count();
    }
}