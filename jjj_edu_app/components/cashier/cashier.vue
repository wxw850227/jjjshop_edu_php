<template>
	<!-- 课程收银台 -->
	<view :class="Visible ? 'pop-bg open' : 'pop-bg close'" @click.stop>
		<view class="pop-content" @click.stop>
			<image @click="closePop(null)" class="close-img" src="/static/icon/close.png" mode=""></image>
			<view class="tc f32 fb">支付方式</view>
			<view v-for="(item,index) in checkedPay" :key="index">
				<view  v-if="item!=10 && !isIos">
					<view class="cashier-item" :class="pay_type == item ? 'active' : ''"
						@tap="payTypeFunc(item)">
						<template v-if="item==20">
						<view class="d-s-c">
						<view class="icon-box d-c-c mr10"><span class="icon iconfont icon-weixin"></span></view>
						<text class="key">微信支付：</text>
						</view>
						</template>
						<template v-if="item==30">
						<view class="d-s-c">
						<view class="icon-box d-c-c mr10"><span class="icon iconfont icon-zhifubao"></span></view>
						<text class="key">支付宝支付：</text>
						</view>
						</template>
					</view>
				</view>
			</view>
			<view class="cashier-item" v-if="isIos || use_balance">
				<view class="f28 gray3">余额支付：<text class="dominant">(可用余额：{{ balance }})</text></view>
				<switch v-if="!isIos && checkedPay.length!=1" color='#F2473F' :disabled="isIos"
					style="transform:scale(0.7);margin-right: -20rpx;" :checked="balanceType" @change="switch2Change" />
			</view>
			<view class="cashier-item" v-if="OrderData.is_allow_star ==1 && OrderData.is_open_star ==1">
				<view class="f28 gray3">积分抵扣:</view>
				<switch color='#F2473F' style="transform:scale(0.7);margin-right: -20rpx;" :checked="is_use_star"
					@change="switchStarChange" />
			</view>
			<view class="pay-btn" @click="subFunc">立即支付</view>
		</view>
		<!-- <paypassword :title="'购买'" :isPopup="isPass" :payInfo="OrderData.order_pay_price" @close="closePass"></paypassword> -->
	</view>
</template>

<script>
	// import paypassword from '@/components/paypassword/paypassword';
	import config from '@/env/config.js';
	import {
		pay
	} from '@/common/pay.js';
	export default {
		components: {
			// paypassword
		},
		data() {
			return {
				isIos: false,
				/*是否可见*/
				Visible: false,
				checkedPay: ['10', '20', '30'],
				/*底部加载*/
				loading: false,
				pay_type: 0,
				balance: '',
				use_balance: 1,
				balanceType: false,
				platform: '',
				isPass: false,
				OrderData: {},
				is_use_star: false
			}
		},
		props: ['isPopup', 'course_id', 'price', 'room_id', 'paper_id'],
		watch: {
			isPopup: function(n, o) {
				let self = this;
				if (n != o) {
					self.Visible = n;
					if (n) {
						this.getStar();
						this.getData();
					}
				}
			}
		},
		methods: {
			closePass(e) {
				this.isPass = false;
				if (e) {
					this.subMit(e);
				}
			},
			subFunc() {
		  		let use_balance = this.balanceType == true ? 1 : 0;
				if(use_balance){
					this.isPass = true;
				}else{
					this.subMit('');
				}
			   
				
			},
			payTypeFunc(n) {
				this.pay_type = n;
			},
			switch2Change(e) {
				this.balanceType = e.detail.value;
			},
			switchStarChange(e) {
				this.is_use_star = e.detail.value;
				this.getStar();
			},
			getStar() {
				let self = this;
				let page = self.page;
				self.loading = true;
				let url = '';
				let params = {};
				if (self.course_id) {
					url = 'course.order/buy';
					params = {
						course_id: self.course_id,
						is_use_star: self.is_use_star ? 1 : 0
					}
				}
				if (self.paper_id) {
					url = 'paper.Order/buy';
					params = {
						paper_id: self.paper_id,
						is_use_star: self.is_use_star ? 1 : 0
					}
				}
				self._get(url, params, function(res) {
					self.loading = false;
					self.OrderData = res.data.orderInfo;
				});
			},
			getData() {
				let self = this;
				let page = self.page;
				let search = self.search;
				self.platform = uni.getSystemInfoSync().platform;
				self.loading = true;
				self._get('settings/checkPay', {
					platform: self.platform,
					version: config.app_version
				}, function(res) {
					self.loading = false;
					self.checkedPay = res.data.checkedPay;
					console.log(self.checkedPay);
					self.use_balance = res.data.use_balance;
					self.balance = res.data.balance;
					if (res.data.iap == 20) {
						if (self.platform == 'ios') {
							self.balanceType = true;
							self.isIos = true;
							return
						}
					}
					if (self.checkedPay[0] != 10) {
						self.pay_type = self.checkedPay[0] || self.checkedPay[1] || 20;
					} else {
						self.pay_type = self.checkedPay[1] || self.checkedPay[0];
					}
				});
				
			},
			subMit() {
				let self = this;
				let use_balance = self.balanceType == true ? 1 : 0;
				let pay_type = self.pay_type;
				console.log(pay_type);
				if (pay_type == 10 || pay_type == 0) {
					pay_type = 0;
					use_balance = 1;
				}
				let params = {
					pay_type: pay_type,
					use_balance: use_balance,
					pay_source: self.getPlatform(),
					// pay_password: e,
					// is_use_star: self.is_use_star ? 1 : 0
				}

				if (self.room_id) {
					params.room_id = self.room_id
				}
				// if (self.isIos) {
				// 	params.pay_type = 0;
				// 	if (self.OrderData.order_pay_price > self.balance) {
				// 		uni.showModal({
				// 			title: '提示',
				// 			content: '余额不足，是否前往充值',
				// 			success: function(res) {
				// 				if (res.confirm) {
				// 					self.gotoPage('/pages/order/rechange-iap')
				// 					self.$emit('close', true)
				// 				} else if (res.cancel) {
				// 					self.$emit('close', true)
				// 				}
				// 			}
				// 		})
				// 		return
				// 	}
				// }
				uni.showLoading({
					title: '支付中'
				})
				let url = '';
				if (self.course_id) {
					url = 'course.order/buy';
					params.course_id = self.course_id
				}
				if (self.paper_id) {
					url = 'paper.Order/buy';
					params.paper_id = self.paper_id
				}
				self._post(url, params, function(res) {
					uni.hideLoading();
					pay(res, self, (res) => {
						self.showSuccess('购买成功', () => {
							self.$emit('close', true)
						})
						return
					}, (err) => {

					});
					self.loading = false;
				}, (err) => {

				});
			},
			closePop(e) {
				this.$emit('close', e)
			}
		}
	}
