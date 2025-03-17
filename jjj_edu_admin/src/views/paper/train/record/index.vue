<template>
  <!--
      作者：luoyiming
      时间：2019-10-24
      描述：考试管理
  -->
  <div class="product-list">
    <!--搜索表单-->
    <div class="common-seach-wrap">
      <el-form size="small" :inline="true" :model="searchForm" class="demo-form-inline">
        <el-form-item label="考试分类">
          <el-select size="small" v-model="searchForm.category_id" placeholder="所有分类">
            <el-option label="全部" value="0"></el-option>
            <el-option v-for="(item, index) in categoryList" :key="index" :label="item.name" :value="item.category_id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="考试名称">
          <el-input size="small" v-model="searchForm.search" placeholder="请输入考试名称"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button size="small" type="primary" icon="Search" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!--内容-->
    <div class="product-content">
      <div class="table-wrap">
        <el-table size="small" :data="tableData" border style="width: 100%" v-loading="loading">
          <el-table-column prop="title" label="考试名称"></el-table-column>
          <el-table-column prop="" label="用户">
            <template  #default="scope">
              <template  v-if="scope.row.user">
                <div>{{ scope.row.user.nickName }}</div>
                <div class="gray9">ID：({{ scope.row.user.user_id }})</div>
              </template>
            </template>
          </el-table-column>
          <el-table-column prop="paper.category.name" label="考试分类">
			  <template  #default="scope">
			    <span v-if="scope.row.paper&&scope.row.paper.category">{{scope.row.paper.category.name}}</span>
			  </template>
		  </el-table-column>
          <el-table-column prop="item_number" label="题目数量"></el-table-column>
		  <el-table-column prop="is_submit" label="状态">
		  	<template #default="scope">
		  		<span v-if="scope.row.is_submit==1">已答卷</span>
		  		<span v-else>未答卷</span>
		  	</template>
		  </el-table-column>
          <el-table-column prop="create_time" label="创建时间"></el-table-column>
          <el-table-column fixed="right" label="操作" width="90">
            <template  #default="scope">
              <el-button @click="viewClick(scope.row)" type="text" size="small" v-auth="'/paper/train/record/question'">
                查看答题
              </el-button>
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
  </div>
</template>

<script>
  import PaperApi from '@/api/paper.js';
  import qs from 'qs';
  export default {
    data() {
      return {
        isPopUp: false,
        paper_id: 0,
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
          category_id: '',
        },
        /*列表数据*/
        tableData: [],
        /*全部分类*/
        categoryList: [],
        /*考试统计*/
        product_count: {}
      };
    },
    created() {
      /*获取列表*/
      this.getData();
    },
    methods: {
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
        window.location.href = baseUrl + '/index.php/shop/question.question/export?' + qs.stringify(this.searchForm);
      },
      /*获取列表*/
      getData() {
        let self = this;
        let Params = self.searchForm;
        Params.page = self.curPage;
        Params.list_rows = self.pageSize;
        self.loading = true;
        PaperApi.trainRecordList(Params, true)
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
      /*打开编辑*/
      viewClick(row) {
        this.$router.push({
          path: '/paper/train/record/question',
          query: {
            record_id: row.record_id,
          }
        });
      },
    }
  };
</script>

<style></style>
