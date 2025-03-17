<template>
	<div>
		<!--基本信息-->
		<div class="common-form">基本信息</div>
		<el-form-item label="课程名称：" :rules="[{ required: true, message: '请填写课程名称' }]" prop="model.title">
			<el-input v-model="form.model.title" class="max-w460"></el-input>
		</el-form-item>
		<el-form-item label="所属分类：" :rules="[{ required: true, message: '请选择课程分类' }]" prop="model.category_id">
			<el-select v-model="form.model.category_id">
				<template v-for="cat in form.category" :key="cat.category_id">
					<el-option :value="cat.category_id" :label="cat.name"></el-option>
					<template v-if="cat.child !== undefined">
						<template v-for="two in cat.child" :key="two.category_id">
							<el-option :value="two.category_id" :label="two.name"
								style="padding-left: 30px;"></el-option>
							<template v-if="two.child !== undefined">
								<template v-for="three in two.child" :key="three.category_id">
									<el-option :value="three.category_id" :label="three.name"
										style="padding-left: 60px;"></el-option>
								</template>
							</template>
						</template>
					</template>
				</template>
			</el-select>
		</el-form-item>
		<el-form-item label="讲师：" :rules="[{ required: true, message: '请选择课程讲师' }]" prop="model.lecturer_id">
			<el-select v-model="form.model.lecturer_id">
				<el-option value="" :label="'请选择讲师'"></el-option>
				<template v-for="cat in form.lecturer" :key="cat.lecturer_id">
					<el-option :value="cat.lecturer_id" :label="cat.name"></el-option>
				</template>
			</el-select>
		</el-form-item>
		<el-form-item label="标签：" prop="label">
			<el-tag :key="tag" v-for="tag in form.model.label" closable :disable-transitions="false"
				@close="handleClose(tag)">{{ tag }}</el-tag>
			<el-input class="input-new-tag" v-if="inputVisible" maxlength="100" v-model="inputValue" ref="saveTagInput"
				size="small" @keyup.enter.native="handleInputConfirm" @blur="handleInputConfirm"></el-input>
			<el-button v-else-if="form.model.label.length <= 5" class="button-new-tag" size="small" @click="showInput">+
				添加</el-button>
		</el-form-item>
		<el-form-item label="课程封面：" :rules="[{ required: true, message: '请上传课程封面' }]" prop="model.image_id">
			<el-row>
				<div class="draggable-list">
					<div class="item img-select" v-if="form.model.image_id == 0"
						@click="openProductUpload('image', 'image')">
						<el-icon>
							<Plus></Plus>
						</el-icon>
					</div>
					<div v-if="form.model.image_id != 0" class="item" @click="openProductUpload('image', 'image')"><img
							:src="form.model.image.file_path" width="100" height="100" /></div>
				</div>
				<div class="tips red">尺寸：263*148</div>
			</el-row>
		</el-form-item>
		<el-form-item label="课程图片：" :rules="[{ required: true, message: '请上传课程图片' }]" prop="model.banner">
			<div class="draggable-list">
				<draggable class="wrapper" v-model="form.model.banner">
					<template #item="{ element, index }">
						<div class="item">
							<img v-img-url="element.file_path" />
							<a href="javascript:void(0);" class="delete-btn" @click.stop="deleteImg(index)">
								<el-icon>
									<Close />
								</el-icon>
							</a>
						</div>
					</template>
				</draggable>
				<div class="item img-select" @click="openProductUpload('image', 'banner')">
					<el-icon>
						<Plus></Plus>
					</el-icon>
				</div>
			</div>
			<div class="tips red">尺寸：750*421</div>
		</el-form-item>
		<el-form-item label="课程视频：">
			<div class="mb16"><el-input v-model="form.model.video_link" class="max-w460"></el-input></div>
			<div class="draggable-list">
				<div class="item img-select" v-if="form.model.video_link == ''"
					@click="openProductUpload('video', 'video_link')">
					<el-icon>
						<Plus></Plus>
					</el-icon>
				</div>
				<div v-if="form.model.video_link != ''">
					<video width="150" height="150" :src="form.model.video_link" :autoplay="false" controls>您的浏览器不支持
						video 标签</video>
					<div><el-button icon="Picture" @click="delVideo">删除视频</el-button></div>
				</div>
			</div>
		</el-form-item>
		<el-form-item label="视频封面：">
			<el-row>
				<div class="draggable-list">
					<div class="item img-select" v-if="form.model.video_image == ''"
						@click="openProductUpload('image', 'video_image')">
						<el-icon>
							<Plus></Plus>
						</el-icon>
					</div>
					<div v-if="form.model.video_image != ''" class="item"
						@click="openProductUpload('image', 'video_image')">
						<img :src="form.model.video_image" width="100" height="100" />
					</div>
				</div>
				<div class="tips red">尺寸：4:3</div>
			</el-row>
		</el-form-item>
		<!--其他设置-->
		<div class="common-form">其他设置</div>
		<el-form-item label="课程排序：" :rules="[{ required: true, message: ' ' }]" prop="model.sort">
			<el-input type="number" min="0" v-model="form.model.sort" class="max-w460"></el-input>
		</el-form-item>
		<el-form-item label="收费方式：" prop="model.is_pay">
			<el-radio-group v-model="form.model.is_pay">
				<el-radio :label="0">免费</el-radio>
				<el-radio :label="1">付费</el-radio>
			</el-radio-group>
		</el-form-item>
		<el-form-item :rules="rules.course_price" v-if="form.model.is_pay == 1" label="价格：" prop="model.course_price">
			<el-input type="number" min="0.01" v-model="form.model.course_price" class="max-w460"></el-input>
		</el-form-item>
		<el-form-item label="状态：" prop="model.is_show">
			<el-radio-group v-model="form.model.is_show">
				<el-radio :label="0">显示</el-radio>
				<el-radio :label="1">隐藏</el-radio>
			</el-radio-group>
		</el-form-item>
		<!--课程图片组件-->
		<Upload v-if="isProductUpload" :config="config" :isupload="isProductUpload" @returnImgs="returnProductImgsFunc">
			上传图片</Upload>
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
			var validatePass = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入金额'));
				} else {
					if (value <= 0) {
						callback(new Error('价格不小于0.01'));
					}
					callback();
				}
			};
			return {
				isProductUpload: false,
				config: {},
				file_name: 'image',
				inputVisible: false,
				inputValue: '',
				rules: {
					course_price: [{
						validator: validatePass,
						trigger: 'blur'
					}]
				}
			};
		},
		inject: ['form'],
		created() {},
		methods: {
			/*打开上传图片*/
			openProductUpload: function(file_type, file_name) {
				this.file_name = file_name;
				if (file_type == 'image') {
					this.config = {
						total: 9,
						file_type: 'image'
					};
				} else if (file_type == 'video') {
					this.config = {
						total: 1,
						file_type: 'video'
					};
				}
				this.isProductUpload = true;
			},
			handleClose(tag) {
				this.form.model.label.splice(this.form.model.label.indexOf(tag), 1);
			},

			showInput() {
				this.inputVisible = true;
				this.$nextTick(_ => {
					this.$refs.saveTagInput.$refs.input.focus();
				});
			},

			handleInputConfirm() {
				let inputValue = this.inputValue;
				if (inputValue) {
					if (this.form.model.label == '') {
						this.form.model.label = [];
					}
					this.form.model.label.push(inputValue);
				}
				this.inputVisible = false;
				this.inputValue = '';
			},
			/*上传课程图片*/
			returnProductImgsFunc(e) {
				if (e != null) {
					if (this.file_name == 'video_link') {
						this.form.model.video_link = e[0].file_path;
					} else if (this.file_name == 'banner') {
						this.form.model.banner = this.form.model && this.form.model.banner || [];
						if (e && e.length > 0) {
							this.form.model.banner = this.form.model.banner.concat(e)
						}
					} else if (this.file_name == 'image') {
						this.form.model.image_id = e[0].file_id;
						this.form.model.image = e[0];
					} else if (this.file_name == 'video_image') {
						this.form.model.video_image = e[0].file_path;
					}
				}
				this.isProductUpload = false;
			},

			/*删除课程图片*/
			deleteImg(index) {
				this.form.model.banner.splice(index, 1);
			},
			delVideo() {
				this.form.model.video_link = '';
				this.form.model.video_image = '';
			},
		}
	};
</script>

<style lang="scss" scoped>
	.el-tag--small {
		height: var(--el-component-size-small);
	}

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