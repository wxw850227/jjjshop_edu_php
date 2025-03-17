import request from '@/utils/request'

let PlugsApi = {
  /*插件列表*/
  plugslist(data, errorback) {
    return request._post('/admin/plus.plus/index', data, errorback);
  },
  /*获取插件*/
  getplugs(data, errorback) {
    return request._get('/admin/plus.plus/add', data, errorback);
  },
  /*添加插件*/
  addplugs(data, errorback) {
    return request._post('/admin/plus.plus/add', data, errorback);
  },
  /*编辑插件*/
  editplugs(data, errorback) {
    return request._post('/admin/plus.plus/edit', data, errorback);
  },
  /*删除插件*/
  deleteplugs(data, errorback) {
    return request._post('/admin/plus.plus/delete', data, errorback);
  },
  /*修改插件状态*/
  updatePlugsStatus(data, errorback) {
    return request._post('/admin/plus.plus/updateStatus', data, errorback);
  },
  /*是否推荐*/
  updatePlugsRecom(data, errorback) {
    return request._post('/admin/plus.plus/updateRecom', data, errorback);
  }

}

export default PlugsApi;
