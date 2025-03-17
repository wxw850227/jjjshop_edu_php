import config from '@/env/config.js';
/*导航菜单白名单*/
const tabBarLinks = [
	"/pages/index/index",
	"/pages/knowledge/index",
	"/pages/eduadmin/index",
	"/pages/examination/index",
	"/pages/user/index"
];

/*分享页面白名单*/
const shareLinks = []

/*
 * 跳转页面
 */
export const gotopage = (url, type) => {
	if (!url || url.length == 0) {
		return false;
	}
	if (url.substr(0, 1) !== '/') {
		url = '/' + url;
	}
	let p = url;
	if (url.indexOf('?') != -1) {
		p = url.substr(0, url.indexOf('?'));
		// #ifdef  H5
		if (url.search("app_id") == -1) {
			url = url + '&app_id=' + config.app_id;
		}
		// #endif
	} else {
		// #ifdef  H5
		if (url.search("app_id") == -1) {
			url = url + '?app_id=' + config.app_id;
		}
		// #endif
	}
	if (process.env.NODE_ENV === 'production') {
		//判断是否分享页面
		if (shareLinks.indexOf(p) > -1) {
			//公众号
			// #ifdef  H5
			if(config.app_url.search(/h5/) < 0){
				window.location.href = config.app_url + config.h5_addr + url;
			}
			return;
			// #endif
		}
	}
	if (type == 'redirect') {
		uni.redirectTo({
			url: url
		});
		return
	}
	if (type == 'reLaunch') {
		uni.reLaunch({
			url: url
		});
		return
	}
	/* 
	用于判断是否传有参数
	若有参数
	根据下标获取前面的url
	没有参数
	则直接判断该url是否是tab
	 */
	let idx = url.indexOf('?');
	let switchTab = false;
	if (idx != -1) {
		let str = url.substr(0, idx);
		if (tabBarLinks.includes(str)) {
			switchTab = true;
		}
	}else{
		if (tabBarLinks.includes(url)) {
			switchTab = true;
		}
	}
	if (switchTab) {
		uni.switchTab({
			url,
		})
		return
	}
	// 普通页面
	uni.navigateTo({
		url: url
	});
	// }
}
