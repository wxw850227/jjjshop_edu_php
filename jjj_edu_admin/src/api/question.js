import request from '@/utils/request'

let QuestionApi = {
  /*试题列表*/
  questionList(data, errorback) {
    return request._post('/shop/question.question/index', data, errorback);
  },
  /*提型*/
  getQsType(data, errorback) {
    return request._get('/shop/question.question/add', data, errorback);
  },
  /*添加试题*/
  addQs(data, errorback) {
    return request._post('/shop/question.question/add', data, errorback);
  },
  getEditCourse(data, errorback) {
    return request._get('/shop/question.question/edit', data, errorback);
  },
  editQS(data, errorback) {
    return request._post('/shop/question.question/edit', data, errorback);
  },
  delQs(data, errorback) {
    return request._post('/shop/question.question/delete', data, errorback);
  },
  /*关联课程*/
  relationList(data, errorback) {
    return request._get('/shop/question.relation/index', data, errorback);
  },
  /*关联课程*/
  addRelation(data, errorback) {
    return request._post('/shop/question.relation/add', data, errorback);
  },
  /*关联课程*/
  delRelation(data, errorback) {
    return request._post('/shop/question.relation/delete', data, errorback);
  },
  setsortRelation(data, errorback) {
    return request._post('/shop/question.relation/setsort', data, errorback);
  },
}

export default QuestionApi;
