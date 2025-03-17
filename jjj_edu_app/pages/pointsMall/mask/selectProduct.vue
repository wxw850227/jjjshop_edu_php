<template>
    <view class="mask" v-if="show">
        <view class="productWrap">
            <view class="closeIcon" @click="closeShow">
                <u-icon name="close" color="#424242" size="20rpx"></u-icon>
            </view>
            <view class="product">
                <view class="imgBox">
                    <image mode="scaleToFill" :src="detail.file_path" class="img" />
                </view>
                <view class="detail">
                    <view>所需积分</view>
                    <view class="price">
                        <span class="symbol">￥</span><text>{{ detail.product_price }}+</text>{{ detail.product_points }}<span>积分</span>
                    </view>
                    <view>库存：{{ detail.product_stock }}</view>
                </view>
            </view>
            <view class="numBox">
                <view class="txt">数量</view>
                <view class="numWrap">
                    <view class="minus" @click="changNum(1)">-</view>
                    <view class="numTxt">{{ buyNum }}</view>
                    <view class="add" @click="changNum(2)">+</view>
                </view>
            </view>
            <view class="btn" @click="gotoPage(`/pages/pointsMall/exchange?product_id=${detail.product_id}&total_num=${buyNum}`)">确认</view>
        </view>
    </view>
</template>

<script>
export default {
    props: {},
    data() {
        return {
            show: false,
            detail:{},
            buyNum: 1,
        };
    },
    methods: {
        openShow(row){
            this.detail = JSON.parse(JSON.stringify(row));
            this.show = true;
        },
        closeShow(){
            this.show = false;
        },
        changNum(type){
            if(type == 1){
                if(this.buyNum < 2){
                    return
                }
                this.buyNum = this.buyNum - 1;
            }else if(type == 2){
                this.buyNum = this.buyNum + 1;
            }
        },
    }
};
</script>

<style lang="scss" scoped>
.mask {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.45);
    z-index: 10;

    .productWrap {
        position: absolute;
        bottom: 0;
        height: 460rpx;
        padding: 35rpx 20rpx;
        box-sizing: border-box;
        width: 100%;
        background: #fff;
        border-radius: 20rpx 20rpx 0 0;
    }
    .closeIcon{
        position: absolute;
        right: 0;
        top: 0;
        padding: 20rpx;
        font-weight: bold;
    }
    .product{
        height: 156rpx;
        display: flex;
        gap: 20rpx;
        .imgBox{
            width: 212rpx;
            height: 100%;
            .img{
                width: 100%;
                height: 100%;
            }
        }
        .detail{
            font-size: 24rpx;
            color: #666666;
            display: flex;
            flex-direction: column;
            height: 100%;
            justify-content: space-between;
            .price{
                font-size: 38rpx;
                color: #F2473F;
                span{
                    font-size: 24rpx;
                }
            }
        }
    }
    .numBox{
        display: flex;
        justify-content: space-between;
        padding: 60rpx 0;
        .txt{
            color: #333333;
            font-size: 28rpx;
        }
    }
    .numWrap{
        display: flex;
        align-items: center;
        gap: 26rpx;
        .minus,.add{
            width: 36rpx;
            height: 36rpx;
            background: #DDDDDD;
            opacity: 0.45;
            border-radius: 5rpx;
            font-size: 30rpx;
            text-align: center; 
        }
        .numTxt{
            font-size: 30rpx;
        }
    }
    .btn{
        height: 87rpx;
        line-height: 87rpx;
        border-radius: 40rpx;
        text-align: center;
        background: linear-gradient(45deg, #F2473F, #F26E2F);
        font-size: 30rpx;
        color: #fff;
    }
}
</style>
