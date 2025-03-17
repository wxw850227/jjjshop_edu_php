import request from '@/utils/request'

let LiveApi = {

    /*直播列表*/
    getList(data, errorback) {
        return request._post('/shop/plus.live.wx/index', data, errorback);
    },

      /*直播列表同步*/
    syn(data, errorback) {
        return request._post('/shop/plus.live.wx/syn', data, errorback);
    },

    /*置顶设置*/
    settop(data, errorback) {
        return request._post('/shop/plus.live.wx/settop', data, errorback);
    },

    /*直播间列表*/
    getRoom(data, errorback) {
        return request._post('/shop/plus.live.room/index', data, errorback);
    },

    /*直播间修改*/
    editRoom(data, errorback) {
        return request._post('/shop/plus.live.room/edit', data, errorback);
    },

    /*删除直播间*/
    deleteRoom(data, errorback) {
        return request._post('/shop/plus.live.room/delete', data, errorback);
    },

    /*获取礼物列表*/
    getGift(data, errorback) {
        return request._post('/shop/plus.live.gift/index', data, errorback);
    },

    /*添加礼物*/
    addGift(data, errorback) {
        return request._post('/shop/plus.live.gift/add', data, errorback);
    },

    /*编辑礼物*/
    editGift(data, errorback) {
        return request._post('/shop/plus.live.gift/edit', data, errorback);
    },

    /*删除礼物*/
    deleteGift(data, errorback) {
        return request._post('/shop/plus.live.gift/delete', data, errorback);
    },

    /*获取直播设置*/
    getSetting(data, errorback) {
        return request._get('/shop/plus.live.setting/index', data, errorback);
    },

    /*保存直播设置*/
    setSetting(data, errorback) {
        return request._post('/shop/plus.live.setting/index', data, errorback);
    },

    /*获取直播间商品列表*/
    getProduct(data, errorback) {
        return request._post('/shop/plus.live.room/product', data, errorback);
    },
    /*获取直播间商品列表*/
    getOrderList(data, errorback) {
        return request._post('/shop/plus.live.order/list', data, errorback);
    },
    /*获取直播间商品列表*/
    getUserGift(data, errorback) {
        return request._post('/shop/plus.live.room/user_gift', data, errorback);
    },
    /*审核中*/
    auditRoom(data, errorback) {
      return request._post('/shop/plus.live.room/audit', data, errorback);
    },

}

export default LiveApi;
