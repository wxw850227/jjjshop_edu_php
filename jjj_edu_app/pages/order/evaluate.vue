<template>
	<view class="evaluate pb100" v-if="!loadding">
		<form @submit="formSubmit" @reset="formReset">
			<!-- 订单评价 -->
			<template v-if="order_id">
				<view class="evaluate-item p30" v-for="(item, index) in tableData" :key="index">
					<view class="product d-s-c">
						<view class="cover">
							<image :src="item.image.file_path" mode="aspectFit"></image>
						</view>
						<view class="info ml20">
							<view class="name f28">{{ item.product_name }}</view>
							<view class="price pt10 f22 red">
								¥
								<text class="f40">{{ item.product_price }}</text>
							</view>
						</view>
					</view>
					<view class="grade d-b-c p-30-0 mt30">
						<view :class="item.score == 10 ? 'flex-1 d-c-c active' : 'flex-1 d-c-c'" @click="gradeFunc(item, 10, index)">
							<view class="item d-c-c">
								<text class="icon iconfont icon-pingjiahaoping"></text>
								<text class="ml10">好评</text>
							</view>
						</view>
						<view :class="item.score == 20 ? 'flex-1 d-c-c active' : 'flex-1 d-c-c'" @click="gradeFunc(item, 20, index)">
							<view class="item d-c-c">
								<text class="icon iconfont icon-pingjiazhongping"></text>
								<text class="ml10">中评</text>
							</view>
						</view>
						<view :class="item.score == 30 ? 'flex-1 d-c-c active' : 'flex-1 d-c-c'" @click="gradeFunc(item, 30, index)">
							<view class="item d-c-c">
								<text class="icon iconfont icon-pingjiachaping"></text>
								<text class="ml10">差评</text>
							</view>
						</view>
					</view>
					<view class="textarea-box d-s-c f28">
						<textarea class="p10 box-s-b border flex-1" v-model="item.content" placeholder="请输入评价内容" />
					</view>
					<view class="upload-list d-s-c">
						<view class="item" v-for="(imgs, img_num) in item.image_list" :key="img_num" @click="deleteImg('order',index, img_num)">
							<view class="closeIcon" @click="deleteImg('lecturer',index, img_num)">
								<u-icon name="close-circle-fill" color="#999999" size="32rpx"></u-icon>
							</view>
							<image :src="imgs.file_path" mode="aspectFit"></image>
						</view>
						<view class="item upload-btn d-c-c d-c" @click="openUpload(index)" v-if="item.image_list.length < 9">
							<text class="icon iconfont icon-yunshangchuan_o"></text>
							<text class="gray9">上传图片</text>
						</view>
					</view>
				</view>
			</template>
			<!-- 讲师评价 -->
			<template v-else-if="lecturer_id">
				<view class="evaluate-item p30">
					<view class="product d-s-c">
						<view class="cover">
							<image :src="lecturerDetail.image && lecturerDetail.image.file_path" mode="aspectFit"></image>
						</view>
						<view class="info ml20">
							<view class="header">
								<view class="name f28">
									{{ lecturerDetail.name }}
								</view>
								<view class="labelList" v-if="lecturerDetail.label && lecturerDetail.label.length > 0">
									<!-- <view class="label" v-for="v in lecturerDetail.label" :key="v">
										{{ v }}
									</view> -->
									<view class="label">
										{{ lecturerDetail.label[0] }}
									</view>
								</view>
							</view>
							<view class="price pt10 f22 gray6"> 
								{{ lecturerDetail.describe }}
							</view>
						</view>
					</view>
					<view class="grade d-b-c p-30-0 mt30">
						<view :class="paramsLecturer.score == 10 ? 'flex-1 d-c-c active' : 'flex-1 d-c-c'" @click="changScore(10)">
							<view class="item d-c-c">
								<text class="icon iconfont icon-pingjiahaoping"></text>
								<text class="ml10">好评</text>
							</view>
						</view>
						<view :class="paramsLecturer.score == 20 ? 'flex-1 d-c-c active' : 'flex-1 d-c-c'" @click="changScore(20)">
							<view class="item d-c-c">
								<text class="icon iconfont icon-pingjiazhongping"></text>
								<text class="ml10">中评</text>
							</view>
						</view>
						<view :class="paramsLecturer.score == 30 ? 'flex-1 d-c-c active' : 'flex-1 d-c-c'" @click="changScore(30)">
							<view class="item d-c-c">
								<text class="icon iconfont icon-pingjiachaping"></text>
								<text class="ml10">差评</text>
							</view>
						</view>
					</view>
					<view class="textarea-box d-s-c f28">
						<textarea class="p10 box-s-b border flex-1" v-model="paramsLecturer.content" placeholder="请输入评价内容" />
					</view>
					<view class="upload-list d-s-c">
						<view class="item" v-for="(imgs, img_num) in paramsLecturer.image_list" :key="img_num">
							<view class="closeIcon" @click="deleteImg('lecturer',index, img_num)">
								<u-icon name="close-circle-fill" color="#999999" size="32rpx"></u-icon>
							</view>
							<image :src="imgs.file_path" mode="aspectFit"></image>
						</view>
						<view class="item upload-btn d-c-c d-c" @click="openUpload(index)" v-if="paramsLecturer.image_list.length < 9">
							<text class="icon iconfont icon-yunshangchuan_o"></text>
							<text class="gray9">上传图片</text>
						</view>
					</view>
				</view>
			</template>
			<view class="foot-btns">
				<button form-type="submit" class="btn-red">确认提交</button>
			</view>
		</form>

		<!--上传图片-->
		<Upload v-if="isUpload" @getImgs="getImgsFunc"></Upload>
	</view>
