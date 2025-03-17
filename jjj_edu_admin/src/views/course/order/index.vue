<template>
	<!--
      作者：luoyiming
      时间：2019-10-25
      描述：订单列表
  -->
	<div class="user">
		<!--搜索表单-->
		<div class="common-seach-wrap">
			<el-form size="small" :inline="true" :model="searchForm" class="demo-form-inline">
				<el-form-item label="用户手机号">
					<el-input size="small" v-model="searchForm.mobile" placeholder="请输入用户手机号"></el-input>
				</el-form-item>
				<el-form-item label="用户昵称">
					<el-input size="small" v-model="searchForm.nickName" placeholder="请输入用户昵称"></el-input>
				</el-form-item>
				<el-form-item label="用户ID">
					<el-input size="small" v-model="searchForm.user_id" placeholder="请输入用户ID"></el-input>
				</el-form-item>
				<el-form-item label="支付时间">
					<div class="block">
						<span class="demonstration"></span>
						<el-date-picker size="small" v-model="searchForm.create_time" type="daterange"
							value-format="YYYY-MM-DD" range-separator="至" start-placeholder="开始日期"
							end-placeholder="结束日期"></el-date-picker>
					</div>
				</el-form-item>
				<el-form-item>
					<el-button size="small" type="primary" icon="Search" @click="onSubmit">查询</el-button>
				</el-form-item>
			</el-form>
		</div>
		<!--内容-->
		<div class="product-content">
			<div class="table-wrap">
				<el-table size="small" :data="tableData.data" border style="width: 100%" v-loading="loading">
					<el-table-column prop="" label="用户">
						<template #default="scope">
							<div>昵称：{{ scope.row.nickName }}</div>
							<div class="gray9">手机号：({{ scope.row.mobile }})</div>
						</template>
					</el-table-column>
					<el-table-column prop="order_no" label="支付订单">
						<template #default="scope">
							<span>
								{{ scope.row.order_no }}
							</span>
						</template>
					</el-table-column>
					<el-table-column prop="order_no" label="时间">
						<template #default="scope">
							<span>
								{{ scope.row.pay_time_text }}
							</span>
						</template>
					</el-table-column>
				</el-table>
			</div>
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
	import CourseApi from '@/api/course.js';
	export default {
		components: {},
		data() {
			return {
				/*是否加载完成*/
				loading: true,
				/*列表数据*/
				tableData: [],
				/*一页多少条*/
				pageSize: 20,
				/*一共多少条数据*/
				totalDataNumber: 0,
				/*当前是第几页*/
				curPage: 1,
				/*横向表单数据模型*/
				searchForm: {
					user_id: '',
					nickName: '',
					mobile: '',
					create_time: '',
				},
			};
		},
		props: ['course_id'],
		mounted() {
			/*获取列表*/
			this.getData();
		},
		methods: {
			/*选择第几页*/
			handleCurrentChange(val) {
				let self = this;
				self.curPage = val;
				self.getData();
			},

			/*每页多少条*/
			handleSizeChange(val) {
				this.curPage = 1;
				this.pageSize = val;
				this.getData();
			},

			/*切换菜单*/
			handleClick(tab, event) {
				let self = this;
				self.curPage = 1;
				self.getData();
			},

			/*获取列表*/
			getData() {
				let self = this;
				let Params = this.searchForm;
				Params.page = self.curPage;
				Params.course_id = self.course_id;
				Params.list_rows = self.pageSize;
				self.loading = true;
				CourseApi.orderlist(Params, true)
					.then(res => {
						let list = [];
						self.tableData.data = res.data.list.data;
						self.totalDataNumber = res.data.list.total;
						self.loading = false;
					})
					.catch(error => {});
			},

			/*搜索查询*/
			onSubmit() {
				this.curPage = 1;
				this.tableData = [];
				this.getData();
			},
		}
	};
</script>
<style lang="scss">
	.product-info {
		padding: 10px 0;
		border-top: 1px solid #eeeeee;
	}

	.order-code .state-text {
		padding: 2px 4px;
		border-radius: 4px;
		background: #808080;
		color: #ffffff;
	}

	.order-code .state-text-red {
		background: red;
	}

	.table-wrap .product-info:first-of-type {
		border-top: none;
	}

	.table-wrap .el-table__body tbody .el-table__row:nth-child(odd) {
		background: #f5f7fa;
	}
</style>