<template>
    <view class="wrap">
        <view class="address">
            <view class="header" @click="gotoPage('/pages/user/address/address')">
                <view class="l">
                    <div class="title" v-if="address">
                        <image class="img" src="/static/address/address.png"></image>
                        收件信息
                    </div>
                    <div v-else> <image class="img" src="/static/address/address.png"></image>添加地址</div>
                </view>
                <view class="r">
                    <u-icon width="12rpx" height="12rpx" color="#999999" name="arrow-right"></u-icon>
                </view>
            </view>
            <view class="info" v-if="address">
                <view class="item">
                    <view class="pre" >收货人：</view>
                    <view class="txt">{{ address? address.name : '' }}</view>
                </view>
                <view class="item">
                    <view class="pre" >手机号：</view>
                    <view class="txt">{{ address? address.phone : '' }}</view>
                </view>
                <view class="item">
                    <view class="pre" >收货地址：</view>
                <view class="txt" v-if="isAddressComplete">{{ address ? (address.region.province + address.region.city + address.region.region + address.detail) : '' }}</view>
                <!-- <view v-else style="color: red;">请添加收货地址</view> -->
                    <!-- <view class="txt" v-if="address.region">{{ address.region.province }}{{ address.region.city }}{{ address.region.region }}{{ address.detail }}</view> -->
                </view>
            </view>
        </view>
        <view class="product">
            <view class="title">兑换商品</view>
            <view class="productInfo">
                <view class="masterPic">
                    <image mode="scaleToFill" class="img" :src="detail.file_path"></image>
                </view>
                <view class="info">
                    <view class="titleBox">
                        <view class="title">{{ detail.product_name }}</view>
                        <view class="num">X{{ params.total_num }}</view>
                    </view>
                    <view class="price">￥{{ detail.product_price }}</view>
                </view>
            </view>
            <view class="total">
                <view class="pre">商品合计</view>
                <view class="next">￥{{ detail.total_price }}</view>
            </view>
            <view class="distribution">
                <view class="pre">配送费用</view>
                <view class="next">￥{{ detail.express_price }}</view>
            </view>
            <view class="intro">
                <view class="txt">
                    <image class="img" src="/static/address/warning.png"></image>
                    兑换商品后不支持退换
                </view>
                <view class="txt">共1件商品  小计 <text class="flagPrice">￥{{ detail.total_price }}</text></view>
            </view>
        </view>
        <view class="bottomFixed">
            <view class="payBox">
                <view class="price">
                    <text v-if="true">
                        <text class="txt">￥</text>
                        <text>{{ totalPrice }}+</text>
                    </text>
                    <text>{{ detail.total_points }}</text>
                    <text class="txt">积分</text>
                </view>
                <view class="btn" @click="SubmitOrder">提交订单</view>
            </view>
        </view>
    </view>
</template>

<script>
	export default {
		data() {
			return {
				loadding: true,
                isAddressComplete: false,
                params:{
                    pay_source: '',
                    product_id: 0,
                    total_num: 1,
                },
                detail:{},
                address:{},
                totalPrice: 0,
				/*消息模板*/
				temlIds: [],
			};
		},
		onShow() {
			this.getData();
		},
		onLoad(options) {
            this.params.pay_source = this.getPlatform();
            if(options && options.product_id){
                this.params.product_id = options.product_id;
            }
            if(options && options.total_num){
                this.params.total_num = options.total_num;
            }
		},
        watch: {
        address: {
           handler(newAddress) {
            this.isAddressComplete = newAddress && newAddress.name && newAddress.phone && newAddress.region;
             },
             deep: true,
              },
        },
		methods: {
			/*获取数据*/
			getData() {
				let self = this;
				uni.showLoading({
					title: '加载中'
				});
				self._get('plus.points.order/buy', self.params, function(res) {
                    const { data: { order }} = res;
					self.temlIds = res.data.template_arr;
                    self.detail = order;
                    self.address = order.address;
                    self.totalPrice = parseFloat(self.detail.total_price) + parseFloat(self.detail.express_price)
					self.loadding = false;
					uni.hideLoading();
				});
			},
            SubmitOrder(){
                let self = this;
                   if (!self.isAddressComplete) {
                    uni.showToast({
                      icon: 'none',
                      title: '请完整填写收货地址',
                   });
                  return; 
                  }
                let params = {
                    product_id: this.detail.product_id,
                    total_num: this.params.total_num,
				};
				let callback = function() {
					self._post('plus.points.order/buy', params, function(res) {
						let pages = `/pages/order/cashier?order_id=${res.data.order_id}&order_type=${res.data.order_type}`
						self.gotoPage(pages,'reLaunch');
					});
				};
				self.subMessage(self.temlIds, callback);
            },
		}
	};
</script>

<style lang="scss" scoped>
.wrap{
    padding: 26rpx 20rpx;
}
.address{
    background: #fff;
    padding: 30rpx 20rpx;
    border-radius: 20rpx;
    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 48rpx;
        .title{
            font-size: 30rpx;
            color: #111111;
        }
        .img{
            width: 48rpx;
            height: 48rpx;
            display: inline-block;
        }
    }
    .info{
        margin-top: 40rpx;
        .item{
            display: flex;
            align-items: center;
            font-size: 28rpx;
            height: 50rpx;
            line-height: 50rpx;
        }
        .pre{
            color: #999999; 
            width: 140rpx;
        }
        
    }
}
.product{
    margin-top: 20rpx;
    margin-top: 25rpx;
    background: #fff;
    padding: 30rpx 20rpx;
    .title{
        padding-bottom: 30rpx;
        color: #111111;
        font-size: 30rpx;
    }
    .productInfo{
        display: flex;
        gap: 26rpx;
        height: 153rpx;
        .masterPic{
            width: 212rpx;
            .img{
                width: 100%;
                height: 100%;
            }
        }
        .info{
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .titleBox{
                position: relative;
                .title{
                    font-size: 28rpx;
                    color: #111111;
                    max-width: 380rpx;
                    height: 40rpx;
                    overflow:hidden;
                    text-overflow:ellipsis;
                    display:-webkit-box;
                    -webkit-box-orient:vertical;
                    -webkit-line-clamp:2;
                }
                .num{
                    font-size: 24rpx;
                    color: #999;
                    position: absolute;
                    right: 0;
                    top: 0;
                }
            }
            .price{
                font-size: 30rpx;
                font-weight: bold;
                color: #F2473F;
            }
        }
    }
    .total,.distribution,.intro{
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #EEEEEE;
        height: 92rpx;
        line-height: 92rpx;
    }
    .intro{
        font-size: 26rpx;
        color: #999999;
        .flagPrice{
            color: #333333;
            font-size: 32rpx;
            font-weight: 600;
        }
        .img{
            width: 33rpx;
            height: 34rpx;
            display: inline-block;
        }
    }
}
.bottomFixed{
    position: fixed;
    left: 0;
    bottom: 0;
    height: 95rpx;
    padding: 0 20rpx;
    background: #fff;
    width: 100%;
    box-sizing: border-box;
    .payBox{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
    }
    .price{
        font-size: 42rpx;
        color: #F2473F;
        font-weight: bold;
        .txt{
            display: inline-block;
            font-size: 28rpx;
            transform: scale(0.8);
        }
    }
    .btn{
        width: 336rpx;
        height: 72rpx;
        line-height: 72rpx;
        text-align: center;
        font-size: 30rpx;
        color: #FFFFFF;
        background: linear-gradient(45deg, #F2473F, #F26E2F);
        border-radius: 40rpx;

    }
}
</style>
