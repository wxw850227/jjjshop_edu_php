<?php

namespace app\api\model\page;

use app\api\model\plus\article\Article;
use app\common\model\page\Page as PageModel;
use app\api\model\lecturer\Lecturer as LecturerModel;
use app\api\model\course\Course as CourseModel;
use app\api\model\paper\Paper as PaperModel;

/**
 * 首页模型
 */
class Page extends PageModel
{
    /**
     * 隐藏字段
     */
    protected $hidden = [
        'app_id',
        'create_time',
        'update_time'
    ];

    /**
     * DIY页面详情
     */
    public static function getPageData($user, $page_id = null)
    {
        // 页面详情
        $detail = $page_id > 0 ? parent::detail($page_id) : parent::getDefault();

        // 页面diy元素
        $items = $detail['page_data']['items'];
        // 页面顶部导航
        isset($detail['page_data']['page']) && $items['page'] = $detail['page_data']['page'];
        // 获取动态数据
        $model = new self;

        foreach ($items as $key => $item) {
            unset($items[$key]['defaultData']);
            if ($item['type'] === 'window') {
                $items[$key]['data'] = array_values($item['data']);
            } else if ($item['type'] === 'article') {
                $items[$key]['data'] = $model->getArticleList($item);
            } else if ($item['type'] === 'special') {
                $items[$key]['data'] = $model->getSpecialList($item);
            } else if ($item['type'] === 'lecturer') {
                $items[$key]['data'] = $model->getLecturerList($user, $item);
            } else if ($item['type'] === 'course') {
                $items[$key]['data'] = $model->getCourseList($user, $item);
            } else if ($item['type'] === 'education') {
                $items[$key]['data'] = $model->getEduList($user, $item);
            } else if ($item['type'] === 'train') {
                $items[$key]['data'] = $model->getTrainList($user, $item);
            }
        }
        return ['page' => $items['page'], 'items' => $items];
    }

    /**
     * 商品组件：获取讲师列表
     */
    private function getLecturerList($user, $item)
    {
        // 获取商品数据
        $model = new LecturerModel;
        if ($item['params']['source'] === 'choice') {
            // 数据来源：手动
            $lecturerIds = array_column($item['data'], 'lecturer_id');
            $list = $model->getListByIdsFromApi($lecturerIds, $user);
        } else {
            // 数据来源：自动
            $list = $model->getList([
                'category_id' => $item['params']['auto']['category'],
                'list_rows' => $item['params']['auto']['showNum'],
            ], $user);
        }
        if ($list->isEmpty()) return [];
        $data = [];
        foreach ($list as $item) {
            $data[] = [
                'lecturer_id' => $item['lecturer_id'],
                'name' => $item['name'],
                'star' => $item['star'],
                'image' => $item['image'] ? $item['image']['file_path'] : ''
            ];
        }
        return $data;
    }

    /**
     * 商品组件：获取课程列表
     */
    private function getCourseList($user, $item)
    {
        // 获取商品数据
        $model = new CourseModel();
        if ($item['params']['source'] === 'choice') {
            // 数据来源：手动
            $courseIds = array_column($item['data'], 'course_id');
            $list = $model->getListByIdsFromApi($courseIds, 1);
        } else {
            // 数据来源：自动
            $list = $model->getList([
                'category_id' => $item['params']['auto']['category'],
                'list_rows' => $item['params']['auto']['showNum'],
                'sortType' => $item['params']['auto']['productSort'],
                'course_type' => 1
            ]);
        }
        if ($list->isEmpty()) return [];
        $data = [];
        foreach ($list as $item) {
            $data[] = [
                'course_id' => $item['course_id'],
                'title' => $item['title'],
                'image' => $item['image'] ? $item['image']['file_path'] : '',
                'is_pay' => $item['is_pay'],
                'money' => $item['course_price'],
                'sectionNum' => $item['sectionNum']
            ];
        }
        return $data;
    }

    /**
     * 商品组件：获取课程列表
     */
    private function getEduList($user, $item)
    {
        // 获取商品数据
        $model = new CourseModel();
        if ($item['params']['source'] === 'choice') {
            // 数据来源：手动
            $courseIds = array_column($item['data'], 'course_id');
            $list = $model->getListByIdsFromApi($courseIds, 2);
        } else {
            // 数据来源：自动
            $list = $model->getList([
                'category_id' => $item['params']['auto']['category'],
                'list_rows' => $item['params']['auto']['showNum'],
                'sortType' => $item['params']['auto']['productSort'],
                'course_type' => 2
            ]);
        }
        if ($list->isEmpty()) return [];
        $data = [];
        foreach ($list as $item) {
            $data[] = [
                'course_id' => $item['course_id'],
                'title' => $item['title'],
                'image' => $item['image'] ? $item['image']['file_path'] : '',
                'is_pay' => $item['is_pay'],
                'money' => $item['course_price'],
                'sectionNum' => $item['sectionNum']
            ];
        }
        return $data;
    }

    /**
     * 商品组件：获取真题列表
     */
    private function getTrainList($user, $item)
    {
        // 获取商品数据
        $model = new PaperModel();
        if ($item['params']['source'] === 'choice') {
            // 数据来源：手动
            $paperIds = array_column($item['data'], 'paper_id');
            $list = $model->getListByIdsFromApi($paperIds);
        } else {
            // 数据来源：自动
            $list = $model->getList([
                'category_id' => $item['params']['auto']['category'],
                'list_rows' => $item['params']['auto']['showNum'],
                'paper_type' => 1,
                'sortType' => $item['params']['auto']['productSort']
            ]);
        }
        if ($list->isEmpty()) return [];
        $data = [];
        foreach ($list as $item) {
            $data[] = [
                'paper_id' => $item['paper_id'],
                'title' => $item['title'],
                'image' => $item['image']['file_path'],
                'is_pay' => $item['pay_type'],
                'money' => $item['money'],
                'total_answer' => $item['total_answer']
            ];
        }
        return $data;
    }

    /**
     * 文章组件：获取文章列表
     */
    private function getArticleList($item)
    {
        // 获取文章数据
        $model = new Article;
        $articleList = $model->getList($item['params']['auto']['category'], $item['params']['auto']['showNum']);
        return $articleList->isEmpty() ? [] : $articleList->toArray()['data'];
    }

    /**
     * 头条快报：获取头条列表
     */
    private function getSpecialList($item)
    {
        // 获取头条数据
        $model = new Article;
        $articleList = $model->getList($item['params']['auto']['category'], $item['params']['auto']['showNum']);
        return $articleList->isEmpty() ? [] : $articleList->toArray()['data'];
    }

}