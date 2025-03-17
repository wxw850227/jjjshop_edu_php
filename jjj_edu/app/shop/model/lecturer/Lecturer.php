<?php

namespace app\shop\model\lecturer;

use app\common\model\lecturer\Lecturer as LecturerModel;

/**
 * 讲师模型
 */
class Lecturer extends LecturerModel
{
    /**
     * 讲师列表
     */
    public function getList($data)
    {
        $model = $this;
        if (isset($data['search']) && $data['search']) {
            $model = $model->where('name', 'like', '%' . $data['search'] . '%');
        }
        if (isset($data['category_id']) && $data['category_id']) {
            $model = $model->where('category_id', '=', $data['category_id']);
        }
        if (isset($data['is_show']) && $data['is_show'] > -1) {
            $model = $model->where('is_show', '=', $data['is_show']);
        }
        if (isset($data['is_top']) && $data['is_top'] > -1) {
            $model = $model->where('is_top', '=', $data['is_top']);
        }
        $list = $model->with(['category', 'image'])
            ->where('is_delete', '=', 0)
            ->order(['sort' => 'asc', 'lecturer_id' => 'desc'])
            ->paginate($data);
        return $list;
    }

    /**
     * 添加
     */
    public function add(array $data)
    {
        $data['app_id'] = self::$app_id;

        // 开启事务
        $this->startTrans();
        try {
            // 添加讲师
            $this->save($data);
            $this->commit();
            return true;
        } catch (\Exception $e) {
            $this->error = $e->getMessage();
            $this->rollback();
            return false;
        }
    }

    /**
     * 编辑
     */
    public function edit($data)
    {
        return $this->transaction(function () use ($data) {
            // 保存
            $this->save($data);
            return true;
        });
    }


    /**
     * 修改状态
     */
    public function setStatus($state)
    {
        return $this->save(['is_show' => $state]) !== false;
    }

    /**
     * 修改推荐
     */
    public function setTop($state)
    {
        return $this->save(['is_top' => $state]) !== false;
    }

    /**
     * 软删除
     */
    public function setDelete()
    {
        return $this->save(['is_delete' => 1]);
    }

    /**
     * 获取总数
     */
    public function getTotal($where = [])
    {
        return $this->where('is_delete', '=', 0)->where($where)->count();
    }

}
