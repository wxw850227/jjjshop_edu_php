<?php

namespace app\shop\service\order;

use PhpOffice\PhpSpreadsheet\IOFactory;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

/**
 * 订单导出服务类
 */
class ExportService
{
    /**
     * 订单导出
     */
    public function orderList($list)
    {
        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();

        //列宽
        $sheet->getColumnDimension('B')->setWidth(30);
        $sheet->getColumnDimension('P')->setWidth(30);

        //设置工作表标题名称
        $sheet->setTitle('订单明细');

        $sheet->setCellValue('A1', '订单号');
        $sheet->setCellValue('B1', '商品信息');
        $sheet->setCellValue('C1', '订单总额');
        $sheet->setCellValue('D1', '优惠券抵扣');
        $sheet->setCellValue('E1', '积分抵扣');
        $sheet->setCellValue('F1', '运费金额');
        $sheet->setCellValue('G1', '后台改价');
        $sheet->setCellValue('H1', '实付款金额');
        $sheet->setCellValue('I1', '支付方式');
        $sheet->setCellValue('J1', '下单时间');
        $sheet->setCellValue('K1', '买家');
        $sheet->setCellValue('L1', '买家留言');
        $sheet->setCellValue('M1', '配送方式');
        $sheet->setCellValue('N1', '自提门店名称');
        $sheet->setCellValue('O1', '自提联系人');
        $sheet->setCellValue('P1', '自提联系电话');
        $sheet->setCellValue('Q1', '收货人姓名');
        $sheet->setCellValue('R1', '联系电话');
        $sheet->setCellValue('S1', '收货人地址');
        $sheet->setCellValue('T1', '物流公司');
        $sheet->setCellValue('U1', '物流单号');
        $sheet->setCellValue('V1', '付款状态');
        $sheet->setCellValue('W1', '付款时间');
        $sheet->setCellValue('X1', '发货状态');
        $sheet->setCellValue('Y1', '发货时间');
        $sheet->setCellValue('Z1', '收货状态');
        $sheet->setCellValue('AA1', '收货时间');
        $sheet->setCellValue('AB1', '订单状态');
        $sheet->setCellValue('AC1', '微信支付交易号');
        $sheet->setCellValue('AD1', '是否已评价');

        //填充数据
        $index = 0;
        foreach ($list as $order) {
            $address = $order['address'];
            $sheet->setCellValue('A' . ($index + 2), "\t" . $order['order_no'] . "\t");
            $sheet->setCellValue('B' . ($index + 2), $this->filterProductInfo($order));
            $sheet->setCellValue('C' . ($index + 2), $order['total_price']);
            $sheet->setCellValue('D' . ($index + 2), $order['coupon_money']);
            $sheet->setCellValue('E' . ($index + 2), $order['points_money']);
            $sheet->setCellValue('F' . ($index + 2), $order['express_price']);
            $sheet->setCellValue('G' . ($index + 2), "{$order['update_price']['symbol']}{$order['update_price']['value']}");
            $sheet->setCellValue('H' . ($index + 2), $order['order_source'] == 70 ? round($order['pay_price'] + $order['advance']['pay_price'], 2) : $order['pay_price']);
            $sheet->setCellValue('I' . ($index + 2), $order['pay_type']['text']);
            $sheet->setCellValue('J' . ($index + 2), $order['create_time']);
            $sheet->setCellValue('K' . ($index + 2), $order['user']['nickName']);
            $sheet->setCellValue('L' . ($index + 2), $order['buyer_remark']);
            $sheet->setCellValue('M' . ($index + 2), $order['delivery_type']['text']);
            $sheet->setCellValue('N' . ($index + 2), !empty($order['extract_store']) ? $order['extract_store']['shop_name'] : '');
            $sheet->setCellValue('O' . ($index + 2), !empty($order['extract']) ? $order['extract']['linkman'] : '');
            $sheet->setCellValue('P' . ($index + 2), !empty($order['extract']) ? $order['extract']['phone'] : '');
            $sheet->setCellValue('Q' . ($index + 2), !empty($order['address']) ? $order['address']['name'] : '');
            $sheet->setCellValue('R' . ($index + 2), !empty($order['address']) ? $order['address']['phone'] : '');
            $sheet->setCellValue('S' . ($index + 2), $address ? $address->getFullAddress() : '');
            $sheet->setCellValue('T' . ($index + 2), !empty($order['express']) ? $order['express']['express_name'] : '');
            $sheet->setCellValue('U' . ($index + 2), $order['express_no']);
            $sheet->setCellValue('V' . ($index + 2), $order['pay_status']['text']);
            $sheet->setCellValue('W' . ($index + 2), $this->filterTime($order['pay_time']));
            $sheet->setCellValue('X' . ($index + 2), $order['delivery_status']['text']);
            $sheet->setCellValue('Y' . ($index + 2), $this->filterTime($order['delivery_time']));
            $sheet->setCellValue('Z' . ($index + 2), $order['receipt_status']['text']);
            $sheet->setCellValue('AA' . ($index + 2), $this->filterTime($order['receipt_time']));
            $sheet->setCellValue('AB' . ($index + 2), $order['order_status']['text']);
            $sheet->setCellValue('AC' . ($index + 2), $order['transaction_id']);
            $sheet->setCellValue('AD' . ($index + 2), $order['is_comment'] ? '是' : '否');
            $index++;
        }

        //保存文件
        $writer = new Xlsx($spreadsheet);
        $filename = iconv("UTF-8", "GB2312//IGNORE", '订单') . '-' . date('YmdHis') . '.xlsx';


        header('Content-Type: application/vnd.ms-excel');
        header('Content-Disposition: attachment;filename="' . $filename . '"');
        header('Cache-Control: max-age=0');
        $writer = IOFactory::createWriter($spreadsheet, 'Xlsx');
        $writer->save('php://output');
    }

