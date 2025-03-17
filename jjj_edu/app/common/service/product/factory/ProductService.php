<?php

namespace app\common\service\product\factory;


/**
 * 商品基类
 * Interface IProductService
 * @package app\common\service\product
 */
abstract class ProductService
{
    /**
     * 更新商品库存销量（订单付款后）
     */
    abstract function updateStockSales($productList);


}