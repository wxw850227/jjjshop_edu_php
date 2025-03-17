<?php

namespace app\job\event;

use app\common\library\helper;
use app\job\model\paper\Record as RecordModel;
use think\facade\Cache;

/**
 * 考试事件管理
 */
class Exam
{
    // 模型
    private $model;

    // 应用id
    private $appId;

    /**
     * 执行函数
     */
    public function handle($app_id)
    {
        try {
            $this->appId = $app_id;
            $this->model = new RecordModel();
            $key = "task_space__exam__record__{$this->appId}";
            if (Cache::has($key)) return true;
            $this->model->transaction(function () use ($app_id) {
                $this->closeRecord($app_id);
            });
            Cache::set($key, time(), 60);
        } catch (\Throwable $e) {
            echo 'ERROR EXAM: ' . $e->getMessage() . PHP_EOL;
            log_write('EXAM TASK : ' . $app_id . '__ ' . $e->getMessage(), 'task');
        }
        return true;
    }

    /**
     * 真题自动提交
     */
    private function closeRecord($app_id)
    {
        $model = new RecordModel;
        $list = $model->getRecord($app_id);
        $recordIds = helper::getArrayColumn($list, 'record_id');;
        if (!empty($recordIds)) {
            $model->submit($list);
        }
        // 记录日志
        $this->dologs('closeRecord', [
            'recordIds' => json_encode($recordIds),
        ]);
        return true;
    }

    /**
     * 记录日志
     */
    private function dologs($method, $params = [])
    {
        $value = 'behavior EXAM --' . $method;
        foreach ($params as $key => $val)
            $value .= ' --' . $key . ' ' . $val;
        return log_write($value, 'task');
    }

}
