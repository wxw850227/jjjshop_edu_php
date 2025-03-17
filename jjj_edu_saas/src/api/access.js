import request from '@/utils/request'

let AccessApi = {
  /*菜单列表*/
  accessList(data, errorback) {
    return request._post('/admin/Access/index', data, errorback);
  },

  /*添加菜单*/
  addpAccess(data, errorback) {
    return request._post('/admin/Access/add', data, errorback);
  },

  /*编辑菜单*/
  editAccess(data, errorback) {
    return request._post('/admin/Access/edit', data, errorback);
  },

  /*删除菜单*/
  delAccess(data, errorback) {
    return request._post('/admin/Access/delete', data, errorback);
  },

  /*修改状态*/
  status(data, errorback) {
    return request._post('/admin/Access/status', data, errorback);
  },





  /*菜单列表*/
  supplieraccessList(data, errorback) {
    return request._post('/admin/SupplierAccess/index', data, errorback);
  },

  /*添加菜单*/
  supplieraddpAccess(data, errorback) {
    return request._post('/admin/SupplierAccess/add', data, errorback);
  },

  /*编辑菜单*/
  suppliereditAccess(data, errorback) {
    return request._post('/admin/SupplierAccess/edit', data, errorback);
  },

  /*删除菜单*/
  supplierdelAccess(data, errorback) {
    return request._post('/admin/SupplierAccess/delete', data, errorback);
  },

  /*修改状态*/
  supplierstatus(data, errorback) {
    return request._post('/admin/SupplierAccess/status', data, errorback);
  },
}

export default AccessApi;
