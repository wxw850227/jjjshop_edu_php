<?php

namespace app\api\model\lecturer;

use app\common\model\lecturer\Comment as CommentModel;

class Comment extends CommentModel
{
    /**
     * 隐藏字段
     */
    protected $hidden = [
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
    public function getProductCommentList($lecturer_id, $scoreType, $param)
    {
        // 筛选条件
        $filter = [
            'lecturer_id' => $lecturer_id,
            'is_delete' => 0,
            'status' => 1,
        ];
        // 评分
        $scoreType > 0 && $filter['score'] = $scoreType;
        return $this->with(['image.file', 'users'])
            ->where($filter)
            ->order(['sort' => 'asc', 'create_time' => 'desc'])
            ->paginate($param);
    }

    /**
     * 获取指定评分总数
     */
    public function getTotal($lecturer_id)
    {
        return $this->field([
            'count(comment_id) AS `all`',
            'count(score = 10 OR NULL) AS `praise`',
            'count(score = 20 OR NULL) AS `review`',
            'count(score = 30 OR NULL) AS `negative`',
        ])->where([
            'lecturer_id' => $lecturer_id,
            'is_delete' => 0,
            'status' => 1
        ])->find();
    }

    /**
     * 根据免费课程， 添加评价
     */
    public function add($data, $user, $lecturer_id)
    {
        $data = json_decode($data, true);
        if (empty($data['content'])) {
            $this->error = '没有输入评价内容';
            return false;
        }
        $image = $data['image_list'];
        // 生成评价数据
        $addData = [
            'score' => $data['score'],
            'content' => $data['content'],
            'is_picture' => !empty($image),
            'sort' => 100,
            'status' => 0,
            'user_id' => $user['user_id'],
            'lecturer_id' => $lecturer_id,
            'app_id' => self::$app_id
        ];
        return $this->transaction(function () use ($addData, $user, $image) {
            // 记录评价内容
            $this->save($addData);
            // 记录评价图片
            $image && $this->addImages($image, $this['comment_id']);
            return true;
        });
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