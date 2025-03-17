<?php

namespace app\api\model\user;

use app\common\exception\BaseException;
use app\common\model\user\User as UserModel;
use think\facade\Cache;

/**
 * 公众号用户模型类
 */
class UserOpen extends UserModel
{
    private $token;

    /**
     * 隐藏字段
     */
    protected $hidden = [
        'open_id',
        'is_delete',
        'app_id',
        'create_time',
        'update_time'
    ];

    /**
     * 用户登录
     */
    public function login($userInfo, $referee_id = null)
    {
        // 自动注册用户
        $user_id = $this->register($userInfo, $referee_id);
        // 生成token (session3rd)
        $this->token = $this->token($user_id);
        return $user_id;
    }

    /**
     * 获取token
     */
    public function getToken()
    {
        return $this->token;
    }

    /**
     * 生成用户认证的token
     */
    private function token($openid)
    {
        $app_id = self::$app_id;
        // 生成一个不会重复的随机字符串
        $guid = \getGuidV4();
        // 当前时间戳 (精确到毫秒)
        $timeStamp = microtime(true);
        // 自定义一个盐
        $salt = 'token_salt';
        return md5("{$app_id}_{$timeStamp}_{$openid}_{$guid}_{$salt}");
    }

    /**
     * 自动注册用户
     */
    private function register($userInfo, $referee_id = null)
    {
        $data = [];
        //通过unionid查询用户是否存在
        $user = null;
        $data['union_id'] = '';
        if (isset($userInfo['unionid']) && !empty($userInfo['unionid'])) {
            $data['union_id'] = $userInfo['unionid'];
            $user = self::detailByUnionid($userInfo['unionid']);
        }
        // 查询用户是否已存在
        if (!$user) {
            $user = self::detail(['appopen_id' => $userInfo['openid']]);
        }
        if ($user) {
            $model = $user;
            // 只修改union_id
            $data = [
                'union_id' => $data['union_id'],
            ];
        } else {
            $model = $this;
            $data['referee_id'] = $referee_id;
            $data['appopen_id'] = $userInfo['openid'];
            // 用户信息
            $data['nickName'] = $userInfo['nickname'];
            $data['avatarUrl'] = $userInfo['headimgurl'];
            $data['reg_source'] = 'app';
        }

        try {
            $this->startTrans();
            // 保存/更新用户记录
            if (!$model->save(array_merge($data, [
                'app_id' => self::$app_id
            ]))
            ) {
                throw new BaseException(['msg' => '用户注册失败']);
            }
            if (!$user && $referee_id > 0) {
                //更新用户邀请数量
                (new UserModel())->where('user_id', '=', $referee_id)->inc('total_invite')->update();
            }
            $this->commit();
        } catch (\Exception $e) {
            $this->rollback();
            throw new BaseException(['msg' => $e->getMessage()]);
        }
        return $model['user_id'];
    }

    /**
     * 手机号密码用户登录
     */
    public function phoneLogin($data)
    {
        $user = $this->where('mobile', '=', $data['mobile'])
            ->where('password', '=', md5($data['password']))
            ->where('reg_source', '=', 'h5')
            ->where('is_delete', '=', 0)
            ->order('user_id desc')
            ->find();
        if (!$user) {
            $this->error = '手机号或密码错误';
            return false;
        } else {
            $user_id = $user['user_id'];
            $mobile = $user['mobile'];
        }
        // 生成token (session3rd)
        $this->token = $this->token($mobile);
        // 记录缓存, 30天
        Cache::tag('cache')->set($this->token, $user_id, 86400 * 7);
        return $user_id;
    }

    /*
    *手机号注册
    */
    public function phoneRegister($data)
    {
        $user = $this->where('mobile', '=', $data['mobile'])
            ->where('is_delete', '=', 0)
            ->where('reg_source', '=', 'h5')
            ->find();
        if (!$user) {
            $this->startTrans();
            try {
                $this->save([
                    'mobile' => $data['mobile'],
                    'reg_source' => 'h5',
                    'app_id' => self::$app_id,
                    'password' => md5($data['password'])
                ]);
                $this->save(['nickName' => '游客' . $this['user_id']]);
                $this->commit();
                return true;
            } catch (\Exception $e) {
                $this->rollback();
                throw new BaseException(['msg' => $e->getMessage()]);
            }
        } else {
            $this->error = '手机号已存在';
            return false;
        }

    }
}
