<!-- 教务订单 -->
<template>
	<view>
		<view class="top-tabbar">
			<view class="tab-item" :class="{active:type == 0}" @click="changeType(0)">全部订单</view>
			<view class="tab-item" :class="{active:type == 1}" @click="changeType(1)">待支付</view>
			<view class="tab-item" :class="{active:type == 2}" @click="changeType(2)">已完成</view>
		</view>
		<view class="order-list">
			<view class="order-item" v-for="(item,index) in 4" :key="index">
				<view class="item-top">
					<image class="item-t-img" src="../../../static/default.png" mode=""></image>
					<view class="item-t-center">
						<view>
							<view class="f26 gray1 text-ellipsis"> 信息系统项目管理师软考高级信息系统项目管理师软考高级</view>
							<view class="f24 gray9">2022.06.13-2022.11.24 <text>2</text>课时</view>
						</view>
						<view class="f24 gray9">支付金额<text class="redF24 f28 fb">￥13.05</text></view>
					</view>
				</view>
				<view class="d-b-c item-bottom">
					<view class="redF24 f24">已完成</view>
					<view class="d-e-c flex-1">
						<view class="order-btn full">更多课程</view>
						<view class="order-btn">删除订单</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type: 0
			}
		},
		methods: {
			changeType(n) {
				if (this.type == n) {
					return
				}
				this.type = n;
			}
		}
	}
</script>

<style lang="scss">
	.order-list {
		padding: 24rpx;

		.order-item {
			padding: 25rpx 20rpx;
			margin-bottom: 24rpx;
			background: #FFFFFF;
			border-radius: 25rpx;

			.item-top {
				display: flex;
				justify-content: center;
				align-items: center;

				.item-t-img {
					width: 274rpx;
					height: 150rpx;
					background: #FFFFFF;
					border-radius: 13rpx;
					flex-shrink: 0;
					margin-right: 20rpx;
				}

				.item-t-center {
					height: 150rpx;
					flex: 1;
					display: flex;
					justify-content: space-between;
					align-items: flex-start;
					flex-direction: column;
				}
			}

			.item-bottom {
				padding-top: 20rpx;

				.order-btn {
					height: 44rpx;
					line-height: 44rpx;
					background: #FFFFFF;
					border: 1rpx solid #EEEEEE;
					border-radius: 22rpx;
					padding: 0 22rpx;
					font-size: 22rpx;
					color: #333333;
					margin-left: 20rpx;
				}

				.order-btn.full {
					color: #F2473F;
					background-color: rgba($color: #F89C31, $alpha: 0.15);
					border-color: rgba($color: #F89C31, $alpha: 0.15);
				}
			}

		}
	}
</style>
