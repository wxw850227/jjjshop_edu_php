<template>
	<!--
    	作者：luoyiming
    	时间：2020-06-20
    	描述：diy组件-参数设置
    -->
	<div id="diy-editor" ref="diy-editor" class="diy-editor form-horizontal">
		<template v-if="form.curItem">
			<!--顶部设置-->
			<template v-if="form.curItem.type == 'page'">
				<Setpages :curItem="form.curItem"></Setpages>
			</template>
			<!--图片轮播-->
			<template v-if="form.curItem.type == 'banner'">
				<Banner :curItem="form.curItem" :selectedIndex="form.selectedIndex"></Banner>
			</template>
			<!--图片-->
			<template v-if="form.curItem.type == 'imageSingle'">
				<ImageSingle :curItem="form.curItem" :selectedIndex="form.selectedIndex"></ImageSingle>
			</template>
			<!--图片橱窗-->
			<template v-if="form.curItem.type == 'window'">
				<Window :curItem="form.curItem" :selectedIndex="form.selectedIndex"></Window>
			</template>
			<!--视频组件-->
			<template v-if="form.curItem.type == 'video'">
				<Video :curItem="form.curItem" :selectedIndex="form.selectedIndex"></Video>
			</template>
			<!--文章组件-->
			<template v-if="form.curItem.type == 'article'">
				<Articleindex :curItem="form.curItem" :selectedIndex="form.selectedIndex"></Articleindex>
			</template>
			<!--头条快报-->
			<template v-if="form.curItem.type == 'special'">
				<Special :curItem="form.curItem" :selectedIndex="form.selectedIndex"></Special>
			</template>
			<!--公告组-->
			<template v-if="form.curItem.type == 'notice'">
				<Notice :curItem="form.curItem" :selectedIndex="form.selectedIndex"></Notice>
			</template>
			<!--导航组-->
			<template v-if="form.curItem.type == 'navBar'">
				<NavBar :curItem="form.curItem" :selectedIndex="form.selectedIndex"></NavBar>
			</template>
			<!--讲师-->
			<template v-if="form.curItem.type == 'lecturer'">
				<LecturerIndex :curItem="form.curItem" :selectedIndex="form.selectedIndex"></LecturerIndex>
			</template>
			<!--客服-->
			<template v-if="form.curItem.type == 'service'">
				<Service :curItem="form.curItem" :selectedIndex="form.selectedIndex"></Service>
			</template>
			<!--富文本-->
			<template v-if="form.curItem.type == 'richText'">
				<RichText :curItem="form.curItem" :selectedIndex="form.selectedIndex"></RichText>
			</template>
			<!--辅助空白-->
			<template v-if="form.curItem.type == 'blank'">
				<Blank :curItem="form.curItem" :selectedIndex="form.selectedIndex"></Blank>
			</template>
			<!--辅助线-->
			<template v-if="form.curItem.type == 'guide'">
				<Guide :curItem="form.curItem" :selectedIndex="form.selectedIndex"></Guide>
			</template>
			<!--标题-->
			<template v-if="form.curItem.type == 'title'">
				<Title :curItem="form.curItem" :selectedIndex="form.selectedIndex"></Title>
			</template>
			<!--标题-->
			<template v-if="form.curItem.type == 'train'">
				<Trainindex :curItem="form.curItem" :selectedIndex="form.selectedIndex"></Trainindex>
			</template>
			<!--课程-->
			<template v-if="form.curItem.type == 'course'">
				<CourseIndex :curItem="form.curItem" :selectedIndex="form.selectedIndex"></CourseIndex>
			</template>
			<!--教务-->
			<template v-if="form.curItem.type == 'education'">
				<EducationIndex :curItem="form.curItem" :selectedIndex="form.selectedIndex"></EducationIndex>
			</template>
		</template>

		<!--上传图片-->
		<Upload v-if="isupload" :isupload="isupload" :config="{ total: 3 }" @returnImgs="returnImgsFunc"></Upload>

		<!--讲师列表弹出层-->
		<LecturerSelect :isLecturer="isLecturer" :excludeIds="excludeIds" :islist="islist"
			@closeDialog="closeLecturerDialogFunc($event)">讲师列表弹出层</LecturerSelect>
		<!--练习列表弹出层-->
		<TrainSelect :isTrain="isTrain" :excludeIds="excludeIds" :islist="islist"
			@closeDialog="closeTrainDialogFunc($event)">练习列表弹出层</TrainSelect>
		<!--练习列表弹出层-->
		<CourseSelect :iscourse="isCourse" :excludeIds="excludeIds" :islist="islist"
			@closeDialog="closeCourseDialogFunc($event)" :course_type="course_type">
			练习列表弹出层</CourseSelect>
	</div>
