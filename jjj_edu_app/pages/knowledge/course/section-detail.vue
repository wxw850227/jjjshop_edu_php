<template>
	<view class="wrap" v-if="!loadding">
		<view class="videoWrap">
			<view class="videoBox">
				<template v-if="!videoPause">
					<view class="masterPic">
						<image class="img" :src="detail.video_image" mode="scaleToFill"></image>
					</view>
					<image class="startIcon" src="/static/image/bofang.png" mode="scaleToFill"  @click="startVideo"></image>
				</template>
				<template v-else>
					<video id="video" :src="detail.video_link" :autoplay="true" style="width: 100%;height: 100%"></video>
				</template>
			</view>
			<view class="contnet">
				<view class="title">{{ detail.title }}</view>
				<!-- <view class="num">视频已播放2596次</view> -->
				<view class="num">{{ detail.update_time }}</view>
			</view>
		</view>
		<view class="auditorWrap" v-if="detail.audio_image">
			<image class="imgAuditor" :src="detail.audio_image" mode="scaleToFill"></image>
			<view class="contnet">
				<view class="title">{{ detail.title }}</view>
				<view class="num">{{ detail.update_time }}</view>
			</view>
			<view class="auditorBox">
				<view class="iconList">
					<image class="icon" src="/static/image/bofang1.png" mode="scaleToFill" v-if="!status" @click="changeto"></image>
					<image class="icon" src="/static/image/zanting.png" mode="scaleToFill" v-else  @click="changeto"></image>
				</view>
				<view class="progressBox">
					<view class="progress">
						<view class="activeProgress" :style="{width:`${progress}%`}">
							<view class="activeRightBox">
								<view class="circle" v-show="progress > 0"></view>
							</view>
						</view>
					</view>
					<view class="timeBox">
						<view>{{ formatTime(currentTime) }}</view>
						<view>{{ formatTime(duration) }}</view>
					</view>
				</view>
			</view>
		</view>
		<view class="intro" v-if="detail.content">
			<view v-html="detail.content"></view>
		</view>
		<movable-area class="recordWrap">
			<movable-view :x="removeArea.x" :y="removeArea.y" direction="all" class="record">
				<view @click.stop="gotoRecourd">
					<image class="img" src="/static/image/recourdIcon.png" mode="scaleToFill"></image>
					<view class="label">课程目录</view>
				</view>
			</movable-view>
		</movable-area>
		<recourdVue :list="course.section" ref="recourdRef" /> 
	</view>
</template>

<script>
import utils from '@/common/utils.js';
import recourdVue from './part/recourd.vue';
const innerAudioContext = uni.createInnerAudioContext();
export default {
	components: {
		recourdVue
	},
	data() {
		return {
			/*商品id*/
			section_id: null,
			course_id: null,
			course: {},
			/*商品详情*/
			detail: {},
			status: false,
			beforeAudio: true,
			duration: 0,
			currentTime: 0,
			progress: 0,
			xpjAudio: null,
			videoPause: false,
			videoContext: null,
			removeArea:{
				x: 0,
				y: 0,
			}
		};
	},
	onReady() {
		this.videoContext = uni.createVideoContext('video', this);
	},
	onLoad(e) {
		this.videoPause = false;
		/*商品id*/
		let scene = utils.getSceneData(e);
		this.section_id = e.section_id ? e.section_id : scene.sid;
		this.course_id = e.course_id ? e.course_id : scene.cid;
		this.getSystemInfo();
	},
	onShow(){
		this.status = false;
	},
	mounted() {
		this.getData();
	},
	beforeUnmount() {
		this.changeto();
	},
	methods: {
		getSystemInfo(){
			let self = this;
			uni.getSystemInfo({
				success(res) {
					self.removeArea.x = res.windowWidth - 70;
					self.removeArea.y = res.windowHeight - 120;
				}
			});
		},
		initAudit(){
			innerAudioContext.src = this.detail.audio_link;
			this.getAudioInfo();
		},
		getAudioInfo(){
			innerAudioContext.onCanplay(()=>{
				innerAudioContext.duration;
				setTimeout(() => {
					this.duration = innerAudioContext.duration;
					this.watchAuditTime();
				});
			})
		},
		watchAuditTime(){
			innerAudioContext.onTimeUpdate(() => {
				const { currentTime,duration} = innerAudioContext;
				this.currentTime = currentTime;
				if(this.duration == this.currentTime){
					this.progress = 100;
					this.status = false;
				}else{
					this.progress = currentTime/duration * 100;
				}
			});
		},
		gotoRecourd(){
			this.$refs.recourdRef.open(
				{
					section_id: this.section_id,
					course_id: this.course_id,
					payStatus: this.detail.payStatus,
				}
			);
		},
		startVideo(){
			this.videoPause = true;
			this.$nextTick(()=>{
				this.videoContext.play();
			})
		},
		changeto(){
			this.status = !this.status;
			if (this.status) {
				innerAudioContext.play();
				innerAudioContext.onPlay(() => {
					// 播放监听
					console.log('播放!');
				});
			} else {
				innerAudioContext.pause()
				this.currenttime = innerAudioContext.currentTime
			}
		},
		/*获取数据*/
		getData() {
			let self = this;
			let section_id = self.section_id;
			let course_id = self.course_id;
			self.loadding = true;
			uni.showLoading({
				title: '加载中'
			});
			self._get(
				'course.course/sectionDetail', {
				course_id: course_id,
				section_id: section_id,
			},
				function (res) {
					const { data: { detail: { course, detail } } } = res;
					self.course = course;
					self.detail = detail;
					self.initAudit();
					self.loadding = false;
					uni.hideLoading();
				},
				function (err) {

				}
			);
		},
		changeSwiper() {
			this.isVideoPlay = false;
		},
		formatTime(num) {
			num = Math.floor(num)
			let second = num % 60;
			if (second < 10) second = '0' + second;
			let min = Math.floor(num / 60);
			if (min < 10) min = '0' + min;
			return min + ":" + second;
		},
	}
};
</script>

