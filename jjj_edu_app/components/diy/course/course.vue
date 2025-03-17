<template>
	<view class="diy-course">
		<view class="display__list">
			<view class="course-list column__2">
				<view class="course-item" v-for="(course, index) in itemData.data" :key="index"
					@click="gotoPage('/pages/knowledge/course/detail?course_id='+course.course_id)">
					<!-- 两列三列 -->
					<view class="course-cover">
						<image :src="course.image" mode="aspectFill"></image>
					</view>
					<view class="course-info">
						<view class="course-title">
							{{ course.title }}
						</view>
						<view class="price d-b-c">
							<view class="f30 fb dominant" v-if="course.is_pay==1">
								<text class="f22">¥</text>
								<text class="">{{ course.money }}</text>
							</view>
							<view class="f30 fb dominant" v-else>免费</view>
							<view class="f28 gray9">共{{course.sectionNum}}节</view>
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
				let url = '/pages/course/detail/detail?course_id=' + e;
				this.gotoPage(url);
			}
		}
	};
</script>

<style>
	.diy-course {
		margin:0 24rpx;
		padding: 28rpx 20rpx;
		background-color: #FFFFFF;
		border-radius: 25rpx;
		box-sizing: border-box;
	}

	.diy-course .course-list .course-cover image {
		width: 100%;
		height: 100%;
		border-radius: 15rpx;
	}

	.diy-course .course-list .course-info .already-sale text {
		padding: 4rpx 8rpx;
		border-radius: 8rpx;
		background: #f2f2f7;
		color: #999;
	}

	.diy-course .course-list .course-title {
		display: -webkit-box;
		font-size: 32rpx;
		overflow: hidden;
		word-wrap: break-word;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	.diy-course .course-list.column__2 .course-title {
		height: 70rpx;
		line-height: 1.5;
		font-size: 26rpx;
		margin-top: 12rpx;
		margin-bottom: 10rpx;
	}

	.diy-course .course-list.column__2 .course-info {
		/* padding: 0 24rpx; */
	}

	.diy-course .course-list .price {
		font-size: 34rpx;
	}

	.diy-course .course-list.column__2 .price {
		margin-top: 10rpx;
		font-size: 30rpx;
	}

	.diy-course .course-list.column__2 {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
	}

	.diy-course .column__2 .course-item {
		width: 322rpx;
		margin-right: 18rpx;
		margin-bottom: 18rpx;
		overflow: hidden;
	}

	.diy-course .display__list .column__2 .course-item:nth-child(2n + 0) {
		margin-right: 0;
	}

	.diy-course .column__2 .course-cover {
		width: 322rpx;
		height: 180rpx;
		border-radius: 15rpx;
	}
</style>
