<template>
	<view class="product-detail pr">
		<view :catchtouchmove="true">
			<scroll-view scroll-y="true" class="scroll-Y scroll-box" :style="'height:' + scrollviewHigh + 'px'"
				v-if="!loadding">
				<!--图片-->
				<view class="product-pic">
					<swiper class="swiper" indicator-active-color="#ffffff" indicator-color="rgba(255,255,255,.3)"
						:indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration"
						@change="changeSwiper">
						<swiper-item v-if="detail.video_link != ''">
							<view v-if="!isVideoPlay" class="icon iconfont icon-bofang" @click="isVideoPlay = true">
							</view>
							<image v-if="!isVideoPlay" :src="detail.video_image ? detail.video_image : getimg()"
								mode="aspectFill" @click="isVideoPlay = true"></image>
							<video id="myVideo" v-if="isVideoPlay" :autoplay="isVideoPlay" :src="detail.video_link"
								class="video"></video>
						</swiper-item>
						<swiper-item v-for="(item, index) in detail.banner" :key="index">
							<image @click.stop="gotoLast()" :src="item.file_path" mode="aspectFit"></image>
						</swiper-item>
					</swiper>
				</view>
				<!--基本信息-->
				<view class="bg-white p20 pb40 o-h mb24">
					<view class="product-name text-ellipsis-2">{{ detail.title }}</view>
					<view class="label-list ww100">
						<view class="label-item" v-for="(item, index) in detail.label" :key="index">{{ item }}</view>
					</view>
					<view class="pr d-b-c">
						<view class="flex-1">
							<view class="f30 dominant fb" v-if="detail.is_pay == 0">免费</view>
							<view class="f30 dominant fb" v-if="detail.is_pay == 1">¥{{ detail.course_price }}</view>
							<!-- <view class="f22 dominant mt20">{{ detail.browse_count }}人已学习</view> -->
						</view>
						<view class="f-s-0 d-c-c">
							<!--分享-->
							<view class="sc-box">
								<button @click="favorite()">
									<image class="share_img"
										:src="is_fav?'/static/image/sc_add.png':'/static/image/sc_quxiao.png'" mode="">
									</image>
									<text class="f20" :class="is_fav ? 'red' : 'gray6'">收藏</text>
								</button>
							</view>
							<view class="share-box">
								<button @click="showShare">
									<image class="share_img" src="/static/image/share.png" mode=""></image>
									<text class="f20 gray6">分享</text>
								</button>
							</view>
						</view>
					</view>
				</view>
				<view class="mb24 bg-white p20 d-b-c">
					<view class="flex-1 d-c-c d-c border-r">
						<view class="f30 mb10 fb gray3">{{ detail.sectionNum }}</view>
						<view class="f22 gray9">总节数</view>
					</view>
					<view class="flex-1 d-c-c d-c">
						<view class="f30 mb10 fb gray3">{{ detail.browse_count }}</view>
						<view class="f22 gray9">学习人数</view>
					</view>
				</view>
				<view class="mb24 bg-white p20 " v-if="detail.lecturer"
					@click="gotoPage('/pages/knowledge/lecturer/detail?lecturer_id=' + detail.lecturer.lecturer_id)">
					<view class="f32 gray3 fb mb30">授课老师</view>
					<view class="d-b-c lecturer-box">
						<view class="lecturer ww100 d-s-c">
							<view class="lecturer-image">
								<image :src="detail.lecturer && detail.lecturer.image && detail.lecturer.image.file_path" mode="aspectFill">
								</image>
							</view>
							<view class="flex-1">
								<view class="f24 gray3 mb10">{{ detail.lecturer.name }}</view>
								<view class="label-list ww100" style="margin-bottom: 0;">
									<view class="label-item" v-for="(item, index) in detail.label" :key="index">
										{{ item }}
									</view>
								</view>
							</view>
						</view>
						<view class="icon iconfont icon-jiantou" style="color: #999999;font-size: 30rpx;"></view>
					</view>

				</view>
				<view class="bg-white">
					<view class="detail-tab">
						<view v-for="v in tabList" :key="v" :class="{'active': v.value == activeName}"
							class="detail-tab-item" @click="changTab(v)">
							{{ v.key }}
						</view>
					</view>
					<view class="tabContent">
						<view v-if="activeName == 0" class="section-list">
							<template v-if="detail.section && detail.section.length > 0">
								<view v-for="(item, index) in detail.section" class="section-item" :key="index"
									@click="gotoSection(item)">
									<image class="video-icon" src="/static/image/bofang.png" mode=""></image>
									<view class="d-b-c flex-1 border-b box-s-b" style="height: 100rpx;">
										<view style="display: flex;align-items: center;">
											<text>{{ item.title }}</text>
										</view>
										<template v-if="detail.is_pay == 1">
											<image class="password-icon" v-if="detail.payStatus == 0 && !item.is_see"
												src="/static/image/lock.png" mode=""></image>
											<image class="unlock-icon" v-else-if="detail.payStatus != 0"
												src="/static/image/bg-unlock.png" mode=""></image> 
											<text class="is-see" v-else-if="detail.payStatus == 0">试看</text>

										</template>
									</view>
								</view>
							</template>
							<empty desc="暂无目录" v-else />
						</view>
						<template v-if="activeName == 1">
							<template v-if="detail.content">
								<view class="content-box" v-html="detail.content"></view>
							</template>
							<empty desc="暂无详情" v-else />
						</template>
						<view v-if="activeName == 2" class="p-0-23 mt20">
							<comment ref="commentRef" />
						</view>
					</view>
				</view>
			</scroll-view>
			<!--底部按钮-->
			<view class="btns-wrap">
				<!-- <view class="d-c-c">
					<view class="icon-box d-c-c" @click="gotoPage('/pages/index/index')">
						<button class="d-c-c d-c bg-white">
							<image class="icon-box-image" src="/static/image/nav01.png" mode=""></image>
							<text class="f20 gray3" style="height: 20rpx;line-height:1;">首页</text>
						</button>
					</view>
					<view class="icon-box d-c-c" @click="openMaservice()">
						<button class="d-c-c d-c bg-white">
							<image class="icon-box-image" src="/static/image/nav05.png" mode=""></image>
							<text class="f20 gray3" style="height: 20rpx;line-height:1;">客服</text>
						</button>
					</view>
				</view> -->
				<view class="icon-box d-c-c" @click="gotoPage('/pages/index/index')">
					<button class="d-c-c d-c bg-white">
						<image class="icon-box-image" src="/static/image/nav01.png" mode=""></image>
						<text class="f20 gray3" style="height: 20rpx;line-height:1;">首页</text>
					</button>
				</view>

				<template v-if="detail.is_pay == 1">
					<button class="buy" @click="toPay()"
						v-if="detail.payStatus == 0">￥{{ detail.course_price }}</button>
					<button class="buy" v-else>已购买</button>
				</template>
				<template v-else>
					<button class="buy" v-if="detail.payStatus > 0" @click="gotoSection(detail.section[0])">去学习</button>
					<button class="buy" v-if="detail.payStatus == 0"
						@click="gotoOrderSection(detail.section[0])">去学习</button>
				</template>
			</view>
		</view>
		<!--app分享-->
		<share :isbottmpanel="isbottmpanel" :course_id="course_id" @close="closeBottmpanel"></share>
		<Cashier :isPopup="isPay" :course_id="course_id" :room_id="room_id" :price="detail.course_price"
			@close="closeCashier"></Cashier>
		<Buy :isPopup="isPopup" @close="closeBuy"></Buy>
	</view>
