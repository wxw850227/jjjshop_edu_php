<!-- 教务首页 -->
<template>
	<view>
		<view class="top-box">
			<!-- 顶部搜索 -->
			<view class="top-search">
				<view class="search-box">
					<text class="icon iconfont icon-sousuo"></text>
					<input type="text" class="flex-1 search-input" v-model="search" placeholder="请输入..." />
					<view class="search-btn" @click="searchFunc">搜索</view>
				</view>
			</view>
			<!-- 顶部分类 -->
			<view class="top-nav">
				<view class="top-nav-item" :class="{active:category_id == 0}" @click="changeCat(-1)">全部
				</view>
				<view v-for="(item,index) in categoryList" :key="index" class="top-nav-item" :class="{active:category_id == item.category_id}" @click="changeCat(item)">
					{{ item.name }}
				</view>
			</view>
		</view>
		<view class="pt24 data-list">
			<view class="data-item d-b-s flex-1"  v-for="(item,index) in listData" :key="index" @click="gotoDetail(item)">
				<view class="imgbox"><image class="data-img" :src="item.image.file_path" mode=""></image></view>
				<view class="data-text ml20">
					<view>
						<view class="text-ellipsis-2 data-title f26 gray3">{{ item.title }}</view>
						<view class="date-biaoqian redF24 f22" v-for="v in item.label" :key="v">{{ v }}</view>
					</view>
					<view class="d-b-c data-bottom">
						<view class="gray9 f28">{{ item.sectionNum }}课时</view>
						<view class="fb f30 redF24" v-if="item.isFree == 1">免费</view>
						<view class="fb f30 redF24" v-else-if="item.isFree == 2">免费试看</view>
						<view class="fb f30 redF24" v-else-if="item.isFree == 3">￥{{ item.course_price }}</view>
					</view>
				</view>
				
			</view>
			<empty v-if="listData.length == 0 && !loading"></empty> 
			<uni-load-more v-else :loadingType="loadingType"></uni-load-more>
		</view>
	</view>
</template>

<script>
	import empty from '@/components/empty.vue';
	import uniLoadMore from '@/components/uni-load-more.vue';
	export default {
		components:{
			empty,
			uniLoadMore
		},
		data() {
			return {
				categoryList: [],
				category_id: 0,
				loading: false,
				list_rows: 10,
				listData: [],
				last_page: 1,
				no_more: false,
				search: "",
			}
		},
		onShow() {},
		onLoad() {
			this.getCategory();
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
			getCategory(){
				let self = this;
				uni.showLoading({
					title: '加载中'
				});
                self._get('course.Category/index', {}, res => {
					const { data:{ list }} = res;
					self.categoryList = list;
					self.getData();
				})
			},
			/*获取数据*/
			getData() {
				let self = this;
                self._get('course.Course/lists', {
                    page: self.page || 1,
					list_rows: self.list_rows,
					category_id: self.category_id,
					search: self.search,
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
			gotoDetail(v){
				this.gotoPage(`/pages/eduadmin/detail?course_id=${v.course_id}`)
			},
			searchFunc(){
				this.listData = [];
				this.page = 1;
				this.getData();
			},
			changeCat(v){
				if(v == -1){
					this.category_id = 0;
				}else{
					this.category_id = v.category_id;
				}
				this.listData = [];
				this.page = 1;
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
.data-item{
	padding: 24rpx 24rpx 0rpx 24rpx;
	margin: 0 24rpx 24rpx 24rpx;
	background-color: #FFFFFF;
	border-radius: 25rpx;
}
		.imgbox{
			width: 182rpx;
			
			}

			.data-img {
				width: 182rpx;
				height: 212rpx;
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
			.date-biaoqian{
				background-color: #fef0e0;
				display: inline-block;
				padding: 6rpx 12rpx;
				border-radius: 25rpx;
				margin-top: 12rpx;
			}
			.data-text{
				display: flex;
				flex-direction: column;
				align-content: space-between;
				flex: 1;
			}
			.data-bottom{
				padding: 80rpx 19rpx 0 3rpx;
			}
		
</style>
