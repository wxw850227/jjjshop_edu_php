<template>
	<view class="pb100">
		<view>
			<image class="masterPic" :src="detail.image && detail.image.file_path" mode="aspectFill" />
		</view>
		<view class="tabWrap">
			<zsTab :data="tabList" :activeName="activeName" :customStyle="tabStyle" @chang-tab="changeTab"></zsTab>
		</view>
		<view class="content-center">
			<template v-if="activeName == 0">
				<u-parse :content="detail.content"></u-parse>
			</template>
			<template v-if="activeName == 1">
				<view class="courseWrap">
					<view class="list">
						<view class="item" v-for="v in course_list" :key="v" @click="gotoCourse(v)"> 
							<view class="header">
								<view class="title">{{ v.title }}</view>
								<view class="totalTime">{{ v.sectionNum }}课时</view>
							</view>
							<view class="labelList">
								<view class="label" v-for="label in v.label" :key="label">{{ label }}</view>
							</view>
							<view class="intro">
								<view class="tearch">
									<view class="avatar">
										<image class="img" :src="detail.image && detail.image.file_path" mode="aspectFill" />
									</view>
									<view class="name">{{ detail.name }}</view>
								</view>
								<view class="status" v-if="v.isFree == 1">免费</view>
								<view class="status" v-else>{{ v.course_price }}</view>
							</view>
						</view>
					</view>
				</view>
			</template>
			<template v-if="activeName == 2">
				<view class="commenWrap" v-if="comment_list && comment_list.length > 0">
					<view class="header">
						<view class="l">
							<!-- <view class="score">5分</view>
							<view class="txt">知识评分</view> -->
						</view>
						<view class="r" @click="gotoComment"> 
							我要评价
						</view>
					</view>
					<view v-for="(item, index) in comment_list" :key="index" class="evaluate-list mb18">
						<view class="d-b-c mb18">
							<view class="d-s-c">
								<view class="user-image">
									<image :src="item.users.avatarUrl" mode=""></image>
								</view>
								<view class="f22 gray9">
									{{ item.users.nickName }}(
									<text v-if="item.score == 10">好评</text>
									<text v-if="item.score == 20">中评</text>
									<text v-if="item.score == 30">差评</text>
									)
								</view>
							</view>
							<view class="gray9 f22">{{ item.create_time }}</view>
						</view>
						<view class="commentCon">{{ item.content }}</view>
						<view class="evaluate-image-list">
							<view class="evaluate-image-item" v-for="(img, imgindex) in item.image"
								@click="yulan(item.image, imgindex)" :key="imgindex">
								<image :src="img.file_path" mode="aspectFill"></image>
							</view>
						</view>
					</view>
				</view>
				<empty v-if="comment_list.length == 0 && !loading">
					<view class="commentBtn" @click="gotoComment">去评价</view>
				</empty>
			</template>
		</view>
	</view>
</template>

<script>
	import zsTab from '@/components/zs-tab.vue';
	import empty from '@/components/empty.vue';
	export default {
		components:{
			zsTab,
			empty
		},
		data() {
			return {
				lecturer_id: 0,
				detail: {
					image: {},
					list: [],
					content: '',
				},
				commentParams:{
					page: 1,
					list_rows: 10,
					last_page: 1,
					no_more: false,
				},
				comment_list:[],
				courseParams:{
					page: 1,
					list_rows: 10,
					last_page: 1,
					no_more: false,
				},
				course_list:[],
				tabList:[
					{
						key: '教师风采',
						value: 0,
					},
					{
						key: '在授课程',
						value: 1,
					},
					{
						key: '用户评价',
						value: 2,
					},
				],
				activeName: 0,
				tabStyle:{
					background: 'transparent',
					fontSize: '36rpx'
				}
			}
		},
		onLoad(e) {
			this.lecturer_id = e.lecturer_id;
			this.getData()
		},
		onReachBottom() {
			let self = this;
			if(this.activeName == 2){
				if (self.commentParams.page < self.commentParams.last_page) {
					self.commentParams.page++;
					self.getComment();
				}
				self.commentParams.no_more = true;
			}else if(this.activeName == 1){
				if (self.courseParams.page < self.courseParams.last_page) {
					self.courseParams.page++;
					self.getData();
				}
				self.courseParams.no_more = true;
			}
		},
		methods: {
			/* 
			1课程
			2教务
			 */
			gotoCourse(v){
				if(v.course_type == 1){
					this.gotoPage('/pages/knowledge/course/detail?course_id='+v.course_id)
				}else if(v.course_type == 2){
					this.gotoPage('/pages/eduadmin/detail?course_id='+v.course_id)
				}
			},
			changeTab(e) {
				this.activeName = e.value;
				if(e.value == 2){
					this.comment_list = [];
					this.commentParams = {
						page: 1,
						list_rows: 10,
						last_page: 1,
						no_more: false,
					}
					this.getComment();
				}else if(e.value == 1){
					this.course_list = [];
					this.courseParams = {
						page: 1,
						list_rows: 10,
						last_page: 1,
						no_more: false,
					}
					this.getData();
				}
			},
			getData() {
				let self = this;
				self.loading = true;
				uni.showLoading({
					title: '加载中'
				});
				self._get('lecturer.Lecturer/detail', {
					page: self.courseParams.page || 1,
					list_rows: self.courseParams.list_rows,
					lecturer_id: self.lecturer_id
				}, res => {
					const { data: { detail }} = res;
					self.detail = detail;
					self.course_list = self.course_list.concat(detail.list.data);
					self.courseParams.last_page = detail.list.last_page;
					if (detail.list.last_page <= 1) {
						self.courseParams.no_more = true;
					}
					self.loading = false;
					uni.hideLoading();
				})
			},
			gotoComment(){
				this.gotoPage(`/pages/order/evaluate?lecturer_id=${this.lecturer_id}`)
				
			},
			getComment(){
				let self = this;
				self.loading = true;
				uni.showLoading({
					title: '加载中'
				});
				self._get('lecturer.Comment/list', {
					page: self.commentParams.page || 1,
					list_rows: self.commentParams.list_rows,
					lecturer_id: self.lecturer_id
				}, res => {
					self.comment_list = self.comment_list.concat(res.data.list.data);
					self.commentParams.last_page = res.data.list.last_page;
					if (res.data.list.last_page <= 1) {
						self.commentParams.no_more = true;
					}
					self.loading = false;
					uni.hideLoading();
				})
			}
		}
	}
