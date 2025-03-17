<template>
	<view class="diy-lecturer">
		<view class="display__list">
			<view class="lecturer-list column__2">
				<view class="lecturer-item" v-for="(lecturer, index) in itemData.data" :key="index"
					@click="gotoDetail(lecturer.lecturer_id)">
					<!-- 两列三列 -->
					<view class="tipNum">
						<image src="/static/image/tixing_bg.png" mode=""></image>
						<view class="tip-num">{{index>9?index+1:'0'+(index+1)}}</view>
					</view>
					<view class="lecturer-cover">
						<image :src="lecturer.image" mode="aspectFill"></image>
					</view>
					<view class="lecturer-info">
						<view class="lecturer-title">
							{{ lecturer.name }}
							 <!-- <u-rate :value="lecturer.star" size="20"  activeColor="#F8A032" readonly></u-rate> -->
						</view>
						<view class="scoreList">
							<!-- <view v-for="score in lecturer.star" :key="score">{{ lecturer.star }}</view> -->
							<image class="score" v-for="score in lecturer.star" :key="score" src="/static/image/score.png" mode=""></image>
						</view>				
					</view>	
				</view>	
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {};
		},
		props: ['itemData'],
		created() {},
		methods: {
			scroll(e) {},
			/*跳转产品详情*/
			gotoDetail(e) {
				let url = '/pages/knowledge/lecturer/detail?lecturer_id=' + e;
				this.gotoPage(url);
			},
		}
	};
</script>

<style lang="scss" scoped>
	.diy-lecturer {
		margin:0 24rpx;
		box-sizing: border-box;
	}

	.diy-lecturer .lecturer-list .lecturer-cover image {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}

	.diy-lecturer .lecturer-list .lecturer-info .already-sale text {
		padding: 4rpx 8rpx;
		border-radius: 8rpx;
		background: #f2f2f7;
		color: #999;
	}

	.diy-lecturer .lecturer-list .lecturer-title {
		display: -webkit-box;
		font-size: 32rpx;
		overflow: hidden;
		word-wrap: break-word;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	.scoreList{
		display: flex;
		gap: 12rpx;
		justify-content: center;
		margin-top: 8rpx;
		.score{
			width: 30rpx;
			height: 30rpx;
		}
	}

	.diy-lecturer .lecturer-list.column__2 .lecturer-title {
		/* height: 78rpx;
		line-height: 1.5; */
		font-size: 26rpx;
		margin-top: 12rpx;
		// margin-bottom: 26rpx;
		color: #333333;
		text-align: center;
	}

	.diy-lecturer .lecturer-list.column__2 .lecturer-info {
		/* padding: 0 24rpx; */
	}

	.diy-lecturer .lecturer-list .price {
		font-size: 34rpx;
	}

	.diy-lecturer .lecturer-list.column__2 .price {
		margin-top: 10rpx;
		font-size: 30rpx;
	}

	.diy-lecturer .lecturer-list.column__2 {
		display: flex;
		flex-wrap: nowrap;
		justify-content: flex-start;
		overflow-x: auto;
	}

	.diy-lecturer .column__2 .lecturer-item {
		width: 248rpx;
		height: 286rpx;
		margin-right: 22rpx;
		background-color: #FFFFFF;
		border-radius: 25rpx;
		padding-top: 38rpx;
		box-sizing: border-box;
		position: relative;
		flex-shrink: 0;
	}

	.diy-lecturer .column__2 .lecturer-cover {
		width: 142rpx;
		height: 142rpx;
		border-radius: 50%;
		margin: 0 auto;
	}

	.tipNum {
		position: absolute;
		width: 48rpx;
		height: 53rpx;
		left: 30rpx;
		top: 0;
		z-index: 1;
		image {
			width: 48rpx;
			height: 53rpx;
		}

		.tip-num {
			position: absolute;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			margin: auto;
			z-index: 2;
			font-size: 24rpx;
			color: #FFFFFF;
			font-weight: bold;
			display: flex;
			justify-content: center;
			align-items: flex-start;
			padding-top: 4rpx;
			box-sizing: border-box;
		}
	}
</style>
