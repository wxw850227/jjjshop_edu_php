<template>
    <view class="mask" v-if="show" @click="closeShow">
        <view class="ruleWrap">
            <view class="ruleBox">
                <image class="bg" src="/static/address/pointRuleBg.png" mode=""></image>
                <view class="labelBox">
                    <image class="label" src="/static/address/pointRuleLable.png" mode=""></image>
                    <view class="txt">积分规则</view>
                </view>
                <scroll-view scroll-y="true" class="detail" >
                    <view v-html="detail.describe"></view>
				</scroll-view>
                
            </view>
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
            this.detail = row;
            this.show = true;
        },
        closeShow(){
            this.show = false;
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

    .ruleWrap {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        
        .ruleBox{
            position: relative;
            box-sizing: border-box;
            background: #fff;
            border-radius: 20rpx;
            padding: 35rpx 20rpx;
            width: 577rpx;
            height: 518rpx;
        }
        .detail{
            position: absolute;
            top: 0;
            left: 0;
            padding:119rpx 42rpx;
            font-size: 26rpx;
            color: #666;
            line-height: 40rpx;
            height: 326rpx;
            width: 500rpx;
        }
        .labelBox{
            width: 377rpx;
            height: 77rpx;
            position: absolute;
            top: -35rpx;
            left: 50%;
            transform: translateX(-50%);
            .txt{
                color: #fff;
                font-size: 28rpx;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                font-weight: bold;
                letter-spacing: 2rpx;
            }
        }
        .label{
            width: 100%;
            height: 100%;
        }
        .bg{
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
        }
    }
}
</style>
