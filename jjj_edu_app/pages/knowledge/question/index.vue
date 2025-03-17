<!-- 真题 -->
<template>
<view>
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
			<view class="top-nav-item" :class="{active:category_id == 0}" @click="changeCat(-1)">全部
			</view>
			<view v-for="(item,index) in 6" :key="index" class="top-nav-item"
				:class="{active:category_id == item + 1}" @click="changeCat(item)">计算机考试
			</view>
		</view>
	</view>
	<view class="pt24 data-list">
		<view class="data-item" v-for="(item,index) in 7" :key="index">
			<image class="data-img" src="../../../static/default.png" mode=""></image>
			<view class="text-ellipsis-2 data-title">信息系统项目管理师软考...</view>
			<view class="data-num f24 gray9">24人已答题</view>
			<view class="d-b-c data-bottom">
				<view class="fb f30 redF24">￥30.00</view>
				<view class="data-btn d-b-c">
					<image class="btn-img" src="../../../static/image/home/bi.png" mode=""></image>
					<view class="fb f30 redF24">答题</view>
				</view>
			</view>
		</view>
	</view>
		
</view>	
</template>

<script>
	export default {
		data() {
			return {
				searchName: '',
				category_id: 0
			}
		},
		methods: {
			searchFunc() {
	
			},
			changeCat(n) {
				this.category_id = n + 1;
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
				height: 32rpx;
				line-height: 32rpx;
				overflow: hidden;
				margin-bottom: 24rpx;
			}
			.data-btn{
				height: 44rpx;
				line-height: 44rpx;
				background: #fef0e0;
				border: 1rpx solid #fef0e0;
				border-radius: 22rpx;
				padding: 0 10rpx;
				font-size: 22rpx;
				color: #f2473f;
				
			}
			.btn-img {
				width: 32rpx;
				height: 32rpx;
				// background: #FFFFFF;
				// border-radius: 13rpx;
				flex-shrink: 0;
				margin-right: 8rpx;
			}
			.data-bottom{
				padding: 0 19rpx 0 3rpx;
			}
		}
	}
</style>
