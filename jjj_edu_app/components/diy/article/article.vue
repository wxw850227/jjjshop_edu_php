<template>
	<view class="diy-article">
		<!--文章列表-->
		<view class="article-item" v-for="(item, index) in listData" :class="'show-type__'+ itemData.style.display"
			:key="index" @click="gotoPageFunc(item)">
			<!-- 有图模式 -->
			<template v-if="itemData.style.display == 10">
				<view class="picture mr15">
					<image :src="item.image && item.image.file_path" mode="aspectFill" @error="errorImg(index)" v-if="item.image && item.image.file_path"></image>
					<image src="/static/default.png" mode="aspectFill" v-else></image>
				</view>
				<view class="d-b-c d-stretch d-c flex-1">
					<view class="text-ellipsis-2 f26">
						{{ item.article_title }}
					</view>
					<view class="label">{{ item.category && item.category.name }}</view>
					<view class="d-b-c gray9 f24">
						<view class="d-s-c">
							<image class="time-img" src="/static/image/home/liulan.png" mode=""></image>
							<text class="ml10">{{ item.actual_views }}</text>
						</view>
						<view class="d-s-c">
							<image class="time-img" src="/static/image/home/time.png" mode=""></image>
							{{format(item.create_time)}}</view>
					</view>
				</view>
			</template>
			<!-- 无图模式-->
			<template v-if="itemData.style.display == 20">
				<view class="f26 text-ellipsis-2 lh200">
					{{ item.article_title }}
				</view>
			</template>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				/*数据列表*/
				listData: []
			};
		},
		props: ['itemData'],
		created() {
			this.listData = this.itemData.data;
		},
		methods: {
			errorImg(index){
				let row = JSON.parse(JSON.stringify(this.listData[index]))
				row.image = row.image || {};
				row.image.file_path = '/static/default.png';
				this.listData.splice(index,1)
				this.listData.splice(index,0,row)
			},

			/*跳转页面*/
			gotoPageFunc(e) {
				let _url = 'pages/news/detail?article_id=' + e.article_id;
				this.gotoPage(_url);
			},
			add0(m) {
				return m < 10 ? '0' + m : m
			},
			format(t) {
				//shijianchuo是整数，否则要parseInt转换
				var time = new Date(t);
				var y = time.getFullYear();
				var m = time.getMonth() + 1;
				var d = time.getDate();
				return y + '-' + this.add0(m) + '-' + this.add0(d);
			}
		}
	};
</script>

<style lang="scss" scoped>
	.diy-article {
		background: #ffffff;
		margin: 0 24rpx;
		border-radius: 25rpx;
		padding: 0 30rpx;
		box-shadow: 0px 8rpx 3rpx 0px rgba(6, 0, 1, 0.03);
		margin-bottom: 20rpx;
		.label{
			padding: 6rpx 22rpx;
			background: rgba($color: #F89C31, $alpha: 0.15);
			color: #F2473F;
			width: fit-content;
			border-radius: 28rpx;
		}
		.time-img {
			width: 32rpx;
			height: 32rpx;
			display: inline-block;
		}
	}

	.diy-article .show-type__10,
	.diy-article .show-type__20 {
		display: flex;
		padding: 30rpx 0;
		border-bottom: 1rpx solid #eeeeee;
	}

	.diy-article .show-type__10:last-child,
	.diy-article .show-type__20:last-child {
		border-bottom: none;
	}

	.diy-article .show-type__10 .picture {
		width: 212rpx;
		height: 162rpx;
		border-radius: 15rpx;
		margin-right: 25rpx;
	}

	.diy-article .show-type__10 .title {
		height: 80rpx;
	}

	.diy-article .show-type__10 .des {
		height: 36rpx;
	}

	.diy-article image {
		width: 100%;
		height: 100%;
		border-radius: 12rpx;
	}

	.diy-article .show-type__10 .icon.iconfont {
		font-size: 18rpx;
		color: #999999;
	}
</style>
