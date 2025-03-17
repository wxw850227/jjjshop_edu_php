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
				<el-form-item label="会员信息">
					<el-input v-model="searchForm.search" placeholder="请输入昵称|手机号|ID"></el-input>
				</el-form-item>
				<el-form-item label="订单号"><el-input size="small" v-model="searchForm.order_no"
						placeholder="请输入订单号"></el-input></el-form-item>
				<el-form-item label="订单类型">
					<el-select size="small" v-model="searchForm.order_source" placeholder="请选择">
						<el-option label="全部" value=""></el-option>
						<el-option v-for="(item, index) in order_source" :key="index" :label="item.name"
							:value="item.value"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="起始时间">
					<div class="block">
						<span class="demonstration"></span>
						<el-date-picker size="small" v-model="searchForm.create_time" type="daterange"
							value-format="YYYY-MM-DD" range-separator="至" start-placeholder="开始日期"
							end-placeholder="结束日期"></el-date-picker>
					</div>
				</el-form-item>
				<el-form-item><el-button size="small" type="primary" icon="Search"
						@click="onSubmit">查询</el-button></el-form-item>
			</el-form>
		</div>
		<!--内容-->
		<div class="product-content">
			<div class="table-wrap">
				<el-tabs v-model="activeName" @tab-change="handleClick">
					<el-tab-pane label="全部订单" name="all"></el-tab-pane>
					<el-tab-pane :label="'待支付'" name="payment">
						<template #label>
							<span>待支付 <el-tag size="small">{{order_count.payment}}</el-tag></span>
						</template>
					</el-tab-pane>
					<el-tab-pane :label="'待评价'" name="comment">
						<template #label>
							<span>待评价 <el-tag size="small">{{order_count.comment}}</el-tag></span>
						</template>
					</el-tab-pane>
					<el-tab-pane :label="'已关闭'" name="cancel">
						<template #label>
							<span>已关闭 <el-tag size="small">{{order_count.cancel}}</el-tag></span>
						</template>
					</el-tab-pane>
					<el-tab-pane :label="'已完成'" name="complete">
						<template #label>
							<span>已完成 <el-tag size="small">{{order_count.complete}}</el-tag></span>
						</template>
					</el-tab-pane>
				</el-tabs>
				<!-- <el-table size="small" :data="tableData.data" :span-method="arraySpanMethod" border style="width: 100%" v-loading="loading"> -->
				<el-table size="small" :data="tableData.data" border style="width: 100%" v-loading="loading">
					<el-table-column prop="order_no" label="订单号" width="150">
						<template #default="scope">
							<div>
								<div class="state-text" :class="{'state-text-red':scope.row.order_source != 10}">【{{scope.row.order_source_text}}】</div>
								<div>{{ scope.row.order_no }}</div>
							</div>	
						</template>
					</el-table-column>
					<el-table-column prop="" label="用户信息">
						<template #default="scope">
							<template v-if="scope.row.user">
								<div>
									<div>{{ scope.row.user.nickName }}</div>
									<div class="gray9">ID：({{ scope.row.user.user_id }})</div>
								</div>
							</template>
						</template>
					</el-table-column>
					<el-table-column prop="" label="商品信息" width="400">
						<template #default="scope">
							<div class="product-info" v-for="(item, index) in scope.row.product" :key="index">
								<div class="pic">
									<img v-if="item.image && item.image.file_path" v-img-url="item.image.file_path" alt="" /></div>
									<div class="info">
										<div class="name gray3 product-name">
											<span>{{ item.title }}</span>
										</div>
									</div>
								</div>
						</template>
					</el-table-column>


					<el-table-column prop="pay_price" label="实付款">
						<template #default="scope">
							<div class="orange">{{ scope.row.pay_price }}</div>
						</template>
					</el-table-column>
					<el-table-column prop="state_text" label="交易状态">
						<template #default="scope">
							{{ scope.row.state_text }}
						</template>
					</el-table-column>
					<el-table-column prop="pay_type.text" label="支付方式">
						<template #default="scope">
							<span class="gray9">{{ scope.row.pay_type && scope.row.pay_type.text }}</span>
						</template>
					</el-table-column>
					<el-table-column prop="create_time" label="下单时间"></el-table-column>
					<!-- <el-table-column prop="is_comment" label="评价" width="160">
						<template #default="scope">
							<span v-if="scope.row.is_comment == 0">未评价</span>
							<span v-else-if="scope.row.order_source!=20">已评价</span>
							<span v-else>无评价</span>
						</template>
					</el-table-column> -->
					<el-table-column fixed="right" label="操作" width="100">
						<template #default="scope">
							<el-button @click="addClick(scope.row)" type="text" size="small" v-auth="'/order/order/detail'">订单详情</el-button>
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
	import OrderApi from '@/api/order.js';
	import qs from 'qs';
	export default {
		components: {},
		data() {
			return {
				/*切换菜单*/
				activeName: 'all',
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
					search: '',
					order_no: '',
					create_time: '',
					order_source: ''
				},
				/*时间*/
				create_time: '',
				/*统计*/
				order_count: {
					payment: 0,
					comment: 0,
					complete: 0,
					cancel: 0
				},
				order_source: [],
			};
		},
		created() {
			/*获取列表*/
			this.getData();
		},
		methods: {
			/*跨多列*/
			/* arraySpanMethod(row) {
				if (row.rowIndex % 2 == 0) {
					if (row.columnIndex === 0) {
						return [1, 8];
					}
				}
			}, */
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
				Params.dataType = self.activeName;
				Params.page = self.curPage;
				Params.list_rows = self.pageSize;
				self.loading = true;
				OrderApi.orderlist(Params, true)
					.then(res => {
						let list = [];
						/* for (let i = 0; i < res.data.list.data.length; i++) {
							let item = res.data.list.data[i];
							let topitem = {
								order_no: item.order_no,
								create_time: item.create_time,
								order_source: item.order_source,
								order_source_text: item.order_source_text,
								order_status: item.order_status.value,
							};
							list.push(topitem);
							list.push(item);
						} */
						self.tableData.data = res.data.list.data;
						self.totalDataNumber = res.data.list.total;
						self.order_source = res.data.order_source;
						self.order_count = res.data.order_count.order_count;
						self.loading = false;
					})
					.catch(error => {});
			},

			/*打开添加*/
			addClick(row) {
				let self = this;
				let params = row.order_id;
				self.$router.push({
					path: '/order/order/Detail',
					query: {
						order_id: params
					}
				});
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
		display: flex;
		align-items: center;
		// border-top: 1px solid #eeeeee;
	}

	.state-text {
		/* padding: 2px 4px;
		border-radius: 4px;
		background: #808080; */
		color: #666;
		margin-right: 6px;
		box-sizing: border-box;
		height: 20px;
		line-height: 20px;
	}

	.state-text-red {
		color: red;
	}

	.table-wrap .product-info:first-of-type {
		border-top: none;
	}

	.table-wrap .el-table__body tbody .el-table__row:nth-child(odd) {
		background: #f5f7fa;
	}
</style>