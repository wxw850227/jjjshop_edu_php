<template>
    <view class="wrap">
        <view class="statusBox">
            <view class="imgBox">
                <image class="img" src="/static/address/success.png"  v-if="order.order_status && order.order_status.value == 30"></image>
                <image class="img" src="/static/address/proceed.png" v-else></image>
            </view>
            <view class="txt">{{ order.state_text }}</view>
        </view>
        <view class="address">
            <view class="header">
                <image class="icon" src="/static/address/address.png"></image> 
                <view class="txt">收件信息</view>
            </view>
            <view class="content" v-if="order.address">
                <view class="item">
                    <view class="pre">收货人:</view>
                    <view class="txt">{{ order.address.name }}</view>
                </view>
                <view class="item">
                    <view class="pre">手机号：</view>
                    <view class="txt">{{ order.address.phone }}</view>
                </view>
                <view class="item">
                    <view class="pre">收货地址：</view>
                    <view class="txt">{{ order.address.detail }}</view>
                </view>   
            </view>
        </view>
        <view class="infoWrap">
            <view class="product">
                <view class="masterPic">
                    <image class="img" :src="order.file_path" mode=""></image>
                </view>
                <view class="r">
                    <view class="title">{{ order.product_name }}</view>
                    <view class="price"><text class="symbol">￥</text>{{ order.pay_price }}</view>
                </view>
            </view>
            <view class="orderInfo">
                <view class="item">
                    <view class="pre">订单编号：</view>
                    <view class="txt">{{ order.order_no }}</view>
                </view>
                <view class="item">
                    <view class="pre">兑换时间：</view>
                    <view class="txt">{{ order.create_time }}</view>
                </view>
                <view class="item">
                    <view class="pre">支付方式：</view>
                    <view class="txt">{{ order.pay_type && order.pay_type.text }}</view>
                </view>
                <view class="item"> 
                    <view class="pre">配送方式：</view>
                    <view class="txt">快递配送</view>
                </view>
            </view>
        </view>
        <view class="priceBox">
            <view class="item">
                <view class="pre">扣除积分数：</view>
                <view class="txt">-{{ order.points_num }}</view>
            </view>
            <view class="item">
                <view class="pre">订单总额：</view>
                <view class="txt">￥{{ order.pay_price }}</view>
            </view>
            <view class="item">
                <view class="pre">运费：</view>
                <view class="txt">￥{{ order.express_price }}</view> 
            </view>
            <!-- <view class="item">
                <view class="pre">积分抵扣：</view>
                <view class="txt">-￥1</view>
            </view> -->
            <view class="payPrice">
                <text class="payTxt">实付金额: </text><text class="paySymbol">￥</text>{{ order.pay_price }}
            </view>
        </view>
    </view>
</template>
<script>
export default {
    components: {},
    data() {
        return {
            loading: false,
            order: {},
            order_id: null,
        };
    },
    onShow() {
        this.getData();
    },
    onLoad(options) {
        this.order_id = options.order_id;
    },
    methods: {
        getData() {
            let self = this;
            uni.showLoading({
                title: '加载中'
            });
            self._get('plus.points.order/detail', {
                order_id: self.order_id,
            }, res => {
                const { data: { order }} = res;
                self.order = order;
                self.loading = false;
                uni.hideLoading();
            })
        },

    }
};
</script>

<style lang="scss" scoped>
.wrap {
    padding:0  20rpx;
    box-sizing: border-box;
    padding-bottom: 30rpx;
    .statusBox{
        padding: 40rpx 0;
        text-align: center;
        .imgBox{
            width: 127rpx;
            height: 127rpx;
            background: #FEF0E0;
            border-radius: 50%;
            position: relative;
            margin: 0 auto;
        }
        .img{
            width: 52rpx;
            height: 50rpx;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
        }
        .txt{
            font-size: 28rpx;
            color: #111111;
            margin-top: 24rpx;
        }
    }
    .address{
        background: #fff;
        padding: 30rpx 20rpx;
        box-sizing: border-box;
        border-radius: 20rpx;
      .header{
        display: flex;
        align-items: center;
        gap: 12rpx;
        .icon{
            width: 48rpx;
            height: 48rpx;
        }
        .txt{
            font-size: 30rpx;
            color: #111111;
        }
      } 
      .content{
        margin-top: 40rpx;
        .item{
            display: flex;
            align-items: center;
            height: 50rpx;
            line-height: 50rpx;
            .pre{
                font-size: 28rpx;
                color: #999999;
                width: 140rpx;
            }
            .txt{
                font-size: 28rpx;
                color: #111111;
            }
        }
      }
    }
    .infoWrap{
        background: #fff;
        padding: 25rpx 20rpx;
        margin-top: 23rpx;
        border-radius: 20rpx;
        .product{
            display: flex;
            gap: 20rpx;
            height: 181rpx;
            padding-bottom: 20rpx;
            border-bottom: 1px solid #EEEEEE;
           .masterPic{
                width: 212rpx;
                height: 100%;
                .img{
                    width: 100%;
                    height: 100%;
                }
           } 
           .r{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .title{
                max-width: 420rpx;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                font-size: 28rpx;
                color: #111111;
            }
            .price{
                font-size: 30rpx;
                font-weight: bold;
                color: #333333;
            }
            .symbol{
                font-size: 21rpx;
            }
           }
        }
    }
    .orderInfo{
        padding-top: 20rpx;
    }
    .priceBox{
        background: #fff;
        margin: 20rpx 0;
        padding: 32rpx 20rpx;
        .payPrice{
            text-align: right;
            font-size: 30rpx;
            color: #F2473F;
            font-weight: bold;
            .payTxt{
                font-size: 24rpx;
                color: #333;
            }
            .paySymbol{
                font-size: 24rpx;
            }
        }
    }
    .orderInfo .item,.priceBox .item{
        display: flex;
        align-items: center;
        height: 50rpx;
        line-height: 50rpx;
        font-size: 26rpx;
        .pre{
            width: 160rpx;
            color: #999999;
        }
    }
}
</style>
