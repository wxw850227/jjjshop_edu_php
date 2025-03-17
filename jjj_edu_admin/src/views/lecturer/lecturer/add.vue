<template>
	<div class="product-add">
		<el-tabs v-model="activeName" type="card">
			<el-tab-pane label="基础设置" name="basic"></el-tab-pane>
			<el-tab-pane label="讲师详情" name="content"></el-tab-pane>
		</el-tabs>
		<!--form表单-->
		<el-form size="small" ref="form" :model="form" label-width="180px">
			<!--基础信息-->
			<Basic v-show="activeName == 'basic'"></Basic>
			<!--讲师详情-->
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
	import LecturerApi from '@/api/lecturer.js';
	import Basic from './part/Basic.vue';
	import Content from './part/Content.vue';
	export default {
		components: {
			/*基础信息*/
			Basic,
			/*讲师详情*/
			Content,
		},
		data() {
			return {
				activeName: 'basic',
				/*是否正在加载*/
				loading: false,
				/*form表单数据*/
				form: {
					model: {
						scene: 'add',
						/*商品名称*/
						name: '',
						describe: '',
						/*商品分类*/
						category_id: null,
						label: [],
						image: {},
						image_id: '',
						/*商品详情内容*/
						content: '',
						sort: 0,
						virtual_browse: 0,
						virtual_collect: 0,
						virtual_like: 0,
						star:1
					},
					/*讲师分类*/
					category: [],
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
				LecturerApi.getLecturerBaseData({}, true)
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
				self.$refs.form.validate(valid => {
					if (valid) {
						self.loading = true;
						LecturerApi.addLecturer(params, true)
							.then(data => {
								self.loading = false;
								ElMessage({
									message: '添加成功',
									type: 'success'
								});
								self.$router.push('/lecturer/lecturer/index');
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