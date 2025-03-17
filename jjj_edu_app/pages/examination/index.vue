<!-- 题库首页 -->
<template>
	<view class="pt24 pb100">
		<view class="diy-banner-box pr round">
			<swiper class="swiper" autoplay :interval="2000" :duration="500" @change="changeSwiper">
				<swiper-item v-for="(item,index) in adList" :key="index" @click="gotoPage(item)">
					<image :src="item.image.file_path" mode="aspectFill"></image>
				</swiper-item>
			</swiper>
			<view class="swiper-dots rectangle ww100 d-c-c">
				<template  v-for="(item,index) in adList" :key='index'>
					<view :class="current==index ? 'swiper-dot active' : 'swiper-dot'"></view>
				</template>
			</view>
		</view>
		<!-- <view class="index-title" style="margin-bottom: 20rpx;">
			<view class="name">模考精选</view>
			<view class="screen">
				<u-icon class="mr10" width="40rpx" height="40rpx" name="/static/image/shaixuan.png"></u-icon>筛选
			</view>
		</view> -->
		<!-- <view class="mk-box">
			<view class="mk-center">
				<u-icon name="/static/image/mk_img.png" size="174rpx"></u-icon>
				<view style="margin-left: 18rpx;" class="d-c d-c-s flex-1">
					<view class="f32 mb10 gray3">万人模考</view>
					<view class="f26 gray6">精准高频率考点</view>
					<view class="redF24 f28 fb dominant">共<text>10</text>场</view>
				</view>
				<view class="mk-btn">开始模考</view>
			</view>
		</view> -->
		<!-- <view class="index-title">
			<view class="name">精选练习</view>
			<view class="more" @click="gotoPage('/pages/examination/practice/list')">
				更多<u-icon width="40rpx" height="40rpx" color="#999999" name="arrow-right"></u-icon>
			</view>
		</view>
		<view class="recommWrap zt-box">
			<view class="errors" @click="gotoPage('/pages/examination/wrong/list')">
				<image class="bg" src="/static/bg/error.png" mode=""></image>
				<view class="conWrap">
					<view class="title">错题集</view>
					<view class="txt">重刷,拒绝一错再错</view>
					<view class="num">{{ trainDetail.wrongQuestion || 0 }}条</view>
				</view>	
			</view>
			<view class="fans" @click="gotoPage('/pages/user/collect/subject')">
				<image class="bg" src="/static/bg/success.png" mode=""></image>
				<view class="conWrap">
					<view class="title">收藏的题</view>
					<view class="txt">打造您的专属题库</view>
					<view class="num">{{ trainDetail.collectQuestioon || 0 }}条</view>
				</view>
			</view>
		</view> -->
		<view class="index-title">
			<view class="name">精选练习</view> 
			<view class="more" @click="gotoPage('/pages/examination/practice/list')">
				更多<u-icon width="40rpx" height="40rpx" color="#999999" name="arrow-right"></u-icon>
			</view>
		</view>
		<view class="zt-box">
			<view class="zt-list">
				<view class="zt-item" v-for="(item,index) in realList" :key='index'
				@click="gotoPage(`/pages/examination/exam/detail?paper_id=${item.paper_id}&model=practice`)">
					<view class="mb10 o-h" style="border-radius: 15rpx;">
						<u-icon width="322rpx" height="180rpx" :name="item.image.file_path">
						</u-icon>
					</view>

					<view class="text-ellipsis f26 gray1 mb10">{{item.title}}</view>
					<view class="gray9 f24 mb10">{{item.total_answer}}人已答题</view>
					<view class="d-b-c">
						<view class="f30 dominant fb" v-if="item.pay_type!=0">￥{{item.money}}</view>
						<view class="f30 dominant fb" v-else>免费</view>
						<view class="zt-btn">
							<u-icon color="#F2473F" size="30rpx" name="edit-pen"></u-icon>答题
						</view>
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
				current: 0,
				adList: [],
				realList: [],
				trainDetail: {},
			}
		},
		created() {

		},
		onShow() {
			this.getData();
			// this.getTabBarLinks();
		},
		methods: {
			getData() {
				let self = this;
				self._get('paper.Paper/index', {}, res => {
					self.adList = res.data.detail.adList;
					self.realList = res.data.detail.realList;
					self.trainDetail = res.data.detail.trainDetail;
				})
			},
			changeSwiper(e) {
				this.current = e.detail.current;
			},
			/*跳转页面*/
			gotoPages(e) {
				this.gotoPage(e.linkUrl);
			}
		}
	}
</script>

