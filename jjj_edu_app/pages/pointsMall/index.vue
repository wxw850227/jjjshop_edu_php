<template>
    <view class="wrap">
        <view class="banner">
            <image src="/static/address/bg.png" class="bgImg" />
            <view class="bannerWrap" >
                <view class="l">
                    <view class="num">{{ points }}</view>
                    <view class="txt">可用积分</view>
                    <view class="btnList">
                        <view class="btn" style="background-color: #FFC83A;" @click="gotoPage(`/pages/pointsMall/orderList`)">兑换明细</view>
                        <view class="btn" @click="gotoPage(`/pages/pointsMall/disburse`)">积分明细</view>
                    </view>
                </view>
                <view class="labelBox" @click="clickRule">
                    <view class="labelWrap">
                        <view class="txt">规则</view>
                        <image class="label" src="/static/address/label.png"></image>
                    </view>
                </view>
            </view>
        </view>
        <view class="bigTitle">
            <view class="l">
                <view class="circle" v-for="v in 15" :key="v"></view>
            </view> 
            <view class="txt">
                <image class="img" src="/static/address/gift.png"></image>
                好物兑换
            </view>
            <view class="r">
                <view class="circle" v-for="v in 15" :key="v"></view>
            </view>
        </view>
        <view class="list">
            <view class="item" v-for="v in listData" :key="v">
                <view class="masterPic">
                    <image mode="scaleToFill" class="img" :src="v.file_path"></image>
                </view>
                <view class="info">
                    <view class="title">{{ v.product_name }}</view>
                    <view class="txt">
                        <text v-if="v.limit_num > 0">限购数{{ v.limit_num }}件</text>
                        <text v-else-if="v.limit_num == 0">不限购</text>
                        | 已兑完{{ v.sales_actual }}份
                    </view>
                    <view class="b">
                        <view class="score">
                            <span class="symbol">￥{{ v.product_price }}+</span>{{ v.product_points }} 积分
                        </view>
                        <view class="btn" @click="openDetail(v)">立即兑换</view>
                    </view>
                </view>
            </view>
        </view>
        <selectProduct ref="selectProductRef" />
        <rule ref="ruleRef" />
    </view>
</template>
<script>
    import selectProduct from './mask/selectProduct.vue';
    import rule from './mask/rule.vue';
	export default {
        components: {
			selectProduct,
			rule,
		},
		data() {
			return {
				list_rows: 10,
				page: 1,
				loading: false,
				listData: [],
				last_page: 1,
				no_more: false,
                points: 0,
                setting: {},
			};
		},
		onShow() {
            this.listData = [];
            this.page = 1;
			this.getData();
		},
		onLoad(options) {

		},
        onHide(){
            this.$refs.selectProductRef.closeShow();
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
            openDetail(v){
                this.$refs.selectProductRef.openShow(v);
            },
            clickRule(){
                this.$refs.ruleRef.openShow(this.setting);
            },
			/*获取数据*/
			getData() {
				let self = this;
				uni.showLoading({
					title: '加载中'
				});
                self._get('plus.points.product/index', {
                    page: self.page || 1,
					list_rows: self.list_rows,
                }, res => {
					self.listData = self.listData.concat(res.data.list.data);
					self.last_page = res.data.list.last_page;
                    self.points = res.data.points;
                    self.setting = res.data.setting;
                    // self.setting.describe = self.setting.describe.replace("\n",'<br/>')
                    self.setting.describe = self.setting.describe.replace(/\n/g,'<br/>')
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
.wrap{
    padding: 26rpx 20rpx;
}
.banner{
    height: 266rpx;
    position: relative;
    overflow: hidden;
    .bgImg{
        width: 100%;
        height: 100%;
    }
    .bannerWrap{
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        width: 100%;
        height: 100%;
    }
    .btnList{
        display: flex;
        gap: 20rpx;
    }
    .labelBox{
        position: absolute;
        right: 0;
        top: 10rpx;
        .labelWrap{
            position: relative;
            width: 105rpx;
            height: 42rpx;
        }
        .label{
            width: 100%;
            height: 100%;
            position: absolute;
            right: -2rpx;
            top: 0;
            z-index: 1;
        }
        .txt{
            position: absolute;
            text-align: center;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            z-index: 2;
            font-size: 22rpx;
            width: 100%;
            margin-left: 8rpx;
        }
    }
    .l{
        padding: 20rpx 29rpx;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        box-sizing: border-box;
    }
    .num{
        font-size: 72rpx;
        font-weight: bold;
        color: #FFFFFF;
    }
    .txt{
        font-size: 26rpx;
        color: #FFFFFF;
    }
    .btn{
        width: 148rpx;
        height: 48rpx;
        line-height: 48rpx;
        background: #FFFFFF;
        border-radius: 24rpx;
        font-size: 22rpx;
        color: #FF5649;
        text-align: center;
    }
}
.bigTitle{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 113rpx;
    .img{
        width: 50rpx;
        height: 48rpx;
        display: inline-block;
    }
    .txt{
        padding: 0 17rpx;
        font-size: 30rpx;
        color: #000000;
        font-weight: bold;
        margin-bottom: 8rpx;
    }
    .l,.r{
        display: flex;
        flex-wrap: wrap;
        gap: 3px;
        width: 52rpx;
    }
    .circle{
        width: 5rpx;
        height: 5rpx;
        background: #B8B8B8;
        opacity: 0.6;
        border-radius: 50%;
    }
}
.list{
    .item{
        padding: 25rpx 20rpx;
        height: 211rpx;
        background: #FFFFFF;
        box-shadow: 0px 3px 7px 0px rgba(0,0,0,0.08);
        border-radius: 12rpx;
        display: flex;
        gap: 22rpx;
        margin-bottom: 20rpx;
    }
    .masterPic{
        width: 212rpx;
        height: 100%;
        background: #eee;
        border-radius: 12rpx;
        overflow: hidden;
        .img{
            width: 100%;
            height: 100%;
        }
    }
    .info{
        flex: 1;
        position: relative;
        .title{
            font-size: 28rpx;
            font-weight: bold;
            color: #333333;
            max-width: 420rpx;
            overflow:hidden;
            text-overflow:ellipsis;
            display:-webkit-box;
            -webkit-box-orient:vertical;
            -webkit-line-clamp:2;
        }
        .txt{
            font-size: 20rpx;
            color: #999999;
            margin-top: 18rpx;
        }
        .b{
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: absolute;
            bottom: 0;
            width: 100%;
            .score{
                font-size: 28rpx;
                color: #FF5649;
            }
            .btn{
                width: 148rpx;
                height: 48rpx;
                line-height: 48rpx;
                background: linear-gradient(45deg, #F2473F, #F26E2F);
                border-radius: 24rpx;
                text-align: center;
                color: #FFFFFF;
            }
        }
    }
}
</style>
