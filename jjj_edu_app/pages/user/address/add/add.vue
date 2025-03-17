<template>
	<view class="address-form"  :data-theme='theme()' :class="theme() || ''">
		<form @submit="formSubmit" @reset="formReset">
			<view class="bg-white p-0-30 f30 br12">
				<view class="d-s-c border-b-e">
					<text class="key-name">姓名</text>
					<input class="ml20 flex-1 f32 p-30-0" name="name" type="text" placeholder-class="grary9" v-model="address.name"
					 placeholder="请输入收货人姓名" />
				</view>
				<view class="d-s-c border-b-e">
					<text class="key-name">手机号</text>
					<input class="ml20 flex-1 f32 p-30-0" name="phone" type="text" placeholder-class="grary9" v-model="address.phone"
					 placeholder="请输入手机号码" />
				</view>
				<view class="d-s-c border-b-e">
					<text class="key-name">所在地区</text>
					<view class="input-box flex-1" @click="showMulLinkageThreePicker" >
						<input class="ml20 f32 flex-1 p-30-0" type="text"  placeholder-class="grary9" placeholder="选择省,市,区" v-model="selectCity" disabled
						 style="pointer-events: none;" />
					</view>
				</view>
				<view class="d-s-c border-b-e">
					<text class="key-name">详细地址</text>
					<textarea class="ml20 flex-1 p-30-0 lh150" name="detail" :auto-height="true"
					 placeholder-class="grary9" v-model="address.detail" placeholder="请输入小区、街道或公司名称"></textarea>
				</view>
				<view  class="d-s-c">		
					 <text class="key-name">设为默认地址</text>
					 <input disabled class="ml20 flex-1 f32 p-30-0" />
					<radio style="transform:scale(0.6)" />		
				</view>
			</view>
			<view class="btnFixed">
				<view class="p30"><button form-type="submit" class="addBtn">保存</button></view>
			</view>
		</form>
		<mpvue-city-picker v-if="is_load" ref="mpvueCityPicker" :province="province" :city="city" :area="area" :pickerValueDefault="cityPickerValueDefault" @onConfirm="onConfirm"></mpvue-city-picker>
	</view>
</template>

<script>
	import mpvueCityPicker from '@/components/mpvue-citypicker/mpvueCityPicker.vue';
	export default {
		components: {
			mpvueCityPicker
		},
		data() {
			return {
				cityPickerValueDefault: [0, 0, 0],
				selectCity: '',
				province_id: 0,
				city_id: 0,
				region_id: 0,
				address: {},
				delta: 1,
				province: [],
				city: [],
				area: [],
				is_load: false
			};
		},
		onLoad: function(options) {
			this.delta = options.delta;
			this.getData();
		},
		methods: {
			// 获取省市区
			getData(){
				let self = this;
				self._post('settings/getRegion', {}, function(res) {
					self.province = res.data.regionData[0];
					self.city = res.data.regionData[1];
					self.area = res.data.regionData[2];
					self.is_load = true;
				});
			},
			/*提交*/
			formSubmit: function(e) {
				let self = this;
				var formdata = e.detail.value;
				formdata.province_id = self.province_id;
				formdata.city_id = self.city_id;
				formdata.region_id = self.region_id;
				if (formdata.name == '') {
					uni.showToast({
						title: '请输入收货人姓名',
						duration: 1000,
						icon: 'none'
					});
					return false;
				}

				if (formdata.phone == '') {
					uni.showToast({
						title: '请输入手机号码',
						duration: 1000,
						icon: 'none'
					});
					return false;
				}

				/*let reg = /^((0\d{2,3}-\d{7,8})|(1[3456789]\d{9}))$/;
				if (!reg.test(formdata.phone)) {
					uni.showToast({
						title: '手机号码格式不正确',
						duration: 1000,
						icon: 'none'
					});
					return false;
				}*/

				if (formdata.province_id == 0 || formdata.city_id == 0 || formdata.region_id) {
					if (formdata.detail == '') {
						uni.showToast({
							title: '请选择完整省市区',
							duration: 1000,
							icon: 'none'
						});
						return false;
					}
				}

				if (formdata.detail == '') {
					uni.showToast({
						title: '请输入街道小区楼牌号等',
						duration: 1000,
						icon: 'none'
					});
					return false;
				}

				self._post('user.address/add', formdata, function(res) {
					self.showSuccess(res.msg, function() {
						// #ifndef H5
						uni.navigateBack({
							delta: parseInt(self.delta)
						});
						// #endif
						// #ifdef H5
						history.go(-self.delta);
						// #endif
					});
				});
			},

			formReset: function(e) {
				console.log('清空数据');
			},

			/*三级联动选择*/
			showMulLinkageThreePicker() {
				console.log("kkkk")
				this.$refs.mpvueCityPicker.show();
			},

			/*确定选择的省市区*/
			onConfirm(e) {
				this.selectCity = e.label;
				this.province_id = e.cityCode[0];
				this.city_id = e.cityCode[1];
				this.region_id = e.cityCode[2];
			}
		}
	};
</script>

<style scoped>
	.address-form {
		background: #FFFFFF;
		border-radius: 25rpx;
		margin: 25rpx 21rpx 617rpx 20rpx ;
	}

	.address-form .key-name {
		width: 170rpx;
		font-size: 28rpx;
		color: #333333;
	}

	.address-form .btn-red {
		height: 88rpx;
		line-height: 88rpx;
		border-radius: 44rpx;
	}

	.addBtn {
		height: 80rpx;
		line-height: 80rpx;
		border-radius: 40rpx;
		box-sizing: border-box;
		background: linear-gradient(45deg, #F2473F, #F26E2F);
		font-size: 32rpx;
		color: #FFFFFF;
	}
	.grary9{
		font-size: 28rpx;
		color: #999;
	}
	.btnFixed{
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		box-sizing: border-box;
	}
</style>