</template>

<script>
	import {
		deepClone
	} from '@/utils/base.js';
	import Setpages from './params/Setpages.vue';
	import Banner from './params/Banner.vue';
	import ImageSingle from './params/ImageSingle.vue';
	import Window from './params/Window.vue';
	import Video from './params/Video.vue';
	import Articleindex from './params/Article.vue';
	import Special from './params/Special.vue';
	import Notice from './params/Notice.vue';
	import NavBar from './params/NavBar.vue';
	import LecturerIndex from './params/Lecturer.vue';
	import Service from './params/Service.vue';
	import RichText from './params/RichText.vue';
	import Blank from './params/Blank.vue';
	import Guide from './params/Guide.vue';
	import Title from './params/Title.vue';
	import Trainindex from './params/Train.vue';
	import CourseIndex from './params/Course.vue';
	import EducationIndex from './params/Education.vue';
	import Upload from '@/components/file/Upload.vue';
	import LecturerSelect from '@/components/lecturer/lecturer.vue';
	import TrainSelect from '@/components/train/train.vue';
	import CourseSelect from '@/components/course/course.vue';

	export default {
		components: {
			/*顶部设置*/
			Setpages,
			/*图片轮播组件*/
			Banner,
			/*图片组件*/
			ImageSingle,
			/*图片橱窗*/
			Window,
			/*视频*/
			Video,
			/*文章*/
			Articleindex,
			/*文章*/
			Special,
			/*公告组*/
			Notice,
			/*导航组*/
			NavBar,
			/*商品组*/
			LecturerIndex,
			/*客服*/
			Service,
			/*富文本*/
			RichText,
			/*辅助空白*/
			Blank,
			/*辅助线*/
			Guide,
			/*教务*/
			EducationIndex,
			/*上传图片*/
			Upload,
			LecturerSelect,
			TrainSelect,
			CourseSelect,
			/*标题*/
			Title,
			Trainindex,
			CourseIndex,
		},
		data() {
			return {
				/*是否上传图片*/
				isupload: false,
				/*图片当前对象*/
				imgModel: null,
				isLecturer: false,
				isTrain: false,
				isCourse: false,
				/*商品需要去重的*/
				excludeIds: [],
				/*是否多选*/
				islist: false,
				course_type: 1,
			};
		},
		props: ['form', 'defaultData', 'diyData', 'opts'],
		created() {},
		methods: {
			/**
			 * 编辑器：添加data元素
			 */
			onEditorAddData: function() {
				let self = this;
				// 新增data数据
				var newDataItem = deepClone(self.defaultData[self.form.curItem.type].data[0]);
				self.form.curItem.data.push(newDataItem);
			},
			/**
			 * 编辑器：重置颜色
			 * @param holder
			 * @param attribute
			 * @param color
			 */
			onEditorResetColor: function(holder, attribute, color) {
				holder[attribute] = color;
			},
			/**
			 * 编辑器：删除data元素
			 * @param index
			 * @param selectedIndex
			 */
			onEditorDeleleData: function(index, selectedIndex) {
				let self = this;
				if (self.diyData.items[selectedIndex].data.length <= 1) {
					ElMessage({
						message: '至少保留一个',
						type: 'error'
					});
					return false;
				}
				self.diyData.items[selectedIndex].data.splice(index, 1);
			},
			/**
			 * 编辑器：选择图片
			 * @param source
			 * @param index
			 */
			onEditorSelectImage: function(index, imgUrl) {
				this.isupload = true;
				this.imgModel = {
					index: index,
					imgUrl: imgUrl
				};
			},

			/*上传图片*/
			returnImgsFunc(e) {
				if (e != null) {
					this.imgModel.index[this.imgModel.imgUrl] = e[0]['file_path'];
				}
				this.isupload = false;
			},
			openLecturer(list, islist) {
				let arr = [];
				list.forEach(item => {
					arr.push(item.lecturer_id);
				});
				this.excludeIds = arr;
				if (islist && typeof islist != 'undefined') {
					this.islist = true;
				} else {
					this.islist = false;
				}
				this.isLecturer = true;
			},
			openTrain(list, islist) {
				let arr = [];
				list.forEach(item => {
					arr.push(item.paper_id);
				});
				this.excludeIds = arr;
				if (islist && typeof islist != 'undefined') {
					this.islist = true;
				} else {
					this.islist = false;
				}
				this.isTrain = true;
			},
			openCourse(list, islist) {
				let arr = [];
				list.forEach(item => {
					arr.push(item.course_id);
				});
				this.excludeIds = arr;
				this.course_type = 1;
				if (islist && typeof islist != 'undefined') {
					this.islist = true;
				} else {
					this.islist = false;
				}
				this.isCourse = true;
			},
			openEdu(list, islist) {
				let arr = [];
				list.forEach(item => {
					arr.push(item.course_id);
				});
				this.excludeIds = arr;
				this.course_type = 2;
				if (islist && typeof islist != 'undefined') {
					this.islist = true;
				} else {
					this.islist = false;
				}
				this.isCourse = true;
			},
			closeLecturerDialogFunc(e) {
				if (this.form.curItem == null) {
					return;
				}
				this.isLecturer = false;
				if (e.type == 'success') {
					if (this.form.curItem.data.length > 0 && this.form.curItem.data[0].is_default) {
						this.form.curItem.data = [];
					}
					if (this.islist) {
						this.form.curItem.data = this.form.curItem.data.concat(e.params);
					} else {
						this.form.curItem.data.push(e.params);
					}
				}
			},
			closeTrainDialogFunc(e) {
				if (this.form.curItem == null) {
					return;
				}
				this.isTrain = false;
				if (e.type == 'success') {
					if (this.form.curItem.data.length > 0 && this.form.curItem.data[0].is_default) {
						this.form.curItem.data = [];
					}
					if (this.islist) {
						this.form.curItem.data = this.form.curItem.data.concat(e.params);
					} else {
						this.form.curItem.data.push(e.params);
					}
				}
			},
			closeCourseDialogFunc(e) {
				if (this.form.curItem == null) {
					return;
				}
				this.isCourse = false;
				if (e.type == 'success') {
					if (this.form.curItem.data.length > 0 && this.form.curItem.data[0].is_default) {
						this.form.curItem.data = [];
					}
					if (this.islist) {
						this.form.curItem.data = this.form.curItem.data.concat(e.params);
					} else {
						this.form.curItem.data.push(e.params);
					}
				}
			}
		}
	};
</script>

<style>
	.param-img-item {
		position: relative;
		padding: 10px;
		margin-bottom: 10px;
		border: 1px solid #eeeeee;
		line-height: 20px;
	}

	.param-img-item .delete-box {
		position: absolute;
		top: 10px;
		right: 10px;
		font-size: 20px;
		cursor: pointer;
		color: #cccccc;
	}

	.param-img-item .delete-box:hover {
		color: rgb(255, 51, 0);
	}

	.param-img-item .pic img {
		width: 200px;
		height: 100px;
		margin: 0 auto;
	}

	.param-img-item .icon img {
		width: 100px;
		height: 100px;
		margin: 0 auto;
	}

	.param-img-item .url-box {
		display: flex;
		justify-content: flex-start;
		margin-bottom: 10px;
	}

	.param-img-item .url-box .key-name {
		display: block;
		width: 80px;
		line-height: var(--el-component-size-small);
	}

	.param-img-item .url-box .el-input {
		flex: 1;
	}
</style>