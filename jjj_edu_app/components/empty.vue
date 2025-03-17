<template>
    <view class="emptyWrap" :style="{ height: height }"> 
        <view class="emptyBox">
            <image class="img" :src="emptyObj[type].img" mode=""></image>
            <view class="desc">{{ desc || emptyObj[type].txt }}</view> 
            <slot />
            <!-- <view class="btn">查看课程</view> -->
        </view>
    </view>
</template>
<script>
	export default {
        components: {},
        props: {
            type: {
                type: String,
                default: 'common'
            },
            height:{
                type: String,
                default: '800rpx'
            },
            desc: String,
        },
		data() {
			return {
                emptyObj:{
                    address:{
                       img: '/static/empty/address.png',
                       txt: '暂无地址',
                       btnTxt: '添加地址',
                    },
                    comment:{
                       img: '/static/empty/comment.png',
                       txt: '暂无评论',
                       btnTxt: '',
                    },
                    edu:{
                       img: '/static/empty/edu.png',
                       txt: '暂无教务课程',
                    },
                    fav:{
                       img: '/static/empty/fav.png',
                       txt: '暂无收藏',
                    },
                    common:{
                       img: '/static/empty/comment.png',
                       txt: '暂无记录',
                    },
                }
			};
		},
		methods: {}
	};
</script>

<style lang="scss" scoped>
.emptyWrap{
    position: relative;
    height: 100vh;
    .emptyBox{
        text-align: center;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }
    .img{
        width: 654rpx;
        height: 388rpx;
    }
    .desc{
        font-size: 32rpx;
        color: #999999;
    }
    .btn{
        width: 556rpx;
        height: 90rpx;
        line-height: 90rpx;
        background: linear-gradient(45deg, #F2473F, #F26E2F);
        border-radius: 45rpx;
        text-align: center;
        font-size: 32rpx;
        color: #fff;
        margin: 0 auto;
    }
}
</style>
