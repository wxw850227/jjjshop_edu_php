<?php

namespace app\api\model\course;

use app\common\model\course\Favorite as FavoriteModel;

/**
 * 收藏模型类
 */
class Favorite extends FavoriteModel
{

    /**
     * 取消收藏
     */
    public function cancelFav()
    {
        return $this->delete();
    }

    public function addFav($course_id, $user_id)
    {
        return $this->save([
            'course_id' => $course_id,
            'user_id' => $user_id,
            'app_id' => self::$app_id
        ]);
    }
}
