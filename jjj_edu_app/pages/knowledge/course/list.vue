<template>
	<view class="course-list-wrap">
		<view class="head_top">
			<view class="index-search-box index-search-box_re d-b-c" id="searchBox">
				<view class="index-search index-search_re t-c flex-1">
					<text class="icon iconfont icon-sousuo"></text>
					<input type="text" v-model="searchForm.search" class="flex-1 ml10 f26 gray3" value=""
						placeholder-class="f26 gray9" placeholder="搜索课程" confirm-type="search" @confirm="search()" />
				</view>
			</view>
			<view class="top-tabbar">
				<scroll-view scroll-x="true" scroll-with-animation="true">
					<view class="type-list d-s-c">
						<view :class="categorys_index == -1 ? 'tab-item  active' : 'tab-item '" @click="FirstTab(-1)">全部
						</view>
						<view :class="categorys_index == index ? 'tab-item  active' : 'tab-item '"
							v-for="(item, index) in categorys" :key="index" @click="FirstTab(index)">
							{{ item.name }}
						</view>
					</view>
				</scroll-view>
			</view>
			<view v-if="category_list.length>0">
				<view class="category-list d-s-c">
					<view
						:class="searchForm.category_id == item.category_id ? 'category-item  active' : 'category-item '"
						v-for="(item, index) in category_list" :key="index"
						@click="tabTypeFunc(item.category_id,index)">
						{{ item.name }}
					</view>
				</view>
			</view>
		</view>
		<template>
			<scroll-view scroll-y="true" class="scroll-Y" :style="'height:' + scrollviewHigh + 'px;'"
				lower-threshold="50" @scrolltolower="scrolltolowerFunc">
				<view class="course-list">
					<view class="item" v-for="(item, index) in listData" :key="index"
						@click="gotoDetail(item.course_id)">
						<view class="pic" v-if="item.image != null">
							<image :src="item.image.file_path" mode="aspectFill"></image>
							<!-- 							<view class="hot-img-tip" v-if="item.video_link">视频</view>
							<view class="hot-img-tip" v-else-if="item.content">图文</view> -->
						</view>
						<view class="info flex-1">
							<view class="ww100">
								<view class="title text-ellipsis mb18">{{ item.title }}</view>
								<view class="label-list">
									<view v-for="(labitem,labindex) in item.label" :key='labindex' class="label-item">
										{{labitem}}
									</view>
								</view>
							</view>
							<view class="datatime d-b-c ww100">
								<view v-if="item.isFree==1" class="f24 dominant">免费</view>
								<view v-if="item.isFree==2" class="f24 dominant">免费试看</view>
								<view v-if="item.isFree==3" class="f28 gray3 fb">￥{{item.course_price}}</view>
								<view class="f22 gray9">{{item.browse_count}}人已学习</view>
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
		</template>
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
				categorys_index: -1,
				categorys: [],
				category_list: [],
				searchForm: {
					category_id: 0,
					search: ''
				},
				hasChild: false

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
		created() {},
		onLoad(e) {
			this.searchForm.search = e.search || '';
		},
		mounted() {
			this.init();
			/*获取分类*/
			this.getCategory();
			/*获取新闻列表*/
			this.getData();
		},
		methods: {
			/*初始化*/
			init() {
				console.log('init')
				let _this = this;
				uni.getSystemInfo({
					success(res) {
						_this.phoneHeight = res.windowHeight;
						// 计算组件的高度
						let view = uni.createSelectorQuery().select('.head_top');
						view.boundingClientRect(data => {
							let h = _this.phoneHeight - data.height;
							_this.scrollviewHigh = h;
						}).exec();
					}
				});
			},
			search() {
				this.page = 1;
				this.listData = [];
				this.getData();
			},
			/*获取文章分类*/
			getCategory() {
				let self = this;
				self._get('course.category/index', {}, function(res) {
					self.categorys = res.data.list;
				});
			},
			FirstTab(index) {
				if (this.loading) {
					return false
				}
				if (index == -1) {
					this.categorys_index = index;
					this.tabTypeFunc(0);
					this.category_list = [];
				} else {
					this.category_list = this.categorys[index].child;
					if (this.category_list) {
						this.categorys_index = index;
						this.tabTypeFunc(this.categorys[index].child[0].category_id);
					} else {
						this.category_list = [];
						this.categorys_index = index;
						this.tabTypeFunc(this.categorys[index].category_id);
					}
				}
			},
			/*tab切换*/
			tabTypeFunc(e) {
				if (this.loading) {
					return false
				} else {
					this.loading = true;
				}
				if (e != this.searchForm.category_id) {
					this.searchForm.category_id = e;
					this.page = 1;
					this.listData = [];
					this.getData();
				} else {
					this.loading = false;
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
					'course.course/list', {
						page: page || 1,
						list_rows: list_rows,
						category_id: self.searchForm.category_id || 0,
						search: self.searchForm.search
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
				this.gotoPage('/pages/course/course-detail?course_id=' + e);
			}
		}
	};
</script>

<style lang="scss">
	.head_top {
		background-color: #333333;

		.index-search-box_re {
			padding: 25rpx;
			padding-bottom: 0;
			background-color: #333333;
		}
	}

	.top-tabbar {
		padding: 30rpx;
		background-color: #333333;
		border: none;
	}

	.category-list {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-wrap: nowrap;
		overflow-x: auto;
		padding: 24rpx;
		background: #FFFFFF;
	}

	.category-item {
		min-width: 154rpx;
		height: 50rpx;
		background: #F2F2F2;
		border-radius: 25rpx;
		flex-shrink: 0;
		margin-left: 21rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 24rpx;
		font-weight: 400;
		color: #333333;
	}

	.category-item.active {
		color: #FFFFFF;
		background-color: #72DEED;
	}

	.course-list-wrap .type-list .tab-item {
		flex: none;
		padding: 0 30rpx;
		font-size: 28rpx;
		font-weight: 400;
		height: 87rpx;
		line-height: 87rpx;
		white-space: nowrap;
		color: #FFFFFF;
	}

	.course-list-wrap .type-list .tab-item.active {
		margin: 0;
		font-size: 28rpx;
		font-weight: 400;
		color: #FFFFFF;
		background-color: #333333;
	}

	.course-list-wrap .type-list .tab-item.active::after {
		background-color: #72DEED;
		width: 42rpx;
		height: 6rpx;
		border-radius: 3rpx;
		bottom: 8rpx;
	}

	.course-list {
		background: #ffffff;
	}

	.course-list .item {
		padding: 30rpx 0;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 30rpx;
		border-bottom: 1px solid #eee;
	}

	.course-list .item .info {
		flex: 1;
		overflow: hidden;
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		flex-direction: column;
		height: 148rpx;
	}

	.course-list .item .title {
		font-size: 28rpx;
	}

	.course-list .item .pic {
		padding-right: 22rpx;
		position: relative;
	}

	.hot-img-tip {
		position: absolute;
		width: 78rpx;
		height: 34rpx;
		background: rgba($color: #000000, $alpha: 0.75);
		border-radius: 5rpx;
		font-size: 18rpx;
		color: #FFFFFF;
		display: flex;
		justify-content: center;
		align-items: center;
		top: 10rpx;
		left: 19rpx;
	}

	.course-list .item .pic,
	.course-list .item .pic image {
		width: 263rpx;
		height: 148rpx;
		border-radius: 12rpx;
	}

	.course-list .item .datatime {
		margin-top: 20rpx;
		font-size: 24rpx;
		color: #999999;
	}

	.label-list {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		overflow-x: auto;
		overflow-y: hidden;
	}

	.label-item {
		flex-shrink: 0;
		height: 33rpx;
		color: #72DEED;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 22rpx;
		padding: 0 24rpx;
		margin-right: 13rpx;
		background: rgba($color: #72DEED, $alpha: 0.25);
		border-radius: 28rpx;
	}
</style>