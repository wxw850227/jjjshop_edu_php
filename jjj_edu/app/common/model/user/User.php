<?php


namespace app\common\model\user;

use app\common\model\BaseModel;
use app\common\model\settings\Setting as SettingModel;
use app\common\model\user\PointsLog as PointsLogModel;

/**
 * 用户模型
 */
class User extends BaseModel
{
    protected $pk = 'user_id';
    protected $name = 'user';

    /**
     * 默认头像
     */
    public function getAvatarUrlAttr($value)
    {
        return $value ? $value : SettingModel::getItem('store', self::$app_id)['avatarUrl'];
    }

    /**
     * 关联收货地址表
     */
    public function address()
    {
        return $this->hasMany('app\\common\\model\\user\\UserAddress', 'address_id', 'address_id');
    }

    /**
     * 关联收货地址表 (默认地址)
     */
    public function addressDefault()
    {
        return $this->belongsTo('app\\common\\model\\user\\UserAddress', 'address_id', 'address_id');
    }

    /**
     * 获取用户信息
     */
    public static function detail($where)
    {
        $model = new static;
        $filter = ['is_delete' => 0];
        if (is_array($where)) {
            $filter = array_merge($filter, $where);
        } else {
            $filter['user_id'] = (int)$where;
        }
        return $model->where($filter)->with(['address', 'addressDefault'])->find();
    }

    /**
     * 获取用户信息
     */
    public static function detailByUnionid($unionid)
    {
        $model = new static;
        $filter = ['is_delete' => 0];
        $filter = array_merge($filter, ['union_id' => $unionid]);
        return $model->where($filter)->with(['address', 'addressDefault'])->find();
    }

    /**
     * 累积用户总消费金额
     */
    public function setIncPayMoney($money)
    {
        return $this->where('user_id', '=', $this['user_id'])->inc('pay_money', $money)->update();
    }

    /**
     * 累积用户实际消费的金额 (批量)
     */
    public function onBatchIncExpendMoney($data)
    {
        foreach ($data as $userId => $expendMoney) {
            $this->where(['user_id' => $userId])->inc('expend_money', $expendMoney)->update();
        }
        return true;
    }

    /**
     * 累积用户实际消费的金额
     */
    public function IncExpendMoney($data)
    {
        $this->where(['user_id' => $data['user_id']])->inc('expend_money', $data['money'])->update();
        return true;
    }

    /**
     * 累积用户的可用积分数量 (批量)
     */
    public function onBatchIncPoints($data)
    {
        foreach ($data as $userId => $expendPoints) {
            $this->where(['user_id' => $userId])
                ->inc('points', $expendPoints)
                ->inc('total_points', $expendPoints)
                ->update();
        }
        return true;
    }

    /**
     * 累积用户的可用积分
     */
    public function setIncPoints($points, $describe, $decPoints = 0)
    {
        // 新增积分变动明细
        PointsLogModel::add([
            'user_id' => $this['user_id'],
            'value' => $points,
            'describe' => $describe,
            'app_id' => $this['app_id'],
        ]);

        // 更新用户可用积分
        $data['points'] = ($this['points'] + $points + $decPoints <= 0) ? 0 : $this['points'] + $points + $decPoints;
        // 用户总积分
        if ($points > 0) {
            $data['total_points'] = $this['total_points'] + $points;
        }
        $this->where('user_id', '=', $this['user_id'])->update($data);
        return true;
    }

    //更新用户类型
    public static function updateType($user_id, $user_type)
    {
        $model = new static;
        return $model->where('user_id', '=', $user_id)->update([
            'user_type' => $user_type
        ]);
    }

    /**
     * 累计邀请书
     */
    public function setIncInvite($user_id)
    {
        $this->where('user_id', '=', $user_id)->inc('total_invite')->update();
    }
}