<style lang="scss" scoped>
	/* 轮播图 */
	.diy-banner-box {
		overflow: hidden;
	}

	.diy-banner-box.round,
	.diy-banner-box.round .swiper {
		width: 750rpx;
	}

	.diy-banner-box.round .swiper {
		height: 222rpx;
	}

	.diy-banner-box.round {
		padding: 0 24rpx;
		height: 222rpx;
		box-sizing: border-box;
	}

	.diy-banner-box.round image {
		width: 702rpx;
		height: 222rpx;
		border-radius: 25rpx;
	}

	.diy-banner-box.round .swiper-dots {
		position: absolute;
		bottom: 15rpx;
		left: 0;
		right: 0;
		margin: auto;
	}

	.swiper-dots.rectangle .swiper-dot {
		width: 40rpx;
		height: 6rpx;
		margin: 0 4rpx;
		background: #ebedf0;
		opacity: 0.3;
		border-radius: 4rpx;
	}

	.swiper-dots.rectangle .swiper-dot.active {
		opacity: 1;
	}

	/* 标题 */
	.index-title {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 15rpx 24rpx;
		height: 106rpx;
		line-height: 106rpx;
		box-sizing: border-box;

		.name {
			font-size: 32rpx;
			font-weight: bold;
			color: #333333;
			flex: 1;
		}

		.more {
			color: #999999;
			font-size: 26rpx;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.screen {
			width: 144rpx;
			height: 64rpx;
			border-radius: 32rpx;
			background: #FFFFFF;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 24rpx;
			color: #333333;
		}
	}

	.mk-box {
		padding: 0 24rpx;

		.mk-center {
			height: 222rpx;
			background: #FFFFFF;
			border-radius: 25rpx;
			padding: 20rpx 21rpx 28rpx 32rpx;
			box-sizing: border-box;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-bottom: 40rpx;

		}

		.mk-btn {
			width: 142rpx;
			height: 50rpx;
			border-radius: 50rpx;
			line-height: 50rpx;
			text-align: center;
			background: linear-gradient(45deg, #F2473F, #F26E2F);
			font-size: 24rpx;
			color: #FFFFFF;
		}
	}

	.lx-box {
		padding: 0 24rpx;
		margin-bottom: 40rpx;

		.lx-center {
			display: flex;
			justify-content: space-between;
			align-items: center;

			.lx-item {
				position: relative;
				border-radius: 25rpx;
				overflow: hidden;

				.lx-title {
					position: absolute;
					top: 50rpx;
					left: 31rpx;
					z-index: 2;
					color: #FFFFFF;
					font-size: 32rpx;
					font-weight: bold;
				}

				.lx-btn {
					position: absolute;
					top: 113rpx;
					left: 31rpx;
					z-index: 2;
					width: 142rpx;
					height: 50rpx;
					line-height: 50rpx;
					text-align: center;
					border-radius: 50rpx;
					background: #FFFFFF;
					font-size: 24rpx;
					font-weight: bold;
					color: $dominant-color;
				}
			}
		}
	}

	.zt-box {
		padding: 0 24rpx;

		.zt-list {
			background: #FFFFFF;
			border-radius: 25rpx;
			padding: 30rpx 20rpx;
			display: flex;
			justify-content: space-between;
			align-items: flex-start;
			flex-wrap: wrap;

			.zt-item {
				width: 322rpx;
				margin-bottom: 24rpx;

				.zt-btn {
					width: 121rpx;
					height: 43rpx;
					background: rgba($color: #F89C31, $alpha: 0.15);
					border-radius: 40rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					color: #F2473F;
				}
			}
		}
	}
	/* 精选练习 */
	.recommWrap{
		display: flex;
		gap: 20rpx;
		.errors,.fans{
			border-radius: 25rpx;
			flex: 1;
			height: 192rpx;
			box-sizing: border-box;
			position: relative;
			.bg{
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
			}
			.conWrap{
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				padding: 27rpx 34rpx;
				box-sizing: border-box;
			}
		}
		.fans{
			background: linear-gradient(45deg, #3592FF 0%, #3DAEFF 100%);
			.txt{
				color: #FFFFFF;
			}
		}
		.title{
			font-size: 32rpx;
			font-weight: bold;
			color: #FFFFFF;

		}
		.txt{
			color: #FCDADA;
			font-size: 24rpx;
		}
		.num{
			width: 128rpx;
			height: 42rpx;
			line-height: 42rpx;
			background: #FFFFFF;
			border-radius: 21rpx;
			font-size: 24rpx;
			color: #F2473F;
			text-align: center;
		}
	}
</style>
