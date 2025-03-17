<template>
	<!--
        作者：luoyiming
        时间：2020-06-08
        描述：超链接选择-页面
    -->
	<el-select v-model="activePage" placeholder="请选择" class="percent-w100" @change="changeFunc" value-key="url">
		<el-option v-for="item in pages" :key="item.url" :value-key="item.name" :label="item.name" :value="item">
		</el-option>
	</el-select>
</template>

<script>
	export default {
		data() {
			return {
				/*页面数据*/
				pages: [{
					url: '/pages/user/collect/subject',
					name: '收藏的题',
					type: '菜单',
				}, {
					url: '/pages/user/collect/index',
					name: '我的课程',
					type: '菜单',
				}, {
					url: '/pages/order/category',
					name: '我的订单',
					type: '菜单',
				}, {
					url: '/pages/user/learning/record',
					name: '学习记录',
					type: '菜单',
				}, {
					url: '/pages/user/my-wallet/my-wallet',
					name: '我的余额',
					type: '菜单',
				}, {
					url: '/pages/order/recharge',
					name: '充值中心',
					type: '菜单',
				}, {
					url: '/pages/news/list',
					name: '新闻列表',
					type: '菜单',
				}, {
					url: '/pages/plus/signin/signin',
					name: '签到有礼',
					type: '菜单',
				}, {
					url: '/pages/user/set/set',
					name: '设置',
					type: '菜单',
				}, {
					url: '/pages/user/class/index',
					name: '我的班级',
					type: '菜单',
				}, {
					url: '/pages/lecturer/list',
					name: '教师列表',
					type: '菜单',
				},{
					url: '/pages/lecturer/fav',
					name: '关注的讲师',
					type: '菜单',
				}
				],
				/*选中的值*/
				activePage: '收藏的题'
			}
		},
		created() {
			/*初始化*/
			this.changeFunc(this.pages[0]);
		},
		methods: {
			/*选中的值*/
			changeFunc(e) {
				this.$emit('changeData', e);
			}
		}
	}
</script>

<style>
</style>