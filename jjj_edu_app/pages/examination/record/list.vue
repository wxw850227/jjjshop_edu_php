<!-- 学习记录 -->
<template>
	<view>
		<!-- 真题 -->
		<view class="p24">
			<view class="data-item d-b-s flex-1" v-for="(item,index) in listData" :key="index">
				<view class="imgbox">
					<image class="data-img" :src="item.paper.image.file_path" mode=""></image>
				</view>
				<view class="data-text ml20 flex-1">
					<view>
						<view class="text-ellipsis-2 data-title f26 gray3">{{item.paper.title}}
						</view>

					</view>
					<view class="d-b-c data-bottom">
						<template v-if="item.is_submit==0">
							<view class="gray9 f24">未完成</view>
							<view v-if="item.paper_type==1" class="data-btn f26 redF24"
								@click="gotoPage('/pages/examination/exam/start?paper_id='+item.paper_id+'&model=practice')">继续答题</view>
							<view v-if="item.paper_type==2" class="data-btn f26 redF24"
								@click="gotoPage('/pages/examination/exam/start?paper_id='+item.paper_id)">继续答题</view>
						</template>
						<template v-if="item.is_submit==1">
							<view class="dominant f24">已完成</view>
							<view v-if="item.paper_type==1" class="data-btn f26 redF24"
								@click="gotoPage('/pages/examination/record/detail?paper_id='+item.paper_id+'&model=practice')">查看结果
							</view>
							<view v-if="item.paper_type==2" class="data-btn f26 redF24"
								@click="gotoPage('/pages/examination/record/detail?paper_id='+item.paper_id)">查看结果
							</view>
						</template>
					</view>
				</view>

			</view>
			<!-- 没有记录 -->
			<view class="d-c-c p30" v-if="listData.length == 0 && !loading">
				<text class="iconfont icon-wushuju"></text>
				<text class="cont">亲，暂无相关记录哦</text>
			</view>
			<uni-load-more v-else :loadingType="loadingType"></uni-load-more>
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
				type: 1,
				list_rows: 10,
				page: 1,
				loading: false,
				listData: [],
				last_page: 1,
				no_more: false,
				type: 1,
			}
		},
		onShow() {
			this.page = 1;
			this.listData = [];
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
		methods: {
			changeType(n) {
				if (this.type == n.value) {
					return
				}
				this.type = n.value;
				this.page = 1;
				this.listData = [];
				this.getData();
			},
			getData() {
				let self = this;
				self.loading = true;
				uni.showLoading({
					title: '加载中'
				});
				self._get('paper.Record/index', {
					page: self.page || 1,
					list_rows: self.list_rows,
					paper_type: self.type
				}, res => {
					self.listData = self.listData.concat(res.data.detail.data);
					self.last_page = res.data.detail.last_page;
					if (res.data.detail.last_page <= 1) {
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

		display: flex;
		flex-direction: column;


	}

	.data-item {
		padding: 24rpx 24rpx 0rpx 24rpx;
		margin-bottom: 24rpx;
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
		padding: 60rpx 19rpx 0 3rpx;
	}

	.data-btn {
		color: #fff;
		background: linear-gradient(45deg, #F2473F, #F26E2F);
		line-height: 52rpx;
		height: 52rpx;
		border-radius: 25rpx;
		padding: 0 24rpx;
		white-space: nowrap;
		box-sizing: border-box;
	}
</style>