</template>

<script>
import Upload from '@/components/upload/upload.vue';
export default {
	components: {
		Upload
	},
	data() {
		return {
			/*是否加载完成*/
			loadding: true,
			order_id: '',
			lecturer_id: '',
			lecturerDetail: {},
			paramsLecturer: {
				image_list: [],
			},
			/*页面数据*/
			tableData: [],
			score: 10,
			/*是否打开上传图片*/
			isUpload: false,
			image_id: [],
			img: '/static/temp/photo.jpg',
			index: ''
		};
	},
	onLoad(options) {
		if(options.order_id){
			this.order_id = options.order_id;
			this.getCourse();
		}else if(options.lecturer_id){
			this.lecturer_id = options.lecturer_id;
			this.getLecturer();
		}
	},
	methods: {
		getCourse() {
			let self = this;
			let order_id = self.order_id;
			self.loadding = true;
			uni.showLoading({
				title: '加载中'
			});
			self._get(
				'course.Comment/order',
				{
					order_id: order_id
				},
				function(res) {
					self.tableData = res.data.order.product;
					let b = self.tableData.forEach((item, index) => {
						self.tableData[index].score = 10;
						self.tableData[index].image_list = [];
					});
					self.loadding = false;
					uni.hideLoading();
				}
			);
		},
		getLecturer(){
			let self = this;
			let lecturer_id = self.lecturer_id;
			self._get(
				'lecturer.Comment/add',
				{
					lecturer_id,
				},
				function(res) {
					const { data: { detail }} = res;
					self.lecturerDetail = detail;
					self.paramsLecturer.score = 10;
					self.loadding = false;
					uni.hideLoading();
				}
			);
		},
		/*选择评价*/
		gradeFunc(item, e, index) {
			item.score = e;
			this.tableData[index] = item;
		},
		changScore(score){
			this.paramsLecturer.score = score;
		},
		/*提交*/
		formSubmit: function(e) {
			if(this.order_id){
				this.saveOrder();
			}else if(this.lecturer_id){
				this.saveLecturer();
			}
			
		},
		saveOrder(){
			let self = this;
			let order_id = self.order_id;
			let formData = {};
			if(this.tableData && this.tableData.length > 0){
				this.tableData.forEach((v)=>{
					formData.image_list = v.image_list;
					formData.content = v.content;
					formData.score = v.score;
				})
			}
			self._post(
				'course.comment/order',
				{
					order_id: order_id,
					formData: JSON.stringify(formData)
				},
				function(res) {
					self.showSuccess('评价成功！',function(){
						self.gotoPage('/pages/order/category', 'redirect');
					});
				}
			);
		},
		saveLecturer(){
			let self = this;
			let lecturer_id = self.lecturer_id;
			self._post(
				'lecturer.Comment/add ',
				{
					lecturer_id: lecturer_id,
					formData: JSON.stringify(self.paramsLecturer)
				},
				function(res) {
					self.showSuccess('评价成功！',function(){
						self.gotoPage(`/pages/knowledge/lecturer/detail?lecturer_id=${lecturer_id}`, 'redirect');
					});
				}
			);
		},

		/*打开上传图片*/
		openUpload(index) {
			this.index = index;
			this.isUpload = true;
		},

		/*获取上传的图片*/
		getImgsFunc(e) {
			let self = this;
			if(e&&typeof(e)!='undefined'){
				if(self.order_id){
					let index = self.index;
					self.tableData[index].image_list = self.tableData[index].image_list.concat(e);
				}else if(self.lecturer_id){
					self.paramsLecturer.image_list = self.paramsLecturer.image_list.concat(e);
				}
			}
			self.isUpload = false;
		},
		
		/*点击图片删除*/
		deleteImg(type,index,imgIdx){
			if(type == 'order'){
				this.tableData[index].image_list.splice(imgIdx,1)
			}else if(type == 'lecturer'){
				this.paramsLecturer.image_list.splice(imgIdx,1)
			}
		}
		
	}
};
</script>

