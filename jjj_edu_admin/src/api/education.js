import request from '@/utils/request'

let EducationApi = {
  /* ------------------------教务----------------------- */
  /*课程列表*/
  courseList(data, errorback) {
    return request._post('/shop/education.education/index', data, errorback);
  },
  /*新增课程*/
  addCourse(data, errorback) {
    return request._post('/shop/education.education/add', data, errorback);
  },
  /*课程基础数据*/
  getCourseBaseData(data, errorback) {
    return request._get('/shop/education.education/add', data, errorback);
  },
  /*删除课程*/
  delCourse(data, errorback) {
    return request._post('/shop/education.education/delete', data, errorback);
  },
  /*课程基础数据*/
  getCourseDetail(data, errorback) {
    return request._get('/shop/education.education/detail', data, errorback);
  },
  /*课程基础数据*/
  getEditCourse(data, errorback) {
    return request._get('/shop/education.education/edit', data, errorback);
  },
  /*编辑课程*/
  editCourse(data, errorback) {
    return request._post('/shop/education.education/edit', data, errorback);
  },
  courseState(data, errorback) {
    return request._post('/shop/education.education/state', data, errorback);
  },
  /* ------------------------课时----------------------- */
  /*章节列表*/
  sectionList(data, errorback) {
    return request._post('/shop/education.section/index', data, errorback);
  },
  /*新增章节基础信息*/
  toaddSection(data, errorback) {
    return request._get('/shop/education.section/add', data, errorback);
  },
  /*新增章节*/
  addSection(data, errorback) {
    return request._post('/shop/education.section/add', data, errorback);
  },
  /*章节基础数据*/
  getSectionBaseData(data, errorback) {
    return request._get('/shop/education.section/add', data, errorback);
  },
  /*删除章节*/
  delSection(data, errorback) {
    return request._post('/shop/education.section/delete', data, errorback);
  },
  /*章节基础数据*/
  getEditSection(data, errorback) {
    return request._get('/shop/education.section/edit', data, errorback);
  },
  /*新增章节*/
  editSection(data, errorback) {
    return request._post('/shop/education.section/edit', data, errorback);
  },
  sectionState(data, errorback) {
    return request._post('/shop/education.section/state', data, errorback);
  },
  /*订单列表*/
  orderlist(data, errorback) {
    return request._post('/shop/education.order/index', data, errorback);
  },
  /*商品评论列表*/
  getCommentList(data, errorback) {
      return request._post('/shop/education.comment/index', data, errorback);
  },
  /*获取评论详情*/
  getComment(data, errorback) {
      return request._post('/shop/education.comment/detail', data, errorback);
  },
  /*获取评论详情*/
  editComment(data, errorback) {
      return request._post('/shop/education.comment/edit', data, errorback);
  },
  /*删除评论*/
  delComment(data, errorback) {
      return request._post('/shop/education.comment/delete', data, errorback);
  },
}

export default EducationApi;
