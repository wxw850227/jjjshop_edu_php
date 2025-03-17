<?php

namespace app\common\service\product\factory;

use app\common\model\course\Course as CourseModel;

/**
 * 课程来源-普通课程扩展类
 */
class CourseProductService extends ProductService
{
    /**
     * 更新销量（订单付款后）
     */
    public function updateStockSales($courseList)
    {
        $courseData = [];
        foreach ($courseList as $course) {
            // 记录销量
            $course_data = [
                'data' => ['real_sales' => ['inc', $course['total_num']]],
                'where' => [
                    'course_id' => $course['product_id']
                ],
            ];
            $courseData[] = $course_data;
        }
        // 更新销量
        !empty($courseData) && $this->updateCourse($courseData);
        return true;
    }

    /**
     * 更新商品信息
     */
    private function updateCourse($data)
    {
        return (new CourseModel)->updateAll($data);
    }
}