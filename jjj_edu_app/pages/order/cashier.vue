<template>
	<view :data-theme='theme()' :class="theme() || ''">
		<view class="tc buy-checkout-top">
			<view class="f32 mb20">待支付</view>
			<view class="redA8 f60 fb">￥{{payPrice || ''}}</view>
		</view>
		<view class="buy-checkout p-0-30">
			<view v-for="(item,index) in checkedPay" :key='index'>
				<view v-if="item==20" :class="pay_type == 20 ? 'item active' : 'item'" @tap="payTypeFunc(20)">
					<view class="d-s-c">
						<view class="icon-box d-c-c mr10"><span class="icon iconfont icon-weixin"></span></view>
						<text class="key">微信支付：</text>
					</view>
					<view class="icon-box d-c-c"><span class="icon iconfont icon-xuanze"></span></view>
				</view>
				<view v-if="item==30" :class="pay_type == 30 ? 'item active' : 'item'" @tap="payTypeFunc(30)">
					<view class="d-s-c">
						<view class="icon-box d-c-c mr10"><span class="icon iconfont icon-zhifubao"></span></view>
						<text class="key">支付宝支付：</text>
					</view>
					<view class="icon-box d-c-c"><span class="icon iconfont icon-xuanze"></span></view>
				</view>
			</view>
			<view v-if="hasBanlance && balance > 0" class="item">
				<view class="d-s-c">
					<view class="icon-box d-c-c mr10"><span class="icon iconfont icon-yue"></span></view>
					<text class="key">余额抵扣：(剩余：{{balance}})</text>
				</view>
				<switch :color="getThemeColor()" style="transform:scale(0.7);margin-right: -20rpx;"
					:checked="balanceType" @change="switch2Change" />
			</view>
		</view>
		<view class="bottom-btn" @click="submit">
			<button type="default">立即支付</button>
		</view>
	</view>
</template>

