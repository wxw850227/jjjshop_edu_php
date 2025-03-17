<template>
	<!--
    	作者：luoyiming
    	时间：2019-10-25
    	描述：组件-选择课程
    -->
	<el-dialog title="选择课程" v-model="dialogVisible" @close="dialogFormVisible" :modal-append-to-body="true"
		append-to-body :close-on-click-modal="false" :close-on-press-escape="false" width="900px">
		<div class="common-seach-wrap">
			<el-form :inline="true" size="small" :model="formInline" class="demo-form-inline">
				<el-form-item label="课程名称">
					<el-input placeholder="请输入课程名称" v-model="formInline.search"></el-input>
				</el-form-item>
				<el-form-item label="课程状态">
					<el-select v-model="formInline.question_type"
						placeholder="请选择课程状态" style="width: 100px;">
						<el-option label="全部" :value="0"></el-option>
						<el-option label="单选题" :value="1"></el-option>
						<el-option label="多选题" :value="2"></el-option>
						<el-option label="判断题" :value="3"></el-option>
					</el-select>
					<el-button type="primary" icon="Search" @click="getData" style="margin-left: 12px">查询</el-button>
				</el-form-item>
			</el-form>
		</div>

		<!--内容-->
		<div class="product-content">
			<div class="table-wrap">
				<el-table size="small" :data="listData" border style="width: 100%" highlight-current-row
					v-loading="loading" @selection-change="tableCurrentChange">
					<el-table-column prop="type_name" width="100" label="题型"></el-table-column>
					<el-table-column prop="category.name" width="140" label="分类"></el-table-column>
					<el-table-column prop="title" label="题干"></el-table-column>
					<el-table-column type="selection" :selectable="selectableFunc" width="44"
						v-if="islist"></el-table-column>
					<el-table-column width="80" label="单选" v-if="!islist">
						<template #default="scope">
							<el-button size="mini" v-if="scope.row.noChoose"
								@click="SingleFunc(scope.row)">选择</el-button>
							<el-button size="mini" v-else disabled>已选</el-button>
						</template>
					</el-table-column>
				</el-table>
			</div>

			<!--分页-->
			<div class="pagination">
				<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" background
					:current-page="curPage" :page-sizes="[2, 10, 20, 50, 100]" :page-size="pageSize"
					layout="total, prev, pager, next, jumper" :total="totalDataNumber"></el-pagination>
			</div>
		</div>
		<template #footer>
			<div class="dialog-footer">
				<el-button size="small" @click="dialogVisible=false">取 消</el-button>
				<el-button size="small" type="primary" @click="addClerk" v-if="islist">确 定</el-button>
			</div>
		</template>
	</el-dialog>
</template>

<script>
	import QuestionApi from '@/api/question.js';
	export default {
		data() {
			return {
				/*是否加载完成*/
				loading: true,
				/*当前是第几页*/
				curPage: 1,
				/*一页多少条*/
				pageSize: 20,
				/*一共多少条数据*/
				totalDataNumber: 0,
				formInline: {},
				//课程分类列表
				cateList: [],
				//课程列表
				listData: [],
				//类别列表
				status: [{
						id: 10,
						name: '上架'
					},
					{
						id: 20,
						name: '下架'
					}
				],
				multipleSelection: [],
				/*左边长度*/
				formLabelWidth: '120px',
				/*是否显示*/
				dialogVisible: false,
				/*结果类别*/
				type: 'error',
				/*传出去的参数*/
				params: null
			};
		},
		props: ['isquestion', 'islist', "isDisabled", 'questionType','currentList'],
		watch: {
			isquestion: function(n, o) {
				if (n != o) {
					if (n) {
						this.dialogVisible = n;
						this.type = 'error';
						this.params = null;
						console.log(this.$props.questionType)
						if (this.$props.questionType) {
							this.formInline.question_type = this.$props.questionType;
						} else {
							this.formInline.question_type = 0;
						}
						this.getData();
					}
				}
			}
		},
		created() {

		},
		methods: {

			/*是否可以勾选*/
			selectableFunc(e) {
				if (typeof e.noChoose !== 'boolean') {
					return true;
				}
				return e.noChoose;
			},

			/*选择第几页*/
			handleCurrentChange(val) {
				this.curPage = val;
				this.getData();
			},

			/*每页多少条*/
			handleSizeChange(val) {
				this.curPage = 1;
				this.pageSize = val;
				this.getData();
			},

			/*获取课程列表*/
			getData() {
				let self = this;
				let params = self.formInline;
				params.page = self.curPage;
				params.list_rows = self.pageSize;

				QuestionApi.questionList(params, true)
					.then(res => {
						if (res.code == 1) {
							self.loading = false;
							// self.cateList = res.data.category;
							res.data.list.data.forEach(item => {
								item.noChoose = true;
							});
							self.listData = res.data.list.data;
							self.totalDataNumber = res.data.list.total;
							self.judegCheck();
						}
					})
					.catch(error => {});
			},
			judegCheck(){
				if(this.$props.currentList && this.$props.currentList.length > 0){
					this.$props.currentList.forEach((items)=>{
						if(this.listData && this.listData.length > 0){
							this.listData.forEach((item)=>{
								if(items.question_id == item.question_id){
									item.noChoose = false;
								}
							})
						}
						
					})
				}
			},
			/*单选*/
			SingleFunc(row) {
				this.multipleSelection = [row];
				this.addClerk();
			},

			//点击确定
			addClerk() {
				let self = this;
				let params = null;
				let type = 'success';
				if (self.multipleSelection.length < 1) {
					ElMessage({
						message: '请至少选择一件产品课程！',
						type: 'error'
					});
					return;
				}
				if (self.islist && typeof(self.islist) != 'undefined') {
					self.multipleSelection.forEach(item => {
						if (item.image) {
							item.image = item.image.file_path;
						} else {
							item.image = '';
						}

					});
					params = self.multipleSelection;
				} else {
					params = self.multipleSelection;
					if (params.image) {
						params.image = params.image.file_path;
					} else {
						params.image = '';
					}
				}
				self.params = params;
				self.type = 'success';
				self.dialogVisible = false;
			},

			/*关闭弹窗*/
			dialogFormVisible() {
				this.$emit('closeDialog', {
					type: this.type,
					openDialog: false,
					params: this.params
				});
			},

			/*监听复选按钮选中事件*/
			tableCurrentChange(val) {
				this.multipleSelection = val;
			}
		}
	};
</script>

<style>
	.no-list .el-checkbox {
		display: none;
	}
</style>