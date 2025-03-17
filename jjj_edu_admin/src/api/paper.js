import request from '@/utils/request'

let PaperApi = {
  /* ------------- 练习 ----------------------*/
  /*试题列表*/
  trainPaperList(data, errorback) {
    return request._post('/shop/paper.train.paper/index', data, errorback);
  },
   /*考试记录*/
  trainRecordQuestion(data, errorback) {
    return request._post('/shop/paper.train.record/question', data, errorback);
  },
  /*查看答题*/
  trainRecordList(data, errorback) {
    return request._post('/shop/paper.train.record/index', data, errorback);
  },
  /*提型*/
  gettrainPaper(data, errorback) {
    return request._get('/shop/paper.train.paper/add', data, errorback);
  },
  /*添加考试*/
  addtrainPaper(data, errorback) {
    return request._post('/shop/paper.train.paper/add', data, errorback);
  },
  getEdittrainPaper(data, errorback) {
    return request._get('/shop/paper.train.paper/edit', data, errorback);
  },
  edittrainPaper(data, errorback) {
    return request._post('/shop/paper.train.paper/edit', data, errorback);
  },
  deltrainPaper(data, errorback) {
    return request._post('/shop/paper.train.paper/delete', data, errorback);
  },
  statetrainPaper(data, errorback) {
    return request._post('/shop/paper.train.paper/state', data, errorback);
  },
  /*分类管理*/
  traincatList(data, errorback) {
    return request._post('/shop/paper.train.category/index', data, errorback);
  },
  /*分类添加*/
  traincatAdd(data, errorback) {
    return request._post('/shop/paper.train.category/add', data, errorback);
  },
  /*分类删除*/
  traincatDel(data, errorback) {
    return request._post('/shop/paper.train.category/delete', data, errorback);
  },
  /*分类修改*/
  traincatEdit(data, errorback) {
    return request._post('/shop/paper.train.category/edit', data, errorback);
  },
  /*分类状态*/
  traincatSet(data, errorback) {
    return request._post('/shop/paper.train.category/set', data, errorback);
  },
}

export default PaperApi;
