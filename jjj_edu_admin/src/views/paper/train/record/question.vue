<template>
	<!-- 
	  answer_state 1 正确 2错误 3未作答
	-->
	<div class="pb50" v-loading="loading">
	  <h1>答题详情</h1>
	  <div class="product-content"> 
		<!--基本信息-->
		<div class="common-form">答题人</div>
		<div class="table-wrap">
		  <el-row>
			<el-col :span="5">
			  <div class="pb16">
				<span class="gray9">UID：</span>
				{{ detail.user_id }}
			  </div>
			</el-col>
			<el-col :span="5">
			  <div class="pb16">
				<span class="gray9">昵称：{{ detail.user.nickName }}</span>
			  </div>
			</el-col>
		  </el-row>
		</div>
		<div class="common-form mt16">答题解析</div>
		<div class="table-wrap">
		  <template v-for="(v,idx) in stemList" :key="idx">
			<!-- 单选题 -->
			<template v-if="v.type == 'radio'">
			  <div class="title">{{ getSort(idx) }} {{ v.title }}（每题{{ detail.paper.single_score }}分，共{{ detail.paper.single_number }}题）</div>
			  <template v-for="(item, index) in v.list" :key="index" >
				  <div class="mb18" >
					  <div v-if="item.question.question_type === 1">
						<stemItem :data="item" :index="index" />
						<div class="answerState">
						  <text>正确答案&nbsp;</text>
						  <text class="success">{{ item.question_answer }}</text>
						  <text>，您的答案&nbsp;</text>
						  <text :class="item.answer_state == 1 ? 'success' : item.answer_state == 2 ? 'error' : item.answer_state == 0 ? 'red' : ''">{{ item.answer||'未答题' }}</text>
						</div>
					  </div>
					</div>
				</template>
			</template>
			<!-- 多选题 -->
			<template v-if="v.type == 'checkbox'">
			  <div class="title">{{ getSort(idx) }} {{ v.title }}（每题{{ detail.paper.many_score }}分，共{{ detail.paper.many_number }}题）</div>
			  <template v-for="(item, index) in v.list" :key="index" >
				<div class="mb18" >
					<div v-if="item.question.question_type === 2">
					  <stemItem :data="item" :index="index" />
					  <div class="answerState">
						<text>正确答案&nbsp;</text>
						<text class="success">{{ item.question_answer }}</text>
						<text>，您的答案&nbsp;</text>
						<text :class="item.answer_state == 1 ? 'success' : item.answer_state == 2 ? 'error' : item.answer_state == 0 ? 'red' : ''">{{ item.answer||'未答题' }}</text>
					  </div>
					</div>
				  </div>
			  </template>
			</template>
			<!-- 判断题 -->
			<template v-if="v.type == 'judeg'">
			  <div class="title">{{ getSort(idx) }} {{ v.title }}（每题{{ detail.paper.many_score }}分，共{{ detail.paper.many_number }}题）</div>
			  <template v-for="(item, index) in v.list" :key="index">
				<div class="mb18">
				  <div v-if="item.question.question_type === 3">
					<stemItem :data="item" :index="index" />
					<div class="answerState">
					  <text>正确答案&nbsp;</text>
					  <text class="success">{{ item.question_answer }}</text>
					  <text>，您的答案&nbsp;</text>
					  <text :class="item.answer_state == 1 ? 'success' : item.answer_state == 2 ? 'error' : item.answer_state == 0 ? 'red' : ''">{{ item.answer||'未答题' }}</text>
					</div>
				  </div>
				</div>
			  </template>
			</template>
		  </template>
		</div>
		<div style="height: 25px;"></div>
	  </div>
	</div>
	<div class="common-button-wrapper">
	  <el-button size="small" type="info" @click="cancelFunc">返回上一页</el-button>
	</div>
  </template>
  
  <script>
  import PaperApi from '@/api/paper.js';
  import stemItem from './stemItem.vue';
  export default {
	components: {
	  stemItem
	},
	data() {
	  return {
		record_id: 0,
		detail: {
		  user: {},
		  paper: {},
		},
		question: [],
		stemList:[
		  {
			title: '单选题',
			list: [],
			type: 'radio',
		  },
		  {
			title: '多选题',
			list: [],
			type: 'checkbox',
		  },
		  {
			title: '判断题',
			list: [],
			type: 'judeg',
		  },
		],
	  };
	},
	created() {
	  this.record_id = this.$route.query.record_id;
	  /*获取列表*/
	  this.getAnswerDetails();
	},
	methods: {
	  getSort(idx){
		if(idx == 0){
		  return '一'
		}
		if(idx == 1){
		  return '二'
		}
		if(idx == 2){
		  return '三'
		}
	  },
	  // 获取答题详情数据
	  getAnswerDetails() {
		let self = this;
		PaperApi.trainRecordQuestion({
		  record_id: self.record_id
		},
		  true
		)
		  .then(data => {
			self.loading = false;
			const { data:{ detail } } = data;
			self.detail = detail;
			self.question = detail.question;
			let radioStem = [];
			let judStem = [];
			let choiceStem = [];
			if(self.question && self.question.length > 0){
			  self.question.forEach((v)=>{
				if(v.question_type == 1){
				  radioStem.push(v)
				}else if(v.question_type == 2){
				  judStem.push(v)
				}else if(v.question_type == 3){
				  choiceStem.push(v)
				}
			  })
			}
			let list = [];
			if(radioStem && radioStem.length > 0){
			  list.push({
				title: '单选题',
				list: radioStem,
				type: 'radio',
			  })
			}
			if(judStem && judStem.length > 0){
			  list.push({
				title: '多选题',
				list: judStem,
				type: 'checkbox',
			  })
			}
			if(choiceStem && choiceStem.length > 0){
			  list.push({
				title: '判断题',
				list: choiceStem,
				type: 'judeg',
			  })
			}
			self.stemList = list;
		  })
		  .catch(error => {
			self.loading = false;
		  });
	  },
	  /*取消*/
	  cancelFunc() {
		this.$router.back(-1);
	  },
	},
  };
  </script>
  
  <style scoped lang="scss">
  ::v-deep(.grade .el-form-item){
	margin-bottom: 0;
  }
  .grade{
	border: 1px solid #333;
	padding: 0 20px;
  }
  .answerState{
	color: #333;
	font-size: 14px;
	margin-top: 12px;
	.success{
	  color: var(--el-color-success);
	}
	.error{
	  color: var(--el-color-danger);
	}
  }
  .exam-record-question {
	padding: 20px;
  }
  
  .title {
	font-weight: bold;
	margin-bottom: 10px;
	font-size: 14px;
  }
  .answer-analysis {
	font-style: italic;
	color: #666;
	margin-top: 5px;
  }
  
  .custom-card {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
	width: 100%;
  }</style>