<?php

namespace app\api\model\course;

use app\common\enum\order\OrderSourceEnum;
use app\common\model\course\CourseSection as CourseSectionModel;
use app\api\model\order\Order as OrderModel;
use app\api\model\lecturer\Lecturer as LecturerModel;

/**
 * 课程章节模型
 */
class CourseSection extends CourseSectionModel
{
    //章节详情
    public function getDetail($param, $user = false)
    {
        $detail = self::detail($param['section_id']);
        $course = (new Course())->detail($param['course_id']);
        //支付状态
        $payStatus = (new OrderModel())->getOrderState($param['course_id'], $user, OrderSourceEnum::COURSE);
        $detail['payStatus'] = $payStatus;
        //判断付费方式
        if ($course['is_pay'] == 1) {//付费
            if ($detail['is_see'] == 0) {
                if ($payStatus <= 0) {
                    $this->error = "请先购买再观看";
                    return false;
                }
            }
        }
        //更新浏览
        $this->addPlay($param['section_id']);
        $info['detail'] = $detail;
        $info['course'] = $course;
        return $info;
    }

    //添加浏览数
    public function addPlay($section_id)
    {
        $this->where('section_id', '=', $section_id)->inc('play_count', 1)->update();
    }

    //获取讲师
    public function getLecture($course_id)
    {
        $list = (new LecturerModel())->alias('l')
            ->with(['image'])
            ->join('course_section cs', 'cs.lecturer_id=l.lecturer_id')
            ->where('course_id', '=', $course_id)
            ->where('l.is_show', '=', 0)
            ->where('l.is_delete', '=', 0)
            ->where('cs.is_show', '=', 0)
            ->where('cs.is_delete', '=', 0)
            ->group('l.lecturer_id')
            ->order('l.sort asc')
            ->field('l.*')
            ->select();
        return $list;

    }

}