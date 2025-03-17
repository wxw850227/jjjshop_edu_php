import request from '@/utils/request'

let CourseApi = {

  /*分类管理*/
  catList(data, errorback) {
    return request._post('/shop/course.category/index', data, errorback);
  },
  /*分类添加*/
  catAdd(data, errorback) {
    return request._post('/shop/course.category/add', data, errorback);
  },
  /*分类删除*/
  catDel(data, errorback) {
    return request._post('/shop/course.category/delete', data, errorback);
  },
  /*分类修改*/
  catEdit(data, errorback) {
    return request._post('/shop/course.category/edit', data, errorback);
  },
  /*分类状态*/
  catSet(data, errorback) {
    return request._post('/shop/course.category/set', data, errorback);
  },
  /* ------------------------章节----------------------- */
  /*课程列表*/
  courseList(data, errorback) {
    return request._post('/shop/course.course/index', data, errorback);
  },
  /*新增课程*/
  addCourse(data, errorback) {
    return request._post('/shop/course.course/add', data, errorback);
  },
  /*课程基础数据*/
  getCourseBaseData(data, errorback) {
    return request._get('/shop/course.course/add', data, errorback);
  },
  /*删除课程*/
  delCourse(data, errorback) {
    return request._post('/shop/course.course/delete', data, errorback);
  },
  /*课程基础数据*/
  getCourseDetail(data, errorback) {
    return request._get('/shop/course.course/detail', data, errorback);
  },
  /*课程基础数据*/
  getEditCourse(data, errorback) {
    return request._get('/shop/course.course/edit', data, errorback);
  },
  /*新增课程*/
  editCourse(data, errorback) {
    return request._post('/shop/course.course/edit', data, errorback);
  },
  courseState(data, errorback) {
    return request._post('/shop/course.course/state', data, errorback);
  },
  /* ------------------------章节----------------------- */
  /*章节列表*/
  sectionList(data, errorback) {
    return request._post('/shop/course.section/index', data, errorback);
  },
  /*新增章节基础信息*/
  toaddSection(data, errorback) {
    return request._get('/shop/course.section/add', data, errorback);
  },
  /*新增章节*/
  addSection(data, errorback) {
    return request._post('/shop/course.section/add', data, errorback);
  },
  /*章节基础数据*/
  getSectionBaseData(data, errorback) {
    return request._get('/shop/course.section/add', data, errorback);
  },
  /*删除章节*/
  delSection(data, errorback) {
    return request._post('/shop/course.section/delete', data, errorback);
  },
  /*章节基础数据*/
  getEditSection(data, errorback) {
    return request._get('/shop/course.section/edit', data, errorback);
  },
  /*新增章节*/
  editSection(data, errorback) {
    return request._post('/shop/course.section/edit', data, errorback);
  },
  sectionState(data, errorback) {
    return request._post('/shop/course.section/state', data, errorback);
  },
  /*订单列表*/
  orderlist(data, errorback) {
    return request._post('/shop/course.order/index', data, errorback);
  },
  /*评论列表*/
  getCommentList(data, errorback) {
    return request._post('/shop/course.comment/index', data, errorback);
  },
  /*获取评论详情*/
  getComment(data, errorback) {
    return request._post('/shop/course.comment/detail', data, errorback);
  },
  /*获取评论详情*/
  editComment(data, errorback) {
    return request._post('/shop/course.comment/edit', data, errorback);
  },
  /*删除评论*/
  delComment(data, errorback) {
    return request._post('/shop/course.comment/delete', data, errorback);
  },
}

export default CourseApi;
