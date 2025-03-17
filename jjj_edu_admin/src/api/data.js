import request from '@/utils/request'

let DataApi = {
	/*用户接口*/
	getUser(data, errorback) {
		return request._post('/shop/data.user/lists', data, errorback);
	},
	/*用户接口*/
	getRegion(data, errorback) {
		return request._post('/shop/data.region/lists', data, errorback);
	},
	/*文章分类*/
	articleCategorylist(data, errorback) {
		return request._post('/shop/data.article/category', data, errorback);
	},
	/*文章列表*/
	articlelist(data, errorback) {
		return request._post('/shop/data.article/index', data, errorback);
	},
	/*页面列表*/
	getPageList(data, errorback) {
		return request._post('/shop/data.link/getPageList', data, errorback);
	},
	/*课程分类*/
	cateList(data, errorback) {
		return request._post('/shop/data.Course/category', data, errorback);
	},
	/*课程列表*/
	coursesList(data, errorback) {
		return request._post('/shop/data.Course/index', data, errorback);
	},
	/*试题分类*/
	catePaperList(data, errorback) {
		return request._post('/shop/data.Paper/category', data, errorback);
	},
	/*试题列表*/
	paperList(data, errorback) {
		return request._post('/shop/data.Paper/index', data, errorback);
	},
	/*讲师分类*/
	cateLecturerList(data, errorback) {
		return request._post('/shop/data.Lecturer/category', data, errorback);
	},
	/*讲师列表*/
	lecturerList(data, errorback) {
		return request._post('/shop/data.Lecturer/index', data, errorback);
	},
}
export default DataApi;