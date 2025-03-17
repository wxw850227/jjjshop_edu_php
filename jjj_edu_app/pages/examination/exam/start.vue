<template>
	<view class="wrap">
		<view class="p24" style="padding-bottom: 120rpx;">
			<view class="dominant f30 tc mb30">温馨提示：请点击“答题卡”前去提交考试哦！</view>
			<view class="top-box">
				<view>
					<button class="datika-btn" @click="gotoCard">
						<u-icon size="42rpx" name="/static/image/datika.png"></u-icon>
						<text class="ml10">答题卡</text>
					</button>
				</view>
				<view class="d-c-c" v-if="model!='practice'">
					<u-icon size="46rpx" name="/static/image/time.png"></u-icon>
					<text class="ml10 f30 dominant">{{ getExamTime }}</text>
				</view>
			</view>
			<template v-for="(item, index) in question" :key="index">
				<view class="center-box" v-if="Qsindex == index">
					<view class="d-b-c mb24">
						<view class="type-box d-c-c">
							<u-icon width="96rpx" height="92rpx" name="/static/image/tixing_bg.png"></u-icon>
							<view class="f24 white type-name">{{ item.question.type_name }}</view>
						</view>
						<view class="gray9 f28"><text class="gray3">{{ index + 1 }}</text>/{{ question.length }}</view>
					</view>
					<!-- 标题 -->
					<view class="f32 gray3" style="padding-bottom: 40rpx;">{{ item.question.title }}</view>
					<view>
						<template v-for="(qitem, qindex) in item.question.option" :key="qindex">
							<view @click="slectAn(index, qindex)" class="anser-item"
								:class="{ active: isSelect(item, item.answer, getIndex(qindex)) }">
								<text class="">{{ getIndex(qindex) }}.</text>
								<text v-if="qitem.type == 1">{{ qitem.content }}</text>
								<image v-else :src="qitem.content" mode="widthFix"
									style="width: 400rpx;flex-shrink: 0;">
								</image>
							</view>
						</template>
					</view>

					<view class="nextBtn" @click="multiNext"
						v-if="qusetionStem.question && qusetionStem.question.question_type == 2 && !(this.model == 'practice' && this.qusetionStem.answer && this.muultipleStem)">
						确认</view>
				</view>
			</template>
			<template v-if="model == 'practice' && qusetionStem.answer && muultipleStem">
				<view class="center-box">
					<view class="c-t-box d-b-c">
						<view class="f30 c-t-box-title">你的答案：<text
								style="color: #F2473F;">{{ qusetionStem.answer }}</text>
						</view>
						<view class="f30 gray3">正确答案：<text
								style="color: #99E3D6;">{{ qusetionStem.question && qusetionStem.question.answer }}</text>
						</view>
					</view>
					<view>
						<view style="height: 70rpx;line-height: 70rpx;padding-left: 4rpx" class="f28 gray3">回答
							<text style="color: #99E3D6;"
								v-if="qusetionStem.answer_state==1">正确</text>
							<text class="dominant" v-else>错误</text>
						</view>
						<view class="d-s-c f28 gray3 mb20">试题难度:<u-rate count="5"
								:value="qusetionStem.question.difficulty" readonly activeColor='#F2473F'>
							</u-rate>
						</view>
						<template v-if="true">
							<view class="f28 gray3 mb20">答案解析: </view>
							<view class="mb20"><u-parse :content="qusetionStem.question.analysis"></u-parse></view>
							<template
								v-if="qusetionStem.question.knowledge && qusetionStem.question.knowledge.length > 0">
								<view class="f30 c-t-box-title">关联知识点：</view>
								<view>
									<template v-for="(kitem, kindex) in qusetionStem.question.knowledge" :key="kindex">
										<view class="f26 dominant p-30-0 d-b-c"
											@click="gotoPage('pages/knowledge/course/detail?course_id=' + kitem.course_id)">
											<view class="flex-1"><text class="dot-red"></text>{{ kitem.course.title }}
											</view>
											<view>
												<u-icon name="arrow-right" bold color="#F2473F" size="30rpx"></u-icon>
											</view>
										</view>
									</template>
								</view>
							</template>
						</template>
					</view>
				</view>
			</template>
			<view class="bottom-box d-b-c">
				<view @click="previous">
					<u-icon width="52rpx" height="60rpx" name="/static/image/back_icon.png"
						v-if="Qsindex == 0"></u-icon>
					<u-icon size="52rpx" name="/static/image/back_icon1.png" v-else></u-icon>
				</view>
				<view @click="FavFunc(question[Qsindex])">
					<u-icon size="74rpx"
						:name="question[Qsindex] && question[Qsindex].is_fav == 1 ? '/static/image/shoucang_a.png' : '/static/image/shoucang_p.png'"></u-icon>
				</view>
				<!-- <view v-if="question[Qsindex]&&question[Qsindex].answer_state==0" @click="subAnser">
					<u-icon size="74rpx" name="/static/image/submit_p.png"></u-icon>
				</view>
				<view v-else  @click="subFunc">
					<u-icon v-if="allSubExam" size="74rpx" name="/static/image/submit_p.png"></u-icon>
					<u-icon v-else size="74rpx" name="/static/image/submit_a.png"></u-icon>
				</view> -->
				<view @click="next">
					<u-icon width="52rpx" height="60rpx" name="/static/image/next_icon.png"
						v-if="question && question.length - 1 == Qsindex"></u-icon>
					<u-icon width="52rpx" height="60rpx" name="/static/image/next_icon1.png" v-else></u-icon>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				paper_id: 0,
				record_id: 0,
				time: '',
				question: [],
				answer: [],
				Qsindex: 0,
				clock: false,
				examTime: 0,
				timer: 1,
				intTimer: null,
				examTimeText: '',
				model: null,
				muultipleStem: true,
			}
		},
		onLoad(e) {
			this.paper_id = e.paper_id;
			this.model = e.model;
			this.getData();

			this.$fire.on('Qsindex', res => {
				this.Qsindex = res;
			})
		},
		beforeDestroy() {
			clearInterval(this.intTimer);
			this.intTimer = null;
		},
		watch: {},
		computed: {
			getExamTime() {
				let time = this.examTime;
				let endTime = (this.detail && this.detail.exam_time || 0) * 60;
				if (time > endTime) {

				}
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
			qusetionStem() {
				this.Qsindex = this.Qsindex || 0;
				if (this.question && this.question.length > 0) {
					return this.question[this.Qsindex]
				}
				return {
					question: {},
				}
			},
		},
		methods: {
			gotoCard() {
				let self = this;
				// 关闭定时器
				clearInterval(self.intTimer);
				self.intTimer = null;
				// 拼接参数
				let url =
					`/pages/examination/exam/answerSheet?paper_id=${self.paper_id}&record_id=${self.record_id}&model=${self.model}`
				// 跳转页面
				uni.navigateTo({
					url: url,
					success: function() {
						// 跳转成功
						console.log('跳转成功');
					},
					fail: function(err) {
						// 跳转失败
						console.log('跳转失败', err);
					}
				});
			},
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
			getData() {
				let self = this;
				let url = 'paper.Paper/startAnswer';
				self._get(url, {
					paper_id: self.paper_id
				}, res => {
					self.detail = res.data.detail;
					self.record_id = res.data.detail.record_id;
					self.question = self.detail.question;
					self.checkHistory();
				})
			},
			//查询上一次播放的进度
			checkHistory() {
				let self = this;
				let examTime = uni.getStorageSync('examTime') || {};
				this.examTime = examTime[self.record_id] || 0;
				this.intTimer = setInterval(function() {
					self.examTime++
					if (self.timer === 2) {
						//调一次记录历史记录的接口
						self.recordHistory(self.examTime)
					}
					self.timer++ //每次变化+1
				}, 1000)
			},
			//历史记录
			recordHistory(lastTime) {
				let self = this;
				let examTime = uni.getStorageSync('examTime') || {};
				examTime[self.record_id] = lastTime;
				uni.setStorageSync('examTime', examTime);
				this.timer = 1
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
					self.getData();
					// 关闭定时器
					// clearInterval(self.intTimer);
					// self.intTimer = null;
				}, err => {
					self.clock = false;
				})
			},
			slectAn(index, n) {
				/* 
				练习模式答题提交以后不允许修改答案 
				muultipleStem  true 已经回答过了
				*/
				let item = this.question[index];
				if (this.model == 'practice') {
					if (item.question.question_type != 2 && this.qusetionStem.answer) {
						return
					} else if (item.question.question_type == 2) {
						if (this.qusetionStem.answer && this.muultipleStem) {
							return
						}
					}
				}
				if (item.question.question_type != 2) {
					item.answer = this.getIndex(n);
				} else {
					let answerList = item.answer || [];
					let currentOptions = this.getIndex(n);
					if (typeof answerList == 'string') {
						answerList = item.answer.split(',');
					}
					let actiionIndex = answerList.indexOf(currentOptions);
					if (actiionIndex > -1) {
						answerList.splice(actiionIndex, 1)
					} else {
						answerList.push(this.getIndex(n))
					}
					item.answer = answerList.join(",")
				}
				/* 练习模式 */
				if (this.model == 'practice') {
					if (item.question.question_type != 2) {
						this.muultipleStem = true;
						this.subAnser();
					} else if (item.question.question_type == 2) {
						this.muultipleStem = false;
					}
				} else {
					if (item.question.question_type != 2) {
						this.subAnser();
						setTimeout(() => {
							/* if (this.Qsindex + 1 >= this.question.length){
								this.gotoCard();
								return
							} */
							if (this.Qsindex < this.question.length - 1) {
								this.Qsindex = this.Qsindex + 1;
							}
						}, 400);
					}
				}
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
					this.subAnser();
					this.gotoCard();
					return
				}
				this.subAnser();
				this.Qsindex++;
			},
			/* 多选题确认下一题 */
			multiNext() {
				if (this.Qsindex + 1 >= this.question.length || this.clock) {
					this.muultipleStem = true;
					this.subAnser();
					// this.gotoCard();
					return
				}
				if (this.model == 'practice') {
					this.muultipleStem = true;
					this.subAnser();
				} else {
					this.subAnser();
					this.Qsindex++;
				}
			},
			subFunc() {
				let self = this;
				self._post('paper.Paper/submit', {
					record_id: self.detail.record_id
				}, res => {
					uni.showModal({
						content: '时间到，试卷已提交',
						success() {
							self.gotoPage('/pages/examination/record/detail?paper_id=' + self.detail
								.paper_id)
						}
					});
					// 关闭定时器
					clearInterval(self.intTimer);
					self.intTimer = null;
				})
			},
			allSubExam() {
				let flag = false;
				if (this.question && this.question.length > 0) {
					flag = this.question.every((v) => {
						return v.answer_state > 0
					})
				}
				return flag
			}
		}
	}
</script>

<style lang="scss" scoped>
	// 解析
	.center-box {
		background-color: #FFFFFF;
		border-radius: 25rpx;
		padding: 0 20rpx 68rpx 20rpx;

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
	}

	.wrap {
		min-height: 100vh;
	}

	.top-box {
		background: #FFFFFF;
		border-radius: 15rpx;
		height: 102rpx;
		padding: 0 20rpx;
		margin-bottom: 24rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
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

	.nextBtn {
		width: 520rpx;
		height: 68rpx;
		line-height: 68rpx;
		background: linear-gradient(45deg, #F2473F, #F26E2F);
		font-size: 28rpx;
		color: #FFFFFF;
		text-align: center;
		border-radius: 50rpx;
		margin: 0 auto;
		margin-top: 40rpx;
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
</style>