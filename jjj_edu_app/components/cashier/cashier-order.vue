<template>
	<view :class="Visible ? 'pop-bg open' : 'pop-bg close'" @click.stop>
		<view class="pop-content" @click.stop>
			<image @click="closePop(null)" class="close-img" src="/static/icon/close.png" mode=""></image>
			<view class="tc  f32 fb">支付方式</view>
			<template  v-for="(item,index) in checkedPay" :key='index'>
				<template v-if="item!=10">
					<view class="cashier-item" :class="pay_type == item ? 'active' : ''"
						@tap="payTypeFunc(item)">
						<template v-if="item==20">
							<text class="f28 gray3">微信支付：</text>
							<view class="icon-box d-c-c"><span class="icon iconfont icon-tijiaochenggong"></span></view>
						</template>
						<template v-if="item==30">
							<text class="f28 gray3">支付宝支付：</text>
							<view class="icon-box d-c-c"><span class="icon iconfont icon-tijiaochenggong"></span></view>
						</template>
						<template v-if="item==40">
							<text class="f28 gray3">杉德支付：</text>
							<view class="icon-box d-c-c"><span class="icon iconfont icon-tijiaochenggong"></span></view>
						</template>
					</view>
				</template>
			</template>
			<view class="cashier-item" v-if="use_balance">
				<view class="f28 gray3">余额支付：(可用余额：<text class="dominant">{{balance}}</text>)</view>
				<!-- <view class="icon-box border d-c-c"><span class="icon iconfont icon-tijiaochenggong"></span></view> -->
				<switch color='#F2473F' v-if="checkedPay.length!=1" style="transform:scale(0.7);margin-right: -20rpx;"
					:checked="balanceType" @change="switch2Change" />
			</view>
			<view class="d-e-c f28 gray3 mt40">
				支付:<text class="dominant f36 fb">￥</text><text class="dominant f28 fb">{{price}}</text>
			</view>
			<view class="pay-btn" @click="subFunc" v-if="pay_type!=-1">立即支付</view>
		</view>
		<paypassword :title="'购买'" :isPopup="isPass" :payInfo="'￥'+price" @close="closePass"></paypassword>
	</view>
</template>

<script>
	import paypassword from '@/components/paypassword/paypassword';
	import {
		pay
	} from '@/common/pay.js';
	export default {
		components: {
			paypassword
		},
		data() {
			return {
				/*是否可见*/
				Visible: false,
				checkedPay: [],
				/*底部加载*/
				loading: false,
				balance: '',
				use_balance: 0,
				balanceType: false,
				pay_type: 0,
				isPass: false
			}
		},
		props: ['isPopup', 'price'],
		watch: {
			isPopup: function(n, o) {
				let self = this;
				if (n != o) {
					self.Visible = n;
					console.log('isshow:'+n)
					if (n) {
						this.getData();
					}
				}
			}
		},
		methods: {
			subFunc() {
				let use_balance = this.balanceType == true ? 1 : 0;
				if(use_balance){
					this.isPass = true;
				}else{
					this.subMit('');
				}
			},
			closePass(e) {
				this.isPass = false;
				console.log(e);
				if (e) {
					this.subMit(e);
				}
			},
			payTypeFunc(n) {
				this.pay_type = n;
			},
			switch2Change(e) {
				this.balanceType = e.detail.value;
			},
			getData() {
				let self = this;
				let page = self.page;
				let url = 'settings/checkPay';
				self.loading = true;
				// course.order/buy
				let type = uni.getSystemInfoSync().platform == 'ios' ? 'ios' : 'android';
				console.log(type)
				self._get(url, {
					type: type,
				}, function(res) {
					self.loading = false;
					self.checkedPay = res.data.checkedPay;
					console.log(self.checkedPay)
					self.use_balance = res.data.use_balance;
					console.log(self.use_balance)
					self.balance = res.data.balance;
					if (self.checkedPay.length <= 0) {
						self.pay_type = -1;
						return
					}
					if (self.checkedPay[0] != 10) {
						self.pay_type = self.checkedPay[0] || self.checkedPay[1] || 20;
					} else {
						self.pay_type = self.checkedPay[1] || self.checkedPay[0];
					}
					// self.payInfo = res.data.payInfo;
				});
			},
			subMit(e) {
				let self = this;
				let use_balance = self.balanceType == true ? 1 : 0;
				let pay_type = self.pay_type;
				if (pay_type == 10 || pay_type == 0) {
					pay_type = 0;
					use_balance = 1;
				}
				this.$emit('close', {
					pay_type: pay_type,
					use_balance: use_balance,
					pay_password: e
				})
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
		z-index: 1000;

		.pop-content {
			position: fixed;
			z-index: 1001;
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

		.icon-box.border {
			border-radius: 50%;
		}
	}

	.cashier-item.active .icon-box {
		border: 1rpx solid #F2473F;
		background: #F2473F;
		display: flex;
		justify-content: center;
		align-items: center;
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
