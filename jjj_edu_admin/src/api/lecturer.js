import request from '@/utils/request'

let LecturerApi = {

	/*分类管理*/
	catList(data, errorback) {
		return request._post('/shop/lecturer.category/index', data, errorback);
	},
	/*分类添加*/
	catAdd(data, errorback) {
		return request._post('/shop/lecturer.category/add', data, errorback);
	},
	/*分类删除*/
	catDel(data, errorback) {
		return request._post('/shop/lecturer.category/delete', data, errorback);
	},
	/*分类修改*/
	catEdit(data, errorback) {
		return request._post('/shop/lecturer.category/edit', data, errorback);
	},
	/*分类状态*/
	catSet(data, errorback) {
		return request._post('/shop/lecturer.category/set', data, errorback);
	},
	/* ------------------------讲师----------------------- */
	/*课程列表*/
	lecturerList(data, errorback) {
		return request._post('/shop/lecturer.lecturer/index', data, errorback);
	},
	/*新增课程*/
	addLecturer(data, errorback) {
		return request._post('/shop/lecturer.lecturer/add', data, errorback);
	},
	/*课程基础数据*/
	getLecturerBaseData(data, errorback) {
		return request._get('/shop/lecturer.lecturer/add', data, errorback);
	},
	/*删除课程*/
	delLecturer(data, errorback) {
		return request._post('/shop/lecturer.lecturer/delete', data, errorback);
	},
	/*课程基础数据*/
	getEditLecturer(data, errorback) {
		return request._get('/shop/lecturer.lecturer/edit', data, errorback);
	},
	/*新增课程*/
	editLecturer(data, errorback) {
		return request._post('/shop/lecturer.lecturer/edit', data, errorback);
	},
	lecturerState(data, errorback) {
		return request._post('/shop/lecturer.lecturer/state', data, errorback);
	},
	lecturerTop(data, errorback) {
		return request._post('/shop/lecturer.lecturer/settop', data, errorback);
	},
	/*评论列表*/
	getCommentList(data, errorback) {
		return request._post('/shop/lecturer.comment/index', data, errorback);
	},
	/*获取评论详情*/
	getComment(data, errorback) {
		return request._post('/shop/lecturer.comment/detail', data, errorback);
	},
	/*获取评论详情*/
	editComment(data, errorback) {
		return request._post('/shop/lecturer.comment/edit', data, errorback);
	},
	/*删除评论*/
	delComment(data, errorback) {
		return request._post('/shop/lecturer.comment/delete', data, errorback);
	},
}

export default LecturerApi;