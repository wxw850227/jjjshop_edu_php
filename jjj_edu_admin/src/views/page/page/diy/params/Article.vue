<template>
	<!--
    	作者：luoyiming
    	时间：2020-06-20
    	描述：diy组件-参数设置-文章列表
    -->
	<div>
		<div class="common-form">
			<span>{{ curItem.name }}</span>
		</div>
		<el-form size="small" :model="curItem" label-width="100px">
			<!-- 文章分类 -->
			<el-form-item label="文章分类：">
				<el-select v-model="curItem.params.auto.category">
					<el-option label="全部分类" :value="''+0"></el-option>
					<el-option v-for="item in category" :key="item.category_id" :label="item.name"
						:value="''+item.category_id">
					</el-option>
				</el-select>
			</el-form-item>
			<!-- 显示数量 -->
			<el-form-item label="显示数量：">
				<el-input type="number" style="width: auto;" v-model="curItem.params.auto.showNum"
					class="w-auto"></el-input>
				<div>
					文章数据请到
					<a><span @click="gotoPage('plus/article/index')">内容管理 - 文章列表</span></a>
					中管理
				</div>
			</el-form-item>
			<!--显示类型-->
			<el-form-item label="显示类型：">
				<el-radio-group v-model="curItem.style.display">
					<el-radio label="10">有图模式</el-radio>
					<el-radio label="20">无图模式</el-radio>
				</el-radio-group>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	import DataApi from '@/api/data.js';
	export default {
		data() {
			return {
				category: {},
			};
		},
		props: ['curItem', 'selectedIndex', 'opts'],
		created() {
			/*获取文章栏目*/
			this.getData();
		},
		methods: {
			gotoPage(url) {
			  this.$router.push('/' + url);
			},
			/*获取文章栏目*/
			getData() {
				let self = this;
				DataApi.articleCategorylist({}, true).then(data => {
						self.category = data.data.category;
					})
					.catch(error => {
						self.loading = false;
					});
			},
		}
	};
</script>

<style></style>