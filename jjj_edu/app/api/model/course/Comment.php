<?php

namespace app\api\model\course;

use app\common\enum\order\OrderSourceEnum;
use app\common\model\course\Comment as CommentModel;

class Comment extends CommentModel
{
    /**
     * 隐藏字段
     */
    protected $hidden = [
        'status',
        'sort',
        'order_id',
        'course_id',
        'order_product_id',
        'is_delete',
        'update_time'
    ];

    /**
     * 关联用户表
     */
    public function users()
    {
        return $this->belongsTo('app\\common\\model\\user\\User')->field(['user_id', 'nickName', 'avatarUrl']);
    }

    /**
     * 获取指定商品评价列表
     */
    public function getProductCommentList($course_id, $scoreType, $param)
    {
        // 筛选条件
        $filter = [
            'course_id' => $course_id,
            'is_delete' => 0,
            'status' => 1,
        ];
        // 评分
        $scoreType > 0 && $filter['score'] = $scoreType;
        return $this->with(['OrderProduct', 'image.file', 'users'])
            ->where($filter)
            ->order(['sort' => 'asc', 'create_time' => 'desc'])
            ->paginate($param);
    }

    /**
     * 获取指定评分总数
     */
    public function getTotal($course_id)
    {
        return $this->field([
            'count(comment_id) AS `all`',
            'count(score = 10 OR NULL) AS `praise`',
            'count(score = 20 OR NULL) AS `review`',
            'count(score = 30 OR NULL) AS `negative`',
        ])->where([
            'course_id' => $course_id,
            'is_delete' => 0,
            'status' => 1
        ])->find();
    }

    /**
     * 验证订单是否允许评价
     */
    public function checkOrderAllowComment($order)
    {
        // 验证订单是否已完成
        if ($order['order_status']['value'] != 30) {
            $this->error = '该订单未完成，无法评价';
            return false;
        }
        // 验证订单是否已评价
        if ($order['is_comment'] == 1) {
            $this->error = '该订单已完成评价';
            return false;
        }
        return true;
    }

    /**
     * 根据已完成订单商品 添加评价
     */
    public function addForOrder($order, $formData)
    {
        $data = json_decode($formData, true);
        if (empty($data['content'])) {
            $this->error = '没有输入评价内容';
            return false;
        }
        $image = $data['image_list'];
        // 生成评价数据
        $data = $this->createCommentData($order, $data);
        return $this->transaction(function () use ($order, $data, $image) {
            // 记录评价内容
            $this->save($data);
            // 记录评价图片
            $image && $this->addImages($image, $this['comment_id']);
            $order->save(['is_comment' => 1]);
            return true;
        });
    }

    /**
     * 生成评价数据
     */
    private function createCommentData($order, $data)
    {
        $data = [
            'score' => $data['score'],
            'content' => $data['content'],
            'is_picture' => !empty($data['image_list']),
            'sort' => 100,
            'status' => 0,
            'user_id' => $order['user_id'],
            'order_id' => $order['order_id'],
            'course_id' => $order['product'][0]['product_id'],
            'order_product_id' => $order['product'][0]['order_product_id'],
            'course_type' => $order['order_source'] == OrderSourceEnum::COURSE ? 1 : 2,
            'app_id' => self::$app_id
        ];
        return $data;
    }

    private function addImages($images, $comment_id)
    {
        // 生成评价图片数据
        $imageData = [];
        foreach ($images as $imageId) {
            $imageData[] = [
                'comment_id' => $comment_id,
                'image_id' => $imageId['file_id'],
                'app_id' => self::$app_id
            ];
        }
        $model = new CommentImage;
        return $model->saveAll($imageData);
    }
}