<template>
	<view class="article-list-wrap" :data-theme='theme()' :class="theme() || ''">
		<!-- <view class="top-tabbar">
			<scroll-view scroll-x="true" scroll-with-animation="true">
				<view class="type-list d-s-c">
					<view :class="type_active == 0 ? 'tab-item  active' : 'tab-item '"  @click="tabTypeFunc(0)">
						全部
					</view>
					<view :class="type_active == item.category_id ? 'tab-item  active' : 'tab-item '" v-for="(item, index) in categorys" :key="index" @click="tabTypeFunc(item.category_id)">
						{{ item.name }}
					</view>
				</view>
			</scroll-view>
		</view> -->
		<scroll-view>
			<view class="article-list" v-for="(item, index) in listData" :key="index" @click="gotoDetail(item.article_id)">
				<view class="item">
					<view class="imgbox">
						<image class="data-img" :src="item.image && item.image.file_path" mode=""></image>
					</view>
					<view class="info ml20">
						<view class="title f26">{{ item.article_title }}</view>
						<view class="biaqqian redF24">{{ item.category && item.category.name }}</view>
						<view class="timelist">
							<view class="time d-b-c">
								<image class="time-img" src="/static/image/home/liulan.png" mode=""></image>
								<view class="gray9">{{ item.view_time }}</view>
							</view>
							<view class="time time d-b-c">
								<image class="time-img" src="/static/image/home/time.png" mode=""></image>
								<view class="gray9">{{ item.create_time }}</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 没有记录 -->
			<view class="d-c-c p30" v-if="listData.length == 0 && !loading">
				<text class="iconfont icon-wushuju"></text>
				<text class="cont">亲，暂无相关记录哦</text>
			</view>
			<uni-load-more v-else :loadingType="loadingType"></uni-load-more>
		</scroll-view>
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
			/*手机高度*/
			phoneHeight: 0,
			/*可滚动视图区域高度*/
			scrollviewHigh: 0,
			/*数据列表*/
			listData: [],
			/*是否有更多*/
			no_more: null,
			/*一页多少条*/
			list_rows: 10,
			/*当前第几页*/
			page: 1,
			/*分类数据*/
			categorys: [],
			/*当前选中的类别*/
			type_active: 0
		};
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
	mounted() {
		// this.init();
		/*获取分类*/
		// this.getCategory();
		/*获取新闻列表*/
		this.getData();
	},
	methods: {
		/*初始化*/
		init() {
			let _this = this;
			uni.getSystemInfo({
				success(res) {
					_this.phoneHeight = res.windowHeight;
					// 计算组件的高度
					let view = uni.createSelectorQuery().select('.top-tabbar');
					view.boundingClientRect(data => {
						let h = _this.phoneHeight - data && data.height || 0;
						_this.scrollviewHigh = h;
					}).exec();
				}
			});
		},

		/*获取文章分类*/
		getCategory() {
			let self = this;
			self._get('plus.article.article/category', {}, function (res) {
				self.categorys = res.data.category;
			});
		},

		/*tab切换*/
		tabTypeFunc(e) {
			if (e != this.type_active) {
				this.type_active = e;
				this.page = 1;
				this.listData = [];
				this.getData();
			}
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
				'plus.article.Article/index',
				{
					page: page || 1,
					list_rows: list_rows,
					category_id: self.type_active
				},
				function (res) {
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

		/*可滚动视图区域到底触发*/
		scrolltolowerFunc() {
			let self = this;
			self.bottomRefresh = true;
			self.page++;
			self.loading = true;
			if (self.page > self.last_page) {
				self.loading = false;
				self.no_more = true;
				return;
			}
			self.getData();
		},

		/*跳转文章详情*/
		gotoDetail(e) {
			this.gotoPage('/pages/news/detail?article_id=' + e);
		}
	}
};
</script>

<style>
.article-list {
	display: flex;
	flex-direction: column;
	margin-top: 24rpx;
}

.item {
	padding: 24rpx 24rpx 0 24rpx;
	margin: 0 24rpx;
	background-color: #FFFFFF;
	border-radius: 25rpx;
	display: flex;
}

.imgbox {
	width: 212rpx;
}

.data-img {
	width: 212rpx;
	height: 162rpx;
	background: #FFFFFF;
	border-radius: 16rpx;
	margin-bottom: 24rpx;
}

.title {
	height: 44rpx;
	line-height: 44rpx;
	overflow: hidden;
}

.biaqqian {
	background: #fef0e0;
	display: inline-block;
	padding: 6rpx 24rpx;
	border-radius: 25rpx;
	margin: 12rpx 0;

}

.info {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	flex: 1;
}

.time-img {
	width: 42rpx;
	height: 42rpx;
	display: inline-block;
}

.timelist {
	display: flex;
	width: 100%;
	flex-direction: row;
	justify-content: space-between;
}
</style>
