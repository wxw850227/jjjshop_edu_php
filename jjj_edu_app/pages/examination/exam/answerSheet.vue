<template>
	<view class="p24" style="padding-bottom: 170rpx;">
		<view class="top-box d-b-c">
			<view>
				<button class="datika-btn" @click="goback">
					<u-icon size="42rpx" name="/static/image/datika.png"></u-icon>
					<text class="ml10 f24">返回答题</text>
				</button>
			</view>
			<view class="d-c-c" v-if="type==0&&model!='practice'">
				<u-icon size="46rpx" name="/static/image/time.png"></u-icon>
				<text class="ml10 f30 dominant">{{getExamTime}}</text>
			</view>
		</view>
		<view class="center-box">
			<view class="c-t-box d-b-c">
				<view class="f30 c-t-box-title">答题情况</view>
				<view class="d-c-c f24 gray9">
					<view class="d-c-c mr16">
						<view class="statebox1"></view>
						<view class="">已答</view>
					</view>
					<view class="d-c-c">
						<view class="statebox2"></view>
						<view class="">未答</view>
					</view>
				</view>
			</view>
			<view class="f-w d-s-s" style="padding-top: 34rpx;">
				<view class="anser-item" :class="{active:item.answer_state>0}" v-for="(item,index) in question"
					@click="changeInde(index)" :key="index">{{index+1}}
				</view>
			</view>
		</view>
		<view class="bottom-box d-b-c" @click="subFunc" v-if="type==0">提交试卷</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				paper_id: 0,
				record_id: 0,
				activeIndex: 0,
				time: '',
				examTime: 0,
				detail: {},
				question: [],
				type: 0,
				model: null,
			}
		},
		onLoad(e) {
			this.paper_id = e.paper_id;
			this.record_id = e.record_id;
			this.model = e.model;
			/* 0 考试 1解析 */
			this.type = e.type || 0;
			this.getData();
			if (this.type == 0) {
				this.checkHistory();
			}

		},
		computed: {
			getExamTime() {
				let time = this.examTime;
				// 转换为式分秒
				let h = parseInt(time / 60 / 60 % 24)
				h = h < 10 ? '0' + h : h
				let m = parseInt(time / 60 % 60)
				m = m < 10 ? '0' + m : m
				let s = parseInt(time % 60)
				s = s < 10 ? '0' + s : s
				// 作为返回值返回
				return h + ':' + m + ':' + s
			},
		},

		beforeDestroy() {
			clearInterval(this.intTimer);
			this.intTimer = null;
		},
		methods: {
			changeInde(e) {
				this.$fire.fire('Qsindex', e);
				uni.navigateBack();
			},
			goback() {
				uni.navigateBack()
			},
			getData() {
				let self = this;
				let url = 'paper.Paper/startAnswer';
				if (this.type != 0) {
					url = 'paper.Paper/resultAnswer';
				}
				self._get(url, {
					paper_id: self.paper_id
				}, res => {
					self.detail = res.data.detail;
					self.question = self.detail.question;
				})
			},
			//查询上一次播放的进度
			checkHistory() {
				let self = this;
				let examTime = uni.getStorageSync('examTime') || {};
				this.examTime = examTime[self.record_id] || 0;
				this.intTimer = setInterval(function() {
					self.examTime++
				}, 1000)
			},
			getexamTime() {
				let examTime = uni.getStorageSync('examTime');
				let time = 0;
				time = examTime[this.record_id]
				return time
			},
			getIndex(n) {
				return String.fromCharCode(n + 65)

			},
			subFunc() {
				let self = this;
				uni.showModal({
					title: '提示',
					content: '确认要提交试卷吗?',
					confirmText: '确认提交',
					success(res) {
						if (res.confirm) {
							self._post('paper.Paper/submit', {
								record_id: self.detail.record_id
							}, res => {
								uni.showModal({
									content: '提交成功',
									success() {
										self.gotoPage(`/pages/examination/record/detail?paper_id=${self.detail.paper_id}&model=${self.model}`,'redirect')
									}
								});
								   // 关闭定时器
       		   				 clearInterval(self.intTimer);
     		  			     self.intTimer = null;
							})
						}
					}
				})

			}
		}
	}
</script>

<style lang="scss">
	.top-box {
		background: #FFFFFF;
		border-radius: 15rpx;
		height: 102rpx;
		padding: 0 20rpx;
		margin-bottom: 24rpx;
	}

	.datika-btn {
		width: 196rpx;
		height: 58rpx;
		line-height: 58rpx;
		border-radius: 30rpx;
		font-size: 30rpx;
		color: #FFFFFF;
		box-sizing: border-box;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0;
		background: linear-gradient(60deg, #F26520, #F8A032);
	}

	.center-box {
		background-color: #FFFFFF;
		border-radius: 25rpx;
		padding: 0 20rpx 30rpx 20rpx;
	}

	.anser-item {
		width: 76rpx;
		height: 76rpx;
		background: #FFFFFF;
		border: 1rpx solid #DDDDDD;
		border-radius: 50%;
		font-size: 33rpx;
		color: #333333;
		display: flex;
		justify-content: center;
		align-items: center;
		line-height: 74rpx;
		margin-right: 64rpx;
		margin-bottom: 30rpx;
	}

	.anser-item:nth-of-type(5n) {
		margin-right: 0;
	}

	.anser-item.active {
		color: #F2473F;
		background: #FEF0E0;
		border: 1rpx solid #F2473F;
	}

	.type-box {
		width: 96rpx;
		height: 92rpx;
		position: relative;

		.type-name {
			position: absolute;
			margin: auto;
			z-index: 1;
		}
	}

	.bottom-box {
		position: fixed;
		bottom: 51rpx;
		left: 43rpx;
		width: 664rpx;
		box-sizing: border-box;
		font-size: 33rpx;
		color: #FFFFFF;
		height: 92rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		line-height: 92rpx;
		background: linear-gradient(45deg, #F2473F, #F26E2F);
		border: 1rpx solid #EEEEEE;
		border-radius: 45rpx;
	}

	.c-t-box {
		height: 80rpx;
		border-bottom: 1rpx dashed #DDDDDD;
	}

	.c-t-box-title {
		padding-left: 20rpx;
		position: relative;
	}

	.c-t-box-title::after {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		margin: auto;
		width: 8rpx;
		height: 26rpx;
		background: linear-gradient(60deg, #F26520, #F8A032);
	}

	.statebox1 {
		width: 22rpx;
		height: 22rpx;
		background: #FEF0E0;
		border: 1rpx solid #F2473F;
		border-radius: 50%;
		margin-right: 8rpx;
	}

	.statebox2 {
		width: 22rpx;
		height: 22rpx;
		background: #ffffff;
		border: 1rpx solid #eeeeee;
		border-radius: 50%;
		margin-right: 8rpx;
	}
</style>
