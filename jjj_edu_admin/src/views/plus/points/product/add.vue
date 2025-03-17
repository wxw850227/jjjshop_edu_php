<template>
	<div class="product-add">
		<!--form表单-->
		<el-form size="small" ref="form" :model="form" label-width="180px">
			<!--基础信息-->
			<Basic></Basic>

			<!--规格设置-->
			<Spec></Spec>

			<!--高级设置-->
			<Buyset></Buyset>

			<!--提交-->
			<div class="common-button-wrapper">
				<el-button size="small" type="info" @click="cancelFunc">取消</el-button>
				<el-button size="small" type="primary" @click="onSubmit" :loading="loading">发布</el-button>
			</div>
		</el-form>
	</div>
</template>

<script>
	import PointsApi from '@/api/plus/points.js';
	import Basic from './part/Basic.vue';
	import Spec from './part/Spec.vue';
	import Buyset from './part/Buyset.vue';
	export default {
		components: {
			/*基础信息*/
			Basic,
			/*规格信息*/
			Spec,
			/*高级设置*/
			Buyset
		},
		data() {
			return {
				/*是否正在加载*/
				loading: false,
				/*form表单数据*/
				form: {
					model: {
						/*商品名称*/
						product_name: '',
						product_price: '',
						product_points: '',
						/*商品图片*/
						file_path: '',
						image_id: '',
						/*商品状态*/
						product_status: 10,
						/*商品排序，默认100*/
						product_sort: 100,
						/*限购数量*/
						limit_num: 0,
						express_price: '',
						product_stock: ''
					},
				}
			};
		},
		provide: function() {
			return {
				form: this.form
			}
		},
		created() {},
		methods: {
			/*提交*/
			onSubmit: function() {
				let self = this;
				let params = self.form.model;
				self.$refs.form.validate(valid => {
					if (valid) {
						self.loading = true;
						console.log(params)
						PointsApi.addProduct({
								params: JSON.stringify(params)
							}, true)
							.then(data => {
								self.loading = false;
								ElMessage({
									message: '添加成功',
									type: 'success'
								});
								self.$router.push('/plus/points/index');
							})
							.catch(error => {
								self.loading = false;
							});
					}
				});
			},

			/*取消*/
			cancelFunc() {
				this.$router.back(-1);
			}

		}
	};
</script>

<style lang="scss" scoped>
	.basic-setting-content {}

	.product-add {
		padding-bottom: 100px;
	}
</style>