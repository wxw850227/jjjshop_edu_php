 <!-- 通用选项卡 -->
<template>
    <view class="top-tabbar" :style="customStyle">
		<template v-if="$slots.default">
			<slot />
		</template>
		<template v-else>
			<view class="tab-item" v-for="v in data" :key="v" :class="{active:v.value == activeName }" @click="changeType(v)">
				{{ v.key }}
			</view>
		</template>
    </view>
</template>

<script>
	export default {
        props: {
			data: {
				type: Array,
				default: function() {
					return {
						type: [],
					};
				}
			},
            activeName:{
                type: Number,
                default: function() {
					return {
						type: 0,
					};
				}
            },
			customStyle:{
				type: Object,
				default: function() {
					return {
						type: {},
					};
				}
			}
		},
		components: {},
		data() {
			return {}
		},
		methods: {
            changeType(v){
                this.$emit("chang-tab",v)
            }
		}
	}
</script>

<style lang="scss" scoped>
/*top-tab*/
.top-tabbar {
	height: 94rpx;
	line-height: 94rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 20rpx;
	box-sizing: border-box;
	background: #FFFFFF;
	width: 100%;
	z-index: 10;
	font-size: 28rpx;
}

.tab-item {
	flex: 1;
	height: 94rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #333333;
	font-size: inherit;
}

.tab-item.active {
	color: #333333;
	position: relative;
}

.tab-item.active::after {
	content: '';
	width: 58rpx;
	height: 6rpx;
	border-radius: 4rpx;
	position: absolute;
	bottom: 10rpx;
	background-color: #F2473F;
}
</style>
