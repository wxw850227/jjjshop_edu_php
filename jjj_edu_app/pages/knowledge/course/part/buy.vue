<template>
	<view :class="Visible ? 'pop-bg open' : 'pop-bg close'" @click.stop="closePop(null)">
		<view class="pop-content" @click.stop>
			<image @click="closePop(null)" class="close-img" src="/static/icon/close.png" mode=""></image>
			<view class="f30 gray3 ww100 mb22 tc">购买后可继续观看,是否购买?</view>
			<view class="f28 gray9 ww100 tc mb48">如果已有会员密码,请<text class="dominant" @click="closePop('password')">直接登录</text></view>
			<view class="ww100 d-c-c">
				<view class="sub-btn"  @click="closePop('password')">确认</view>
				<view class="close-btn"  @click="closePop(null)">取消</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniLoadMore from "@/components/uni-load-more.vue";
	export default {
		components: {
			uniLoadMore
		},
		data() {
			return {
				input_len: 6,
				/*是否可见*/
				Visible: false,
				type: 0,
				password: '',
				isFocus: false,
				value: '',
				isFalse: false,
				/*发送按钮文本*/
				send_btn_txt: '重新发送',
				is_send: false,
				second: 60
			}
		},
		props: ['isPopup'],
		watch: {
			isPopup: function(n, o) {
				let self = this;
				if (n != o) {
					self.Visible = n;
				}
			},
		},
		methods: {
			closePop(e) {
				this.$emit('close',e)
			},
		}
	}
</script>

<style lang="scss">
	.sub-btn{
		width: 184rpx;
		height: 64rpx;
		background: #72DEED;
		border-radius: 36rpx;
		font-size: 28rpx;
		color: #FFFFFF;
		display: flex;
		justify-content: center;
		align-content: center;
		margin-right: 67rpx;
		line-height: 64rpx;
	}
	.close-btn{
		width: 184rpx;
		height: 64rpx;
		background: #222222;
		border-radius: 36rpx;
		font-size: 28rpx;
		color: #FFFFFF;
		display: flex;
		justify-content: center;
		align-content: center;
		line-height:64rpx;
	}
	.dominant {
		color: $dominant-color;
	}

	.pop-bg {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		background: rgba(0, 0, 0, 0.5);
		z-index: 1000;

		.pop-content {
			position: fixed;
			z-index: 1001;
			bottom: 0;
			left: 0;
			right: 0;
			top: 0;
			margin: auto;
			width: 597rpx;
			height: 385rpx;
			padding: 107rpx 0 32rpx 0;
			box-sizing: border-box;
			transform: translate3d(0, 0, 0);
			transition: transform 0.2s cubic-bezier(0, 0, 0.25, 1);
			background-color: #FFFFFF;
			border-radius: 10rpx;
		}
	}

	.pop-bg.close {
		// display: none;
		height: 0;

		.pop-content {
			transform: translate3d(0, 2000rpx, 0);
		}
	}

	.code-image {
		width: 360rpx;
		height: 360rpx;

	}

	.icon-img {
		width: 40rpx;
		height: 40rpx;
		margin-right: 16rpx;

	}

	.close-img {
		width: 32rpx;
		height: 32rpx;
		position: absolute;
		right: 32rpx;
		top: 32rpx;
	}

	.input-item {
		width: 72rpx;
		height: 96rpx;
		background: #ffffff;
		border-radius: 0px;
		font-size: 40rpx;
		color: rgba(0, 0, 0, 0.87);
		font-weight: 600;
		display: flex;
		justify-content: center;
		align-items: center;
		border-bottom: 2rpx solid #00BDBD;
		margin-right: 16rpx;
		text-align: center;
		line-height: 96rpx;
	}

	.input-item:last-child {
		margin-right: 0;
	}

	.input-hid {
		margin-left: -100%;
	}

	.get-code-btn {
		background-color: #FFFFFF;
		color: $dominant-color;
		background: none;
		padding: 0;
		margin: 0 auto;
	}

	button[disabled]:not([type]).get-code-btn {
		background-color: #FFFFFF;
		color: #999999;
	}
</style>
