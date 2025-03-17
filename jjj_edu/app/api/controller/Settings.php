<?php

namespace app\api\controller;

use app\api\model\settings\Setting as SettingModel;
use app\common\model\settings\Region as RegionModel;

/**
 * 页面控制器
 */
class Settings extends Controller
{
    /**
     * 获取省市区
     */
    public function getRegion()
    {
        $regionData = RegionModel::getRegionForApi();
        return $this->renderSuccess('', compact('regionData'));
    }

}
