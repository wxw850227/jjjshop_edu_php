import request from '@/utils/request'

let AdApi = {
  /*广告列表*/
  adList(data, errorback) {
    return request._post('/shop/plus.ad.ad/index', data, errorback);
  },
  /*添加广告*/
  addAd(data, errorback) {
    return request._post('/shop/plus.ad.ad/add', data, errorback);
  },
  /*添加广告*/
  toaddAd(data, errorback) {
    return request._get('/shop/plus.ad.ad/add', data, errorback);
  },
  /*广告详情*/
  adDetail(data, errorback) {
    return request._get('/shop/plus.ad.ad/edit', data, errorback);
  },
  /*修改广告*/
  editAd(data, errorback) {
    return request._post('/shop/plus.ad.ad/edit', data, errorback);
  },
  /*删除广告*/
  deleteAd(data, errorback) {
    return request._post('/shop/plus.ad.ad/delete', data, errorback);
  },
  /*获取广告分类*/
  adCategory(data, errorback) {
    return request._post('/shop/plus.ad.category/index', data, errorback);
  },
  /*添加分类*/
  addAdCategory(data, errorback) {
    return request._post('/shop/plus.ad.category/add', data, errorback);
  },
  /*编辑分类*/
  editAdCategory(data, errorback) {
    return request._post('/shop/plus.ad.category/edit', data, errorback);
  },
  /*删除分类*/
  deleteAdCategory(data, errorback) {
    return request._post('/shop/plus.ad.category/delete', data, errorback);
  },
}

export default AdApi;
