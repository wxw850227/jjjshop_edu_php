<template>
	<view class="wrap">
		<view class="orderInfo">
			<view class="title">订单信息</view>
			<view class="product">
				<view class="masterPic">
					<image mode="scaleToFill" class="img" :src="productList.image && productList.image.file_path">
					</image>
				</view>
				<view class="info">
					<view class="name">{{ productList.title }}</view>
					<view class="price">
						<text class="symbol">￥</text>
						<text>{{ productList.course_price }}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="fixedBottom">
			<view class="content">
				<view class="l">
					<text class="txt">应付：</text>
					<text class="symbol">￥</text>
					<text>{{ orderInfo.order_pay_price }}</text>
				</view>
				<view class="payBtn" @click="SubmitOrder">确认支付</view>
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
				orderInfo: {},
				productList: {},
				course_id: null,
				paper_id: null,
				type: null,
				/*消息模板*/
				temlIds: [],
			};
		},
		onShow() {
			this.getData();
		},
		onLoad(options) {
			this.course_id = options.course_id;
			this.paper_id = options.paper_id;
			this.type = options.type;
		},
		methods: {
			/*获取数据*/
			getData() {
				let self = this;
				uni.showLoading({
					title: '加载中'
				});
				if (self.type == 'paper') {
					self._get('paper.order/buy', {
						paper_id: self.paper_id,
						pay_source: self.getPlatform()
					}, function(res) {
						self.temlIds = res.data.template_arr;
						self.orderInfo = res.data.orderInfo;
						self.productList = res.data.orderInfo.productList[0];
						self.productList.course_price = self.productList.money
						self.loading = false;
						uni.hideLoading();
					})
				} else {
					self._get('course.order/buy', {
						course_id: self.course_id,
						pay_source: self.getPlatform()
					}, function(res) {
						self.temlIds = res.data.template_arr;
						self.orderInfo = res.data.orderInfo;
						self.productList = res.data.orderInfo.productList[0];
						self.loading = false;
						uni.hideLoading();
					})
				}
			},
			SubmitOrder() {
				let self = this;
				let url = '';
				let page = '/pages/order/cashier?order_id=';
				let params = {};
				// 普通课程
				if (this.type == 'course') {
					params = {
						course_id: self.course_id,
					};
					url = 'course.order/buy';
				} else if (this.type == 'eduadmin') {
					params = {
						course_id: self.course_id,
					};
					url = 'course.order/eduBuy';
				} else if (this.type == 'paper') {
					params = {
						paper_id: self.paper_id,
					};
					url = 'paper.Order/buy';
				}
				let callback = function() {
					self._post(url, params, function(res) {
						let pages =
							page + `${res.data.order_id}&order_type=${res.data.order_type}&type=` + self.type;
						self.gotoPage(pages, 'reLaunch');
					});
				};
				self.subMessage(self.temlIds, callback);
			},

		}
	};
</script>

<style lang="scss" scoped>
	.wrap {
		padding: 20rpx;
	}

	.orderInfo {
		background: #fff;
		padding: 0 20rpx;
		border-radius: 20rpx;
		padding-bottom: 20rpx;

		.title {
			font-size: 30rpx;
			color: #111111;
			height: 84rpx;
			line-height: 84rpx;
		}

		.product {
			display: flex;
			height: 163rpx;
			gap: 20rpx;

			.masterPic {
				width: 273rpx;
				height: 100%;
				background: #eee;
				border-radius: 12rpx;
				overflow: hidden;

				.img {
					width: 100%;
					height: 100%;
				}
			}

			.info {
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				.name {
					font-size: 28rpx;
					color: #111;
					max-width: 340rpx;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
				}

				.price {
					font-size: 36rpx;
					color: #F2473F;
				}

				.symbol {
					font-size: 24rpx;
				}
			}
		}
	}

	.fixedBottom {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 96rpx;
		width: 100%;
		background: #fff;
		padding: 0 26rpx;
		box-sizing: border-box;

		.content {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 100%;

			.l {
				font-size: 40rpx;
				color: #F2473F;

				.txt {
					font-size: 28rpx;
					color: #111111;
				}

				.symbol {
					font-size: 26rpx;
				}
			}

			.payBtn {
				width: 336rpx;
				height: 72rpx;
				line-height: 72rpx;
				text-align: center;
				color: #fff;
				font-size: 30rpx;
				background: linear-gradient(45deg, #F2473F, #F26E2F);
				border-radius: 50rpx;
			}
		}
	}
</style>