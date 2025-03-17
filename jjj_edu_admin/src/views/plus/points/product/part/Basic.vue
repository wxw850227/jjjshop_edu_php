<template>
	<!--
    	作者：luoyiming
    	时间：2019-10-26
    	描述：商品管理-商品编辑-基础信息
    -->
	<div class="basic-setting-content pl16 pr16">
		<!--基本信息-->
		<div class="common-form">基本信息</div>
		<el-form-item label="商品名称：" :rules="[{ required: true, message: '请填写商品名称' }]" prop="model.product_name">
			<el-input v-model="form.model.product_name" class="max-w460"></el-input>
		</el-form-item>
		<el-form-item label="商品图片：" :rules="[{ required: true, message: '请上传商品图片' }]" prop="model.file_path">
			<div class="">
				<div class="mb16"><el-button type="primary" @click="openProductUpload">选择图片</el-button></div>
				<div v-if="form.model.file_path!=''" class="img">
					<img :src="form.model.file_path" width="100" height="100" />
				</div>
			</div>
		</el-form-item>
		<!--商品图片组件-->
		<Upload v-if="isProductUpload" :config="{ total: 9 }" :isupload="isProductUpload"
			@returnImgs="returnProductImgsFunc">上传图片</Upload>
	</div>
</template>

<script>
	import Upload from '@/components/file/Upload.vue';
	import draggable from 'vuedraggable';
	export default {
		components: {
			Upload,
			draggable
		},
		data() {
			return {
				formData: {},
				isProductUpload: false
			};
		},
		inject: ['form'],
		created() {
			this.formData = this.form;
		},
		methods: {

			/*打开上传图片*/
			openProductUpload: function() {
				this.isProductUpload = true;
			},

			/*上传商品图片*/
			returnProductImgsFunc(e) {
				if (e != null) {
					let imgs = e;
					console.log(imgs)
					this.form.model.file_path = imgs[0].file_path;
					this.form.model.image_id = imgs[0].file_id;
				}
				this.isProductUpload = false;
			},

			/*删除商品图片*/
			deleteImg(index) {
				this.form.model.file_path = '';
				this.form.model.image_id = '';
			},
		}
	};
</script>

<style></style>