<template>
	<view class="wrap">
		<view class="serviceUser">
            <view class="avatar">
                <image class="img" src="https://img0.baidu.com/it/u=3052801101,1386118511&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1695315600&t=33bd0a21fe2bd7975a4c3aec2003722c" mode=""></image>
            </view>
            <view class="bubble">您好，我是智能客服小助手，很高兴为您服务， 请问有什么可以帮您？ </view>
        </view>
        <view class="commonProblem">
            <view class="l">

            </view>
            <view class="tabList">
                <view class="tab" v-for="v in tabList" :key="v"></view>
            </view>
        </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabList:[
                    {
                        key: '热点',
                        list:[
                            {
                                txt: '课程购买后在哪里查看',
                            },
                            {
                                txt: '直播如何开通',
                            },
                            {
                                txt: '物流配送时效',
                            },
                            {
                                txt: '充值金额在哪里查看',
                            },
                            {
                                txt: '社群如何操作',
                            }
                        ]
                    },
                    {
                        key: '寄件',
                        list:[
                            {
                                txt: '课程购买后在哪里查看',
                            },
                            {
                                txt: '直播如何开通',
                            },
                            {
                                txt: '物流配送时效',
                            },
                            {
                                txt: '充值金额在哪里查看',
                            },
                            {
                                txt: '社群如何操作',
                            }
                        ]
                    },
                    {
                        key: '查件',
                        list:[
                            {
                                txt: '课程购买后在哪里查看',
                            },
                            {
                                txt: '直播如何开通',
                            },
                            {
                                txt: '物流配送时效',
                            },
                            {
                                txt: '充值金额在哪里查看',
                            },
                            {
                                txt: '社群如何操作',
                            }
                        ]
                    },
                ]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.wrap{
    padding: 36rpx 34rpx;
    box-sizing: border-box;
    .serviceUser{
        display: flex;
        gap: 17rpx;
        .avatar{
            width: 78rpx;
            height: 78rpx;
            border-radius: 50%;
            overflow: hidden;
            .img{
                width: 100%;
                height: 100%;
            }
        }
        .bubble{
            padding: 29rpx 22rpx;
            background: #fff;
            width: 532rpx;
            box-sizing: border-box;
            color: #333333;
            font-size: 24rpx;
            line-height: 40rpx;
        }
    }
}
</style>
