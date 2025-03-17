<?php

namespace app\api\model\course;

use app\common\enum\order\OrderSourceEnum;
use app\common\exception\BaseException;
use app\common\model\course\Course as CourseModel;
use app\common\library\helper;
use app\api\model\order\Order as OrderModel;

/**
 * 课程模型
 */
class Course extends CourseModel
{
    /**
     * 隐藏字段
     */
    protected $hidden = [];

    //获取列表
    public function getList($data)
    {
        $model = $this;
        if (isset($data['category_id']) && $data['category_id'] > 0) {
            $model = $model->where('category_id', '=', $data['category_id']);
        }
        if (isset($data['search']) && $data['search']) {
            $model = $model->where('title', 'like', '%' . $data['search'] . '%');
        }
        $sort = ['sort' => 'asc', 'course_id' => 'desc'];
        $list = $model->with(['image'])
            ->where('course_type', '=', $data['course_type'])
            ->where('is_show', '=', 0)
            ->where('is_delete', '=', 0)
            ->order($sort)
            ->field("*,(real_sales+virtual_sales) as total_sales")
            ->paginate($data);
        return $list;
    }

    //课程详情
    public function getDetail($course_id, $user = false)
    {
        $detail = self::detail($course_id);
        if (!$detail) {
            throw new BaseException(['msg' => "课程不存在"]);
        }
        $this->addBrowse($course_id);
        //获取购买人数
        $orderList = (new OrderModel())->alias('o')
            ->with('user')
            ->join('order_product p', 'p.order_id=o.order_id')
            ->where('is_delete', '=', 0)
            ->where('pay_status', '=', 20)
            ->where('product_id', '=', $course_id)
            ->order('o.order_id desc')
            ->limit(5)
            ->select();
        $buyCount = (new OrderModel())->alias('o')
            ->join('order_product p', 'p.order_id=o.order_id')
            ->where('is_delete', '=', 0)
            ->where('pay_status', '=', 20)
            ->where('product_id', '=', $course_id)
            ->order('o.order_id desc')
            ->count();
        $detail['orderList'] = $orderList;
        $detail['buyCount'] = $buyCount;
        $isFav = 0;
        if ($user) {
            $isFav = (new Favorite())->isFav($course_id, $user['user_id']) ? 1 : 0;
        }
        $detail['isFav'] = $isFav;
        $commentCount = (new Comment())->where(['course_id' => $course_id, 'status' => 1, 'is_delete' => 0])->count();
        $detail['commentCount'] = $commentCount;
        //查询是否购买
        $payStatus = 0;
        if ($user) {
            $order_source = $detail['course_type'] == 1 ? OrderSourceEnum::COURSE : OrderSourceEnum::EDU;
            $payStatus = (new OrderModel())->getOrderState($course_id, $user, $order_source);
        }
        $detail['payStatus'] = $payStatus;
        if ($detail['course_type'] == 2) {
            $detail['lecturer'] = (new CourseSection())->getLecture($course_id);
        }
        return $detail;
    }

    //添加浏览数
    public function addBrowse($course_id)
    {
        $this->where('course_id', '=', $course_id)->inc('browse_count', 1)->update();
    }

    /**
     * 立即购买：获取订单课程列表
     */
    public static function getOrderCourseListByNow($params)
    {
        // 商品详情
        $course = self::detail($params['course_id']);
        // 商品列表
        $courseList = [$course];
        foreach ($courseList as &$item) {
            // 商品购买数量
            $item['total_num'] = 1;
            // 商品购买数量
            $item['product_price'] = $item['course_price'];
            // 商品购买总金额
            $item['total_price'] = helper::bcmul($item['course_price'], $item['total_num']);
            //商品id
            $item['product_id'] = $item['course_id'];
        }
        return $courseList;
    }

    //获取列表
    public function getListByIdsFromApi($courseIds, $course_type)
    {
        $list = $this->with(['image'])
            ->where('course_type', '=', $course_type)
            ->where('is_show', '=', 0)
            ->where('is_delete', '=', 0)
            ->where('course_id', 'in', $courseIds)
            ->order(['sort' => 'asc', 'course_id' => 'desc'])
            ->select();
        return $list;
    }
}