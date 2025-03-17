<template>
	<view class="p24 pb160">
		<view class="top-box d-c d-c-c">
			<view class="imgBox">
                <image class="img" src="/static/address/success.png"  v-if="detail.order_status && detail.order_status.value == 30"></image>
                <image class="img" src="/static/address/proceed.png" v-else></image>
            </view>
			<!-- <u-icon size="128rpx" name="/static/image/wancheng.png"></u-icon> -->
			<view class="f28 state_text">{{detail.state_text}}</view> 
		</view>
		<view class="center-box">
			<view class="d-b-c border-b" style="padding: 27rpx 0;">
				<view class="mr20">
					<u-icon :name="detail.product && detail.product[0] && detail.product[0].image && detail.product[0].image.file_path" width="274rpx" height="150rpx"></u-icon>
				</view>
				<view style="height: 150rpx;" class="d-c d-b-s pt10 box-s-b flex-1">
					<view class="f28 gray3">{{detail.product && detail.product[0] && detail.product[0].title}}</view>
					<view class="f24 gray9">支付金额<text class="f28 dominant">￥{{ detail.total_price }}</text></view>
				</view>
			</view>
			<view class="p-20-0">
				<view class="f26 d-b-c" style="height: 48rpx;">
					<view class="gray3">订单编号</view>
					<view class="gray9">{{detail.order_no}}</view>
				</view>
				<view class="f26 d-b-c" style="height: 48rpx;">
					<view class="gray3">下单时间</view>
					<view class="gray9">{{detail.create_time}}</view>
				</view>
				<view class="f26 d-b-c" style="height: 48rpx;" v-if="detail.pay_time_text">
					<view class="gray3">支付时间</view>
					<view class="gray9">{{detail.pay_time_text}}</view>
				</view>
				<view class="f26 d-b-c" style="height: 48rpx;">
					<view class="gray3">支付方式</view>
					<view class="gray9">{{detail && detail.pay_type && detail.pay_type.text}}</view>
				</view>
				<view class="f26 d-b-c" style="height: 48rpx;">
					<view class="gray3">订单类型</view>
					<view class="gray9">{{detail.order_source_text}}</view>
				</view>
			</view>
		</view>
		<view class="bottom-nav">
			<view class="dominant f30 fb">￥<text class="f40">{{detail.pay_price}}</text></view>
			<view class="bottom-btn" @click="gotoPage('/pages/knowledge/index')">更多课程</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				order_id: 0,
				detail: {}
			}
		},
		onLoad(e) {
			this.order_id = e.order_id;
			this.getData();
		},
		methods: {
			getData() {
				let self = this;
				self._get('user.Order/detail', {
					order_id: self.order_id
				}, res => {
					self.detail = res.data.order;
				})
			},
		}
	}
</script>

<style lang="scss">
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
	.top-box {
		padding-top: 30rpx;
	}

	.state_text {
		margin-top: 24rpx;
		margin-bottom: 40rpx;
	}

	.center-box {
		width: 706rpx;
		background: #FFFFFF;
		border-radius: 25rpx;
		padding: 0 22rpx;
		box-sizing: border-box;
		margin: 0 auto;
	}

	.bottom-nav {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 750rpx;
		height: 95rpx;
		padding: 14rpx 23rpx 9rpx 29rpx;
		box-sizing: border-box;
		background-color: #FFFFFF;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.bottom-btn {
		width: 336rpx;
		height: 72rpx;
		line-height: 72rpx;
		text-align: center;
		border-radius: 36rpx;
		font-size: 30rpx;
		color: #FFFFFF;
		background: linear-gradient(45deg, #F2473F, #F26E2F);
	}
</style>
