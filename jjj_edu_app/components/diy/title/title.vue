<template>
	<view class="diy-notice pr"
		:style="{ padding: itemData.style.paddingTop + 'px' + ' 10px', background: itemData.style.background }">
		<view>
			<view class="notice-icon pr" :style="{background: itemData.style.background }"
				v-if="itemData.params.show_icon=='yes'">
				<image :src="itemData.params.icon" mode="aspectFill"></image>
			</view>
			<text class="pr notice-text text-ellipsisss f32 fb" 
				:style="{background: itemData.style.background, color: itemData.style.textColor }">
				{{ itemData.params.title }}
			</text>
		</view>
		<view class="moreWrap" @click="gotoPages(itemData)" v-if="itemData.params && itemData.params.linkUrl">
			更多<u-icon width="40rpx" height="40rpx" color="#999999" name="arrow-right"></u-icon>
		</view>	
	</view>
</template>

<script>
	export default {
		data() {
			return {};
		},
		props: ['itemData'],
		created() {},
		methods: {
			/*跳转页面*/
			gotoPages(item) {
				if (item && item.params && item.params.linkUrl) {
					const linkUrl = item.params.linkUrl;
					this.gotoPage(linkUrl) 
   			  }
			}
		}
	};
</script>

<style lang="scss" scoped>
	.diy-notice {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.diy-notice .notice-icon {
		width: 26px;
		height: 26px;
		background-color: #FFFFFF;
		padding: 0 10rpx;
		z-index: 1;
	}

	.diy-notice .notice-icon image {
		width: 100%;
		height: 100%;
	}

	.diy-notice .notice-text {
		overflow: hidden;
		white-space: nowrap;
		background-color: #FFFFFF;
		padding: 0 10rpx;
		z-index: 1;
	}
	.center-line{
		width: 490rpx;
		height: 2rpx;
		background-color: #c7c7c7;
		border-radius: 2rpx;
		position: absolute;
		left: 0;
		bottom: 0;
		top: 0;
		right: 0;
		margin: auto;
		z-index: 0;
	}
	.moreWrap{
		color: #999999;
		font-size: 26rpx;
		display: flex;
		align-items: center;
	}
</style>
