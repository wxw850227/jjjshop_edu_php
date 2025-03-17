<template>
	<view class="class-list">
		<view class="class-item d-b-c flex-1" v-for="v in listData" :key="v">
			<view class="class-text f26 gray1 mr20">{{ v.title }}</view>
			<view class="class-btn d-c-c flex-1">
				<image class="class-t-img" src="/static/image/weixin.png" mode="" v-if="v.wx_image"></image>
				<image class="class-t-img" src="/static/image/qq.png" mode="" v-else-if="v.qq_image"></image>
				<view class="class-type d-b-c" @click="gotoClass(v)">加入班群</view>
			</view>
		</view>
		<empty v-if="listData.length == 0 && !loading"></empty> 
		<uni-load-more v-else :loadingType="loadingType"></uni-load-more>
		<concatMask ref="concatRef" />
	</view>
</template>

<script>
	import concatMask from '@/components/concatMask.vue';
	import empty from '@/components/empty.vue';
	import uniLoadMore from '@/components/uni-load-more.vue';
	export default {
		components: {
			concatMask,
			empty,
			uniLoadMore,
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
		onShow() {
			this.listData = [];
            this.page = 1;
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
		methods: {
			/*获取数据*/
			getData() {
				let self = this;
				uni.showLoading({
					title: '加载中'
				});
                self._get('user.Order/myClasses', {
                    page: self.page || 1,
					list_rows: self.list_rows,
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
			gotoClass(v){
				this.$refs.concatRef.openShow(v);
			},
		}
	}
</script>

<style>
	.class-list {
		padding: 24rpx;
	}
		.class-item {
			padding: 25rpx 20rpx;
			margin-bottom: 24rpx;
			background: #FFFFFF;
			border-radius: 15rpx;
	
			}
			.class-text{
				width: 68%;
			}
		.class-t-img {
			width: 42rpx;
			height: 38rpx;
			background: #FFFFFF;
			flex-shrink: 0;
			margin-right: 10rpx;
		}	
	
			.class-btn {	
				width: 20%;
				    color: #F2473F;
					/* background-color: rgba($color: #F89C31, $alpha: 0.15);
					border-color: rgba($color: #F89C31, $alpha: 0.15); */
					border: 1px solid #eee;
					border-radius: 45rpx;
					height: 56rpx;
					line-height: 56rpx;
					background: #FFFFFF;
					border: 1rpx solid #EEEEEE;
					padding: 0rpx 8rpx;
					font-size: 24rpx;
					
			
		}
		

</style>
