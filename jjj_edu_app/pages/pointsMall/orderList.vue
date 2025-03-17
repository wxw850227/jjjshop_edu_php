<template>
    <view class="wrap">
        <view class="tabList">
            <view class="item" v-for="v in tabList" :key="v" @click="changTab(v)">
                <text class="txt" :class="{'active' : v.value == dataType }">{{ v.key }}</text>
            </view>
        </view>
        <view class="list">
            <view class="item" v-for="v in listData" :key="v"  @click="gotoPage(`/pages/pointsMall/orderDetail?order_id=${v.order_id}`)">
                <view class="topBox">
                    <view class="masterPic">
                        <image mode="scaleToFill" class="img" :src="v.file_path"></image>
                    </view>
                    <view class="info">
                        <view class="title">{{ v.product_name }}</view>
                        <view class="txtList">
                            <view>兑换时间: {{ v.create_time}}</view>
                            <view>兑换金额: ￥{{ v.pay_price }}+{{ v.points_num }}积分</view>
                        </view>
                    </view>
                </view>
                <view class="boxBottom">
                    <view class="status" v-if="true">{{ v.state_text }}</view>
                    <view class="status" v-else>进行中</view>
                    <view class="btn" v-if="v.delivery_status.value == 20 && v.order_status.value == 10" @click.stop="saveReceipt(v)">确认收货</view>
                    <view class="btn" v-else @click.stop="gotoPage(`/pages/pointsMall/index`,'reLaunch')">更多商品</view>
                </view>
            </view>
        </view>
    </view>
</template>
<script>
export default {
    components: {},
    data() {
        return {
            list_rows: 10,
            page: 1,
            loading: false,
            listData: [],
            last_page: 1,
            no_more: false,
            points: 0,
            tabList: [
                {
                    key: '全部订单',
                    value: 0,
                },
                {
                    key: '已完成',
                    value: 2,
                },
                {
                    key: '进行中',
                    value: 1,
                },
            ],
            dataType: 0,
        };
    },
    onShow() {
        this.fetchData();
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
        saveReceipt(v){
            let self = this;
            uni.showLoading({
                title: '加载中'
            });
            self._get('plus.points.order/receipt', {
                order_id: v.order_id,
            }, res => {
                const { msg } = res;
                uni.showToast(msg)
                self.loading = false;
                uni.hideLoading();
                this.fetchData();
            })
        },
        fetchData(){
            this.listData = [];
            this.page = 1;
            this.getData();
        },
        /*获取数据*/
        getData() {
            let self = this;
            uni.showLoading({
                title: '加载中'
            });
            self._get('plus.points.order/lists', {
                page: self.page || 1,
                list_rows: self.list_rows,
                dataType: self.dataType,
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
        changTab(v){
            if(v.value == this.dataType){
                return
            }
            this.dataType = v.value;
            this.fetchData();
        }
    }
};
</script>

<style lang="scss" scoped>
.wrap {
    .tabList {
        display: flex;
        background: #fff;
        height: 94rpx;
        line-height: 94rpx;
        position: sticky;
        top: 0;
        z-index: 2;

        .item {
            font-size: 28rpx;
            color: #333333;
            flex: 1;
            text-align: center;

            .txt {
                position: relative;

                &.active::before {
                    opacity: 1;
                }

                &::before {
                    content: "";
                    width: 68%;
                    height: 6rpx;
                    background: #F2473F;
                    border-radius: 6rpx;
                    position: absolute;
                    bottom: -10rpx;
                    left: 50%;
                    transform: translate(-50%);
                    opacity: 0;
                }
            }
        }
    }

    .list {
        padding: 20rpx;
        box-sizing: border-box;

        .item {
            padding: 25rpx 20rpx;
            height: 264rpx;
            background: #FFFFFF;
            box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.08);
            border-radius: 12rpx;
            margin-bottom: 20rpx;
            box-sizing: border-box;
        }
        .topBox{
            display: flex;
            gap: 28rpx;
            height: 158rpx;
        }

        .masterPic {
            width: 212rpx;
            background: #eee;
            border-radius: 12rpx;
            overflow: hidden;

            .img {
                width: 100%;
                height: 100%;
            }
        }

        .info {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .title {
                font-size: 28rpx;
                font-weight: bold;
                color: #333333;
                max-width: 420rpx;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
            }

            .txtList {
                font-size: 24rpx;
                color: #999999;
                line-height: 37rpx;
            }
        }
        .boxBottom{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 8px;
            .status{
                font-size: 24rpx;
                color: #F2473F;
            }
            .btn{
                width: 132rpx;
                height: 44rpx;
                line-height: 44rpx;
                background: #FEF0E0;
                border-radius: 22rpx;
                text-align: center;
                font-size: 24rpx;
                color: #F2473F;
                transform: scale(0.9);
            }
        }
    }
}
</style>
