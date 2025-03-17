<?php

namespace app\common\model\page;

use think\facade\Cache;
use app\common\model\BaseModel;

/**
 * 个人中心菜单模型
 */
class CenterMenu extends BaseModel
{
    protected $name = 'center_menu';
    protected $pk = 'menu_id';

    /**
     * 详情
     */
    public static function detail($menu_id)
    {
        return (new static())->find($menu_id);
    }

    /**
     * 查询所有
     */
    public static function getAll()
    {
        $model = new static();
        if (!Cache::get('center_menu_' . $model::$app_id)) {
            $list = $model->order(['sort' => 'asc'])->select();
            if (count($list) == 0) {
                $sys_menus = $model->getSysMenu();
                $save_data = [];
                foreach ($sys_menus as $menu) {
                    $save_data[] = array_merge($sys_menus[$menu['sys_tag']], [
                        'app_id' => self::$app_id
                    ]);
                }
                $model->saveAll($save_data);
            }
            $list = $model->where('status', '=', 1)->order(['sort' => 'asc'])->select();
            Cache::tag('cache')->set('center_menu_' . $model::$app_id, $list);
        }
        return Cache::get('center_menu_' . $model::$app_id);
    }

    /**
     * 系统菜单
     */
    public static function getSysMenu()
    {
        return [
            'signin' => [
                'sys_tag' => 'signin',
                'title' => '签到打卡',
                'link_url' => '/pages/plus/signin/signin',
                'image_url' => 'image/menu/signin.png',
                'sort' => 1
            ],
            'my_attention' => [
                'sys_tag' => 'my_attention',
                'title' => '收藏的题',
                'link_url' => '/pages/user/collect/subject',
                'image_url' => 'image/menu/my_attention.png',
                'sort' => 2
            ],
            'lecturer' => [
                'sys_tag' => 'lecturer',
                'title' => '讲师列表',
                'link_url' => '/pages/lecturer/list',
                'image_url' => 'image/menu/lecturer.png',
                'sort' => 2
            ],
            'wallet' => [
                'sys_tag' => 'wallet',
                'title' => '我的余额',
                'link_url' => '/pages/user/my-wallet/my-wallet',
                'image_url' => 'image/menu/wallet.png',
                'sort' => 3
            ],
            'classes' => [
                'sys_tag' => 'classes',
                'title' => '我的班群',
                'link_url' => '/pages/user/class/index',
                'image_url' => 'image/menu/classes.png',
                'sort' => 4
            ],
            'address' => [
                'sys_tag' => 'address',
                'title' => '收货地址',
                'link_url' => '/pages/user/address/address',
                'image_url' => 'image/menu/address.png',
                'sort' => 5
            ],
            'recharge' => [
                'sys_tag' => 'recharge',
                'title' => '充值中心',
                'link_url' => '/pages/order/recharge',
                'image_url' => 'image/menu/recharge.png',
                'sort' => 6
            ],
            //关注的讲师
            'my_collect' => [
                'sys_tag' => 'my_collect',
                'title' => '我的关注',
                'link_url' => '/pages/lecturer/fav',
                'image_url' => 'image/menu/my_collect.png',
                'sort' => 7
            ],
        ];
    }

}