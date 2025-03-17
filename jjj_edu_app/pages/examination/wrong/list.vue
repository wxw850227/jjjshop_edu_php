<!-- 错题集 -->
<template>
	<view>
		<view class="wrong-list">
			<view class="wrong-item" v-for="(item,index) in listData" :key="index">
				<view class="item-top d-s-c flex-1 mb10">
					<view class="item-dot"></view>
					<view class="item-tit fb f30 gray3">{{item.paper.title}}</view>
				</view>
				<view class="item-mid d-s-c mb20 f26">
					<view class="redF24 mr10">{{item.wrongTotal}}</view>
					<view class="item-tit fb gray3">道错题</view>
				</view>
				<view class="item-bottom d-c-c f26">
					<view class="jiexi-btn gray3"
						@click="gotoPage('/pages/examination/wrong/detail?paper_id='+item.paper_id)">查看解析</view>
					<view class="jiexi-btn dati-btn redF24"
						@click="gotoPage('/pages/examination/exam/start?paper_id='+item.paper_id)">
						<span v-if="item.record_status==0">开始答题</span>
						<span v-else-if="item.record_status==1">继续答题</span>
						<span v-else-if="item.record_status==2">再次答题</span>
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
	import uniLoadMore from '@/components/uni-load-more.vue';
	export default {
		components: {
			uniLoadMore
		},
		data() {
			return {
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
					'paper.Wrong/index', {
						page: self.page || 1,
						list_rows: self.list_rows
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
		}
	}
</script>

<style>
	.wrong-list {
		padding: 24rpx;
	}

	.wrong-item {
		padding: 25rpx 20rpx;
		margin-bottom: 24rpx;
		background: #FFFFFF;
		border-radius: 15rpx;

	}

	.item-dot {
		width: 10rpx;
		height: 10rpx;
		background: #999999;
		margin-right: 10rpx;


	}

	.jiexi-btn {
		width: 50%;
		display: flex;
		justify-content: center;
		align-items: center;

	}

	.dati-btn {
		border-left: 1px solid #ddd;
	}

	.item-bottom {
		border-top: 1px dotted #ddd;
		padding-top: 20rpx;
	}

	.item-text {
		line-height: 48rpx;
	}
</style>