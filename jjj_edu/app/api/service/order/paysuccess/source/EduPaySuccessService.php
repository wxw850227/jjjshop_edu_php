<?php

namespace app\api\service\order\paysuccess\source;

/**
 * 教务订单支付成功后的回调
 */
class EduPaySuccessService
{
    /**
     * 回调方法
     */
    public function onPaySuccess($order)
    {
        return true;
    }


}