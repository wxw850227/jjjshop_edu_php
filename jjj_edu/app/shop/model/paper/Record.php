<?php

namespace app\shop\model\paper;

use app\common\model\paper\Record as RecordModel;

/**
 * 试卷模型
 */
class Record extends RecordModel
{
    /**
     * 讲师列表
     */
    public function getList($data)
    {
        $model = $this;
        if (isset($data['search']) && $data['search']) {
            $model = $model->where('p.title', 'like', '%' . $data['search'] . '%');
        }
        if (isset($data['paper_type']) && $data['paper_type'] > -1) {
            $model = $model->where('r.paper_type', '=', $data['paper_type']);
        }
        $list = $model->alias('r')
            ->with(['paper.category', 'user'])
            ->join('paper p', 'p.paper_id=r.paper_id')
            ->field('r.*,p.title,p.item_number,p.money')
            ->order(['r.create_time' => 'desc'])
            ->paginate($data);
        return $list;
    }

}
