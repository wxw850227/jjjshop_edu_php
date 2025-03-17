<template>
	<div class="product-add">
		<el-tabs v-model="activeName" type="card">
			<el-tab-pane label="基础设置" name="basic"></el-tab-pane>
			<el-tab-pane label="试题选择" name="question"></el-tab-pane>
		</el-tabs>
		<!--form表单-->
		<el-form size="small" ref="form" :model="form" label-width="180px">
			<!--基础信息-->
			<Basic v-show="activeName == 'basic'"></Basic>
			<!--题库-->
			<QuestionIndex v-show="activeName == 'question'"></QuestionIndex>
			<!--提交-->
			<div class="common-button-wrapper">
				<el-button size="small" type="info" @click="cancelFunc">取消</el-button>
				<el-button size="small" type="primary" @click="onSubmit" :loading="loading">保存</el-button>
			</div>
		</el-form>
	</div>
</template>

<script>
	import PaperApi from '@/api/paper.js';
	import Basic from './part/Basic.vue';
	import QuestionIndex from './part/Question.vue';
	export default {
		components: {
			/*基础信息*/
			Basic,
			/*商品详情*/
			QuestionIndex,
		},
		data() {
			return {
				activeName: 'basic',
				/*是否正在加载*/
				loading: false,
				/*form表单数据*/
				form: {
					model: {
						paper_question_id: 0,
						title: '',
						image_id: '',
						item_number: '',
						virtual_answer: '',
						single_number: '',
						single_score: '',
						many_number: '',
						many_score: '',
						judge_number: '',
						judge_score: '',
						total_score: '',
						difficulty: null,
						sort: 0,
						is_score: 0,
						is_show: 0,
						virtual_sales: 0,
						question: [],
						single: [],
						many: [],
						judge: []

					},
					/*商品分类*/
					category: [],
					questionType: [],
				}
			};
		},
		provide: function() {
			return {
				form: this.form
			}
		},
		created() {
			/*获取基础数据*/
			this.getBaseData();
		},
		methods: {

			/*获取基础数据*/
			getBaseData: function() {
				let self = this;
				PaperApi.gettrainPaper({}, true)
					.then(res => {
						self.loading = false;
						Object.assign(self.form, res.data);
					})
					.catch(error => {
						self.loading = false;
					});
			},

			/*转JSON字符串*/
			convertJson(list) {
				let obj = {};
				list.forEach(item => {
					obj[item.grade_id] = item.product_equity;
				});
				return JSON.stringify(obj);
			},

			/*提交*/
			onSubmit: function() {
				let self = this;
				let params = self.form.model;
				params.question = [...self.form.model.single, ...self.form.model.many, ...self.form.model.judge];
				if (params.question.length === 0) {
					ElMessage({
						message: '题库不能为空',
						type: 'error'
					});
					return;
				};
				params = JSON.stringify(params);
				self.$refs.form.validate(valid => {
					if (valid) {
						self.loading = true;
						PaperApi.addtrainPaper({params:params}, true)
							.then(data => {
								self.loading = false;
								ElMessage({
									message: '添加成功',
									type: 'success'
								});
								self.$router.push('/paper/train/paper/index');
							})
							.catch(error => {
								self.loading = false;
							});
					} else {
						ElMessage({
							message: '请检查必填项是否填写完整',
							type: 'error'
						});
					}
				});
			},

			/*取消*/
			cancelFunc() {
				this.$router.back(-1);
			},

		}
	};
</script>

<style lang="scss" scoped>
	.basic-setting-content {}

	.product-add {
		padding-bottom: 100px;
	}
</style>