<template>
	<view :data-theme='theme()' :class="theme() || ''">
		<view class="top_head pr" :style="'background-color: '+bgcolor+';'">
			<!-- #ifndef MP-WEIXIN -->
			<view class="state_top"></view>
			<!-- #endif -->
			<view class="head_top" :style="'height:'+topBarTop()+'px;'"></view>
			<view class="d-b-c" :style="topBarHeight() == 0 ? '': 'height:'+topBarHeight()+'px;'">
				<view class="index_log">
					<text :style="'color:'+titleTextColor+';'" v-if="title_type=='text'">{{title_name}}</text>
					<image v-else :src="toplogo || '/static/logo.png'" mode="heightFix"></image>
				</view>
				<view class="d-s-c flex-1">
					<view class="top_search special gray9" :style="'height:'+topBarHeight()+' px;'"
						@click="gotoPage('/pages/knowledge/index')">
						<text class="icon iconfont icon-sousuo"></text>搜索...
					</view>
					<!-- <view class="top_search_right d-c-c" @click="scanQrcode"><u-icon></u-icon></view> -->
				</view>
				<!-- #ifndef MP-WEIXIN -->
				<view class="d-e-c p-0-20"></view>
				<!-- #endif -->
				<!-- #ifdef MP-WEIXIN -->
				<view class="wx-top-right"></view>
				<!-- #endif -->
			</view>
			<view style="height: 20rpx;"></view>
		</view>
		<diy v-if="items!=null" :diyItems="items"></diy>

		<!--点击收藏-->
		<view class="collection-box" v-if="is_collection" :style="'top:'+(topBarTop() + topBarHeight() + 10)+'px;'">
			<view class="inner">
				<text>
					点击“</text>
				<text class="point">.</text>
				<text class="point point-big">.</text>
				<text class="point">.</text>
				<text>”添加到我的小程序，\n微信首页下拉即可快速访问店铺
				</text>
			</view>
			<button type="primary" class="close-btn" @click="is_collection=false">x</button>
		</view>

		<!--关注公众号-->
		<!-- #ifdef MP-WEIXIN -->
		<view class="follow-gzh" v-if="is_follow=='1'">
			<text class="icon iconfont icon-guanbi" @click="is_follow=0"></text>
			<official-account></official-account>
		</view>
		<!-- #endif -->

		<!--首页推送-->
		<Homepush v-if="is_homepush" :homepush_data="homepush_data"></Homepush>
		<!-- <tabBar></tabBar> -->
	</view>
</template>

