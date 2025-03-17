<template>
	<view>
		<!-- <view class="top-tabbar">
			<view class="tab-item" :class="{active:type == 0}" @click="changeType(0)">练习</view>
			<view class="tab-item" :class="{active:type == 1}" @click="changeType(1)">真题</view>
		</view> -->
		<!-- 练习 -->
		<view>
			<view class="collect-list">
				<view class="collect-item" v-for="(item,index) in listData" :key="index"
					@click="gotoPage('/pages/user/collect/subdetail?favorite_id='+item.favorite_id)">
					<view class="item-top d-b-c flex-1 mb20">
						<view class="item-tit f30 redF24">{{item.paper.title}}</view>
						<image class="btn-img" @click.stop="clickFan(item)" src="/static/image/sc_add.png" mode=""></image>
					</view>
					<view class="item-bottom d-s-c">
						<view class="item-text gray6 f26"><text
								class="item-type fb gray9 f26">[{{item.question.type_name}}]</text>{{item.question.title}}
						</view>
					</view>
				</view>
				<!-- 没有记录 -->
				<!-- <view class="d-c-c p30" v-if="listData.length==0 && !loading">
					<text class="iconfont icon-wushuju"></text>
					<text class="cont">亲，暂无相关记录哦</text>
				</view> -->
				<empty v-if="listData.length==0 && !loading"></empty>
				<uni-load-more v-else :loadingType="loadingType"></uni-load-more>
			</view>
		</view>
	</view>
</template>

<script>
	import uniLoadMore from "@/components/uni-load-more.vue";
	import empty from '@/components/empty.vue';
	export default {
		components: {
			uniLoadMore,
			empty,
		},
		data() {
			return {
				type: 0,
				list_rows: 10,
				page: 1,
				loading: false,
				listData: [],
				last_page: 1,
				no_more: false,
			}
		},
		onShow() {
			this.fetchData();
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
			fetchData(){
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
				self._get('paper.Favorite/list', {
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
			changeType(n) {
				if (this.type == n) {
					return
				}
				this.type = n;
			},
			clickFan(v){
				let self = this;
				const { paper_id, question_id, paper_question_id } = v;
				self._post('paper.Favorite/fav', {
					paper_id: paper_id,
					question_id: question_id,
					paper_question_id: paper_question_id
				}, res => {
					if (v.is_fav == 1) {
						uni.showToast({
							icon: 'none',
							title: '取消成功'
						});
					} else {
						uni.showToast({
							icon: 'none',
							title: '收藏成功，请到“我的->我的收藏”查看和管理哦'
						});
					}
					self.fetchData();
				})
			},
		}
	}
</script>

<style lang="scss">
	.collect-list {


		.collect-item {
			padding: 25rpx 20rpx;
			margin-bottom: 24rpx;
			background: #FFFFFF;
			border-radius: 15rpx;

		}

		.btn-img {
			width: 46rpx;
			height: 46rpx;
			background: #FFFFFF;
			flex-shrink: 0;

		}

		.item-top {
			border-bottom: 1px dotted #ddd;
			padding-bottom: 20rpx;
		}

		.item-text {
			line-height: 48rpx;
		}
	}
</style>
