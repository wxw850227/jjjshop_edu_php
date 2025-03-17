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
		<view class="practiceWrap">
			<template v-for="(item,index) in listData" :key='index'>
				<view class="item" @click="gotoPage(`/pages/examination/exam/detail?paper_id=${item.paper_id}&model=practice`)">
					<view>
						<view class="title">{{ item.title }}</view>
						<view class="numWrap">
							<view class="total">共{{ item.item_number }}题</view>
							<view class="num">{{item.total_answer}}人已答题</view>
						</view>
					</view>
					<view class="btnWrap">
						<u-icon color="#F2473F" size="30rpx" name="edit-pen"></u-icon>
						<view>答题</view>
					</view>
				</view>
			</template>
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
				paper_type: 1,
			}
		},
		mounted() {
			this.getCategory();
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

<style lang="scss" scoped>
.practiceWrap{
	padding: 25rpx 22rpx;
	box-sizing: border-box;
	.item{
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: #FFFFFF;
		border-radius: 25rpx;
		padding: 33rpx 22rpx;
		margin-bottom: 26rpx;
	}
	.title{
		font-size: 30rpx;
		color: #333333;
	}
	.numWrap{
		margin-top: 24rpx;
		display: flex;
		font-size: 26rpx;
		.total{
			color: #F2473F;
			width: 110rpx;
		}
		.num{
			color: #666666;
			margin-left: 2rpx;
		}
	}
	.btnWrap{
		display: flex;
		width: 142rpx;
		height: 50rpx;
		background: rgba($color: #F89C31, $alpha: 0.15);
		font-size: 24rpx;
		color: #F2473F;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 20rpx;
	}

}
</style>
