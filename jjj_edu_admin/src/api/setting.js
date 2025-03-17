import request from '@/utils/request'

let SettingApi = {

  /*商城设置模板变量*/
  storeDetail(data, errorback) {
    return request._get('/shop/setting.store/index', data, errorback);
  },
  /*保存商城设置*/
  editStore(data, errorback) {
    return request._post('/shop/setting.store/index', data, errorback);
  },
  /*交易设置模板变量*/
  tradeDetail(data, errorback) {
    return request._get('/shop/setting.trade/index', data, errorback);
  },
  /*保存交易设置*/
  editTrade(data, errorback) {
    return request._post('/shop/setting.trade/index', data, errorback);
  },
  /*上传设置模板变量*/
  storageDetail(data, errorback) {
    return request._get('/shop/setting.storage/index', data, errorback);
  },
  /*保存上传设置*/
  editStorage(data, errorback) {
    return request._post('/shop/setting.storage/index', data, errorback);
  },
  /*打印设置模板变量*/
  clearDetail(data, errorback) {
    return request._get('/shop/setting.clear/index', data, errorback);
  },
  /*保存缓存*/
  editCache(data, errorback) {
    return request._post('/shop/setting.clear/index', data, errorback);
  },
  /*物流公司列表*/
  expressList(data, errorback) {
    return request._post('/shop/setting.express/index', data, errorback);
  },
  /*添加物流公司*/
  addExpress(data, errorback) {
    return request._post('/shop/setting.express/add', data, errorback);
  },
  /*物流公司详情*/
  expressDetail(data, errorback) {
    return request._get('/shop/setting.express/edit', data, errorback);
  },
  /*修改物流公司*/
  editExpress(data, errorback) {
    return request._post('/shop/setting.express/edit', data, errorback);
  },
  /*删除物流公司*/
  deleteExpress(data, errorback) {
    return request._post('/shop/setting.express/delete', data, errorback);
  },
  /*物流公司编码表*/
  getCompany(data, errorback) {
    return request._post('/shop/setting.express/companyList', data, errorback);
  },
  /*获取手机号设置*/
  getPhoneDetail(data, errorback) {
    return request._get('/shop/setting.message/getphone', data, errorback);
  },
  /*保存获取手机号设置*/
  editGetPhone(data, errorback) {
    return request._post('/shop/setting.message/getphone', data, errorback);
  },
}

export default SettingApi;
