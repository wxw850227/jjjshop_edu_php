<?php

namespace app\common\model\service;

use app\common\model\BaseModel;

/**
 * 消息模型
 */
class Service extends BaseModel
{
    protected $name = 'service';
    protected $pk = 'service_id';

    /**
     * 获取列表
     */
    public function getList($data)
    {
        return $this->with(['category'])->order(['sort' => 'asc'])->paginate($data);
    }

    /**
     * 广告详情
     */
    public static function detail($service_id)
    {
        return (new static())->find($service_id);
    }

    /**
     * 关联分类表
     * @return \think\model\relation\BelongsTo
     */
    public function category()
    {
        return $this->BelongsTo("app\\common\\model\\service\\Category", 'category_id', 'category_id');
    }

}