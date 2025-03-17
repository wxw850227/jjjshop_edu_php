<template>
	<view v-if='url' class='xpj-audio-box' >
		<view class='play-btn'  @click='startPlay'>
			<image :src='startImg' class='play-icon' v-show='!status'></image>
			<image :src='endImg' class='play-icon' v-show='status'></image>
		</view>
		<view class='current-time time-text'>{{format(currentTime)}}</view>
		<view class='audio-action'>
			<slider 
				@change='changeAudio' 
				:activeColor="activeColor" 
				:block-color="blockColor"
				:backgroundColor="backgroundColor" 
				block-size="12"
				:disabled="currentTime==0"
				:min='0' :max='duration.toFixed(0)' 
				:value='currentTime.toFixed(0)' 
				:step='0.1'>
			</slider>
		</view>
		<view class='duration-time time-text'>{{format(duration)}}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				xpjAudio: null,
				currentTime: 0,
				duration: 100,
				status: false
			}
		},
		props: {
			url: String,
			activeColor: {
				type: String,
				default: '#F7B52C'
			},
			blockColor:{
				type:String,
				default:'#F7B52C'
			},
			backgroundColor:{
				type:String,
				default:'#ffffff'
			},
			blockSize:{
				type:Number,
				default:12,
			},
			startImg: {
				type:String,
				default:'/static/play-icon-audio.png',
			},
			endImg: {
				type:String,
				default:'/static/stop-play-btn.png',
			},
		},
		created() {
			this.xpjAudio = uni.createInnerAudioContext();
			this.xpjAudio.src = this.url;
			// uni.setInnerAudioOption({
			// 	obeyMuteSwitch: false  
			// })
			this.onTimeUpdate();
			this.onCanplay();
			this.onEnded();
			this.startPlay();
			uni.$on('stop',()=> {
				this.xpjAudio.stop()
				this.status = false
			})
		},
		methods: {
			//开始播放事件
			startPlay() { 
				if(this.status) {
					this.xpjAudio.pause();
					this.status = !this.status;
				}else {
					uni.$emit('stop')
					this.xpjAudio.seek(this.currentTime)
					this.xpjAudio.play()
					this.status = !this.status;
				}
			},
			//进入可播放状态
			onCanplay() { 
				this.xpjAudio.onCanplay(() => {
					this.xpjAudio.duration;
					setTimeout(()=>{
						this.duration = this.xpjAudio.duration;
					})
				})
			},
			 //音频播放进度更新
			onTimeUpdate() {
				this.xpjAudio.onTimeUpdate(() => {
					this.currentTime = this.xpjAudio.currentTime;
				})
			},
			//播放结束事件
			onEnded() { 
				this.xpjAudio.onEnded(()=> {
					this.status = false;
					this.currentTime = 0;
					this.$emit('overplayer')
				})
			},
			// 拖拽播放事件
			changeAudio(e) {
				let paused = this.xpjAudio.paused;
				this.xpjAudio.pause();
				this.xpjAudio.seek(e.detail.value)
				if(!paused) {
					this.xpjAudio.play();
				} 
			},
			format(num) {
				return '0'.repeat(2 - String(Math.floor(num / 60)).length) + Math.floor(num / 60) + ':' + '0'.repeat(2 -
					String(Math.floor(num % 60)).length) + Math.floor(num % 60)
			},
		},
		destroyed(){
			this.xpjAudio.stop();
		},
		watch:{
			url(newVal){
				if(newVal){
					this.xpjAudio.stop();
					this.xpjAudio.src = newVal;
					this.currentTime = 0;
					this.onTimeUpdate();
					this.onCanplay();
					this.onEnded();
					this.status = false
				}
			}
		}
	}
</script>

<style lang="scss">
	.xpj-audio-box {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: rgba($color: #000000, $alpha: 1);
		height: 100%;
		padding: 0 15rpx;
		.play-btn{
			font-size: 0;
			margin-right: 10rpx;
			.play-icon {
				width: 40rpx;
				height: 40rpx;
			}
		}
		.time-text{
			font-size: 20rpx;
			color: #fff;
		}
		.audio-action{
			flex: 1;
		}
	}
</style>
