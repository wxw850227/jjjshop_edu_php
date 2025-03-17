<template>
	<!-- 教务课程 -->
	<view class="diy-education-box">
		<view class="diy-education">
			<view class="display__list">
				<view class="education-list column__2">
					<view class="education-item" v-for="(education, index) in itemData.data" :key="index"
						@click="gotoPage('/pages/eduadmin/detail?course_id='+education.course_id)">
						<!-- 两列三列 -->
						<view class="education-cover">
							<image :src="education.image" mode="aspectFill"></image>
						</view>
						<view class="education-info">
							<view class="education-title">
								{{ education.title }}
							</view>
							<view class="f24 gray9">{{education.total_answer}}人已答题</view>
							<view class="price d-b-c">
								<view class="f30 fb dominant" v-if="education.is_pay==1">
									<text class="f22">¥</text>
									<text class="">{{ education.money }}</text>
								</view>
								<view class="f30 fb dominant" v-else>免费</view>
								<!-- <view class="answer-btn">
									<view style="margin-top: -4rpx;"><u-icon size="32rpx" name="/static/image/home/bi.png"></u-icon></view>
									答题
								</view> -->
							</view>
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
				/* let url = '/pages/education/detail/detail?education_id=' + e;
				this.gotoPage(url); */
			}
		}
	};
</script>

<style lang="scss">
	.diy-education-box{
		margin: 0 24rpx;
		padding-top: 20rpx;
	}
	.diy-education {
		padding: 28rpx 20rpx;
		background-color: #FFFFFF;
		border-radius: 25rpx;
		box-sizing: border-box;
	}

	.diy-education .education-list .education-cover image {
		width: 100%;
		height: 100%;
		border-radius: 15rpx;
	}

	.diy-education .education-list .education-info .already-sale text {
		padding: 4rpx 8rpx;
		border-radius: 8rpx;
		background: #f2f2f7;
		color: #999;
	}

	.diy-education .education-list .education-title {
		display: -webkit-box;
		font-size: 32rpx;
		overflow: hidden;
		word-wrap: break-word;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	.diy-education .education-list.column__2 .education-title {
		height: 60rpx;
		line-height: 2.2;
		font-size: 26rpx;
		margin-top: 12rpx;
		margin-bottom: 0;
	}

	.diy-education .education-list.column__2 .education-info {
		/* padding: 0 24rpx; */
	}

	.diy-education .education-list .price {
		font-size: 34rpx;
	}

	.diy-education .education-list.column__2 .price {
		margin-top: 10rpx;
		font-size: 30rpx;
	}

	.diy-education .education-list.column__2 {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
	}

	.diy-education .column__2 .education-item {
		width: 322rpx;
		margin-right: 18rpx;
		margin-bottom: 18rpx;
		overflow: hidden;
	}

	.diy-education .display__list .column__2 .education-item:nth-child(2n + 0) {
		margin-right: 0;
	}

	.diy-education .column__2 .education-cover {
		width: 322rpx;
		height: 180rpx;
		border-radius: 15rpx;
	}

	.answer-btn {
		width: 121rpx;
		height: 43rpx;
		line-height: 43;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 43rpx;
		font-size: 24rpx;
		color: #F2473F;
		background: rgba(#F89C31, 0.15);
	}
</style>