<script>
	import {
		pay
	} from '@/common/pay.js';
	export default {
		data() {
			return {
				balance: '',
				balanceType: false,
				type: 0,
				loading: true,
				order_id: 0,
				order_type: 0,
				pay_type: 20,
				checkedPay: [],
				payPrice: '',
				/*
				course 普通课程
				eduadmin 教务课程
				paper 付费试卷
				*/
				type: "",
			}
		},
		computed: {
			hasBanlance() {
				let n = this.checkedPay.indexOf(10);
				if (n == -1) {
					return false
				} else {
					return true
				}


			},
		},
		onLoad(e) {
			let self = this;
			this.order_id = e.order_id;
			if (e.order_type) {
				this.order_type = e.order_type;
			}
			this.type = e.type;
			// #ifdef MP
			if (this.order_type != 30 && this.order_type != 20) {
				console.log('-------------------------')
				wx.enableAlertBeforeUnload({
					message: "您的订单如在规定时间内未支付将被取消，请尽快完成支付",
					success: function(res) {
						// uni.reLaunch({
						// 	ulr: '/pages/order/order-detail?order_id=' + self.order_id
						// })
						console.log("方法注册成功：", res);
					},
					fail: function(errMsg) {
						console.log("方法注册失败：", errMsg);
					},
				});
			}

			// #endif

			this.getData()
		},
		onBackPress(options) {
			if (this.order_type != 30 && this.order_type != 20) {
				if (options.from === 'navigateBack') {
					console.log();
					return true;
				}
				this.back();
				return true;
			}
		},

		methods: {
			back() {
				let self = this;
				uni.showModal({
					title: '提示',
					content: '您的订单如在规定时间内未支付将被取消，请尽快完成支付',
					cancelText: '继续支付',
					confirmText: '确认离开',
					success: function(res) {
						if (res.confirm) {
							let url = '';
							if(self.type == 'course'){
								url = '/pages/order/course'
							}else if(self.type == 'eduadmin'){
								url = '/pages/order/teacher'
							}else if(self.type == 'paper'){
								url = '/pages/order/exam'
							}
							self.gotoPage(`${url}`, 'reLaunch')
							/* uni.reLaunch({
								ulr: '/pages/order/order-detail?order_id=' + self.order_id
							}) */
						} else if (res.cancel) {
							uni.navigateBack();
							console.log('用户点击取消');
						}
					}
				})
			},
			getData() {
				let self = this;
				self.loading = true;
				uni.showLoading({
					title: '加载中'
				});
				let url;
				if (self.order_type == 20) {
					url = 'balance.Plan/pay';
				}
				if (self.order_type == 30) {
					url = 'plus.points.order/pay';
				}
				if (self.order_type == 10) {
					url = 'user.Order/pay';
				}
				let params = {
					order_id: self.order_id,
					pay_source: self.getPlatform()
				}
				self._get(
					url, params,
					function(res) {
						self.loading = false;
						let list = [];
						res.data.payTypes.payType.forEach(item => {
							list.push(item * 1);
						})
						self.checkedPay = list;
						self.payPrice = res.data.payPrice;
						self.balance = res.data.balance || '';
						if (self.checkedPay[0] != 10) {
							self.pay_type = self.checkedPay[0] || self.checkedPay[1] || 20;
						} else {
							self.pay_type = self.checkedPay[1] || self.checkedPay[0];
						}
						uni.hideLoading();
					})
			},
			switch2Change(e) {
				this.balanceType = e.detail.value;
			},
			submit() {
				let self = this;
				self.loading = true;
				uni.showLoading({
					title: '加载中'
				});
				let url = 'user.order/pay';
				if (self.order_type == 20) {
					url = 'balance.Plan/pay';
				}
				if (self.order_type == 30) {
					url = 'plus.points.order/pay';
				}
				if (self.order_type == 10) {
					url = 'user.Order/pay';
				}
				let use_balance = self.balanceType == true ? 1 : 0;
				if (self.payPrice == 0) {
					use_balance = 1;
				}
				let payType = self.pay_type;
				if (payType == 10) {
					payType = 0;
				}
				let params = {
					order_id: self.order_id,
					pay_source: self.getPlatform(),
					payType: payType,
					use_balance: use_balance,
				}
				self._post(url, params,
					function(res) {
						self.loading = false;
						uni.hideLoading();
						pay(res, self, self.paySuccess, self.payError);
					})
			},
			paySuccess(result) {
				let self = this;
				if(self.order_type == 30){
					self.gotoPage(`/pages/order/paySuccess/course?order_id=${result.data.order_id}&order_type=point`, 'reLaunch')
				}else if(self.order_type == 10){
					/* 
					跳转至课程订单页
					试卷
					*/
					self.gotoPage(`/pages/order/paySuccess/course?order_id=${result.data.order_id}&order_type=${self.type}`, 'reLaunch')
				}
			},
			payError(result) {
				let self = this;
				let url = '';
				if(self.type == 'course'){
					url = '/pages/order/course'
				}else if(self.type == 'eduadmin'){
					url = '/pages/order/teacher'
				}else if(self.type == 'paper'){
					url = '/pages/order/exam'
				}
				self.gotoPage(`${url}`, 'redirect') 
				// if (self.order_type == 50 || self.order_type == 10 || self.order_type == 30 || self.order_type == 20) {
				// 	// #ifndef H5
				// 	uni.navigateBack({
				// 		delta: parseInt(1)
				// 	});
				// 	// #endif
				// 	// #ifdef H5
				// 	history.go(-1);
				// 	// #endif
				// } else {
				// 	self.gotoPage('/pages/order/order-detail?order_id=' + result.data.order_id, 'redirect');
				// }
			},
			payTypeFunc(n) {
				this.pay_type = n;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.buy-checkout-top {
		padding: 100rpx 0;
	}

	.buy-checkout {
		.item {
			background-color: #FFFFFF;
			margin-bottom: 28rpx;
			box-shadow: 0rpx 13rpx 27rpx 0rpx rgba(172, 172, 172, 0.09);
			border-bottom: none;
			border-radius: 2rpx;
		}
	}

	.bottom-btn {
		position: fixed;
		bottom: 0;
		/* @include background_color("background_color");
		@include font_color('text_color2'); */
		width: 100%;
		padding-bottom: env(safe-area-inset-bottom);
		padding: 20rpx;
		box-sizing: border-box;
		background: #FFFFFF;
	}

	.bottom-btn>button {
		width: 100%;
		height: 88rpx;
		line-height: 88rpx;
		// @include background_color("background_color");
		// @include font_color('text_color2');
		background: linear-gradient(45deg, #F2473F, #F26E2F);
		color: #FFFFFF;
		border: none;
		border-radius: 50rpx;
		font-size: 32rpx;
		font-weight: bold;
		display: flexd;
		justify-content: center;
		align-items: center;
	}
	.item.active .iconfont.icon-xuanze{
		color:  #F2473F !important;
	}
</style>