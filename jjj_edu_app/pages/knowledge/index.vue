<!-- 知识首页 -->
<template>
	<view>
		<!-- 顶部 -->
		<view class="top-box">
			<!-- 顶部搜索 -->
			<view class="top-search">
				<view class="search-box">
					<text class="icon iconfont icon-sousuo"></text>
					<input type="text" class="flex-1 search-input" @confirm="searchFunc()" v-model="searchForm.search"
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
		<view class="pt24 data-list">
			<view class="data-item" v-for="(item,index) in listData" :key="index"
				@click="gotoPage('pages/knowledge/course/detail?course_id='+item.course_id)">
				<image class="data-img" :src="item.image?item.image.file_path:''" mode=""></image>
				<view class="text-ellipsis-2 data-title">{{item.title}}</view>
				<view class="d-b-c data-bottom">
					<view v-if="item.isFree==1" class="fb f30 redF24">免费</view>
					<view v-if="item.isFree==2" class="fb f30 redF24">免费试看</view>
					<view v-if="item.isFree==3" class="fb f30 redF24">￥{{item.course_price}}</view>
					<view class="gray9 f28">共{{item.sectionNum}}节</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapGetters} from 'vuex'
	export default {
		data() {
			return {
				searchName: '',
				category_id: 0,
				phoneHeight: '',
				scrollviewHigh: "",
				page: 1,
				list_rows: 10,
				loading: false,
				searchForm: {
					category_id: 0,
					search: ''
				},
				listData: [],
				last_page: 1,
				no_more: false,
				categorys: []
			}
		},
		onLoad(){},
		onShow() {
			let category_id = this.$store._state.data.navTargetCategory;
			this.category_id = category_id || 0;
			this.init();
			this.page = 1;
			this.listData = [];
			this.getCategory();
			this.getData();
		},
		onHide() {
			this.$store.commit('changNavTargetCategory', 0);
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
			},
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
			/*初始化*/
			init() {
				console.log('init')
				let _this = this;
				uni.getSystemInfo({
					success(res) {
						_this.phoneHeight = res.windowHeight;
						// 计算组件的高度
						let view = uni.createSelectorQuery().select('.top-box');
						view.boundingClientRect(data => {
							let h = _this.phoneHeight - data.height;
							_this.scrollviewHigh = h;
						}).exec();
					}
				});
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
						category_id: self.category_id || 0,
						// category_id: self.searchForm.category_id,
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
			/*获取文章分类*/
			getCategory() {
				let self = this;
				self._get('course.category/index', {}, function(res) {
					self.categorys = res.data.list;
				});
			},
			searchFunc() {
				this.page = 1;
				this.listData = [];
				this.getData();
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
</style>
