<template>
    <view class="wrap">
        <view class="list">
            <view class="item" v-for="v in listData" :key="v">
                <view class="l">
                    <view class="title">{{ v.describe }}</view>
                    <view class="time">{{ v.create_time }}</view>
                </view>
                <view class="r">
                    {{ getScore(v.value) }}积分
                </view>
            </view>
        </view>
    </view>
</template>

<script>
	export default {
		data() {
			return {
				list_rows: 10,
				page: 1,
				loading: false,
				listData: [],
				last_page: 1,
				no_more: false,
                points: 0,
			};
		},
		onShow() {
            this.listData = [];
            this.page = 1;
			this.getData();
		},
		onLoad(options) {

		},
        onReachBottom() {
			let self = this;
			if (self.page < self.last_page) {
				self.page++;
				self.getData();
			}
			self.no_more = true;
		},
		methods: {
            getScore(val){
                let idx = val.toString().indexOf('-');
                if(idx == -1){
                    return `+${val}` 
                }else{
                    return val
                }
            },
			/*获取数据*/
			getData() {
				let self = this;
				uni.showLoading({
					title: '加载中'
				});
                self._get('points.Log/index', {
                    page: self.page || 1,
					list_rows: self.list_rows,
                }, res => {
					self.listData = self.listData.concat(res.data.list.data);
					self.last_page = res.data.list.last_page;
                    self.points = res.data.points;
					if (res.data.list.last_page <= 1) {
						self.no_more = true;
					}
					self.loading = false;
					uni.hideLoading();
				})
			},
		}
	};
</script>

<style lang="scss" scoped>
.list{
    padding: 20rpx;
    box-sizing: border-box;
    .item{
        height: 157rpx;
        background: #FFFFFF;
        box-shadow: 0px 3rpx 7rpx 0px rgba(0,0,0,0.08);
        border-radius: 20rpx;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20rpx;
        padding: 44rpx 23rpx;
        box-sizing: border-box;
        .title{
            font-size: 28rpx;
            font-weight: bold;
            color: #333333;
        }
        .time{
            margin-top: 31rpx;
            font-size: 24rpx;
            color: #999999;
        }
        .r{
            font-size: 28rpx;
            color: #FF5649;
        }

    }
}
</style>
