<template>
	<view class="p24">
		<view class="center-box">
			<view class="f32 gray3 tc mb30">{{detail.title}}</view>
			<view class="d-b-c p20 pb30" style="border-bottom: 1rpx dashed  #DDDDDD;" v-if="model!='practice'">
				<view class="d-b-c p-0-20 pb20 ww100 box-s-b">
					<view class="d-c-c d-c flex-1">
						<view class="f36 gray3 mb20"><text class="dominant fb f40 mr10">{{detail.exam_time}}</text>分钟
						</view>
						<view class="f28 gray9">建议用时</view>
					</view>
					<view class="d-c-c d-c flex-1">
						<view class="f36 gray3 mb20"><text class="dominant fb f40 mr10">{{detail.total_score}}</text>分
						</view>
						<view class="f28 gray9">试卷总分</view>
					</view>
				</view>
			</view>
			<view class="d-b-c f28 gray9" style="height: 100rpx;">
				<view class="">{{detail.total_answer}}人已答题</view>
				<view class="d-c-c">试题难度:
					<view class="scoreList">
						<image class="score" v-for="score in detail.difficulty" :key="score"
							src="/static/image/score.png" mode=""></image>
					</view>
				</view>
			</view>
			<template v-if="detail.pay_type == 0 || detail.payStatus>0">
				<button class="sub-btn" v-if="detail.record_status==0"
					@click="gotoPage(`/pages/examination/exam/start?type=0&paper_id=${detail.paper_id}&model=${model}`)">开始答题</button>
				<button class="sub-btn" v-if="detail.record_status==1"
					@click="gotoPage(`/pages/examination/exam/start?type=1&paper_id=${detail.paper_id}&model=${model}`)">继续答题</button>
				<button class="sub-btn" v-if="detail.record_status==2"
					@click="gotoPage(`/pages/examination/exam/start?type=0&paper_id=${detail.paper_id}&model=${model}`)">再次答题</button>
			</template>
			<template v-if="detail.pay_type == 1&&detail.payStatus==0">
				<view class="f42 fb dominant tc mb20">￥{{detail.money}}</view>
				<button class="sub-btn" @click="toPay">支付答题</button>
			</template>
			<view class="content-detail">
				<view class="f32 mb20 gray3">题型介绍:</view>
				<view class="mb20">
					<text class="f24 gray6" style="line-height: 1.75;">
						1.单选题（选项中只有1个正确答案)；
						2.多选题（选项中至少有2个正确答案)；
						3.判断题（选项中只有1个正确答案)
					</text>
				</view>

				<view class="f32 mb20 gray3" v-if="model!='practice'">考前必读:</view>
				<text class="f24 gray6" style="line-height: 1.75;" v-if="model!='practice'">
					1.答题者准备好后，可点击“开始做题”按钮开始考试；
					2.做题前可看题目前的标签，明白此题是单选题、多选
					题还是判断题
				</text>
			</view>
		</view>
		<!-- <Cashier :isPopup="isPay" :paper_id="detail.paper_id" :price="detail.money" @close="closeCashier"></Cashier> -->
	</view>
</template>

<script>
	// import Cashier from "@/components/cashier/cashier.vue"
	export default {
		data() {
			return {
				isPay: false,
				paper_id: 0,
				detail: {},
				model: null,
			}
		},
		components: {
			// Cashier
		},
		onLoad(e) {
			this.paper_id = e.paper_id || 0;
			this.model = e.model;
		},
		onShow() {
			this.getData()
		},
		methods: {
			getData() {
				let self = this;
				self._get('paper.Paper/detail', {
					paper_id: self.paper_id
				}, res => {
					self.detail = res.data.detail;
				})
			},
			toPay() {
				let self = this;
				self.gotoPage(`/pages/order/confirm?paper_id=${self.detail.paper_id}&type=paper`);
				// self.isPay = true;
			},
			closeCashier(e) {
				if (e) {
					this.getData();
				}
				this.isPay = false;
			},
		}
	}
</script>

<style lang="scss">
	.center-box {
		background-color: #FFFFFF;
		border-radius: 25rpx;
		padding: 65rpx 20rpx 42rpx 18rpx;

		.scoreList {
			display: flex;
			align-items: center;
			gap: 12rpx;
			justify-content: center;
			margin-top: 8rpx;
			margin-left: 6rpx;

			.score {
				width: 25rpx;
				height: 25rpx;
				margin-top: -6rpx;
			}
		}
	}

	.sub-btn {
		width: 547rpx;
		height: 76rpx;
		border-radius: 38rpx;
		font-size: 32rpx;
		color: #FFFFFF;
		margin: 10rpx auto 38rpx auto;
		box-sizing: border-box;
		padding: 0;
		background: linear-gradient(60deg, #F26520, #F8A032);
	}

	.content-detail {
		background: rgba($color: #F89C31, $alpha: 0.08);
		padding: 44rpx 38rpx;
		border-radius: 25rpx;
	}
</style>