</template>

<script>
	import utils from '@/common/utils.js';
	import share from './part/share.vue';
	import Buy from './part/buy.vue';
	// import Cashier from '@/components/cashier/cashier.vue';
	import comment from './part/comment.vue';
	import empty from '@/components/empty.vue';
	export default {
		components: {
			Buy,
			share,
			comment,
			empty,
		},
		data() {
			return {
				tabList: [{
						key: '目录',
						value: 0,
					},
					{
						key: '详情',
						value: 1,
					},
					/* {
						key: '资料',
						value: 3,
					}, */
					{
						key: '评价',
						value: 2,
					},
				],
				videoContext: null,
				/*手机高度*/
				phoneHeight: 0,
				/*可滚动视图区域高度*/
				scrollviewHigh: 0,
				/*是否加载完成*/
				loadding: true,
				/*是否显示面板指示点*/
				indicatorDots: true,
				/*是否知道切换*/
				autoplay: false,
				/*自动切换时间间隔*/
				interval: 6000,
				/*滑动动画时长*/
				duration: 500,
				/*是否确定购买弹窗*/
				isPopup: false,
				isPassword: false,
				/*分享*/
				isbottmpanel: false,
				isPay: false,
				/*商品id*/
				course_id: null,
				/*商品详情*/
				detail: {
					sectionNum: 0,
					buyCount: 0,
					title: '',
					commentCount: 0,
					browse_count: 0,
					banner: []
				},
				appParams: {
					share_type: 0,
					title: '',
					summary: '',
					path: '',
					image: ''
				},
				isVideoPlay: false,
				is_fav: false,
				activeName: 0,
				comment_list: [],
				room_id: 0,
				item: null,
				ios_login: '20',
				platform: '',
				videoAutoplay: true,
				shareloading: false
			};
		},
		onReady() {
			this.videoContext = uni.createVideoContext('myVideo');
			uni.setNavigationBarColor({
				frontColor: '#000000',
				backgroundColor: '#F5F5F5'
			});
		},
		onHide() {
			this.videoPause();
		},
		onLoad(e) {
			/*商品id*/
			let scene = utils.getSceneData(e);
			if (e.room_id) {
				this.room_id = e.room_id;
			}
			this.course_id = e.course_id ? e.course_id : scene.gid;
		},
		mounted() {
			this.init();
			/*获取产品详情*/
			this.getData();
			this.getList();
		},
		methods: {
			changTab(v) {
				this.activeName = v.value;
				if (this.activeName == 2) {
					this.$nextTick(() => {
						this.$refs.commentRef.getData(this.course_id);
					})
				}
			},
			gotoLast() {
				let self = this;
				let data = uni.getStorageSync('courseLast') || {};
				let section_id = data[self.course_id];
				console.log(section_id);
				if (section_id) {
					self.gotoPage('/pages/knowledge/course/section-detail?section_id=' + section_id + '&course_id=' + self
						.course_id);
				}
			},
			dowloadPDF(e, name) {
				let self = this;
				uni.showLoading({
					title: '加载中'
				});
				uni.downloadFile({
					url: e, //调接口返给的url
					success: function(res) {
						console.log(res);
						if (res.statusCode == 200) {
							var Path = res.tempFilePath; //调 uni.downloadFile成功之后，会返给tempFilePath
							uni.saveFile({
								tempFilePath: Path,
								success: function(result) {
									var savedFilePath = result.savedFilePath;
									self.fSetFileName(savedFilePath, name, e);
								},
								fail: err => {
									uni.showToast({
										title: '保存文件失败请重试',
										icon: 'none'
									});
								}
							});
						} else {
							uni.showToast({
								title: '打开文件失败请重试',
								icon: 'none'
							});
						}
						uni.hideLoading();
					},
					fail: err => {
						uni.hideLoading();
						uni.showToast({
							title: '加载失败请重试',
							icon: 'none'
						});
					}
				});
			},
			fSetFileName(sFilePath, sFileName, e) {
				var sFileName = sFileName.split('/')[sFileName.split('/').length - 1]; //原来的文件名
				var aFileUrl = sFilePath.split('/').splice(0, sFilePath.split('/').length - 1); //saveFile API保存的本地地址
				var url = e; //请求地址
				let dtask = plus.downloader.createDownload(
					url, {
						filename: 'file://' + aFileUrl.join('/') + '/' + sFileName //利用保存路径，实现文件的重命名
					},
					(d, status) => {
						if (status == 200) {
							let fileSaveUrl = plus.io.convertLocalFileSystemURL(d.filename);
							this.fGetSavedFileList();

							uni.openDocument({
								filePath: fileSaveUrl,
								fail: e => {
									uni.showToast({
										title: `打开失败` + e
									});
								}
							});
						} else {
							//下载失败
							plus.downloader.clear(); //清除下载任务
						}
					}
				);
				dtask.setRequestHeader('Authorization', 'Bearer ' + uni.getStorageSync('SET_TOKEN'));
				dtask.start();
			},

			// 获取已下载列表
			fGetSavedFileList() {
				uni.getSavedFileList({
					success: res => {
						res.fileList.forEach(oData => {
							let aRray = oData.filePath.split('/');
							let sFileName = aRray[aRray.length - 1].split('.')[0];
							if (parseFloat(sFileName).toString() == 'NaN') {
								//这里是过滤掉文件名是时间戳的文件
								console.log(res.fileList);
							} else {
								//这里是把时间戳的文件删掉
								plus.io.resolveLocalFileSystemURL(oData.filePath, entry => {
									//获取文件对象
									entry.remove(
										entry => {
											plus.console.log('Remove succeeded');
										},
										e => {
											alert(e.message);
										}
									);
								});
							}
						});
					}
				});
			},
			MoveTo(path, name) {
				let list = path.split('/');
				let oldName = list.reverse()[0];
				list = list.reverse();
				list = list.slice(0, -1);
				let DirPath = list.join('/') + '/';
				console.log(oldName);
				console.log(DirPath);
				let newName = name;
				plus.io.resolveLocalFileSystemURL(
					DirPath + oldName,
					function(targetFileEntry) {
						targetFileEntry.moveTo({
								fullPath: DirPath //自製對象在此
							},
							newName,
							function(obj) {
								uni.showToast({
									title: '保存成功',
									icon: 'none'
								});
								// console.log(obj);
								// console.log(DirPath + newName);
								// console.log(JSON.stringify(obj));
								// uni.openDocument({
								// 	showMenu: true,
								// 	filePath: DirPath + newName,
								// 	success: res => console.log(res, '打开文件成功'),
								// 	fail: err => {
								// 		uni.showToast({
								// 			title: '打开文件失败请重试',
								// 			icon: 'none'
								// 		});
								// 	}
								// });
							},
							function(e) {
								uni.showToast({
									title: '文件保存失败或者文件已存在',
									icon: 'none'
								});
							}
						);
					},
					function(e) {
						console.log('失败');
						console.log(e);
					}
				);
			},
			getimg() {
				if (this.detail.banner && this.detail.banner.length > 0) {
					return this.detail.banner[0].file_path;
				} else {
					return '';
				}
			},
			videoPause() {
				this.videoContext.pause();
			},
			/*打开客服*/
			openMaservice() {
				this.gotoPage('pages/common/service');
				// let self = this;
				// self._get(
				// 	'index/mpService', {},
				// 	function(res) {
				// 		uni.makePhoneCall({
				// 			phoneNumber: res.data.mp_service.phone //仅为示例
				// 		});
				// 	}
				// );
			},
			submit() {
				this.isPopup = true;
			},
			closeBuy(e) {
				if (e == 'pay') {
					this.isPay = true;
				}
				if (e == 'password') {
					this.isPassword = true;
				}
				this.isPopup = false;
			},
			closePassword(e) {
				let self = this;
				if (e) {
					let password = uni.getStorageSync('coursePss') || {};
					password[self.course_id] = e;
					uni.setStorageSync('coursePss', password);
					self.gotoPage('/pages/knowledge/course/section-detail?section_id=' + self.section_id + '&course_id=' +
						self
						.course_id);
				}
				this.isPassword = false;
			},
			closeCashier(e) {
				if (e) {
					this.getData();
					this.getList();
				}
				this.isPay = false;
			},
			/*初始化*/
			init() {
				let _this = this;
				uni.getSystemInfo({
					success(res) {
						_this.phoneHeight = res.windowHeight;
						// 计算组件的高度
						let view = uni.createSelectorQuery().select('.btns-wrap');
						view.boundingClientRect(data => {
							let h = _this.phoneHeight - data.height;
							_this.scrollviewHigh = h;
						}).exec();
					}
				});
			},
			getList() {
				let self = this;
				let course_id = self.course_id;
				uni.showLoading({
					title: '加载中'
				});
				self._get(
					'course.comment/list', {
						course_id: course_id
					},
					function(res) {
						/*详情内容格式化*/
						self.comment_list = res.data.list.data;
						self.loadding = false;
						uni.hideLoading();
					}
				);
			},
			/*获取数据*/
			getData() {
				let self = this;
				let course_id = self.course_id;
				uni.showLoading({
					title: '加载中'
				});
				self._get(
					'course.course/detail', {
						course_id: course_id
					},
					function(res) {
						self.ios_login = res.data.ios_login;
						self.detail = res.data.detail;
						self.is_fav = res.data.detail.isFav;
						self.loadding = false;
						uni.hideLoading();
					}
				);
			},
			/*查看更多评价*/
			lookEvaluate(course_id) {
				this.gotoPage('/pages/product/detail/look-evaluate/look-evaluate?course_id=' + course_id);
			},
			goback() {
				let routes = getCurrentPages(); // 获取当前打开过的页面路由数组
				if (routes.length <= 1) {
					uni.switchTab({
						url: '/pages/index/index'
					})
					// this.gotoPage('/pages/index/index');
				} else {
					uni.navigateBack();
				}
			},
			changeSwiper() {
				this.isVideoPlay = false;
			},
			toLogin() {
				let self = this;
				uni.showActionSheet({
					title: '开通账号,可享受平台会员权益,游客身份仅对当前设备有效',
					itemList: ['登录账号(推荐)', '继续以游客身份操作'],
					success: function(res) {
						if (res.tapIndex == 0) {
							self.gotoPage('/pages/login/openlogin');
						} else {
							self.visitorLogin();
						}
					},
					fail: function(res) {
						console.log(res.errMsg);
					}
				});
			},
			visitorLogin() {
				let self = this;
				let id = plus.device.uuid;
				self._post(
					'user.useropen/visitLogin', {
						UUID: id
					},
					function(res) {
						console.log(res);
						uni.setStorageSync('token', res.data.token);
						uni.setStorageSync('user_id', res.data.user_id);
						self.toPay();
					},
					err => {
						console.log(err);
					}
				);
			},
			toPay() {
				let self = this;
				self.platform = uni.getSystemInfoSync().platform;
				if (self.ios_login == '10' && self.platform == 'ios') {
					if (!uni.getStorageSync('token')) {
						self.toLogin();
						return;
					}
				}
				self.gotoPage(`/pages/order/confirm?course_id=${self.course_id}&type=course`);
				// self.isPay = true;
			},
			gotoOrderSection(item) {
				let self = this;
				if (!item) {
					uni.showModal({
						title: '提示',
						content: '该课程暂无章节'
					});
					return;
				}
				self.section_id = item.section_id;
				let params = {
					course_id: self.course_id,
					pay_source: self.getPlatform()
				};
				self._post('course.order/buy', params, function(res) {
					let pages = '/pages/knowledge/course/section-detail?section_id=' + item.section_id +
						'&course_id=' + self
						.course_id;
					self.gotoPage(pages, 'reLaunch');
				});
			},
			gotoSection(item) {
				let self = this;
				if (!item) {
					uni.showModal({
						title: '提示',
						content: '该课程暂无章节'
					});
					return;
				}
				// self.item = item;
				self.section_id = item.section_id;
				if (self.detail.is_pay == 0) {
					self.gotoPage('/pages/knowledge/course/section-detail?section_id=' + item.section_id + '&course_id=' +
						self
						.course_id);
					return;
				}
				if (item.is_see) {
					self.gotoPage('/pages/knowledge/course/section-detail?section_id=' + item.section_id + '&course_id=' +
						self
						.course_id);
				}
				if (self.detail.payStatus > 0) {
					self.gotoPage('/pages/knowledge/course/section-detail?section_id=' + item.section_id + '&course_id=' +
						self
						.course_id);
					return;
				}
			},
			//分享按钮
			showShare() {
				let self = this;
				//#ifndef APP-PLUS
				self.isbottmpanel = true;
				//#endif
			},
			//关闭分享
			closeBottmpanel(data) {
				this.isbottmpanel = false;
				if (data.type == 2) {
					this.poster_img = data.poster_img;
					this.isCreatedImg = true;
				}
			},
			//收藏商品
			favorite() {
				let self = this;
				self._post(
					'course.Favorite/fav', {
						course_id: self.course_id
					},
					res => {
						if (self.is_fav) {
							uni.showToast({
								icon: 'none',
								title: '取消成功'
							});
							self.is_fav = false;
						} else {
							uni.showToast({
								icon: 'none',
								title: '收藏成功，请到“我的->我的课程”查看和管理哦'
							});
							self.is_fav = true;
						}
					}
				);
			},
			//分享按钮
			showHShare() {
				window.location.href = this.websiteUrl + '/download?id=' + this.course_id + '&type=2';
			},
		}
	};
