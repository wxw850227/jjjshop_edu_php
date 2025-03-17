import request from '@/utils/request'

let SignApi = {
  /*获取数据*/
  getData(data, errorback) {
    return request._get('/shop/plus.sign/setting', data, errorback);
  },
  /*保存数据*/
  saveData(data, errorback) {
    return request._post('/shop/plus.sign/setting', data, errorback);
  },
  /*用户签到列表*/
  getSignList(data, errorback) {
    return request._post('/shop/plus.sign/lists', data, errorback);
  },
}
export default SignApi;
