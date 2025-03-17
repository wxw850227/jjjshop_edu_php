<template>
	<view class="index" v-if="!loading">
		<view class="index-head">
			<view class="index-head-top">
				<view class="f32">请选择充值套餐:</view>
			</view>
			<view class="index-head-bottom">
				<view class="index-head-bottom-item" v-for="(item,index) in tableData" :key="index" @click="select(index,item)" >
					<view  :class="active==index?'radio active':'radio'">
						<image src="../../static/select-w.png" mode=""></image>
					</view>
					<view style="height: 40rpx;" class="d-c-c">
						<view class="name-box theme-btn">套餐{{index+1}}</view>
					</view>
					<view class="flex-1">
						<view class="f26" style="line-height: 40rpx;">{{item.plan_name}}</view>
						<view class="f26">充<text class="dominant">{{item.money}}</text>送<text class="dominant">{{item.give_money}}</text></view>
					</view>
				</view>
			</view>
			<view class="head-top-botm">注：充值金额只能消费，不能提现;</view>
		</view>
		<view class="index-body">
			<view class="index-head-top center">
				<view class="f32 p-0-20">可自定义充值金额:</view>
			</view>
			<view class="index-body-top" @click="select(-1)">
				<view class="d-s-c flex-1 border-b-d9">
					<view>￥</view><input type="text" v-model="user_money" />
				</view>
			</view>
			<view class="gray p-0-30">最低充值金额：{{settings.min_money}}元</view>
			<view class="index-body-bottom">
				<view class="index-body-bottom-info">
					<view class="f32 mb23">充值说明</view>
					<text class="gray f26">{{settings.describe}}</text>
				</view>
			</view>
		</view>
		<view class="btn">
			<button class="theme-btn" @click="payFunc">确认支付</button>
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
				tableData: [],
				settings: {
					min_money: 0 
				},
				active: -1,
				/*套餐id*/
				plan_id: 0,
				/*自定义金额*/
				user_money: '',
				loading: true,
			
			}
		},
		watch: {
			user_money(val) {
				if (val != '') {
					this.active = -1;
					this.plan_id = 0;
				}
			}
		},
		mounted() {
			/*获取数据*/
			this.getData();
			console.log('金额',this.min_money);
		},
		methods: {
			/*获取数据*/
			getData() {
				let self = this;
				self.loading = true;
				uni.showLoading({
					title: '加载中'
				})
				self._get(
					'balance.plan/index', {
						pay_source: self.getPlatform()
					},
					function(data) {
						self.loading = false;
						uni.hideLoading();
						self.tableData = data.data.list;
						self.settings = data.data.settings;
						self.settings.min_money = parseFloat(self.settings.min_money);
					}
				);
			},
			//选择套餐
			select(index,item) {
				this.active = index;
				console.log(this.active);
				this.user_money = '';
			},
			payFunc() {
				let self = this;
				uni.showLoading({
					title: '加载中',
					mask: true
				});
				if (self.active != -1) {
					self.plan_id = self.tableData[self.active]['plan_id'];
				}
				if (parseFloat(self.user_money) < self.settings.min_money) {
					uni.showToast({
						icon: 'none',
						title: '充值金额不能低于' + self.settings.min_money + '元'
					});
					return;
				}
				if (self.plan_id == 0 && self.user_money == '') {
					uni.showToast({
						icon: 'none',
						title: '请选择充值套餐或输入要充值的金额'
					});
					return;
				}
				self._post('balance.plan/submit', {
					plan_id: self.plan_id,
					user_money: self.user_money,
					pay_source: self.getPlatform(),
				}, function(res) {
                    let pages = `/pages/order/cashier?order_id=${res.data.order_id}&order_type=${res.data.order_type}`
                    self.gotoPage(pages,'reLaunch');
                });
				/* self._post('balance.plan/submit', {
					plan_id: self.plan_id,
					user_money: self.user_money,
					pay_source: self.getPlatform()
				}, function(result) {
					uni.hideLoading();
					pay(result, self, function() {
						uni.showToast({
							title: '充值成功'
						}, 1000);
						setTimeout(function() {
							uni.navigateBack();
						}, 1000);
					}, function() {
						uni.showToast({
							icon: 'none',
							title: '充值失败'
						});
					});
				}); */
			},
		}
	}