<style lang="scss" scoped>
.header{
	display: flex;
	align-items: center;
	gap: 20rpx;
	.labelList{
		display: flex;
		gap: 6rpx;
		.label{
			height: 33rpx;
			line-height: 33rpx;
			text-align: center;
			font-size: 22rpx;
			padding: 0 14rpx;
			background: rgba($color: #F89C31, $alpha: 0.25);
			color: #F2473F;
			border-radius: 28rpx;
		}
	}
}
.evaluate {
	/* background: #eeeeee; */
}
.evaluate-item {
	margin-bottom: 20rpx;
	background: #ffffff;
	border-bottom: 1px solid #dddddd;
}
.product .cover,
.product .cover image {
	width: 160rpx;
	height: 160rpx;
}
.evaluate .grade .item .iconfont {
	width: 60rpx;
	height: 60rpx;
	line-height: 60rpx;
	border-radius: 50%;
	font-size: 40rpx;
	color: #ffffff;
	text-align: center;
}
.evaluate .grade .item {
	height: 60rpx;
	padding-right: 20rpx;
	line-height: 60rpx;
	border-radius: 30rpx;
	transition: background-color 0.4s;
}
.closeIcon{
	position: absolute;
	right: 0;
	top: 0;
	z-index: 10;
}
.evaluate .grade .flex-1:nth-child(1) .iconfont {
	background: #f42222;
}
.evaluate .grade .flex-1:nth-child(2) .iconfont {
	background: #f2b509;
}
.evaluate .grade .flex-1:nth-child(3) .iconfont {
	background: #999999;
}
.evaluate .grade .flex-1.active:nth-child(1) .item {
	background: #f42222;
	color: #ffffff;
}
.evaluate .grade .flex-1.active:nth-child(2) .item {
	background: #f2b509;
	color: #ffffff;
}
.evaluate .grade .flex-1.active:nth-child(3) .item {
	background: #999999;
	color: #ffffff;
}
</style>
