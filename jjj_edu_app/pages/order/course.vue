  <!-- 教务订单 -->
<template>
	<view>
		<zsTab :data="tabList" :activeName="type" @chang-tab="changeType" />
		<view class="order-list">
			<view class="order-item" v-for="(item,index) in listData" :key="index"
				@click="gotoPage('/pages/order/detail?order_id='+item.order_id)">
				<view class="item-top">
					<image class="item-t-img" :src="item.product[0].image.file_path" mode=""></image>
					<view class="item-t-center">
						<view>
							<view class="f26 gray1 text-ellipsis">{{item.product[0].title}}</view>
							<view class="f24 gray9">{{item.product[0].create_time}}</view>
						</view>
						<view class="f24 gray9">支付金额<text class="redF24 f28 fb">￥{{item.pay_price}}</text></view>
					</view>
				</view>
				<view class="d-b-c item-bottom">
					<view class="redF24 f24" v-if="item.pay_status.value == 10">{{item.pay_status.text}}</view>
					<view class="redF24 f24" v-else-if="item.order_status.value == 30 && item.is_comment == 0">待评价</view>
					<view class="redF24 f24" v-else>{{item.order_status.text}}</view>
					<view class="d-e-c flex-1">
						<view class="order-btn full" @click.stop="gotoPage(`/pages/order/cashier?order_id=${item.order_id}&order_type=10&type=course`)" v-if="item.pay_status.value == 10">去支付</view> 
						<view class="order-btn full" @click.stop="gotoPage(`pages/order/evaluate?order_id=${item.order_id}`)" v-else-if="item.order_status && item.order_status.value == 30 && item.is_comment == 0">去评价</view>
						<view v-if="item.order_status.value == 30 " class="order-btn full" @click.stop="gotoPage(`/pages/knowledge/course/detail?course_id=${item.product && item.product[0] && item.product[0].product_id}`)">立即学习</view>
						<view class="order-btn full" @click.stop="gotoPage('/pages/knowledge/index')" v-else>更多课程</view>
						<view class="order-btn" v-if="item.pay_type.value == 10 && item.order_status.value != 30" @click.stop="deleteFunc(item.order_id,index)">删除订单</view>
					</view>
				</view>
			</view>
			<view class="">
				<!-- 没有记录 -->
				<view class="d-c-c p30" v-if="listData.length==0 && !loading">
					<text class="iconfont icon-wushuju"></text>
					<text class="cont">亲，暂无相关记录哦</text>
				</view>
				<uni-load-more v-else :loadingType="loadingType"></uni-load-more>
			</view>
		</view>
	</view>
</template>

<script>
	import uniLoadMore from "@/components/uni-load-more.vue";
	import zsTab from "@/components/zs-tab.vue";
	export default {
		components: {
			uniLoadMore,
			zsTab,
		},
		data() {
			return {
				list_rows: 10,
				page: 1,
				loading: false,
				listData: [],
				last_page: 1,
				no_more: false,
				tabList:[
					{
						key: '全部订单',
						value: null,
					},
					{
						key: '待支付',
						value: 'payment',
					},
					{
						key: '已完成',
						value: 'finish',
					},
                    {
						key: '待评价',
						value: 'comment',
					},
				],
				order_type: 0,
                type: null,
			}
		},
		onLoad(options){
			if(options.order_type){
				this.order_type = options.order_type;
			}
		},
		onShow() {
			this.page = 1;
			this.listData = [];
			/*获取新闻列表*/
			this.getData();
		},
		computed: {

			/*加载中状态*/
			loadingType() {
				if (this.loading) {
					return 1;
				} else {
					if (this.listData.length != 0 && this.no_more) {
						return 2;
					} else {
						return 0;
					}
				}
			}
		},
		onReachBottom() {
			let self = this;
			if (self.page < self.last_page) {
				self.page++;
				self.getData();
			}
			self.no_more = true;
		},
		methods: {
			getData() {
				let self = this;
				let page = self.page;
				let list_rows = self.list_rows;
				self.loading = true;
				uni.showLoading({
					title: '加载中'
				});
				self._get('user.Order/lists', {
					order_type: self.order_type,
					page: page || 1,
					list_rows: list_rows,
                    type: self.type,
				}, res => {
					self.listData = self.listData.concat(res.data.list.data);
					self.last_page = res.data.list.last_page;
					if (res.data.list.last_page <= 1) {
						self.no_more = true;
					}
					self.loading = false;
					uni.hideLoading();
				})
			},
			deleteFunc(e, n) {
				let self = this;
				uni.showModal({
					title: '提示',
					content: '确定要删除该订单吗?',
					success(res) {
						if (res.confirm) {
							self.loading = true;
							uni.showLoading({
								title: '加载中'
							});
							self._get('user.Order/delete', {
								order_id: e,
							}, data => {
								uni.showModal({
									content: '删除成功',
									success() {
										self.listData.splice(n, 1)
										self.loading = false;
										uni.hideLoading();
									}
								})

							})
						}
					}
				})
			},
			changeType(n) {
				if (this.type == n.value) {
					return
				}
				this.type = n.value;
				this.listData = [];
				this.page = 1;
				this.getData();
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