<script>
	import diy from '@/components/diy/diy.vue';
	import Homepush from './home-push/home-push.vue';
	export default {
		components: {
			diy,
			Homepush,
		},
		data() {
			return {
				loading: true,
				/*是否正在加载*/
				loadding: true,
				background: '',
				listData: [],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				items: null,
				/*收藏引导*/
				is_collection: false,
				/*关注*/
				is_follow: '0',
				/*是否首页推送*/
				is_homepush: false,
				/*首页推送数据*/
				homepush_data: {},
				target: 0,
				page: 1,
				last_page: 0,
				no_more: false,
				title_name: '',
				title_type: 'text',
				bgcolor: '',
				urldata: '',
				jweixin: null,
				toplogo: '',
				titleTextColor: '',
				diytop: 0,
				showSearch: false,
				openCategory: {
					color: "#000000",
					open: 0
				}
			};
		},
		onTabItemTap() {
			//#ifdef H5
			if (process.env.NODE_ENV === 'production') {
				window.location.href = config.app_url + config.h5_addr + '/pages/index/index';
			}
			//#endif
		},
		onLoad(e) {
			let self = this;
			if (e.invitation_id) {
				uni.setStorageSync('invitation_id', e.invitation_id);
			}
			if (e.referee_id) {
				uni.setStorageSync('referee_id', e.referee_id);
			}
			//#ifdef H5
			if (this.isWeixin()) {
				this.urldata = window.location.href;
			}
			//#endif
			this.getData();
			/* setTimeout(function() {
				self.getTabBarLinks();
			}, 300); */
		},
		methods: {
			/*获取首页分类*/
			getData() {
				let self = this;
				uni.showLoading({
					title: '加载中'
				});
				self._get('index/index', {
					url: self.urldata
				}, function(res) {
					self.listData = res.data.list;
					self.background = res.data.background;
					self.items = res.data.items;
					self.title_name = res.data.page.params.title;
					self.bgcolor = res.data.page.style.titleBackgroundColor;
					self.setPage(res.data.page);
					self.toplogo = res.data.page.style.toplogo;
					self.title_type = res.data.page.params.title_type;
					self.titleTextColor = res.data.page.style.titleTextColor;
					//弹出收藏
					// #ifdef  MP-WEIXIN
					let isFirst = uni.getStorageSync('isFirst');
					if (isFirst == '' && res.data.setting.collection.status == '1') {
						self.is_collection = true;
						uni.setStorageSync('isFirst', 1);
					}
					self.is_follow = res.data.setting.officia.status;
					// #endif
					// 首页推送
					let homepush_name = uni.getStorageSync('homepush_name');
					if (res.data.setting.homepush.is_open && homepush_name != res.data.setting.homepush.name) {
						self.homepush_data = res.data.setting.homepush;
						self.is_homepush = true;
						self.is_homepush = true;
					}
					// 配置微信扫一扫参数
					//#ifdef H5
					if (self.urldata != '') {
						self.jweixin = self.configWxScan(res.data.signPackage);
						let params = {};
						self.configWx(res.data.share.signPackage, res.data.share.shareParams, params);
					}
					//#endif
					uni.hideLoading();
					self.loadding = false;
				});
			},
			/*设置页面*/
			setPage(page) {
				uni.setNavigationBarTitle({
					title: page.params.name
				});

				let colors = '#000000';
				if (page.style.titleTextColor == 'white') {
					//字母要小写
					colors = '#ffffff'
				}
				uni.setNavigationBarColor({
					frontColor: colors,
					backgroundColor: '#ffffff'
				})

			},
			scroll(e) {
				this.diytop = e.detail.scrollTop;
			},
			/*分享当前页面*/
			onShareAppMessage() {
				let self = this;
				return {
					title: self.title_name,
					path: '/pages/index/index?' + self.getShareUrlParams()
				};
			},
			/* 禁止手动滑动 */
			stopTouchMove() {
				return true
			},
			/*扫一扫核销*/
			scanQrcode: function() {
				let self = this;
				//#ifdef H5
				// 只允许通过相机扫码
				self.jweixin.scanQRCode({
					needResult: 1,
					scanType: ["qrCode", "barCode"],
					success: function(res) {
						self.gotoPage('/pages/store/clerkorder?order_no=' + res.resultStr);
					},
					error: function(res) {
						uni.showToast({
							title: '扫码失败，请重试'
						})
					}
				});
				//#endif
				//#ifndef H5
				// 只允许通过相机扫码
				uni.scanCode({
					onlyFromCamera: true,
					success: function(res) {
						if (res.errMsg == 'scanCode:ok') {
							self.gotoPage('/pages/store/clerkorder?order_no=' + res.result);
						} else {
							uni.showToast({
								title: '扫码失败，请重试'
							})
						}
					}
				});
				//#endif
			},
			/* 关闭搜索 */
			closeSearch() {
				this.showSearch = false;
			},
		}
	};
</script>

