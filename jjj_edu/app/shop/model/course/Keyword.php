<?php

namespace app\shop\model\course;

use app\common\model\course\Keyword as KeywordModel;

/**
 * 关键词模型
 */
class Keyword extends KeywordModel
{
    /**
     * 添加新记录
     */
    public function add($data)
    {
        $data['app_id'] = self::$app_id;
        return $this->save($data);
    }

    /**
     * 编辑记录
     */
    public function edit($data)
    {
        return $this->save($data);
    }

    /**
     * 删除记录
     */
    public function remove()
    {
        return $this->delete();
    }
}