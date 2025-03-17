<template>
    <view class="wrap">
        <view class="header">
            <view class="imgBox">
                <image class="img" src="/static/address/success.png"></image>
            </view>
            <view class="txt">支付成功</view>
        </view>
        <view class="orderWrap">
            <view class="line"></view>
            <view class="orderInfo">
                <view class="price">
                    <text class="symbol">￥</text>
                    <text class="num">{{ detail.pay_price }}</text>
                </view>
                <view class="common">
                    <view class="item">
                        <view class="pre">订单编号：</view>
                        <view class="txt">{{ detail.order_no }}</view>
                    </view>
                    <view class="item">
                        <view class="pre">下单时间：</view>
                        <view class="txt">{{ detail.create_time }}</view>
                    </view>
                    <view class="item">
                        <view class="pre">支付方式：</view>
                        <view class="txt">{{ detail.pay_type &&  detail.pay_type.text }}</view>
                    </view>
                    <view class="item">
                        <view class="pre">订单类型：</view>
						<view class="txt" v-if="order_type=='point'">积分商城</view> 
                        <view class="txt" v-else> {{ detail.order_source_text }}</view>
                    </view>
                </view>
            </view>
            <view class="btnList">
                <view v-if="order_type == 'course'" class="orderBtn plain" @click="gotoPage(`/pages/knowledge/course/detail?course_id=${detail.product && detail.product[0] && detail.product[0].product_id}`,'reLaunch')">立即学习</view> 
                <view class="orderBtn" @click="goMyorder">订单详情</view>
            </view>
        </view>
    </view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				/*是否加载完成*/
				loadding: true,
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				/*订单id*/
				order_id: 0,
				/*订单详情*/
				detail: {
					order_status: [],
					address: {
						region: []
					},
					product: [],
					pay_type: [],
					delivery_type: [],
					pay_status: [],
					order_type: null,
				},
			}
		},
		onLoad(e) {
			this.order_id = e.order_id;
			this.order_type = e.order_type;
		},
		mounted() {
			uni.showLoading({
				title: '加载中'
			});
			this.getData();
		},
		methods: {
			/*获取订单详情*/
			getData() {
				let self = this;
				let order_id = self.order_id;
                let url = 'user.order/detail';
                if(self.order_type == 'point'){
                    url = 'plus.points.order/detail';
                }
				self._get(url, {
						order_id: order_id
					},
					function(res) {
						self.detail = res.data.order;
						self.loadding = false;
						uni.hideLoading();
						/*显示表单*/
						if(res.data.show_table){
							self.showSuccess('您的订单需要补充相关信息，请在订单详情补充',function(){
								self.gotoPage('/pages/order/order-detail?order_id='+order_id);
							});
						}
					}
				);
			},
			/*返回订单*/
			goMyorder(){
                /* point 积分订单 course 普通课程 eduadmin 教务课程 */
                if(this.order_type == 'point'){
                    this.gotoPage('/pages/pointsMall/orderList','reLaunch');
                }else if(this.order_type == 'course'){
                    this.gotoPage(`/pages/order/course?order_type=10`,'reLaunch');
                }else if(this.order_type == 'eduadmin'){
                    this.gotoPage('/pages/order/teacher?order_type=30','reLaunch');
                }else if(this.order_type == 'paper'){
                    this.gotoPage('/pages/order/exam?order_type=20','reLaunch');
                }
			}
		}
	}
</script>

<style lang="scss" scoped>
.wrap{
    .header{
        height: 446rpx;
        background: linear-gradient(45deg, #F2473F, #F26E2F);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .imgBox{
            width: 127rpx;
            height: 127rpx;
            background: #FFFFFF;
            border-radius: 50%;
            position: relative;
            .img{
                width: 52rpx;
                height: 50rpx;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%,-50%);
            }
        }
        .txt{
            font-size: 30rpx;
            color: #FFFFFF;
            margin-top: 24rpx; 
        }
    }
    .orderWrap{
        position: relative;
        width: 664rpx;
        height: 449rpx;
        margin: 0 auto;
        margin-top: -88rpx;
        .line{
            width: 704rpx;
            height: 20rpx;
            background: #A3363F;
            opacity: 0.45;
            border-radius: 9px;
            position: absolute;
            top: -10rpx;
            left: -20rpx;
        }
    }
    .orderInfo{
        background: #FFFFFF;
        padding: 89rpx 32rpx;
        box-sizing: border-box;
        position: absolute;
        width: 100%;
        .price{
            font-size: 52rpx;
            padding-bottom: 89rpx;
            text-align: center;
        }
        .symbol{
            font-size: 30rpx;
        }
    }
    .common{
        .item{
            display: flex;
            height: 58rpx;
            line-height: 58rpx;
            font-size: 26rpx;
            color: #333;
            .pre{
                color: #666;
            }
        }
    }
    .btnList{
        position: absolute;
        bottom: -260rpx;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        justify-content: center;
        gap: 20rpx;
    }
    .orderBtn{
        width: 320rpx;
        height: 88rpx;
        line-height: 88rpx;
        text-align: center;
        background: linear-gradient(45deg, #F2473F, #F26E2F);
        border-radius: 44rpx;
        font-size: 32rpx;
        color: #FFFFFF;
        box-sizing: border-box;
        &.plain{
            border: 1px solid #F2473F;
            background: none;
            color: #F2473F;
        }
    }
}
</style>
