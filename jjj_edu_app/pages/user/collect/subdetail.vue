<template>
	<view class="p24" style="padding-bottom: 120rpx;">
		<view class="center-box mb24">
			<view class="d-b-c mb24">
				<view class="type-box d-c-c">
					<u-icon width="96rpx" height="92rpx" name="/static/image/tixing_bg.png"></u-icon>
					<view class="f24 white type-name">{{question.type_name}}</view>
				</view>
				<view @click="delFunc">
					<u-icon size="40rpx" name="trash"></u-icon>
				</view>
			</view>
			<!-- 标题 -->
			<view class="f32 gray3" style="margin-bottom: 40rpx;">{{question.title}}</view>
			<view>
				<view class="anser-item" :class="{active:isSelect(detail,detail.answer,getIndex(qindex))}"
					v-for="(qitem,qindex) in question.option" :key="qindex">
					<text class="">{{getIndex(qindex)}}.</text>
					<text v-if="qitem.type == 1">{{qitem.content}}</text>
					<image v-else :src="qitem.content" mode="widthFix" style="width: 400rpx;flex-shrink: 0;"></image>
				</view>
			</view>
		</view>
		<view class="center-box anbox">
			<view class="c-t-box d-b-c">
				<view class="f30 c-t-box-title">你的答案：<text style="color: #F2473F;"> {{ detail.answer && detail.answer.length > 0 ? getAnswer(detail.answer) : '未作答' }}</text>
				</view>
				<view class="f30 gray3">正确答案：<text style="color: #99E3D6;">{{getAnswer(question.answer)}}</text>
				</view>
			</view>
			<view>
				<view style="height: 70rpx;line-height: 70rpx;padding-left: 4rpx" class="f28 gray3">回答<text
						class="dominant">错误</text></view>
				<view class="d-s-c f28 gray3 mb20">试题难度:<view class="scoreList">
						<image class="score" v-for="scores in detail.paper.difficulty" :key="scores" src="/static/image/score.png" mode=""></image>
					</view>	
				</view>
				<template>
					<view class="f28 gray3 mb20">答案解析: </view>
					<view class="mb20"><u-parse :content="question.analysis"></u-parse></view>
					<template v-if="detail.knowledge.length>0">
						<view class="f30 c-t-box-title">关联知识点：</view>
						<view>
							<view class="f26 dominant p-30-0 d-b-c" v-for="(kitem,kindex) in detail.knowledge"
								:key="kindex"
								@click="gotoPage('pages/knowledge/course/detail?course_id='+kitem.course_id)">
								<view class="flex-1"><text class="dot-red"></text>{{kitem.course.title}}</view>
								<view>
									<u-icon name="arrow-right" bold color="#F2473F" size="30rpx"></u-icon>
								</view>
							</view>
						</view>
					</template>
				</template>
			</view>
		</view>
		<!-- <view class="bottom-box d-c-c">
			<view>
				 <u-icon @click="knowFun" v-if="detail.is_know==0" size="74rpx" name="/static/image/shoucang_p.png">
				</u-icon>
				<u-icon v-else size="74rpx" name="/static/image/shoucang_a.png"></u-icon> -->
			<!-- </view> -->
		<!-- </view> --> 
	</view>
</template>

<script>
	export default {
		data() {
			return {
				favorite_id: 0,
				time: '',
				question: {},
				answer: [],
				Qsindex: 0,
				clock: false,
				detail: {
					paper:[],
					knowledge:[]
				}
			}
		},
		onLoad(e) {
			this.favorite_id = e.favorite_id;
			this.getData();
		},
		watch: {},
		methods: {
			isSelect(e, answer, answer2) {
				if (typeof answer !== 'undefined'){
					if (e.question.question_type == 2) {
					return answer.indexOf(answer2) != -1
				} else {
					return answer === answer2
				}
				}
				return false;
			},
			getAnswer(e) {
				if (Array.isArray(e)) {
					return e.join();
				} else {
					return e
				}

			},
			knowFun() {
				let self = this;
				uni.showModal({
					title: '提示',
					content: '确定已经掌握该错题了吗?',
					success(res) {
						if (res.confirm) {
							self._get('paper.Wrong/submit', {
								favorite_id: self.favorite_id
							}, res => {
								self.getData();
							})
						}
					}
				})
			},
			delFunc() {
				let self = this;
				uni.showModal({
					title: '提示',
					content: '确定要把该题目从错题中删除吗?',
					success(res) {
						if (res.confirm) {
							self._get('paper.Favorite/delete', {
								favorite_id: self.favorite_id
							}, res => {
								uni.showModal({
									content: '删除成功',
									success() {
										uni.navigateBack()
									}
								})
							})
						}
					}
				})
			},
			getData() {
				let self = this;
				let url = 'paper.Favorite/detail';
				self._get(url, {
					favorite_id: self.favorite_id
				}, res => {
					self.detail = res.data.detail;
					self.question = res.data.detail.question;
				})
			},
			slectAn(index, n) {
				if (this.question[index].answer_state > 0) {
					return
				}
				this.question[index].answer = this.getIndex(n);
			},
			getNum(n) {
				return String.fromCharCode(n - 65)

			},
			getIndex(n) {
				return String.fromCharCode(n + 65)

			},
			previous() {
				if (this.Qsindex <= 1 || this.clock) {
					return
				}
				this.Qsindex--;
			},
			next() {
				if (this.Qsindex + 1 >= this.question.length || this.clock) {
					return
				}
				this.Qsindex++;
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
.scoreList{
		display: flex;
		gap: 12rpx;
		justify-content: center;
		margin-top: 0rpx;
		.score{
			width: 30rpx;
			height: 30rpx;
		}
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
		padding: 0 20rpx 68rpx 20rpx;
	}

	.anser-item {
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		border: 1rpx solid #F6F6F6;
		padding: 30rpx 26rpx;
		background: #F6F6F6;
		margin-bottom: 25rpx;
		font-size: 32rpx;
		color: #333333;
	}

	.anser-item.active {
		background: #FEF7EF;
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
		bottom: 0;
		left: 0;
		width: 750rpx;
		box-sizing: border-box;
		padding: 0 60rpx;
		height: 96rpx;
		background: #FFFFFF;
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

	.dot-red {
		display: inline-block;
		width: 12rpx;
		height: 12rpx;
		background: #F2473F;
		border-radius: 50%;
		margin-right: 10rpx;
	}
</style>