<style lang="scss" scoped>
.videoWrap,.auditorWrap {
	background: #fff;

	.videoBox,.imgAuditor {
		width: 100%;
		height: 564rpx;
		position: relative;

		.masterPic {
			height: 100%;

			&::before {
				content: "";
				position: absolute;
				top: 0;
				left: 0;
				background: rgb(0, 0, 0, 0.45);
				width: 100%;
				height: 100%;
				z-index: 1;
			}

			.img {
				width: 100%;
				height: 100%;
			}
		}

		.startIcon {
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			width: 92rpx;
			height: 92rpx;
			z-index: 10;
		}
	}
	.contnet{
		padding: 28rpx;
		.title{
			font-size: 32rpx;
			color: #333333;
			margin-bottom: 20rpx;
		}
		.num{
			font-size: 23rpx;
			color: #999999;
		}
	}

}
.auditorWrap{
	margin-top: 20rpx;
}
.auditorBox{
	display: flex;
	gap: 16rpx;
	padding: 28rpx;
	.iconList{
		width: 62rpx;
		height: 62rpx;
		.icon{
			width: 100%;
			height: 100%;
		}
	}
	.progressBox{
		flex: 1;
	}
	.progress{
		width: 100%;
		height: 20rpx;
		background: #EDE8E8;
		border-radius: 20rpx;
		position: relative;
		.activeProgress{
			position: absolute;
			left: 0;
			top: 0;
			background: #F2473F;
			height: 100%;
			border-radius: 20rpx;
			transition: width 1s ease;
			.activeRightBox{
				position: relative;
				height: 100%;
				.circle{
					width: 42rpx;
					height: 42rpx;
					background: #FFFFFF;
					border: 2rpx solid #F2473F;
					box-shadow: 0px 5rpx 5rpx 0px rgba(0,0,0,0.1);
					border-radius: 50%;
					position: absolute;
					right: 0;
					top: -12rpx;
				}
			}
		}
	}
	.timeBox{
		display: flex;
		justify-content: space-between;
		color: #F2473F;
		font-size: 32rpx;
		padding-top: 8rpx;
	}
}
.intro{
	margin-top: 20rpx;
	padding: 28rpx;
	background: #fff;
}
.recordWrap{
	position: fixed;
	bottom: 0;
	top: 0;
	width: 100vw;
	height: 100vh;
	pointer-events: none;
}
.record{
	width: 111rpx;
	height: 111rpx;
	background: linear-gradient(45deg, #F2473F, #F26E2F);
	border-radius: 50%;
	position: relative;
	pointer-events: visible;
	.img{
		width: 54rpx;
		height: 53rpx;
		position: absolute;
		top: 40%;
		left: 50%;
		transform: translate(-50%,-50%);
	}
	.label{
		width: 131rpx;
		height: 43rpx;
		line-height: 43rpx;
		background: linear-gradient(45deg, #F2473F, #F26E2F);
		box-shadow: 0px 5rpx 5rpx 0px rgba(9,2,4,0.25);
		font-size: 26rpx;
		color: #fff;
		text-align: center;
		position: absolute;
		bottom: -10rpx;
		left: -8rpx;
		border-radius: 20rpx;
	}
}
</style>
