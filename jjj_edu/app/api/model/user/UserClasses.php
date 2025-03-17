<?php

namespace app\api\model\user;

use app\common\model\user\UserClasses as UserClassesModel;

/**
 * 用户班级群模型
 */
class UserClasses extends UserClassesModel
{
    /**
     * 获取我的班级群列表
     */
    public function getList($user, $data)
    {
        return $this->where('user_id', '=', $user['user_id'])
            ->paginate($data);
    }

    /**
     * 新增我的班级群
     */
    public function add($order)
    {
        $data = [
            'user_id' => $order['user_id'],
            'course_id' => $order['product'][0]['product_id'],
            'title' => $order['product'][0]['title'],
            'image_id' => $order['product'][0]['image_id'],
            'wx_image' => $order['product'][0]['wx_image'],
            'qq_image' => $order['product'][0]['qq_image'],
            'app_id' => $order['app_id'],
        ];
        return $this->save($data);
    }

}