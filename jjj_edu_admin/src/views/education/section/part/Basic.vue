<template>
	<div>
		<!--基本信息-->
		<div class="common-form">基本信息</div>
		<el-form-item label="章节名称：" :rules="[{ required: true, message: '请填写章节名称' }]" prop="model.title">
			<el-input v-model="form.model.title" class="max-w460"></el-input>
		</el-form-item>
		<el-form-item label="讲师：" :rules="[{ required: true, message: '请选择课程讲师' }]" prop="model.lecturer_id">
			<el-select v-model="form.model.lecturer_id">
				<el-option value="" :label="'请选择讲师'"></el-option>
				<template v-for="cat in form.lecturer" :key="cat.lecturer_id">
					<el-option :value="cat.lecturer_id" :label="cat.name"></el-option>
				</template>
			</el-select>
		</el-form-item>
		<el-form-item label="直播地址：">
			<el-input v-model="form.model.video_link" class="max-w460"></el-input>
		</el-form-item>
		<el-form-item label="回放地址：">
			<el-input v-model="form.model.back_link" class="max-w460"></el-input>
		</el-form-item>
		<el-form-item label="上课时间" prop="model.start_time" :rules="[{ required: true, message: ' ' }]">
			<div class="block">
				<el-date-picker v-model="form.model.start_time" value-format="YYYY-MM-DD HH:mm:ss" type="datetime" placeholder="选择日期时间"></el-date-picker>
			</div>
		</el-form-item>
		<el-form-item label="下课时间" prop="model.end_time" :rules="[{ required: true, message: ' ' }]">
			<div class="block">
				<el-date-picker v-model="form.model.end_time" value-format="YYYY-MM-DD HH:mm:ss" type="datetime" placeholder="选择日期时间"></el-date-picker>
			</div>
		</el-form-item>
		<!--其他设置-->
		<div class="common-form">其他设置</div>
		<el-form-item label="章节排序：" :rules="[{ required: true, message: ' ' }]" prop="model.sort">
			<el-input type="number" min="0" v-model="form.model.sort" class="max-w460"></el-input>
		</el-form-item>
	</div>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				isProductUpload: false,
				config: {},
				file_name: 'image',
				inputVisible: false,
				inputValue: ''
			};
		},
		inject: ['form'],
		created() {},
		methods: {}
	};
</script>

<style>
	.edit_container {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		line-height: 20px;
		color: #2c3e50;
	}

	.ql-editor {
		height: 400px;
	}

	.draggable-list {
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
	}

	.draggable-list .wrapper>span {
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
	}

	.draggable-list .item {
		position: relative;
		width: 110px;
		height: 110px;
		margin-top: 10px;
		margin-right: 10px;
		border-radius: 8px;
		overflow: hidden;
		border: 1px solid #dddddd;
	}

	.draggable-list .delete-btn {
		position: absolute;
		top: 0;
		right: 0;
		width: 16px;
		height: 16px;
		background: red;
		line-height: 16px;
		font-size: 16px;
		color: #ffffff;
		display: none;
	}

	.draggable-list .item:hover .delete-btn {
		display: block;
	}

	.draggable-list .item img {
		position: absolute;
		top: 50%;
		left: 50%;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		max-height: 100%;
		max-width: 100%;
	}

	.draggable-list .img-select {
		display: flex;
		justify-content: center;
		align-items: center;
		border: 1px dashed #dddddd;
		font-size: 30px;
	}

	.draggable-list .img-select i {
		color: #409eff;
	}

	.el-tag+.el-tag {
		margin-left: 10px;
	}

	.button-new-tag {
		margin-left: 10px;
		height: 32px;
		line-height: 30px;
		padding-top: 0;
		padding-bottom: 0;
	}

	.input-new-tag {
		width: 90px;
		margin-left: 10px;
		vertical-align: bottom;
	}
</style>