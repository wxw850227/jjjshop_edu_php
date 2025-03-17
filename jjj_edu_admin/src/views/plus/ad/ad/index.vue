<template>
	<!--
      	作者：luoyiming
      	时间：2020-06-01
      	描述：广告-列表
      -->
	<div>
		<div class="common-level-rail">
			<el-button size="small" type="primary" icon="Plus" @click="addAd">添加广告</el-button>
		</div>
		<div class="table-wrap">
			<el-table :data="tableData" style="width: 100%" v-loading="loading">
				<el-table-column prop="ad_id" label="广告ID" width="100"></el-table-column>
				<el-table-column prop="title" label="广告标题">
					<template #default="scope">
						<div class="text-ellipsis" :title="scope.row.title">{{scope.row.title}}</div>
					</template>
				</el-table-column>
				<el-table-column prop="address" label="广告图" width="250">
					<template #default="scope">
						<img v-if="scope.row.image" v-img-url="scope.row.image.file_path" width="100" height="100" />
					</template>
				</el-table-column>
				<el-table-column prop="sort" label="排序" width="100"></el-table-column>
				<el-table-column prop="status" label="状态" width="100">
					<template #default="scope">
						<span v-if="scope.row.status == 1" class="green">显示</span>
						<span v-if="scope.row.status == 0" class="gray">隐藏</span>
					</template>
				</el-table-column>
				<el-table-column prop="create_time" label="添加时间" width="140"></el-table-column>
				<el-table-column prop="update_time" label="更新时间" width="140"></el-table-column>
				<el-table-column prop="name" label="操作" width="120">
					<template #default="scope">
						<el-button @click="editAd(scope.row)" type="text" size="small">编辑</el-button>
						<el-button @click="deleteAd(scope.row)" type="text" size="small">删除</el-button>
					</template>
				</el-table-column>
			</el-table>

			<!--分页-->
			<div class="pagination">
				<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" background
					:current-page="curPage" :page-size="pageSize" layout="total, prev, pager, next, jumper"
					:total="totalDataNumber"></el-pagination>
			</div>
		</div>
	</div>
</template>

<script>
	import AdApi from '@/api/ad.js';
	export default {
		components: {},
		data() {
			return {
				/*分类*/
				categoryData: [],
				/*表单数据*/
				tableData: [],
				/*是否打开添加弹窗*/
				open_add: false,
				/*是否打开编辑弹窗*/
				open_edit: false,
				/*当前编辑的对象*/
				userModel: {},
				commentData: [],
				loading: true,
				/*一页多少条*/
				pageSize: 15,
				/*一共多少条数据*/
				totalDataNumber: 0,
				/*当前是第几页*/
				curPage: 1
			};
		},
		created() {
			/*获取广告列表*/
			this.getTableList();
		},
		methods: {

			/*获取广告列表*/
			getTableList() {
				let self = this;
				let Params = {};
				Params.page = self.curPage;
				AdApi.adList(Params, true)
					.then(data => {
						self.loading = false;
						self.tableData = data.data.list.data;
						self.totalDataNumber = data.data.list.total;
					})
					.catch(error => {
						self.loading = false;
					});
			},

			/*添加广告*/
			addAd() {
				this.$router.push({
					path: '/plus/ad/ad/add'
				});
			},

			/*编辑广告*/
			editAd(row) {
				let params = row.ad_id;
				this.$router.push({
					path: '/plus/ad/ad/edit',
					query: {
						ad_id: params
					}
				});
			},

			/*选择第几页*/
			handleCurrentChange(val) {
				let self = this;
				self.curPage = val;
				self.loading = true;
				self.getTableList();
			},

			/*每页多少条*/
			handleSizeChange(val) {
				this.curPage = 1;
				this.getTableList();
			},

			/*删除广告*/
			deleteAd(row) {
				let self = this;
				ElMessageBox.confirm('此操作将永久删除该记录, 是否继续?', '提示', {
						confirmButtonText: '确定',
						cancelButtonText: '取消',
						type: 'warning'
					})
					.then(() => {
						self.loading = true;
						AdApi.deleteAd({
									ad_id: row.ad_id
								},
								true
							)
							.then(data => {
								ElMessage({
									message: data.msg,
									type: 'success'
								});
								self.loading = false;
								self.getTableList();
							})
							.catch(error => {});
					})
					.catch(() => {});
			},


			handleClick(tab, event) {},



			/*关闭弹窗*/
			closeDialogFunc(e, f) {
				if (f == 'add') {
					this.open_add = e.openDialog;
					if (e.type == 'success') {
						this.getTableList();
					}
				}
				if (f == 'edit') {
					this.open_edit = e.openDialog;
					if (e.type == 'success') {
						this.getTableList();
					}
				}
			}
		}
	};
</script>

<style></style>