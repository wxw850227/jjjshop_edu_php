<template>
	<view class="index pr">
		<image class="bg-image" src="/static/image/yue_bg.jpg" mode=""></image>
		<view class="top_bg pr">
			<view class="card-top">
				<view class="f32 white mb20">余额</view>
				<view class="f48 white">{{balance}}</view>
			</view>
		</view>
		<!-- <view class="top-tabbar mb20">
			<view class="tab-item" :class="{active:type==0}" @click="changeType(0)">全部</view>
			<view class="tab-item" :class="{active:type==2}" @click="changeType(2)">支出</view>
			<view class="tab-item" :class="{active:type==1}" @click="changeType(1)">收入</view>
		</view> -->
		<zsTab :data="tabList" :activeName="type" @chang-tab="changeType" />
		<view class="wallet-content">
			<view class="index-body">
				<view class="body-item" v-for="(item,index) in listData" :key="index">
					<view class="body-item-top">
						<view class="body-item-top-left f32 ">{{ item.scene.text }}</view>
						<view class="body-item-top-right f36" v-if="item.money > 0">+{{ item.money }}</view>
						<view class="body-item-top-right f36" v-else>{{ item.money }}</view>
					</view>
					<view class="body-item-bottom">
						<view class="body-item-bottom-left font-24 gray9">{{ item.create_time }}</view>
					</view>
				</view>
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
			zsTab
		},
		data() {
			return {
				balance: '',
				balance_open: 0,
				cash_open: 0,
				type: 0,
				list_rows: 10,
				page: 1,
				loading: false,
				listData: [],
				last_page: 1,
				no_more: false,
				tabList:[
					{
						key: '全部',
						value: 0,
					},
					{
						key: '支出',
						value: 2,
					},
					{
						key: '收入',
						value: 1,
					},
				],
				type: 0,
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
			changeType(n) {
				if (this.type == n.value) {
					return
				}
				this.type = n.value;
				this.page = 1;
				this.listData = [];
				this.getData()
			},
			/*获取数据*/
			getData() {
				let self = this;
				let page = self.page;
				let list_rows = self.list_rows;
				self.loading = true;
				uni.showLoading({
					title: '加载中'
				});
				self._get(
					'balance.log/index', {
						page: page || 1,
						list_rows: list_rows,
						type:self.type
					},
					function(res) {
						self.listData = self.listData.concat(res.data.list.data);
						self.last_page = res.data.list.last_page;
						if (res.data.list.last_page <= 1) {
							self.no_more = true;
						}
						self.loading = false;
						uni.hideLoading();
						self.balance = res.data.balance;
						self.balance_open = res.data.balance_open;
						self.cash_open = res.data.cash_open;
					}
				);
			},
			gotoList(type) {
				this.gotoPage('/pages/user/my-wallet/my-balance?type=' + type);
			},
			goback() {
				uni.navigateBack();
			},
			gotoPay() {
				this.gotoPage('/pages/order/recharge');
			},
		}
	}
</script>

<style>
	page {
		background: #f2f2f2;
	}

	.font-color-ccc {
		color: #CCCCCC;
	}

	.icon-jiantou::before {
		font-size: 24rpx;
	}

	.font-24 {
		font-size: 24rpx;
	}

	.font-28 {
		font-size: 28rpx;
	}

	.font-32 {
		font-size: 32rpx;
	}

	.font-72 {
		font-size: 72rpx;
	}

	.width-150 {
		width: 150rpx;
		text-align: center;
	}

	.index {
		width: 750rpx;
	}

	.wallet-content {
		margin-top: 21rpx;
	}

	.index-head {
		width: 710rpx;
		margin: 0 auto;
		height: 160rpx;
		background: #FFFFFF;
		border-radius: 12rpx;
		margin-bottom: 50rpx;
	}

	.bg-image {
		width: 750rpx;
		height: 202rpx;
		position: absolute;
		left: 0;
		top: 0;
		z-index: 0;
	}

	.card-top {
		width: 750rpx;
		padding: 40rpx 43rpx;
		height: 202rpx;
		box-sizing: border-box;
	}

	.card-bottom {
		/* width: 660rpx; */
		height: 160rpx;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.index-body {
		/* background-color: rgba(0, 0, 0, 0.1); */
		background-color: white;
		margin: 0 auto;
		padding: 30rpx;
		box-sizing: border-box;
		border-radius: 12rpx;
		padding-top: 0;
	}

	.body-head {
		height: 80rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1rpx #f2f2f2 solid;
	}

	.body-item {
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 126rpx;
		border-bottom: 1rpx #f2f2f2 solid;
	}

	.body-item-top {
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #333333;
		margin-bottom: 10rpx;
	}

	.body-item-bottom {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.reg180 {
		padding-right: 20rpx;
		text-align: right;
		transform: rotateY(180deg);
		position: absolute;
		bottom: 0;
	}

	.icon-jiantou {

		color: #FFFFFF;
		font-size: 30rpx;
	}

	.head_top {
		position: relative;
		height: 30px;
		line-height: 30px;
		color: #FFFFFF;
		font-size: 32rpx;
	}

	.bg_topimg {
		position: absolute;
		top: 0;
		width: 100%;
		height: 400rpx;
		z-index: -1;
	}

	.top_bg {
		width: 750rpx;
		height: 202rpx;
		/* background: linear-gradient(180deg, #FF774D 0%, #FF422E 100%); */
	}

	.wallet_img {
		width: 48rpx;
		height: 48rpx;
		margin: 0 auto;
		margin-bottom: 14rpx;
	}

	.index-head .card-bottom .pr .icon-jiantou {
		position: absolute;
		right: 95rpx;
		color: #999999;
		font-size: 26rpx;
		top: 24rpx;
	}

	.none_line {
		width: 1rpx;
		height: 80rpx;
		background-color: #D9D9D9;
	}

	.body-item-top-right {
		margin-bottom: -30rpx;
	}
</style>
