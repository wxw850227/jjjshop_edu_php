<template>
    <view class="mask" v-if="show">
        <view class="productWrap">
            <view class="closeIcon" @click="closeShow">
                <u-icon name="close" color="#424242" size="40rpx"></u-icon>
            </view>
            <view class="title">
                <image class="qqIcon" src="/static/weIcon.png" mode="" v-if="detail.wx_image"></image>
                <image class="qqIcon" src="/static/qqIcon.png" mode="" v-else-if="detail.qq_image"></image>
                <view>一键加入班级群</view>
            </view>
            <view class="desc">务必加群哦，不然很影响听课~</view>
            <view class="qrCode">
                <image class="img" :src="detail.wx_image" mode="" v-if="detail.wx_image"></image>
                <image class="img" :src="detail.qq_image" mode="" v-else-if="detail.qq_image"></image>
            </view>
            <view class="btn" @click="saveImage">保存图片并进入微信扫一扫</view>
            <view class="tip">打开微信长按并识别二维码或扫一扫加入班级群</view>
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
        saveImage() {
            let imgSrc = "";
            if(this.detail.wx_image){
                imgSrc = this.detail.wx_image;
            }else if(this.detail.qq_image){
                imgSrc = this.detail.qq_image;
            }
            // #ifdef H5
            var oA = document.createElement("a");
				oA.download = ''; // 设置下载的文件名，默认是'下载'
				oA.href = imgSrc;
				document.body.appendChild(oA);
				oA.click();
				oA.remove(); // 下载之后把创建的元素删除
            // #endif
            // #ifndef H5
            uni.getImageInfo({
                    src: imgSrc,
                    success: function(sres) {
                        uni.saveImageToPhotosAlbum({
                            filePath: sres.path,
                            // 保存成功，直接给出提示
                            success: (res) => {
                                uni.showModal({
                                    title: '提示',
                                    content: "是否允许获取保存相册权限",
                                    showCancel: false,
                                    confirmText: "好的"
                                })
                            },
                            // 保存失败，判断是否授权，未授权则调用授权，否则弹出失败信息
                            fail(err) {
                                console.error(err,'保存失败');
                                if (err.errMsg === "saveImageToPhotosAlbum:fail auth deny" || err.errMsg ===
                                    "saveImageToPhotosAlbum:fail authorize no response" || err.errMsg ===
                                    "saveImageToPhotosAlbum:fail auth denied") { // 没有授权，重新授权，兼容iso和Android
                                    uni.showModal({
                                        title: '授权提示',
                                        content: "是否允许获取保存相册权限",
                                        success: (res) => {
                                            if (res.confirm) { // 点击确定，则调用相册授权
                                                uni.openSetting({
                                                    success(settingdata) {
                                                        if (settingdata.authSetting[
                                                                "scope.writePhotosAlbum"
                                                            ]) {
                                                            console.log(
                                                                "获取权限成功，再次点击图片保存到相册"
                                                            )
                                                            uni.showToast({
                                                                title: '授权成功，请重试哦~'
                                                            });
                                                        } else {
                                                            console.log("获取权限失败")
                                                            uni.showToast({
                                                                title: '请确定已打开保存权限',
                                                                icon: "none"
                                                            });
                                                        }
                                                    }
                                                })
                                            }
                                        }
                                    })
                                } else if (err.errMsg === "saveImageToPhotosAlbum:fail file not found" ||
                                    err.errMsg ===
                                    "saveImageToPhotosAlbum:fail file not exists" || err.errMsg ===
                                    "saveImageToPhotosAlbum:fail get file data fail"
                                ) { // 无图片，则提示
                                    uni.showToast({
                                        title: '暂无图片',
                                        icon: "none"
                                    });
                                }
                            }
                        })
                }
			})
            // #endif
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
        height: 792rpx;
        padding: 35rpx 20rpx;
        box-sizing: border-box;
        width: 100%;
        background: #fff;
        border-radius: 20rpx 20rpx 0 0;
        text-align: center;
    }
    .closeIcon{
        position: absolute;
        right: 0;
        top: 0;
        padding: 20rpx;
        font-weight: bold;
    }
    .title{
        .qqIcon{
            width: 37rpx;
            height: 43rpx;
        }
        height: 110rpx;
        line-height: 110rpx;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 11rpx;
        font-weight: bold;
        font-size: 32rpx;
    }
    .desc{
        text-align: center;
        font-size: 28rpx;
        margin-bottom: 39rpx;
        color: #999999;
    }
    .qrCode{
        width: 300rpx;
        height: 300rpx;
        padding: 20rpx;
        box-sizing: border-box;
        border: 4rpx solid #EEEEEE;
        margin: 0 auto;
        .img{
            width: 100%;
            height: 100%;
        }
    }
    .btn{
        width: 664rpx;
        height: 92rpx;
        line-height: 92rpx;
        background: linear-gradient(45deg, #F2473F, #F26E2F);
        border: 1rpx solid #EEEEEE;
        border-radius: 45rpx;
        font-size: 33rpx;
        color: #fff;
        text-align: center;
        margin: 0 auto;
        margin-top: 37rpx;
    }
    .tip{
        font-size: 28rpx;
        color: #999999;
        margin-top: 30rpx;
    }
}
</style>
