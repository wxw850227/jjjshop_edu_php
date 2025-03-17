<!-- 知识首页 -->
<template>
	<view>
		<!-- 顶部 -->
		<view class="top-box">
			<!-- 顶部搜索 -->
			<view class="top-search">
				<view class="search-box">
					<text class="icon iconfont icon-sousuo"></text>
					<input type="text" class="flex-1 search-input" @confirm="searchFunc()" v-model="searchName"
						placeholder="请输入..." />
					<view class="search-btn" @click="searchFunc">搜索</view>
				</view>
			</view>
			<!-- 顶部分类 -->
			<view class="top-nav">
				<view class="top-nav-item" :class="{active:category_id == 0}" @click="changeCat(0)">全部
				</view>
				<view v-for="(item,index) in categorys" :key="index" class="top-nav-item"
					:class="{active:category_id == item.category_id}" @click="changeCat(item.category_id)">{{item.name}}
				</view>
			</view>
		</view>
		<view class="zt-box">
			<view class="zt-list">
				<view class="zt-item" v-for="(item,index) in listData" :key='index'
					@click="gotoPage('/pages/examination/exam/detail?paper_id='+item.paper_id)">
					<view class="mb10 o-h" style="border-radius: 15rpx;">
						<u-icon width="322rpx" height="180rpx" :name="item.image.file_path">
						</u-icon>
					</view>

					<view class="text-ellipsis f26 gray1 mb10">{{item.title}}</view>
					<view class="gray9 f24 mb10">{{item.total_answer}}人已答题</view>
					<view class="d-b-c">
						<view class="f30 dominant fb" v-if="item.money!=0">￥{{item.money}}</view>
						<view class="f30 dominant fb" v-if="item.money==0">免费</view>
						<view class="zt-btn">
							<u-icon color="#F2473F" size="30rpx" name="edit-pen"></u-icon>答题
						</view>
					</view>
				</view>
				<view class="ww100	">
					<!-- 没有记录 -->
					<view class="d-c-c p30" v-if="listData.length==0 && !loading">
						<text class="iconfont icon-wushuju"></text>
						<text class="cont">亲，暂无相关记录哦</text>
					</view>
					<uni-load-more v-else :loadingType="loadingType"></uni-load-more>
				</view>

			</view>
		</view>
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
				searchName: '',
				category_id: 0,
				categorys: [],
				list_rows: 10,
				page: 1,
				loading: false,
				listData: [],
				last_page: 1,
				no_more: false,
				paper_type: 0
			}
		},
		onLoad(e) {
			this.paper_type = e.paper_type || 0;
			let title = '真题'
			if(this.paper_type==1){
				title = '练习'
			}
			uni.setNavigationBarTitle({
			    title: title
			});
		},
		mounted() {
			/*获取分类*/
			this.getCategory();
			/*获取新闻列表*/
			this.getData();
		},
		onReachBottom() {
			let self = this;
			if (self.page < self.last_page) {
				self.page++;
				self.getData();
			}
			self.no_more = true;
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
			searchFunc() {

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
					'paper.Paper/list', {
						page: page || 1,
						list_rows: list_rows,
						category_id: self.category_id,
						paper_type: self.paper_type,
						search: self.searchName
					},
					function(res) {
						self.listData = self.listData.concat(res.data.list.data);
						self.last_page = res.data.list.last_page;
						if (res.data.list.last_page <= 1) {
							self.no_more = true;
						}
						self.loading = false;
						uni.hideLoading();
					}
				);
			},
			// changeCat(n) {
			// 	this.category_id = n + 1;
			// },
			/*获取文章分类*/
			getCategory() {
				let self = this;
				self._get('paper.Category/index', {
					type: self.paper_type
				}, function(res) {
					self.categorys = res.data.list;
				});
			},
			changeCat(n) {
				let _this = this;
				 console.log('changeCat called with', n);
				_this.category_id = n;
				_this.page = 1;
				_this.listData = [];
				_this.getData();
			    console.log(_this.category_id);
			}
		}
	}
</script>

<style lang="scss">
	.data-list {
		padding: 32rpx 22rpx 32rpx 24rpx;
		background-color: #FFFFFF;
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		flex-wrap: wrap;

		.data-item {
			margin-bottom: 24rpx;
			width: 342rpx;

			.data-img {
				width: 342rpx;
				height: 192rpx;
				background: #FFFFFF;
				border-radius: 16rpx;
				margin-bottom: 24rpx;
			}

			.data-title {
				font-size: 26rpx;
				color: #111111;
				margin-bottom: 24rpx;
			}

			.data-bottom {
				padding: 0 19rpx 0 3rpx;
			}
		}
	}

	.zt-box {
		padding: 24rpx;

		.zt-list {
			background: #FFFFFF;
			border-radius: 25rpx;
			padding: 30rpx 20rpx;
			display: flex;
			justify-content: space-between;
			align-items: flex-start;
			flex-wrap: wrap;

			.zt-item {
				width: 322rpx;
				margin-bottom: 24rpx;

				.zt-btn {
					width: 121rpx;
					height: 43rpx;
					background: rgba($color: #F89C31, $alpha: 0.15);
					border-radius: 40rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					color: #F2473F;
				}
			}
		}
	}
</style>