</script>

<style lang="scss">
	.masterPic{
		height: 412rpx;
		width: 100%;
	}
	.tabWrap{
		padding: 20rpx 0;
	}
	.content-center {
		width: 706rpx;
		height: 948rpx;
		border-radius: 25rpx;
		margin: 0 auto;
		box-sizing: border-box;
	}
	.courseWrap{
		.list{
			.item{
				background: #fff;
				padding: 38rpx 22rpx;
				border-radius: 25rpx;
				margin-bottom: 20rpx;
			}
			.header{
				display: flex;
				justify-content: space-between;
				align-items: center;
				font-size: 26rpx;
				.title{
					color: #111111;
				}
				.totalTime{
					color: #999999;
				}
			}
			.labelList{
				display: flex;
				flex-wrap: wrap;
				gap: 11rpx;
				padding: 20rpx 0;
				.label{
					height: 44rpx;
					padding: 0 20rpx;
					line-height: 44rpx;
					background: rgba(248,156,49,0.15);
					border-radius: 21rpx;
					text-align: center;
					font-size: 22rpx;
					color: #F2473F;
				}
			}
			.intro{
				display: flex;
				align-items: center;
				justify-content: space-between;
				.tearch{
					.avatar{
						width: 80rpx;
						height: 80rpx;
						border-radius: 50%;
						overflow: hidden;
					}
					.img{
						width: 100%;
						height: 100%;
					}
					.name{
						font-size: 24rpx;
						color: #999999;
						text-align: center;
						margin-top: 19rpx;
					}
				}
				.status{
					font-size: 30rpx;
					font-weight: bold;
					color: #F2473F;
				}
			}
		}
	}
	.commenWrap{
		background: #fff;
		padding: 30rpx 20rpx;
		border-radius: 25rpx;
		.header{
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding-bottom: 20rpx;
			.l{
				display: flex;
				align-items: center;
				gap: 12rpx;
			}
			.score{
				font-size: 40rpx;
				color: #F2473F;
			}
			.txt{
				font-size: 26rpx;
				color: #999;
			}
			.r{
				width: 148rpx;
				height: 54rpx;
				line-height: 54rpx;
				font-size: 26rpx;
				color: #fff;
				background: linear-gradient(45deg, #F2473F, #F26E2F);
				border-radius: 50rpx;
				text-align: center;
			}
		}
		.user-image {
			width: 69rpx;
			height: 69rpx;
			border-radius: 50%;
			margin-right: 12rpx;

			image {
				width: 69rpx;
				height: 69rpx;
				border-radius: 50%;
			}
		}
		.commentCon{
			font-size: 24rpx;
			color: #666666;
			padding: 27rpx 0;
		}
		.evaluate-image-list {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			flex-wrap: wrap;
		}
		.evaluate-image-item {
			flex-shrink: 0;
			width: 146rpx;
			height: 146rpx;
			border-radius: 15rpx;
			margin-right: 25rpx;
			margin-bottom: 25rpx;

			image {
				width: 146rpx;
				height: 146rpx;
				border-radius: 15rpx;
			}
		}
	}
	.commentBtn{
		width: 556rpx;
		height: 90rpx;
		line-height: 90rpx;
		background: linear-gradient(45deg, #F2473F, #F26E2F);
		border-radius: 45rpx;
		text-align: center;
		font-size: 32rpx;
		color: #fff;
		margin: 0 auto;
		margin-top: 94rpx;
	}
	.red-dot {
		display: inline-block;
		width: 14rpx;
		height: 14rpx;
		background: linear-gradient(45deg, #F2473F, #F26E2F);
		margin-right: 17rpx;
	}

	.evaluate-list {
		border-bottom: 1rpx solid #eeeeee;
		&:last-child{
			border-color: transparent;
		}
	}
</style>
