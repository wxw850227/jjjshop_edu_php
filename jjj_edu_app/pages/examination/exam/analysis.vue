<template>
	<view class="p24" style="padding-bottom: 120rpx;">
		<view class="top-box d-b-c">
			<button class="datika-btn" @click="gotoPage('/pages/examination/exam/answerSheet?type=1&paper_id=' + paper_id)">
				<u-icon size="42rpx" name="/static/image/datika.png"></u-icon>
				<text class="ml10">答题卡</text>
			</button>
		</view>
		<template v-for="(item, index) in question" :key="index">
			<view class="center-box mb24" v-if="Qsindex == index">
				<view class="d-b-c mb24">
					<view class="type-box d-c-c">
						<u-icon width="96rpx" height="92rpx" name="/static/image/tixing_bg.png"></u-icon>
						<view class="f24 white type-name">{{ item.question.type_name }}</view>
					</view>
					<view class="gray9 f28"><text class="gray3">{{ index + 1 }}</text>/{{ question.length }}</view>
				</view>
				<!-- 标题 -->
				<view class="f32 gray3" style="margin-bottom: 40rpx;">{{ item.question.title }}</view>
				<view>
					<view class="anser-item" :class="{ active: isSelect(item, item.answer, getIndex(qindex)) }"
						v-for="(qitem, qindex) in item.question.option" :key="qindex">
						<text class="">{{ getIndex(qindex) }}.</text>
						<text v-if="qitem.type == 1">{{ qitem.content }}</text>
						<image v-else :src="qitem.content" mode="widthFix" style="width: 400rpx;flex-shrink: 0;"></image>
					</view>
				</view>
			</view>
		</template>
		<template v-for="(item, index) in question" :key="item.id">
			<view class="center-box anbox" v-if="Qsindex == index">
				<view class="c-t-box d-b-c">
					<view class="f30 c-t-box-title">你的答案：<text style="color: #F2473F;">{{ getAnswer(item.answer) }}</text>
					</view>
					<view class="f30 gray3">正确答案：<text style="color: #99E3D6;">{{ getAnswer(item.question.answer) }}</text>
					</view>
				</view>
				<view>
					<view style="height: 70rpx;line-height: 70rpx;padding-left: 4rpx" class="f28 gray3">回答<text
							v-if="item.answer_state != 1" class="dominant">错误</text>
						<text v-else style="color: #99E3D6">正确</text>
					</view>
					<view
						style="border: 1rpx dashed #EEEEEE;border-top: none;padding-left: 4rpx;"
						class="pb30 f26 gray6 mb20">错误题目自动加入错题集，请至错题集中复习。
					</view>
					<view style="display: flex;align-items: center;margin-bottom: 40rpx;">
						<view>试题难度:</view>
						<view class="scoreList">
							<image class="score" v-for="scores in currentQues.question.difficulty" :key="scores" src="/static/image/score.png"
								mode=""></image>
						</view>
					</view>
					<template v-if="item.answer_state != 1">
						<view class="f28 gray3 mb20">答案解析: </view>
						<view class="mb20"><u-parse :content="item.question.analysis"></u-parse></view>
						<view class="f26 gray6 mb24">{{ item.question.title }}错误题目自动加入错题集，请至错题集 中复习。</view>
						<template v-if="item.knowledge.length > 0">
							<view class="f30 c-t-box-title">关联知识点：</view>
							<view>
								<view class="f26 dominant p-30-0 d-b-c" v-for="(kitem, kindex) in item.knowledge"
									:key="kindex"
									@click="gotoPage('pages/knowledge/course/detail?course_id=' + kitem.course_id)">
									<view class="flex-1"><text class="dot-red"></text>{{ kitem.course.title }}</view>
									<view>
										<u-icon name="arrow-right" bold color="#F2473F" size="30rpx"></u-icon>
									</view>
								</view>
							</view>
						</template>

					</template>
				</view>
			</view>
		</template>
		<view class="bottom-box d-b-c">
			<view @click="previous">
				<u-icon width="52rpx" height="60rpx" name="/static/image/back_icon.png" v-if="Qsindex == 0"></u-icon>
				<u-icon size="52rpx" name="/static/image/back_icon1.png" v-else></u-icon>
			</view>
			<view style="margin: 0 auto;" v-if="question.length > 0" @click="FavFunc(question[0])">
				<u-icon size="60rpx"
					:name="question[0].is_fav ? '/static/image/shoucang_a.png' : '/static/image/shoucang_p.png'"></u-icon>
			</view>
			<view @click="next">
				<u-icon width="52rpx" height="60rpx" name="/static/image/next_icon.png"
					v-if="question && question.length - 1 == Qsindex"></u-icon>
				<u-icon width="52rpx" height="60rpx" name="/static/image/next_icon1.png" v-else></u-icon>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			paper_id: 0,
			time: '',
			question: [],
			answer: [],
			Qsindex: 0,
			clock: false,
		}
	},
	onLoad(e) {
		this.paper_id = e.paper_id;
		this.getData();
		this.$fire.on('Qsindex', res => {
			this.Qsindex = res;
		})
	},
	watch: {},
	computed: {
		currentQues() {
			this.Qsindex = this.Qsindex || 0;
			if(this.detail.question && this.detail.question){
				return this.detail.question[this.Qsindex];
			}
			return {}
		}
	},
	methods: {
		FavFunc(item) {
			let self = this;
			self._post('paper.Favorite/fav', {
				paper_id: self.paper_id,
				question_id: item.question_id,
				paper_question_id: item.paper_question_id
			}, res => {
				if (item.is_fav == 1) {
					uni.showToast({
						icon: 'none',
						title: '取消成功'
					});
					item.is_fav = 0;
				} else {
					uni.showToast({
						icon: 'none',
						title: '收藏成功，请到“我的->我的收藏”查看和管理哦'
					});
					item.is_fav = 1;
				}
			})
		},
		isSelect(e, answer, answer2) {
			if (e.question.question_type == 2) {
				return answer.indexOf(answer2) != -1
			} else {
				return answer === answer2
			}
		},
		getAnswer(e) {
			if (Array.isArray(e)) {
				return e.join();
			} else {
				return e
			}

		},
		getData() {
			let self = this;
			let url = 'paper.Paper/resultAnswer';
			self._get(url, {
				paper_id: self.paper_id
			}, res => {
				self.detail = res.data.detail;
				self.question = self.detail.question;
			})
		},
		subAnser() {
			let self = this;
			let answer = self.question[self.Qsindex].answer;
			if (!answer || self.clock) {
				return
			}
			let id = self.question[self.Qsindex].id;
			self.clock = true;
			let url = 'paper.Paper/submitAnswer';
			self._get(url, {
				id: id,
				answer: answer
			}, res => {
				self.clock = false;
				self.question[self.Qsindex].answer_state = 1;
			}, err => {
				self.clock = false;
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
			if (this.Qsindex < 1 || this.clock) {
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

.scoreList {
	display: flex;
	gap: 12rpx;
	justify-content: center;
	margin-left: 12rpx;

	.score {
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
}</style>
