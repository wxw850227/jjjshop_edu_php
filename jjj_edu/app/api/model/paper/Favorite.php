<?php

namespace app\api\model\paper;

use app\common\model\paper\Favorite as FavoriteModel;

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

    public function addFav($data, $user_id)
    {
        return $this->save([
            'paper_id' => $data['paper_id'],
            'question_id' => $data['question_id'],
            'paper_question_id' => $data['paper_question_id'],
            'user_id' => $user_id,
            'app_id' => self::$app_id
        ]);
    }

}
