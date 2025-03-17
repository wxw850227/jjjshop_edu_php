import request from '@/utils/request'

let AppSettingApi = {
  /*小程序*/
  appwxDetail(data, errorback) {
    return request._get('/shop/appsetting.appwx/index', data, errorback);
  },
  /*小程序*/
  editAppWx(data, errorback) {
    return request._post('/shop/appsetting.appwx/index', data, errorback);
  },
  /*公众号*/
  appmpDetail(data, errorback) {
    return request._get('/shop/appsetting.appmp/index', data, errorback);
  },
  /*公众号*/
  editAppMp(data, errorback) {
    return request._post('/shop/appsetting.appmp/index', data, errorback);
  },
  /*app*/
  appDetail(data, errorback) {
    return request._get('/shop/appsetting.app/index', data, errorback);
  },
  /*app*/
  editApp(data, errorback) {
    return request._post('/shop/appsetting.app/index', data, errorback);
  },
  /*支付方式*/
  payDetail(data, errorback) {
    return request._get('/shop/appsetting.app/pay', data, errorback);
  },
  /*支付方式*/
  editPay(data, errorback) {
    return request._post('/shop/appsetting.app/pay', data, errorback);
  },
}

export default AppSettingApi;
