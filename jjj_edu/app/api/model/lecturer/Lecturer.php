<?php

namespace app\api\model\lecturer;

use app\api\model\course\Course;
use app\api\model\lecturer\Favorite;
use app\common\model\lecturer\Lecturer as LecturerModel;
use app\common\library\helper;

/**
 * 讲师模型
 */
class Lecturer extends LecturerModel
{
    /**
     * 隐藏字段
     */
    protected $hidden = [];

    //获取列表
    public function getList($data, $user = false)
    {
        $model = $this;
        if (isset($data['category_id']) && $data['category_id'] > 0) {
            $model = $model->where('category_id', '=', $data['category_id']);
        }
        if (isset($data['search']) && $data['search']) {
            $model = $model->where('name', 'like', '%' . $data['search'] . '%');
        }
        $list = $model->with(['course', 'image'])
            ->where('is_show', '=', 0)
            ->where('is_top', '=', 1)
            ->where('is_delete', '=', 0)
            ->order(['sort' => 'asc', 'lecturer_id' => 'desc'])
            ->paginate($data);
        foreach ($list as &$item) {
            $isFav = 0;
            if ($user) {
                $isFav = (new Favorite())->isFav($item['lecturer_id'], $user['user_id']) ? 1 : 0;
            }
            $item['isFav'] = $isFav;
        }
        return $list;
    }

    //课程详情
    public function getDetail($data)
    {
        $detail = self::detail($data['lecturer_id']);
        //课程专栏
        $list = (new Course())->alias('c')
            ->with(['image'])
            ->join('course_section s', 's.course_id=c.course_id')
            ->where('s.lecturer_id', '=', $data['lecturer_id'])
            ->where('c.is_show', '=', 0)
            ->where('c.is_delete', '=', 0)
            ->where('s.is_show', '=', 0)
            ->where('s.is_delete', '=', 0)
            ->group('c.course_id')
            ->field('c.*')
            ->order(['c.sort' => 'asc', 'c.course_id' => 'desc'])
            ->paginate($data);
        $detail['list'] = $list;
        $this->addBrowse($data['lecturer_id']);
        return $detail;
    }

    //添加浏览数
    public function addBrowse($lecturer_id)
    {
        $this->where('lecturer_id', '=', $lecturer_id)->inc('real_browse', 1)->update();
    }

    //获取列表
    public function getListByIdsFromApi($lecturerIds, $user = false)
    {
        $list = $this->with(['image'])
            ->where('lecturer_id', 'in', $lecturerIds)
            ->where('is_show', '=', 0)
            ->where('is_top', '=', 1)
            ->where('is_delete', '=', 0)
            ->order(['sort' => 'asc', 'lecturer_id' => 'desc'])
            ->select();
        return $list;
    }
}