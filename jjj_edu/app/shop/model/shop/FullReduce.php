<?php

namespace app\shop\model\shop;

use app\common\model\shop\FullReduce as FullReduceModel;

/**
 * 满减模型
 */
class FullReduce extends FullReduceModel
{
    /**
     * 获取列表记录
     */
    public function getList($data)
    {
        return $this->alias('reduce')->field(['reduce.*,supplier.name as supplier_name'])
            ->join('supplier', 'reduce.shop_supplier_id = supplier.shop_supplier_id', 'left')
            ->where('reduce.is_delete', '=', 0)
            ->order(['reduce.create_time' => 'asc'])
            ->paginate($data);
    }

    /**
     * 新增记录
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
     * 软删除
     */
    public function setDelete()
    {
        return $this->save(['is_delete' => 1]);
    }

}