    /**
     * 积分订单导出
     */
    public function pointsList($list)
    {
        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();

        //列宽
        $sheet->getColumnDimension('B')->setWidth(30);
        $sheet->getColumnDimension('P')->setWidth(30);

        //设置工作表标题名称
        $sheet->setTitle('积分订单明细');

        $sheet->setCellValue('A1', '订单号');
        $sheet->setCellValue('B1', '商品信息');
        $sheet->setCellValue('C1', '订单总额');
        $sheet->setCellValue('D1', '兑换积分');
        $sheet->setCellValue('E1', '配送费');
        $sheet->setCellValue('F1', '支付方式');
        $sheet->setCellValue('G1', '下单时间');
        $sheet->setCellValue('H1', '买家');
        $sheet->setCellValue('I1', '配送方式');
        $sheet->setCellValue('J1', '收货人姓名');
        $sheet->setCellValue('K1', '联系电话');
        $sheet->setCellValue('L1', '收货人地址');
        $sheet->setCellValue('M1', '付款状态');
        $sheet->setCellValue('N1', '付款时间');
        $sheet->setCellValue('O1', '核销时间');
        $sheet->setCellValue('P1', '订单状态');
        $sheet->setCellValue('Q1', '支付交易号');
        //填充数据
        $index = 0;
        foreach ($list as $order) {
            $sheet->setCellValue('A' . ($index + 2), "\t" . $order['order_no'] . "\t");
            $sheet->setCellValue('B' . ($index + 2), $order['product_name']);
            $sheet->setCellValue('C' . ($index + 2), $order['pay_price']);
            $sheet->setCellValue('D' . ($index + 2), $order['points_num']);
            $sheet->setCellValue('E' . ($index + 2), $order['express_price']);
            $sheet->setCellValue('F' . ($index + 2), $order['pay_type']['text']);
            $sheet->setCellValue('G' . ($index + 2), $order['create_time']);
            $sheet->setCellValue('H' . ($index + 2), $order['user']['nickName']);
            $sheet->setCellValue('I' . ($index + 2), $order['delivery_type']['text']);
            $sheet->setCellValue('J' . ($index + 2), $order['address'] ? $order['address']['name'] : '');
            $sheet->setCellValue('K' . ($index + 2), $order['address'] ? "\t" . $order['address']['phone'] . "\t" : '');
            $sheet->setCellValue('L' . ($index + 2), $order['address'] ? $order['address']['detail'] : '');
            $sheet->setCellValue('M' . ($index + 2), $order['pay_status']['text']);
            $sheet->setCellValue('N' . ($index + 2), $this->filterTime($order['pay_time']));
            $sheet->setCellValue('O' . ($index + 2), $this->filterTime($order['receipt_time']));
            $sheet->setCellValue('P' . ($index + 2), $order['state_text']);
            $sheet->setCellValue('Q' . ($index + 2), $order['transaction_id']);
            $index++;
        }
        //保存文件
        $writer = new Xlsx($spreadsheet);
        $filename = iconv("UTF-8", "GB2312//IGNORE", '积分订单') . '-' . date('YmdHis') . '.xlsx';
        header('Content-Type: application/vnd.ms-excel');
        header('Content-Disposition: attachment;filename="' . $filename . '"');
        header('Cache-Control: max-age=0');
        $writer = IOFactory::createWriter($spreadsheet, 'Xlsx');
        $writer->save('php://output');
        exit();
    }

