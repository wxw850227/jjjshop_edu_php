<template>
	<!-- 我的课程 -->
	<view>
		<view class="data-list" v-for="(item,index) in listData" :key="index"
			@click="gotoPage('/pages/knowledge/course/detail?course_id='+item.course_id)">
			<view class="data-item d-b-s flex-1">
				<view class="imgbox">
					<image class="data-img" :src="item.course.image.file_path" mode=""></image>
				</view>
				<view class="data-text ml20 flex-1 d-b-s d-c" style="height: 150rpx;">
					<view>
						<view class="text-ellipsis-2 data-title f26 gray3">{{item.course.title}}</view>
						<!-- <view class="biaqqian redF24">标签</view> -->
					</view>
					<view class="d-b-c data-bottom ww100">
						<view v-if="item.course.isFree==1" class="fb f28 redF24">免费</view>
						<view v-if="item.course.isFree==2" class="fb f28 redF24">免费试看</view>
						<view v-if="item.course.isFree==3" class="fb f28 redF24">￥{{item.course.course_price}}</view>
						<view class="gray9 f24">共{{item.course.sectionNum}}节</view>
					</view>
				</view>

			</view>
		</view>
		<!-- 没有记录 -->
		<view class="d-c-c p30" v-if="listData.length==0 && !loading">
			<text class="iconfont icon-wushuju"></text>
			<text class="cont">亲，暂无相关记录哦</text>
		</view>
		<uni-load-more v-else :loadingType="loadingType"></uni-load-more>
	</view>
</template>

<script>
	import uniLoadMore from "@/components/uni-load-more.vue";
	export default {
		components: {
			uniLoadMore
		},
		data() {
			return {
				list_rows: 10,
				page: 1,
				loading: false,
				listData: [],
				last_page: 1,
				no_more: false,
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
				self._get('course.Favorite/list', {
					// order_type: self.order_type,
					page: page || 1,
					list_rows: list_rows,
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

		}
	}
</script>

<style lang="scss">
	.data-list {
		margin-top: 24rpx;
		display: flex;
		flex-direction: column;


	}

	.data-item {
		padding: 24rpx 24rpx 0rpx 24rpx;
		margin: 0 24rpx;
		background-color: #FFFFFF;
		border-radius: 25rpx;
	}

	.imgbox {
		width: 274rpx;

	}

	.data-img {
		width: 274rpx;
		height: 150rpx;
		background: #FFFFFF;
		border-radius: 16rpx;
		margin-bottom: 24rpx;
	}

	.data-title {
		font-size: 26rpx;
		height: 44rpx;
		line-height: 44rpx;
		overflow: hidden;
		color: #111111;
		// margin-bottom: 24rpx;
	}

	.data-text {
		display: flex;
		flex-direction: column;
		align-content: space-between;
	}

	.data-bottom {
		padding: 0rpx 19rpx 0 3rpx;
	}

	// .data-btn{
	// 	color: #fff;
	// 	background: linear-gradient(45deg, #F2473F, #F26E2F);
	// 	line-height: 52rpx;
	//     height: 52rpx;
	// 	border-radius:25rpx;
	// 	padding: 0 24rpx;
	// 	white-space: nowrap;
	// 	box-sizing: border-box;
	// }
	.biaqqian {
		background: #fef0e0;
		display: inline-block;
		padding: 6rpx 24rpx;
		border-radius: 25rpx;
		margin: 12rpx 0;

	}
</style>