<style lang="scss">
	.bg-f2 {
		background-color: #F2F2F2;
	}

	.top_head {
		line-height: 30px;
		z-index: 1;
		padding-left: 26rpx;
		position: sticky;
		top: 0;
		left: 0;
		z-index: 100;
	}

	.head_top {
		width: 100%;
		height: var(--status-bar-height);
	}

	.index_log {
		/* width: 154rpx; */
		min-height: 46rpx;
		line-height: 46rpx;
		font-size: 26rpx;
		font-weight: 800;
		color: #FFFFFF;
	}

	.index_log image {
		width: 60rpx;
		height: 60rpx;
	}

	.top_search {
		/* width: 380rpx; */
		height: 60rpx;
		line-height: 60rpx;
		background: #F4F4F4;
		border-radius: 30rpx;
		font-size: 30rpx;
		margin-left: 10rpx;
		color: #999999;
		flex: 1;
	}

	.top_search.special {
		width: 100%;
	}

	.top_search_right {
		background: #FFFFFF;
		border-radius: 0 30rpx 30rpx 0;
		height: 60rpx;
		position: relative;
	}

	.top_search_right::before {
		content: ' ';
		width: 1rpx;
		height: 20rpx;
		background-color: #D9D9D9;
		left: 0;
		top: 0;
		bottom: 0;
		margin: auto;
		position: absolute;
	}

	.top_search_right .icon-saoyisao1 {
		padding: 0 20rpx;
		/* border-left: 1rpx solid #D9D9D9; */
	}

	.top_search .icon-sousuo {
		font-size: 30rpx;
		color: #999999;
		margin-left: 20rpx;
		margin-right: 10rpx;
	}

	.top_bg {
		position: absolute;
		top: 0;
		z-index: 0;
		width: 750rpx;
		height: 350rpx;
	}

	.top_bg image {
		width: 750rpx;
		height: 350rpx;
	}

	.nuter {
		width: 100%;
		height: 80rpx;
		line-height: 80rpx;
		display: flex;
		justify-content: space-around;
		font-size: 35rpx;
		padding-bottom: 10rpx;
		overflow: hidden;
		transition: all 0.3s ease;
	}

	.nuter view {
		flex: 1;
		font-size: 30rpx;
		text-align: center;
		transition: all 0.5s ease .1s;
	}

	swiper {
		height: 80vh;
		width: 100%;
		overflow: hidden;
	}

	.swiper-item {
		overflow-y: scroll;
		width: 100%;
		height: 99%;
		box-sizing: border-box;
	}

	.foot_ {
		height: 98rpx;
		width: 100%;
	}

	.banner {
		height: 240upx;
		width: 710upx;
	}

	.banner image {
		width: 710rpx;
		height: 240rpx;
	}

	.new-people .group-bd {
		display: flex;
		justify-content: space-between;
	}

	.new-people .list {
		padding-right: 30rpx;
	}

	.new-people .list .item {
		width: 180rpx;
		text-align: center;
	}

	.new-people .list .price {
		font-size: 24rpx;
	}

	.new-people .list .price .num {
		font-size: 34rpx;
		font-weight: bold;
	}

	.new-people .list button {
		font-size: 24rpx;
		background: #6170ff;
	}

	.new-people .list image {
		width: 180rpx;
		height: 180rpx;
		border: 1px dashed #cccccc;
	}

	.new-people .other {
		width: 230rpx;
	}

	.new-people .other image {
		width: 100%;
	}

	.group-seckill .left .iconfont {
		margin-right: 8rpx;
		color: $dominant-color;
		font-size: 40rpx;
	}

	.group-seckill .list .item {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		width: 150rpx;
		height: 230rpx;
		border: 1px dashed #cccccc;
	}

	.group-seckill .list text {
		line-height: 60rpx;
		color: $dominant-color;
	}

	.group-seckill .list image {
		width: 150rpx;
		height: 150rpx;
	}

	.group-hd .datetime .time {
		padding: 4rpx;
		background: $dominant-color;
		color: #ffffff;
		border-radius: 4rpx;
	}

	.group-hd .datetime .point {
		padding: 0 10rpx;
		color: $dominant-color;
	}

	.every-day-hard .list .item {
		width: 200rpx;
	}

	.every-day-hard .list image {
		width: 200rpx;
		height: 200rpx;
	}

	.every-day-hard .list .pic {
		position: relative;
		width: 200rpx;
		height: 200rpx;
		border: 1px dashed #cccccc;
	}

	.every-day-hard .list .tips {
		position: absolute;
		left: -1px;
		bottom: -1px;
		padding: 0 10rpx;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		border-radius: 0 4rpx 0 0;
		color: #ffffff;
		background: #ff8a00;
		font-size: 22rpx;
	}

	.every-day-hard .list .tips .iconfont {
		margin-right: 6rpx;
		font-size: 24rpx;
		color: #ffffff;
	}

	.every-day-hard .list .tips .svg-icon {
		width: 20rpx;
		height: 20rpx;
		margin-right: 6rpx;
		color: #ffffff;
	}

	.every-day-hard .list .bottom-box {
		display: flex;
		height: 80rpx;
		justify-content: space-between;
		align-items: center;
	}

	.every-day-hard .list .bottom-box .people {
		font-size: 24rpx;
		color: #fb8138;
	}

	.every-day-hard .list .bottom-box .unit {
		font-size: 22rpx;
		color: $dominant-color;
	}

	.every-day-hard .list .bottom-box .price {
		font-size: 30rpx;
		color: $dominant-color;
	}

	.collection-box {
		position: fixed;
		width: 380rpx;
		padding: 20rpx;
		top: 20rpx;
		right: 20rpx;
		line-height: 40rpx;
		font-size: 24rpx;
		border-radius: 16rpx;
		background: #ffffff;
		border: 1px solid #eeeeee;
		box-shadow: 0 0 6rpx 0 rgba(0, 0, 0, .08);
		z-index: 100;
	}

	.collection-box::after {
		position: absolute;
		content: '';
		display: block;
		right: 140rpx;
		top: -15rpx;
		transform: rotate(45deg);
		width: 30rpx;
		height: 30rpx;
		transform: rotate;
		background: #FFFFFF;
		border-left: 1px solid #eeeeee;
		border-top: 1px solid #eeeeee;
	}

	.collection-box .point {
		width: 20rpx;
		height: 20rpx;
		font-size: 60rpx;
		line-height: 0;
		color: #666666;
	}

	.collection-box .point-big {
		font-size: 80rpx;
	}

	.collection-box .close-btn {
		position: absolute;
		padding: 0;
		right: 10rpx;
		top: 10rpx;
		width: 40rpx;
		height: 40rpx;
		line-height: 30rpx;
		background: #FFFFFF;
		color: #999999;
		border-radius: 50%;
	}

	.follow-gzh {
		position: fixed;
		left: 0;
		right: 0;
		bottom: calc(var(--window-bottom));
		border-radius: 16rpx;
		box-shadow: 0 0 20rpx 0 rgba(0, 0, 0, .1);
		background: #FFFFFF;
		z-index: 10;
	}

	.follow-gzh .iconfont {
		display: block;
		position: absolute;
		right: 10rpx;
		top: 10rpx;
		z-index: 99;
	}

	.product-list {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		align-items: center;
		position: relative;
		z-index: 1;
	}

	.product_item {
		width: 345rpx;
		margin: 20rpx;
		border-radius: 12rpx;
		background-color: #ffffff;
	}

	.product_item.product_item_right {
		margin-left: 0;
	}

	.product_item .pro_name {
		height: 68rpx;
		line-height: 34rpx;
	}

	.diy-seckillProduct .sharpproduct-head .datetime::v-deep .box {
		padding: 4rpx 10rpx;
		font-size: 22rpx;
		background: #FFEBEB;
		color: #F6220C;
	}

	.bargainProduct-head .datetime::v-deep .box {
		padding: 4rpx 10rpx;
		font-size: 22rpx;
		background: #FFFFFF;
		color: #4B30FF;
	}

	.chat {
		width: 40rpx;
		height: 40rpx;
	}

	.newsnum {
		position: absolute;
		top: -8rpx;
		right: -16rpx;
		z-index: 100;
		border-radius: 50%;
		width: 25rpx;
		height: 25rpx;
		text-align: center;
		line-height: 25rpx;
		color: #FFFFFF;
		background-color: #ff6633;
		padding: 5rpx;
		font-size: 20rpx;
	}

	.wx-top-right {
		width: 200rpx;
		height: 2rpx;
	}
</style>