    /**
     * 余额提现订单导出
     */
    public function userCashList($list)
    {
        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();

        //列宽
        $sheet->getColumnDimension('I')->setWidth(50);

        //设置工作表标题名称
        $sheet->setTitle('余额提现明细');

        $sheet->setCellValue('A1', 'ID');
        $sheet->setCellValue('B1', '用户ID');
        $sheet->setCellValue('C1', '微信昵称');
        $sheet->setCellValue('D1', '手机号');
        $sheet->setCellValue('E1', '提现金额');
        $sheet->setCellValue('F1', '实际到账');
        $sheet->setCellValue('G1', '提现比例');
        $sheet->setCellValue('H1', '提现方式');
        $sheet->setCellValue('I1', '提现信息');
        $sheet->setCellValue('J1', '审核状态');
        $sheet->setCellValue('K1', '申请时间');
        $sheet->setCellValue('L1', '审核时间');
        //填充数据
        $index = 0;
        foreach ($list as $cash) {
            $sheet->setCellValue('A' . ($index + 2), $cash['id']);
            $sheet->setCellValue('B' . ($index + 2), $cash['user_id']);
            $sheet->setCellValue('C' . ($index + 2), $cash['nickName']);
            $sheet->setCellValue('D' . ($index + 2), "\t" . $cash['mobile'] . "\t");
            $sheet->setCellValue('E' . ($index + 2), $cash['money']);
            $sheet->setCellValue('F' . ($index + 2), $cash['real_money']);
            $sheet->setCellValue('G' . ($index + 2), $cash['cash_ratio'] . '%');
            $sheet->setCellValue('H' . ($index + 2), $cash['pay_type']['text']);
            $sheet->setCellValue('I' . ($index + 2), $this->cashInfo($cash));
            $sheet->setCellValue('J' . ($index + 2), $cash['apply_status']['text']);
            $sheet->setCellValue('K' . ($index + 2), $cash['create_time']);
            $sheet->setCellValue('L' . ($index + 2), $cash['audit_time']);
            $index++;
        }
        //保存文件
        $filename = iconv("UTF-8", "GB2312//IGNORE", '余额提现明细') . '-' . date('YmdHis') . '.xlsx';
        header('Content-Type: application/vnd.ms-excel');
        header('Content-Disposition: attachment;filename="' . $filename . '"');
        header('Cache-Control: max-age=0');
        $writer = IOFactory::createWriter($spreadsheet, 'Xlsx');
        $writer->save('php://output');
    }

    /**
     * 格式化提现信息
     */
    private function cashInfo($cash)
    {
        $content = '';
        if ($cash['pay_type']['value'] == 20) {
            $content .= "支付宝姓名：{$cash['alipay_name']}\n";
            $content .= "  支付宝账号：{$cash['alipay_account']}\n";
        } elseif ($cash['pay_type']['value'] == 30) {
            $content .= "银行名称：{$cash['bank_name']}\n";
            $content .= "  开户名：{$cash['bank_account']}\n";
            $content .= "  银行卡号：{$cash['bank_card']}\n";
        }
        return $content;
    }

    /**
     * 格式化商品信息
     */
    private function filterProductInfo($order)
    {
        $content = '';
        foreach ($order['product'] as $key => $product) {
            $content .= ($key + 1) . ".商品名称：{$product['product_name']}\n";
            !empty($product['product_attr']) && $content .= "　商品规格：{$product['product_attr']}\n";
            $content .= "　购买数量：{$product['total_num']}\n";
            $content .= "　商品总价：{$product['total_price']}元\n\n";
        }
        return $content;
    }


    /**
     * 日期值过滤
     */
    private function filterTime($value)
    {
        if (!$value) return '';
        return date('Y-m-d H:i:s', $value);
    }

}