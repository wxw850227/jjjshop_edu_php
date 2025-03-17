<template>
    <view class="recourdMask" v-if="show">
        <view class="recourdBox">
            <view class="closeIcon" @click="closeIcon">
                <u-icon name="close" color="#424242" size="40rpx"></u-icon>
            </view>
            <view class="title">课程目录</view>
            <scroll-view :scroll-top="scrollTop" :scroll-y="true" class="content" scroll-with-animation="true">
                <view class="list">
                    <view class="item" v-for="v in list" :key="v" @click="gotoLook(v)">
                        <view class="txt">{{ v.title }}</view>
                        <view class="status" v-if="v.is_see == 1">试学</view>
                    </view>
                </view>
            </scroll-view>
        </view>
    </view>
</template>

<script>
	export default {
        props: {
            list: {
                type: Array,
                default: [],
            }
        },
		components: {},
		data() {
			return {
                params: {},
                show: false,
			}
		},
		methods: {
            open(params){
                this.params = params;
                this.show = true;
            },
            gotoLook(v){
                /* 
                is_see 1 可以试看 0 不可试看
                payStatus 0 未付费 非0付费
                 */
                if(v.is_see == 0 && this.params.payStatus == 0){
                    uni.showToast({
                        icon: 'none',
                        title: '此章节需要购买后查看'
                    });
                    return
                }
                this.params.section_id = v.section_id;
                this.gotoPage(`pages/knowledge/course/section-detail?section_id=${this.params.section_id}&course_id=${this.params.course_id}`,'redirect');  
            },
            closeIcon(){
                this.show = false;
            }
        }
	}
</script>

<style lang="scss">
.recourdMask{
    position: fixed;
    bottom: 0;
    background: rgba(0,0,0,0.45);
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    .recourdBox{
        position: fixed;
        bottom: 0;
        height: 882rpx;
        background: #fff;
        width: 100%;
        border-top-left-radius: 20rpx;
        border-top-right-radius: 20rpx;
        z-index: 2;
        .list{
            padding: 20rpx;
            padding-top: 0;
            box-sizing: border-box;
            .item{
                display: flex;
                justify-content: space-between;
                align-items: center;
                background: #F5F6F8;
                padding: 26rpx 22rpx;
                box-sizing: border-box;
                border-radius: 20rpx;
                margin-bottom: 20rpx;
            }
        }
        .title{
            font-size: 32rpx;
            font-weight: bold;
            color: #333333;
            text-align: center;
            height: 124rpx;
            line-height: 124rpx;
        }
        .status{
            width: 112rpx;
            height: 48rpx;
            text-align: center;
            line-height: 48rpx;
            background: rgba(249,156,49,0.15);
            font-size: 22rpx;
            color: #F2473F;
            border-radius: 20rpx;
        }
        .txt{
            font-size: 26rpx;
            color: #666666;
        }
    }
    .content{
        height: 882rpx;
    }
    .closeIcon{
        position: absolute;
        right: 28rpx;
        top: 28rpx;
    }
}
</style>
