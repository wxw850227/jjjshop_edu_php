<?php

namespace app\api\model\lecturer;

use app\common\model\lecturer\Favorite as FavoriteModel;

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
        (new Lecturer())->where('lecturer_id', '=', $this['lecturer_id'])->dec('real_collect', 1)->update();
        return $this->delete();
    }

    public function addFav($lecturer_id, $user_id)
    {
        (new Lecturer())->where('lecturer_id', '=', $lecturer_id)->inc('real_collect', 1)->update();
        return $this->save([
            'lecturer_id' => $lecturer_id,
            'user_id' => $user_id,
            'app_id' => self::$app_id
        ]);
    }
}
