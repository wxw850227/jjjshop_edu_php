<template>
	<view class="p24" style="padding-bottom: 170rpx;padding-top: 60rpx;">
		<view class="top-bg"></view>
		<view class="user-box d-c-c d-c">
			<view class="user-ava d-c-c">
				<u-icon size="106rpx" :name="user.avatarUrl || ''"></u-icon>
			</view>
			<view class="f28 gray3 mb20">{{user.nickName}}</view>
			<view class=" f28 gray3 mb20" v-if="model!='practice'"><text class="dominant fb">{{detail.score}}</text>分
			</view>
			<view><text class="t-totalscore" v-if="model!='practice'">试卷总分{{detail.paper.total_score}}分<text
						v-if="detail.grade">({{detail.grade}})</text></text></view>
		</view>
		<view class="center-box mb24">
			<view class="c-t-box d-b-c">
				<view class="f30 c-t-box-title">基本信息</view>
			</view>
			<view class="d-b-c" style="padding-top: 34rpx;">
				<view class="circular">
					<view class="circular-t">{{detail.paper.item_number}}</view>
					<view class="circular-name">题目数</view>
				</view>
				<view class="circular">
					<view class="circular-t">{{detail.no_answer}}</view>
					<view class="circular-name">未答数</view>
				</view>
				<view class="circular">
					<view class="circular-t">{{detail.accuracy}}%</view>
					<view class="circular-name">正确率</view>
				</view>
				<view class="circular">
					<view class="circular-t">{{getExamTime(detail.duration*1)}}</view>
					<view class="circular-name">答题用时</view>
				</view>
			</view>
		</view>
		<view class="center-box">
			<view class="c-t-box d-b-c">
				<view class="f30 c-t-box-title">答题情况</view>
				<view class="d-c-c f24 gray9">
					<view class="d-c-c mr16">
						<view class="statebox1"></view>
						<view class="">正确</view>
					</view>
					<view class="d-c-c mr16">
						<view class="statebox2"></view>
						<view class="">错误</view>
					</view>
					<view class="d-c-c">
						<view class="statebox3"></view>
						<view class="">未答</view>
					</view>
				</view>
			</view>
			<view class="f-w d-s-s" style="padding-top: 34rpx;">
				<view class="anser-item" :class="{active:item.answer_state==1,active2:item.answer_state==2}"
					v-for="(item,index) in question" :key="index">{{index+1}}
				</view>
			</view>
		</view>
		<view class="bottom-box d-b-c">
			<view class="b-btn1" @click="gotoPage('/pages/examination/exam/analysis?paper_id='+ detail.paper_id)">查看解析
			</view>
			<view class="b-btn2"
				@click="gotoPage(`/pages/examination/exam/start?paper_id=${detail.paper_id}&model=${model}`)">再考一次
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				paper_id: 0,
				activeIndex: 0,
				time: '',
				examTime: 0,
				detail: {
					paper: {}
				},
				question: [],
				user: {},
				model: null,
			}
		},
		onLoad(e) {
			this.paper_id = e.paper_id;
			this.model = e.model;
			this.getData();
		},
		computed: {

		},
		methods: {
			getExamTime(time) {
				// 转换为式分秒
				let h = parseInt(time / 60 / 60 % 24)
				h = h < 10 ? '0' + h : h
				let m = parseInt(time / 60 % 60)
				m = m < 10 ? '0' + m : m
				let s = parseInt(time % 60)
				s = s < 10 ? '0' + s : s
				if (h * 1 > 0) {
					return h + "'" + m + "'" + s
				} else {
					return m + "'" + s
				}
				// 作为返回值返回

			},
			goback() {
				uni.navigateBack()
			},
			getData() {
				let self = this;
				let url = 'paper.Paper/resultAnswer';
				self._get(url, {
					paper_id: self.paper_id
				}, res => {
					self.detail = res.data.detail;
					self.user = res.data.user;
					self.question = self.detail.question;
				})
			},
			getIndex(n) {
				return String.fromCharCode(n + 65)

			},
		}
	}
</script>

<style lang="scss">
	.top-bg {
		width: 750rpx;
		height: 221rpx;
		background: linear-gradient(45deg, #F2473F, #F26E2F);
		position: absolute;
		left: 0;
		top: 0;
	}

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

	.anser-item.active2 {
		color: #F2473F;
		background: #FEF0E0;
		border: 1rpx solid #F2473F;
	}

	.anser-item.active {
		color: #ffffff;
		background: #99E3D6;
		border: 1rpx solid #99E3D6;
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
		bottom: 42rpx;
		left: 0rpx;
		width: 750rpx;
		padding: 0 23rpx;
		box-sizing: border-box;

		.b-btn1 {
			width: 342rpx;
			height: 76rpx;
			line-height: 76rpx;
			border-radius: 76rpx;
			font-size: 32rpx;
			background: linear-gradient(45deg, #F2473F, #F26E2F);
			color: #FFFFFF;
			box-sizing: border-box;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.b-btn2 {
			width: 342rpx;
			height: 76rpx;
			line-height: 76rpx;
			border-radius: 76rpx;
			font-size: 32rpx;
			border: 1rpx solid #F2473F;
			background: #FFFFFF;
			color: #F2473F;
			box-sizing: border-box;
			display: flex;
			justify-content: center;
			align-items: center;
		}
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
		background: #99E3D6;
		border: 1rpx solid #99E3D6;
		border-radius: 50%;
		margin-right: 8rpx;
	}

	.statebox2 {
		width: 22rpx;
		height: 22rpx;
		background: #FEF0E0;
		border: 1rpx solid #F2473F;
		border-radius: 50%;
		margin-right: 8rpx;
	}

	.statebox3 {
		width: 22rpx;
		height: 22rpx;
		background: #ffffff;
		border: 1rpx solid #eeeeee;
		border-radius: 50%;
		margin-right: 8rpx;
	}

	.circular {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		border-radius: 50%;
		width: 132rpx;
		height: 132rpx;
		box-sizing: border-box;
		border: 6rpx solid #DDDDDD;
	}

	.circular-t {
		font-size: 28rpx;
		color: #333333;
		margin-bottom: 2rpx;
	}

	.circular-name {
		font-size: 20rpx;
		color: #999999;
	}

	.user-box {
		padding-top: 60rpx;
		width: 100%;
		box-sizing: border-box;
		height: 281rpx;
		background: #FFFFFF;
		border-radius: 25rpx;
		position: relative;
		margin-bottom: 24rpx;
	}

	.user-ava {
		overflow: hidden;
		border-radius: 50%;
		position: absolute;
		width: 106rpx;
		height: 106rpx;
		left: 0;
		right: 0;
		top: -28rpx;
		margin: auto;
		z-index: 2;
		box-sizing: border-box;
		background-color: #FFFFFF;

	}

	.t-totalscore {
		min-width: 300rpx;
		text-align: center;
		padding: 0 40rpx;
		height: 54rpx;
		line-height: 54rpx;
		box-sizing: border-box;
		display: inline-block;
		border-radius: 28rpx;
		background: #FEF0E0;
		font-size: 24rpx;
		font-weight: 400;
		color: #F2473F;
	}
</style>