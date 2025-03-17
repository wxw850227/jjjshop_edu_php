<?php

namespace app\shop\model\course;

use app\common\enum\order\OrderSourceEnum;
use app\common\model\course\Course as CourseModel;
use app\shop\model\order\Order as OrderModel;

/**
 * 课程模型
 */
class Course extends CourseModel
{
    /**
     * 课程列表
     */
    public function getList($data)
    {
        $model = $this;
        if (isset($data['search']) && $data['search']) {
            $model = $model->where('title', 'like', '%' . $data['search'] . '%');
        }
        if (isset($data['category_id']) && $data['category_id']) {
            $arr = Category::getSubCategoryId($data['category_id']);
            $model = $model->where('category_id', 'IN', $arr);
        }
        if (isset($data['is_show']) && $data['is_show'] > -1) {
            $model = $model->where('is_show', '=', $data['is_show']);
        }
        if (isset($data['course_type']) && $data['course_type']) {
            $model = $model->where('course_type', '=', $data['course_type']);
        }
        $list = $model->with(['image', 'category', 'banner.file', 'lecturer'])
            ->where('is_delete', '=', 0)
            ->order(['browse_count' => 'desc', 'sort' => 'asc', 'course_id' => 'desc'])
            ->paginate($data);
        return $list;
    }

    /**
     * 添加课程
     */
    public function add(array $data)
    {
        if (!isset($data['banner']) || empty($data['banner'])) {
            $this->error = '请上传banner图片';
            return false;
        }
        $data['app_id'] = self::$app_id;

        // 开启事务
        $this->startTrans();
        try {
            // 添加课程
            $this->save($data);
            // 课程banner图片
            $this->addBanner($data['banner']);
            $this->commit();
            return true;
        } catch (\Exception $e) {
            $this->error = $e->getMessage();
            $this->rollback();
            return false;
        }
    }

    /**
     * 编辑商品
     */
    public function edit($data)
    {
        if (!isset($data['banner']) || empty($data['banner'])) {
            $this->error = '请上传课程banner图片';
            return false;
        }
        $status = $this->transaction(function () use ($data) {
            // 保存课程
            $this->save($data);
            // 课程banner图片
            $this->addBanner($data['banner']);
            return true;
        });
        return $status;
    }

    /**
     * 添加课程banner图片
     */
    private function addBanner($images)
    {
        $this->banner()->delete();
        $data = array_map(function ($images) {
            return [
                'image_id' => isset($images['file_id']) ? $images['file_id'] : $images['image_id'],
                'app_id' => self::$app_id
            ];
        }, $images);
        return $this->banner()->saveAll($data);
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

    /**
     * 获取总数
     */
    public function getCourseTotal($day)
    {
        $model = $this;
        if (!is_null($day)) {
            $startTime = strtotime($day);
            $model = $model->where('create_time', '>=', $startTime)
                ->where('create_time', '<', $startTime + 86400);
        }
        return $model->where('is_delete', '=', '0')->count();
    }

    /**
     * 课程列表
     */
    public function getOderList($data)
    {
        $model = (new OrderModel())->alias('c');
        if (isset($data['mobile']) && $data['mobile']) {
            $model = $model->where('u.mobile', 'like', '%' . $data['mobile'] . '%');
        }
        if (isset($data['nickName']) && $data['nickName']) {
            $model = $model->where('u.nickName', 'like', '%' . $data['nickName'] . '%');
        }
        if (isset($data['user_id']) && $data['user_id']) {
            $model = $model->where('u.user_id', 'like', '%' . $data['user_id'] . '%');
        }
        //搜索时间段
        if (isset($data['create_time']) && $data['create_time']) {
            $model = $model->where('c.pay_time', 'between', [strtotime($data['create_time'][0]), strtotime($data['create_time'][1]) + 86399]);
        }
        $list = $model->join('order_product p', 'p.order_id=c.order_id')
            ->join('user u', 'u.user_id=c.user_id')
            ->where('order_source', '=', OrderSourceEnum::COURSE)
            ->where('product_id', '=', $data['course_id'])
            ->where('pay_status', '=', 20)
            ->where('order_status', '<>', 20)
            ->where('c.is_delete', '=', 0)
            ->where('u.is_delete', '=', 0)
            ->field('order_status,order_source,pay_time,mobile,nickName,order_no')
            ->order(['c.order_id' => 'desc'])
            ->paginate($data);
        return $list;
    }

}