</script>

<style lang="scss">
	.dominant {
		color: $dominant-color;
	}

	.pop-bg {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		background: rgba(0, 0, 0, 0.5);
		z-index: 100;

		.pop-content {
			position: fixed;
			z-index: 101;
			bottom: 0;
			width: 100%;
			height: 719rpx;
			padding: 40rpx 24rpx 0 23rpx;
			box-sizing: border-box;
			transform: translate3d(0, 0, 0);
			transition: transform 0.2s cubic-bezier(0, 0, 0.25, 1);
			background-color: #FFFFFF;
			border-radius: 15rpx 15rpx 0rpx 0rpx;

			.icon.icon-guanbi {
				background: #dedede;
				border-radius: 50%;
				color: #FFFFFF;
				position: absolute;
				right: 26rpx;
				top: 40rpx;
				font-size: 22rpx;
				display: flex;
				width: 40rpx;
				height: 40rpx;
				justify-content: center;
				align-items: center;
			}
		}
	}

	.close-img {
		width: 32rpx;
		height: 32rpx;
		position: absolute;
		right: 32rpx;
		top: 32rpx;
	}

	.pop-bg.close {
		// display: none;
		height: 0;

		.pop-content {
			transform: translate3d(0, 2000rpx, 0);
		}
	}

	.search-place {
		color: rgba(0, 0, 0, 0.16);
		font-weight: bold;
	}

	.search-input {
		font-size: 36rpx;
		width: 582rpx;
		height: 96rpx;
		background: rgba(0, 0, 0, 0.04);
		opacity: 1;
		border-radius: 16rpx;
		padding: 0 32rpx;
		margin-right: 32rpx;
		padding-right: 92rpx;
	}

	.product-list {
		height: calc(80vh - 132rpx);
		padding-top: 40rpx;
		padding-bottom: env(safe-area-inset-bottom);
		box-sizing: border-box;

		.product-item {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 48rpx;

			.product_image {
				width: 112rpx;
				height: 112rpx;
				border-radius: 8rpx;
				border: 1rpx solid #DEDEDE;
				margin-right: 24rpx;

				image {
					width: 110rpx;
					height: 110rpx;
					border-radius: 8rpx;
				}
			}

			.product_name {
				font-size: 28rpx;
				font-weight: 600;
				color: rgba(0, 0, 0, 0.87);
				margin-bottom: 20rpx;
			}

			.stock {
				font-size: 24rpx;
				font-weight: 400;
				color: rgba(0, 0, 0, 0.56);
				white-space: nowrap;
			}

			.price {
				font-size: 28rpx;
				font-weight: 500;
				color: rgba(0, 0, 0, 0.56);
				margin: 0 32rpx;
				font-weight: 600;
			}

			.add-icon {
				width: 48rpx;
				height: 48rpx;

				image {
					width: 48rpx;
					height: 48rpx;
				}
			}
		}
	}

	.cashier-item {
		height: 89rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1rpx solid #EEEEEE;

		.icon-box {
			width: 38rpx;
			height: 38rpx;
			border: 1rpx solid #DDDDDD;
			border-radius: 5rpx;

			.icon-tijiaochenggong {
				font-size: 26rpx;
				color: #FFFFFF;
			}

		}
			.payment-icon{
			width: 52rpx;
			height: 52rpx;
			background: #6BCC03;
			border-radius: 5rpx;
	}
		.icon-box.border {
			border-radius: 50%;
		}
	}

	.cashier-item.active .icon-box {
		border: 1rpx solid #F2473F;
		background: #F2473F;
	}

	.pay-btn {
		width: 750rpx;
		height: 96rpx;
		font-size: 32rpx;
		color: #FFFFFF;
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		left: 0;
		bottom: 0;
		background: #F2473F;
	}

</style>
