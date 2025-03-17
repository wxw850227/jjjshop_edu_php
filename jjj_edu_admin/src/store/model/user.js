import { defineStore } from 'pinia';
import { setCookie, getCookie, delCookie } from '@/utils/base.js';
import { setStorage, getStorage } from '@/utils/storageData';
import AuthApi from '@/api/auth.js';
import configObj from "@/config"; 
let { strongToken, renderMenu, menu } = configObj;
import { handRouterTable, handMenuData } from '@/utils/router';
export const useUserStore = defineStore('main', {
	state: () => {
		return {
			token: getStorage(strongToken),
			userInfo: getStorage('userInfo'),
			list: {},
			menus: getStorage(menu),
			renderMenus: getStorage(renderMenu),
		};
	},
	getters: {},
	actions: {
		bus_on(name, fn) {
			let self = this;
			self.list[name] = self.list[name] || [];
			self.list[name].push(fn);
		},
		// 发布
		bus_emit(name, data) {
			let self = this;
			if (self.list[name]) {
				self.list[name].forEach((fn) => {
					fn(data);
				});
			}
		},
		// 取消订阅
		bus_off(name) {
			let self = this;
			if (self.list[name]) {
				delete self.list[name];
			}
		},
		/**
		 * @description 登录
		 * @param {*} token
		 */
		async afterLogin(info) {
			this.userInfo = this.userInfo || {};
			const { data: { app_id, shop_name, token, user_name, version } } = info;
			this.token = token;
			this.userInfo.AppID = app_id;
			const { data: { menus } } = await AuthApi.getRoleList({});
			let renderMenusList = handMenuData(JSON.parse(JSON.stringify(menus)));
			let menusList = handRouterTable(JSON.parse(JSON.stringify(menus)));
			setStorage(JSON.stringify(menusList), menu);
			setStorage(JSON.stringify(renderMenusList), renderMenu); 
			this.userInfo.userName = user_name;
			this.userInfo.shop_name = shop_name;
			this.userInfo.version = version;
			this.renderMenus = renderMenusList;
			this.menus = menusList;
			setStorage(JSON.stringify(token), strongToken); 
			setStorage(JSON.stringify(this.userInfo),'userInfo'); 
		},
		/**
		 * @description 退出登录
		 * @param {*} token
		 */
		afterLogout() {
			sessionStorage.clear();
			// deleteSessionStorage(null);
			// delCookie(strongToken,null);
			this.userInfo = {};
			this.token = null;
			this.menus = null;
		},
		/**
		 * @description 修改商城名称
		 * @param {*} token
		 */
		changShop(shop_name){
			this.userInfo.shop_name = shop_name;
			setStorage(JSON.stringify(this.userInfo), 'userInfo');
		},
	}
});
export default useUserStore;