<!-- 学习记录 -->
<template>
	<view>
		<!-- <view class="top-tabbar">
			<view class="tab-item" :class="{active:type == 1}" @click="changeType(1)">练习</view>
			<view class="tab-item" :class="{active:type == 2}" @click="changeType(2)">真题</view>
			<view class="tab-item" :class="{active:type == 2}" @click="changeType(2)">模考</view>
		</view> -->
		<zsTab :data="tabList" :activeName="type" @chang-tab="changeType" />
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
							<view class="data-btn f26 redF24"  @click="gotoPage('/pages/examination/exam/start?paper_id='+item.paper_id)">继续答题</view>
						</template>
						<template v-if="item.is_submit==1">
							<view class="dominant f24">已完成</view>
							<view class="data-btn f26 redF24" @click="gotoPage('/pages/examination/record/detail?paper_id='+item.paper_id)">查看解析</view>
						</template>
					</view>
				</view>

			</view>
		</view>
	</view>
</template>

<script>
	import zsTab from "@/components/zs-tab.vue";
	export default {
		components: {
			zsTab,
		},
		data() {
			return {
				type: 1,
				/*是否加载完成*/
				loading: true,
				/*数据列表*/
				listData: [],
				/*最后一页码数*/
				last_page: 0,
				/*当前页面*/
				page: 1,
				/*每页条数*/
				list_rows: 10,
				no_more: false,
				tabList:[
					{
						key: '练习',
						value: 1,
					},
					{
						key: '真题',
						value: 2,
					},
				],
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
		onReachBottom() {
			let self = this;
			if (self.page < self.last_page) {
				self.page++;
				self.getData();
			}
			self.no_more = true;
		},
		methods: {
			/*获取数据*/
			getData() {
				let self = this;
				self.loading = true;
				self._get(
					'paper.Record/index', {
						page: self.page || 1,
						list_rows: self.list_rows,
						paper_type: self.type
					},
					function(res) {
						self.loading = false;
						self.listData = self.listData.concat(res.data.detail.data);
						self.last_page = res.data.detail.last_page;
						if (res.data.detail.last_page <= 1) {
							self.no_more = true;
						}
					}
				);
			},
			changeType(n) {
				if (this.type == n.value) {
					return
				}
				this.type = n.value;
				this.page = 1;
				this.listData = [];
				this.getData();
			}
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
