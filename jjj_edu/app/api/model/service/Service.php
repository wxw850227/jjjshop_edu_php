<?php

namespace app\api\model\service;

use app\common\model\service\Service as ServiceModel;

/**
 * 消息模型
 */
class Service extends ServiceModel
{
    /**
     * 获取列表
     */
    public function list($data)
    {
        $model = $this;
        if (isset($data['category_id']) && $data['category_id'] > 0) {
            $model = $model->where('category_id', '=', $data['category_id']);
        }
        if (isset($data['search']) && $data['search']) {
            $model = $model->where('title', 'like', '%' . $data['search'] . '%');
        }
        return $model->with(['category'])
            ->order(['sort' => 'asc'])
            ->select();
    }
}