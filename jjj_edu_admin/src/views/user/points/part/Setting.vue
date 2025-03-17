<template>
	<!--
      作者 luoyiming
      时间：2020-06-09
      描述：会员-积分管理-积分设置
  -->
	<div class="pb50">
		<el-form ref="form" size="small" :model="form" label-width="200px">
			<div class="common-form">积分设置</div>
			<el-form-item label="积分名称 " prop="points_name" :rules="[{required: true,message: ' '}]">
				<el-input v-model="form.points_name" autocomplete="off" class="max-w460"></el-input>
				<div class="lh18 mt10 gray9">
					<p>注：修改积分名称后，在买家端的所有页面里，看到的都是自定义的名称</p>
					<p>例：商家使用自定义的积分名称来做品牌运营。如京东把积分称为“京豆”，淘宝把积分称为“淘金币”</p>
				</div>
			</el-form-item>
			<el-form-item label="积分说明" :rules="[{required: true,message: ' '}]">
				<el-input type="textarea" rows="5" v-model="form.describe" autocomplete="off"></el-input>
			</el-form-item>
			<!--提交-->
			<div class="common-button-wrapper">
				<el-button type="primary" size="small" @click="onSubmit" :loading="loading">提交</el-button>
			</div>

		</el-form>
	</div>
</template>
<script>
	import PointsApi from '@/api/points.js';
	export default {
		data() {
			return {
				form: {
					points_name: '',
					describe: '',
				},
				loading: false,
			};
		},
		created() {
			/*获取数据*/
			this.getData();
		},
		methods: {
			/*获取数据*/
			getData() {
				let self = this;
				let Params = {};
				PointsApi.getPoints(Params, true).then(data => {
					self.form = data.data.values;
				}).catch(error => {

				});
			},

			/*保存*/
			onSubmit() {
				let self = this;
				let form = self.form;
				self.$refs.form.validate((valid) => {
					if (valid) {
						self.loading = true;
						PointsApi.setPoints(form, true)
							.then(data => {
								self.loading = false;
								if (data.code == 1) {
									ElMessage({
										message: '恭喜你，保存成功',
										type: 'success'
									});
								} else {
									self.loading = false;
								}
							})
							.catch(error => {
								self.loading = false;
							});

					}
				});


			},
		}
	};
</script>

<style>
</style>