</script>

<style lang="scss">
	page {
		background: #f2f2f2;
	}
	.theme-btn{
		 background: linear-gradient(45deg, #F2473F, #F26E2F);
	}
	.gray {
		color: #808080;
	}

	.font-28 {
		font-size: 28rpx;
	}

	.font-36 {
		font-size: 36rpx;
	}

	.index {
		width: 750rpx;
		padding-top: 26rpx;
	}

	.index-head {
		width: 750rpx;
		margin: 0 auto;
		padding: 30rpx 20rpx;
		padding-bottom: 50rpx;
		box-sizing: border-box;
		background-color: white;
		margin-bottom: 30rpx;
	}

	.index-head-top {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		flex-direction: column;
	}
	.index-head-top.center{
		padding: 30rpx 0;
	}
	.head-top-botm {
		color: #999999;
		font-size: 26rpx;
		margin-top: 20rpx;
	}

	.index-head-bottom {
		
	}
	.radio{
		width: 40rpx;
		height: 40rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		line-height: 40rpx;
		border: 1rpx solid #EEEEEE;
		box-sizing: border-box;
		border-radius: 50%;
		image{
			width: 32rpx;
			height: 32rpx;
			border-radius: 50%;
		}
	}
	.radio.active{
		background-color: $dominant-color;
		border: none;
	}
	.name-box{
		width: 62rpx;
		height: 32rpx;
		font-size: 18rpx;
		text-align: center;
		line-height: 32rpx;
		margin-right: 18rpx;
		margin-left: 15rpx;
	}
	.index-head-bottom-item {
		position: relative;
		color: #333333;
		display: flex;
		justify-content: center;
		align-items: flex-start;
		padding: 26rpx 0;
		border-bottom: 1rpx solid #EEEEEE;
	}
	.givemoney {
		position: absolute;
		top: 0;
		left: 0;
		width: 90rpx;
		height: 33rpx;
		background-color: #F6220C;
		color: #FFFFFF;
		font-size: 20rpx;
		line-height: 33rpx;
		text-align: center;
		border-top-left-radius: 12rpx;
		border-bottom-right-radius: 12rpx;
	}

	.index-body {
		width: 750rpx;
		background-color: #FFFFFF;
		margin-bottom: 30rpx;
	}

	.index-body-top {
		/* width: 660rpx; */
		height: 80rpx;
		padding: 0 20rpx;
		margin: 0 auto;
		display: flex;
		justify-content: flex-start;
		align-items: flex-end;
		color: #4b4b4b;
		margin-bottom: 15rpx;
		margin-top: 30rpx;
		padding-bottom: 10rpx;
		font-size: 28rpx;

	}

	.active {
		background-color: #FDE34880;
		color: #323333;
	}

	.index-body-top input {
		flex: 1;
		font-size: 48rpx;
		font-weight: bold;
	}

	.index-body-bottom {
		width: 750rpx;
		padding: 30rpx 20rpx;
		background-color: white;
		border-top: 16rpx solid #f2f2f2;
		margin-top: 20rpx;
	}

	.checkbox {
		display: flex;
		align-items: center;
	}

	.index-body-bottom-info {
		/* margin-top: 65rpx; */
	}

	.index-body-bottom-info view {
		margin-top: 10rpx;
	}

	.btn {
		margin-top: 50rpx;
	}

	.btn button {
		width: 710rpx;
		height: 80rpx;
		line-height: 80rpx;
		border-radius: 40rpx;
		margin: 0 auto;
		color: white;
		font-size: 32rpx;
	}

	.rule text {
		margin-left: 15rpx;
		color: #88B5D1;
	}
</style>
