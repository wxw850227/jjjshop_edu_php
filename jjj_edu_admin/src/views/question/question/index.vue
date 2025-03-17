<template>
	<!--
      作者：luoyiming
      时间：2019-10-24
      描述：试题管理
  -->
	<div class="product-list">
		<!--搜索表单-->
		<div class="common-seach-wrap">
			<el-form size="small" :inline="true" :model="searchForm" class="demo-form-inline">
				<el-form-item label="试题分类">
					<el-select size="small" v-model="searchForm.category_id" placeholder="所有分类">
						<el-option label="全部" value="0"></el-option>
						<el-option v-for="(item, index) in categoryList" :key="index" :label="item.name"
							:value="item.category_id">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="题型">
					<el-select size="small" v-model="searchForm.question_type" placeholder="所有分类">
						<el-option label="全部" value="0"></el-option>
						<el-option label="单选题" value="1"></el-option>
						<el-option label="多选题" value="2"></el-option>
						<el-option label="判断题" value="3"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="试题名称">
					<el-input size="small" v-model="searchForm.search" placeholder="请输入试题名称"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button size="small" type="primary" icon="Search" @click="onSubmit">查询</el-button>
				</el-form-item>
				<el-form-item>
					<el-button size="small" type="success" @click="onExport"
						v-auth="'/question/question/export'">导出</el-button>
				</el-form-item>
			</el-form>
		</div>
		<!--添加试题-->
		<div class="common-level-rail">
			<el-button size="small" type="primary" icon="Plus" @click="addClick" v-auth="'/question/question/add'">
				添加试题</el-button>
		</div>
		<!--内容-->
		<div class="product-content">
			<div class="table-wrap">
				<el-table size="small" :data="tableData" border style="width: 100%" v-loading="loading">
					<el-table-column prop="category.name" label="试题分类">
						<template #default="scope">
							<div class="text-ellipsis" v-if="scope.row.category.name"
								@click="categoryClick(scope.row.category_id)">
								{{scope.row.category.name}}<span class="blue">（{{ scope.row.category_num || 0 }}）</span>
							</div>
						</template>
					</el-table-column>
					<el-table-column prop="title" label="试题名称"></el-table-column>
					<el-table-column prop="title" label="题干">
						<template #default="scope">
							<div class="text-ellipsis">{{scope.row.title}}</div>
						</template>
					</el-table-column>
					<el-table-column prop="sort" label="排序"></el-table-column>
					<el-table-column prop="create_time" label="创建时间"></el-table-column>
					<el-table-column fixed="right" label="操作" width="150">
						<template #default="scope">
							<el-button @click="editClick(scope.row)" type="text" size="small"
								v-auth="'/question/question/edit'">
								编辑试题
							</el-button>
							<el-button @click="sectionClick(scope.row)" type="text" size="small">关联知识点</el-button>
							<el-button @click="delClick(scope.row)" type="text" size="small"
								v-auth="'/question/question/delete'">
								删除试题</el-button>
						</template>
					</el-table-column>
				</el-table>
			</div>
		</div>
		<!--分页-->
		<div class="pagination">
			<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" background
				:current-page="curPage" :page-size="pageSize" layout="total, prev, pager, next, jumper"
				:total="totalDataNumber"></el-pagination>
		</div>
		<relation :isPopUp="isPopUp" :question_id="question_id" @closeDialog="closeRelation"></relation>
	</div>
</template>

<script>
	import QuestionApi from '@/api/question.js';
	import relation from './relation/index.vue';
	import qs from 'qs';
	export default {
		components: {
			relation
		},
		data() {
			return {
				isPopUp: false,
				question_id: 0,
				/*切换菜单*/
				activeName: 'sell',
				/*切换选中值*/
				activeIndex: '0',
				/*是否正在加载*/
				loading: true,
				/*一页多少条*/
				pageSize: 10,
				/*一共多少条数据*/
				totalDataNumber: 0,
				/*当前是第几页*/
				curPage: 1,
				/*搜索参数*/
				searchForm: {
					search: '',
					category_id: '0',
					question_type: '0'
				},
				/*列表数据*/
				tableData: [],
				/*全部分类*/
				categoryList: [],
				/*试题统计*/
				product_count: {}
			};
		},
		created() {
			/*获取列表*/
			this.getData();
		},
		methods: {
			addClick() {
				this.$router.push({
					path: '/question/question/add',
					query: {
						scene: 'add'
					}
				});
			},
			/*选择第几页*/
			handleCurrentChange(val) {
				let self = this;
				self.loading = true;
				self.curPage = val;
				self.getData();
			},

			/*每页多少条*/
			handleSizeChange(val) {
				this.pageSize = val;
				this.getData();
			},

			/*切换菜单*/
			handleClick(tab, event) {
				let self = this;
				self.curPage = 1;
				self.getData();
			},
			onExport: function() {
				let baseUrl = window.location.protocol + '//' + window.location.host;
				window.location.href = baseUrl + '/index.php/shop/question.question/export?' + qs.stringify(this
					.searchForm);
			},
			/*获取列表*/
			getData() {
				let self = this;
				let Params = self.searchForm;
				Params.page = self.curPage;
				Params.list_rows = self.pageSize;
				self.loading = true;
				QuestionApi.questionList(Params, true)
					.then(data => {
						self.loading = false;
						self.tableData = data.data.list.data;
						self.categoryList = data.data.category;
						self.totalDataNumber = data.data.list.total;
					})
					.catch(error => {
						self.loading = false;
					});
			},
			/*搜索查询*/
			onSubmit() {
				this.curPage = 1;
				this.getData();
			},
			categoryClick(category_id) {
				this.curPage = 1;
				this.searchForm.category_id = category_id;
				this.getData();
			},
			/*打开编辑*/
			editClick(row) {
				this.$router.push({
					path: '/question/question/edit',
					query: {
						question_id: row.question_id,
						scene: 'edit'
					}
				});
			},
			sectionClick(row) {
				this.isPopUp = true;
				this.question_id = row.question_id;
			},
			closeRelation() {
				this.isPopUp = false;
				this.question_id = 0;
			},
			catSet(e, id) {
				let self = this;
				QuestionApi.questionState({
					question_id: id,
					state: e
				}).then(data => {
					ElMessage({
						message: data.msg,
						type: 'success'
					});
					// self.getData();
				});
			},
			topSet(e, id) {
				let self = this;
				QuestionApi.questionTop({
					question_id: id,
					state: e
				}).then(data => {
					ElMessage({
						message: data.msg,
						type: 'success'
					});
					// self.getData();
				});
			},
			/*删除*/
			delClick: function(row) {
				let self = this;
				ElMessageBox.confirm('确认后将永久删除，确定删除该试题吗?', '提示', {
						type: 'warning'
					})
					.then(() => {
						QuestionApi.delQs({
							question_id: row.question_id
						}).then(data => {
							ElMessage({
								message: '删除成功',
								type: 'success'
							});
							self.getData();
						});
					});
			}
		}
	};
</script>

<style></style>