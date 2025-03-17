<template>
	<div class="product-add">
		<el-tabs v-model="activeName" type="card">
			<el-tab-pane label="基础设置" name="basic"></el-tab-pane>
			<!-- <el-tab-pane label="章节详情" name="content"></el-tab-pane> -->
		</el-tabs>
		<!--form表单-->
		<el-form size="small" ref="form" :model="form" label-width="180px">
			<!--基础信息-->
			<Basic v-show="activeName == 'basic'"></Basic>
			<!--商品详情-->
			<Content v-show="activeName == 'content'"></Content>
			<!--提交-->
			<div class="common-button-wrapper">
				<el-button size="small" type="info" @click="cancelFunc">取消</el-button>
				<el-button size="small" type="primary" @click="onSubmit" :loading="loading">保存</el-button>
			</div>
		</el-form>
	</div>
</template>

<script>
	import EducationApi from '@/api/education.js';
	import Basic from './part/Basic.vue';
	import Content from './part/Content.vue';
	export default {
		components: {
			/*基础信息*/
			Basic,
			/*商品详情*/
			Content,
		},
		data() {
			return {
				activeName: 'basic',
				/*是否正在加载*/
				loading: false,
				/*form表单数据*/
				course_id: 0,
				form: {
					model: {
						course_id: 0,
						scene: 'add',
						/*商品名称*/
						title: '',
						content: '',
						video_link: '',
						video_image: "",
						audio_image: '',
						audio_link: '',
						is_see: 0,
						see_time: 0,
						sort: 0,
						lecturer_id: '',
						back_link: '',
						start_time: '',
						end_time: ''
					},
					lecturer: []
				}
			};
		},
		provide: function() {
			return {
				form: this.form
			}
		},
		created() {
			/*获取列表*/
			this.course_id = this.$route.query.course_id;
			/*获取基础数据*/
			this.getBaseData();
		},
		methods: {
			/*获取基础数据*/
			getBaseData: function() {
				let self = this;
				EducationApi.getSectionBaseData({}, true)
					.then(res => {
						self.loading = false;
						Object.assign(self.form, res.data);
					})
					.catch(error => {
						self.loading = false;
					});
			},
			/*提交*/
			onSubmit: function() {
				let self = this;
				let params = self.form.model;
				params.course_id = self.course_id;
				self.$refs.form.validate(valid => {
					if (valid) {
						self.loading = true;
						EducationApi.addSection(params, true)
							.then(data => {
								self.loading = false;
								ElMessage({
									message: '添加成功',
									type: 'success'
								});
								self.$router.back();
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