</script>

<style lang="scss" scoped>
	.border-r {
		border-right: 1rpx solid #eee;
	}

	.product-detail {}

	.sage-bottom {
		width: 100%;
		height: calc(100rpx + env(safe-area-inset-bottom));
	}

	.product-detail .product-pic,
	.product-detail .product-pic .swiper,
	.product-detail .product-pic image {
		width: 750rpx;
		height: 445rpx;
	}

	.product-detail .product-pic .swiper .icon-bofang {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
		font-size: 48rpx;
		color: #ffffff;
		border-radius: 50%;
		border: 4rpx solid #ffffff;
		width: 120rpx;
		height: 120rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #00000080;
		padding-left: 16rpx;
		box-sizing: border-box;
		z-index: 10;
	}

	.product-detail .price-wrap {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.product-detail .price-wrap .left {
		display: flex;
		justify-content: flex-start;
		align-items: flex-end;
	}

	.product-detail .price-wrap .new-price {
		color: $dominant-color;
		font-size: 38rpx;
		font-weight: bold;
		margin-right: 14rpx;
	}

	.product-detail .price-wrap .new-price .num {
		padding: 0 4rpx;
		font-size: 42rpx;
	}

	.product-detail .price-wrap .old-price {
		font-size: 28rpx;
		color: #999999;
		text-decoration: line-through;
	}

	.product-detail .price-wrap .is-user-grade {
		padding: 0 10rpx;
		border-radius: 12rpx;
		margin-left: 10rpx;
		border: 2rpx solid $dominant-color;
		color: $dominant-color;
	}

	.product-detail .already-sale {
		font-size: 24rpx;
		color: #999999;
	}

	.lecturer-image {
		width: 82rpx;
		height: 82rpx;
		border-radius: 50%;
		margin-right: 17rpx;
		background-color: #ffffff;

		image {
			width: 82rpx;
			height: 82rpx;
			border-radius: 50%;
		}
	}

	.product-detail .product-name {
		font-size: 32rpx;
		font-weight: 400;
		color: #333333;
		margin-bottom: 15rpx;
	}

	.content-box p image {
		width: 100%;
	}

	.content-box {
		box-sizing: border-box;
		font-size: 28rpx;
		padding: 0 20rpx;
	}

	.btns-wrap {
		position: fixed;
		height: 112rpx;
		right: 0;
		bottom: 0;
		left: 0;
		display: flex;
		background: #ffffff;
		align-items: center;
		padding: 0 20rpx;
		justify-content: space-between;
		padding-bottom: env(safe-area-inset-bottom);
	}

	.btns-wrap .icon-box {
		width: 92rpx;
		height: 96rpx;
	}

	.btns-wrap .icon-box .iconfont {
		font-size: 40rpx;
		color: #999999;
	}

	.btns-wrap .icon-box .iconfont .num {
		position: absolute;
		top: 10rpx;
		left: 50%;
		height: 30rpx;
		min-width: 30rpx;
		overflow: hidden;
		line-height: 32rpx;
		border-radius: 15rpx;
		font-size: 20rpx;
		color: #ffffff;
		background: red;
	}

	.btns-wrap button,
	.btns-wrap button:after {
		height: 96rpx;
		line-height: 96rpx;
		margin: 0;
		padding: 0;
		flex: 1;
		border-radius: 0;
		border: 0;
	}

	.btns-wrap button.buy {
		font-size: 32rpx;
		flex: 1;
		// width: 467rpx;
		height: 72rpx;
		line-height: 72rpx;
		border-radius: 36rpx;
		background: linear-gradient(45deg, #F2473F, #F26E2F);
		// flex: none;
		color: #ffffff;
		font-weight: bold;
	}

	.share-box {
		width: 54rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.share-box button {
		padding: 0;
		background: 0;
		line-height: 60rpx;
		border-radius: 0;
		line-height: 1;
	}

	.share-box .iconfont {
		margin-bottom: 10rpx;
		font-size: 30rpx;
		color: #ffffff;
	}

	.sc-box {
		width: 54rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 36rpx;
	}

	.sc-box button {
		padding: 0;
		background: 0;
		line-height: 60rpx;
		border-radius: 0;
		line-height: 1;
	}

	.sc-box .iconfont.icon {
		font-size: 38rpx;
	}

	.share_img {
		width: 40rpx;
		height: 40rpx;
		margin: 0 auto;
		margin-bottom: 4rpx;
	}

	.share_img.img_gray {
		-webkit-filter: grayscale(100%);
		filter: grayscale(100%);
	}

	.share_text {
		line-height: 34rpx;
	}

	.reg180 {
		padding-right: 20rpx;
		text-align: center;
		transform: rotateY(180deg);
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}

	.header {
		z-index: 99;
		position: fixed;
		height: 30px;
		line-height: 30px;
		top: 0;
		left: 0;
		width: 100%;
		padding-top: var(--status-bar-height);
	}

	.header .reg180 .icon-jiantou {
		color: #ffffff;
		background: rgba($color: #000000, $alpha: 0.6);
		display: block;
		width: 44rpx;
		height: 44rpx;
		line-height: 44rpx;
		border-radius: 50%;
	}

	.btn_btom {
		height: 90rpx;
		line-height: 45rpx;
	}

	.btnname {
		position: absolute;
		bottom: -16px;
		left: 0;
		right: 0;
	}

	.video {
		width: 100%;
		height: 100%;
	}

	.scroll-box {
		// padding-bottom: env(safe-area-inset-bottom);
		box-sizing: border-box;
	}

	.group-hd {
		position: relative;
		padding-left: 24rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: flex-start;
		align-items: center;

		.text-box {
			padding: 2rpx 6rpx;
			background-color: #fbe9e7;
			color: #fd5342;
			margin-right: 10rpx;
			border-radius: 4rpx;
			font-size: 20rpx;
		}
	}

	.group-hd.d-b-s {
		height: auto;
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
	}

	.hide.group-hd::after {
		width: 0;
	}

	.group-hd .line-h-90 {
		line-height: 90rpx;
	}

	.group-hd .line-h-50 {
		line-height: 50rpx;
	}

	.label-list {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		overflow-x: auto;
		overflow-y: hidden;
		// margin-bottom: 23rpx;
		box-sizing: border-box;
	}

	.label-item {
		flex-shrink: 0;
		height: 33rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #F2473F;
		font-size: 22rpx;
		padding: 0 23rpx;
		margin-right: 13rpx;
		background: rgba($color: #F89C31, $alpha: 0.25);
		border-radius: 28rpx;
	}

	.superposition {
		width: 50rpx;
		height: 50rpx;
		border: 4rpx solid #ffffff;
		box-sizing: border-box;
		margin-left: -18rpx;
		border-radius: 50%;
	}

	.detail-tab {
		height: 112rpx;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding: 28rpx 30rpx;
		border-bottom: 1rpx solid #eeeeee;
		box-sizing: border-box;
	}

	.tabContent {
		min-height: 400rpx;
	}

	.detail-tab-item {
		font-size: 36rpx;
		color: #333333;
		margin-right: 27rpx;
		position: relative;
		height: 112rpx;
		line-height: 112rpx;
	}

	.detail-tab-item.active::after {
		content: '';
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		bottom: 15rpx;
		width: 49rpx;
		height: 6rpx;
		background: $dominant-color;
		border-radius: 4rpx;
	}

	.section-list {
		padding: 0 29rpx;

		.section-item {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			height: 100rpx;
			color: #999999;
			font-size: 26rpx;

			.video-icon {
				width: 42rpx;
				height: 42rpx;
				margin-right: 18rpx;
			}

			.password-icon {
				width: 33rpx;
				height: 35rpx;
				margin-left: 18rpx;
			}

			.unlock-icon {
				width: 28rpx;
				height: 35rpx;
				margin-left: 18rpx;
			}

			.is-see {
				width: 112rpx;
				height: 48rpx;
				line-height: 48rpx;
				background: rgba(148, 156, 49, 0.15);
				border-radius: 20rpx;
				font-size: 22rpx;
				color: #F2473F;
				background: rgba($color: #F89C31, $alpha: 0.25);
				margin-left: 10rpx;
				text-align: center;
			}
		}
	}

	.icon-box .icon-box-image {
		width: 40rpx;
		height: 40rpx;
		margin-bottom: 8rpx;
	}

	.evaluate-list {
		border-bottom: 1rpx solid #eeeeee;
	}

	.evaluate-image-list {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-wrap: wrap;
	}

	.user-image {
		width: 69rpx;
		height: 69rpx;
		border-radius: 50%;
		margin-right: 12rpx;

		image {
			width: 69rpx;
			height: 69rpx;
			border-radius: 50%;
		}
	}

	.evaluate-image-item {
		flex-shrink: 0;
		width: 146rpx;
		height: 146rpx;
		border-radius: 15rpx;
		margin-right: 25rpx;
		margin-bottom: 25rpx;

		image {
			width: 146rpx;
			height: 146rpx;
			border-radius: 15rpx;
		}
	}

	.course-data {
		height: 372rpx;
		padding-top: 92rpx;
	}

	.bg-course-data {
		width: 239rpx;
		height: 170rpx;
		margin: 0 auto;
		margin-bottom: 20rpx;
	}

	.border-btn {
		width: 192rpx;
		height: 62rpx;
		line-height: 62rpx;
		color: #72deed;
		border: 1rpx solid #72deed;
		border-radius: 31rpx;
		font-size: 22rpx;
		padding: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 auto;
		box-sizing: border-box;
		background-color: #ffffff;
	}

	.lecturer-box {
		background: #F5F6F8;
		border-radius: 25rpx;
		padding: 27rpx 28rpx 35rpx 18rpx;
	}
</style>