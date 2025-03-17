 <!-- 订单分类 -->
<template>
    <view class="wrap">
        <view class="list">
            <view class="item" v-for="v in list" :key="v" @click="gotoOrder(v)">
                <image class="img" :src="v.img" mode="aspectFill"></image>
                <view class="txt">{{ v.txt }}</view>
            </view>
        </view>
    </view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
                list:[
                    {
                        txt: '课程订单',
                        img: "/static/image/dd01.png",
                        order_type: 10,
                        url: '/pages/order/course',
                    },
                    {
                        txt: '教务订单',
                        img: "/static/image/dd03.png",
                        order_type: 30,
                        url: '/pages/order/teacher',
                    },
                    {
                        txt: '积分订单',
                        img: "/static/image/dd03.png",
                        order_type: 'pointsMall',
                    },
                ]
            }
		},
		methods: {
            gotoOrder(v){
                if(v.order_type == 'pointsMall'){
                    this.gotoPage(`/pages/pointsMall/orderList`)
                }else if(v.url){
                    this.gotoPage(`${v.url}?order_type=${v.order_type}`)
                }
            }
		}
	}
</script>

<style lang="scss">
.wrap{
    padding: 20rpx;
    box-sizing: border-box;
    .list{
        display: grid;
        grid-template-columns: repeat(2,1fr); 
        grid-gap: 20rpx;
        .item{
            background: #fff;
            padding: 14rpx 20rpx;
            display: flex;
            align-items: center;
            gap: 20rpx;
            border-radius: 15rpx;
            .img{
                width: 96rpx;
                height: 96rpx;
            }
            .txt{
                font-size: 30rpx;
                color: #333;
            }

        }
    }
}
</style>
