<template>
	<view class="diy-exam">
		<view class="display__list">
			<view class="exam-list column__2">
				<view class="exam-item" v-for="(exam, index) in itemData.data" :key="index"
				@click="gotoPage(`/pages/examination/exam/detail?paper_id=${exam.paper_id}&model=practice`)">
					<!-- 两列三列 -->
					<view class="exam-cover">
						<image :src="exam.image" mode="aspectFill"></image>
					</view>
					<view class="exam-info">
						<view class="exam-title">
							{{ exam.title }}
						</view>
						<view class="f24 gray9">{{exam.total_answer}}人已答题</view>
						<view class="price d-b-c">
							<view class="f30 fb dominant" v-if="exam.is_pay==1">
								<text class="f22">¥</text>
								<text class="">{{ exam.money }}</text>
							</view>
							<view class="f30 fb dominant" v-else>免费</view>
							<view class="answer-btn">
								<view style="margin-top: -4rpx;"><u-icon size="32rpx" name="/static/image/home/bi.png"></u-icon></view>
								答题
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
				let url = '/pages/exam/detail/detail?exam_id=' + e;
				this.gotoPage(url);
			}
		}
	};
</script>

<style lang="scss">
	.diy-exam {
		margin: 0 24rpx;
		padding: 28rpx 20rpx;
		background-color: #FFFFFF;
		border-radius: 25rpx;
		box-sizing: border-box;
	}

	.diy-exam .exam-list .exam-cover image {
		width: 100%;
		height: 100%;
		border-radius: 15rpx;
	}

	.diy-exam .exam-list .exam-info .already-sale text {
		padding: 4rpx 8rpx;
		border-radius: 8rpx;
		background: #f2f2f7;
		color: #999;
	}

	.diy-exam .exam-list .exam-title {
		display: -webkit-box;
		font-size: 32rpx;
		overflow: hidden;
		word-wrap: break-word;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	.diy-exam .exam-list.column__2 .exam-title {
		height: 78rpx;
		line-height: 1.5;
		font-size: 26rpx;
		margin-top: 12rpx;
		margin-bottom: 26rpx;
	}

	.diy-exam .exam-list.column__2 .exam-info {
		/* padding: 0 24rpx; */
	}

	.diy-exam .exam-list .price {
		font-size: 34rpx;
	}

	.diy-exam .exam-list.column__2 .price {
		margin-top: 10rpx;
		font-size: 30rpx;
	}

	.diy-exam .exam-list.column__2 {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
	}

	.diy-exam .column__2 .exam-item {
		width: 322rpx;
		margin-right: 18rpx;
		margin-bottom: 18rpx;
		overflow: hidden;
	}

	.diy-exam .display__list .column__2 .exam-item:nth-child(2n + 0) {
		margin-right: 0;
	}

	.diy-exam .column__2 .exam-cover {
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
