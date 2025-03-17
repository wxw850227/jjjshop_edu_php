<?php

namespace app\api\controller\course;

use app\api\model\settings\Message as MessageModel;
use app\api\service\order\settled\CourseOrderSettledService;
use app\api\controller\Controller;
use app\api\service\order\settled\EduOrderSettledService;
use app\common\enum\order\OrderSourceEnum;
use app\common\enum\order\OrderTypeEnum;
use app\api\model\course\Course as CourseModel;

/**
 * 课程订单
 */
class Order extends Controller
{
    /**
     * 订单确认-立即购买
     */
    public function buy()
    {
        // 立即购买：获取订单商品列表
        $params = $this->request->param();
        $courseList = CourseModel::getOrderCourseListByNow($params);
        $user = $this->getUser();
        // 实例化订单service
        $orderService = new CourseOrderSettledService($user, $courseList, $params);
        // 获取订单信息
        $orderInfo = $orderService->settlement();
        if ($this->request->isGet()) {
            // 如果来源是小程序, 则获取小程序订阅消息id.获取支付成功,发货通知.
            $template_arr = MessageModel::getMessageByNameArr($params['pay_source'], ['order_pay_user']);
            $balance = $user['balance'];
            return $this->renderSuccess('', compact('orderInfo', 'balance', 'template_arr'));
        }
        // 订单结算提交
        if ($orderService->hasError()) {
            return $this->renderError($orderService->getError());
        }
        // 创建订单
        $order_id = $orderService->createOrder($orderInfo);
        if (!$order_id) {
            return $this->renderError($orderService->getError() ?: '订单创建失败');
        }
        // 返回结算信息
        return $this->renderSuccess('', [
            'order_id' => $order_id,   // 订单id
            'order_type' => OrderTypeEnum::MASTER, //订单类型
            'order_source' => OrderSourceEnum::COURSE, //订单类型
        ]);
    }

    /**
     * 教务订单确认-立即购买
     */
    public function eduBuy()
    {
        // 立即购买：获取订单商品列表
        $params = $this->request->param();
        $courseList = CourseModel::getOrderCourseListByNow($params);
        $user = $this->getUser();
        // 实例化订单service
        $orderService = new EduOrderSettledService($user, $courseList, $params);
        // 获取订单信息
        $orderInfo = $orderService->settlement();
        if ($this->request->isGet()) {
            $template_arr = MessageModel::getMessageByNameArr($params['pay_source'], ['order_pay_user']);
            return $this->renderSuccess('', compact('orderInfo', 'template_arr'));
        }
        // 订单结算提交
        if ($orderService->hasError()) {
            return $this->renderError($orderService->getError());
        }
        // 创建订单
        $order_id = $orderService->createOrder($orderInfo);
        if (!$order_id) {
            return $this->renderError($orderService->getError() ?: '订单创建失败');
        }
        // 返回结算信息
        return $this->renderSuccess('', [
            'order_id' => $order_id,   // 订单id
            'order_type' => OrderTypeEnum::MASTER, //订单类型
            'order_source' => OrderSourceEnum::EDU, //订单类型
        ]);
    }

}