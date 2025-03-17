<template>
  <!--
      作者：luoyiming
      时间：2019-10-24
      描述：课程管理
  -->
  <div class="product-list">
    <!--搜索表单-->
    <div class="common-seach-wrap">
      <el-form size="small" :inline="true" :model="searchForm" class="demo-form-inline">
        <el-form-item label="教务分类">
          <el-select size="small" v-model="searchForm.category_id" placeholder="所有分类">
            <el-option label="全部" value="0"></el-option>
            <el-option v-for="(item, index) in categoryList" :key="index" :label="item.name" :value="item.category_id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="教务状态">
          <el-select size="small" v-model="searchForm.is_show" placeholder="教务状态">
            <el-option label="全部" :value="-1"></el-option>
            <el-option label="显示" :value="0"></el-option>
            <el-option label="隐藏" :value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="教务名称"><el-input size="small" v-model="searchForm.search" placeholder="请输入课程名称"></el-input></el-form-item>
        <el-form-item><el-button size="small" type="primary" icon="Search" @click="onSubmit">查询</el-button></el-form-item>
      </el-form>
    </div>
    <!--添加课程-->
    <div class="common-level-rail"><el-button size="small" type="primary" icon="Plus" @click="addClick" v-auth="'/education/education/add'">添加教务</el-button></div>
    <!--内容-->
    <div class="product-content">
      <div class="table-wrap">
        <el-table size="small" :data="tableData" border style="width: 100%" v-loading="loading">
          <el-table-column prop="title" label="课程名称"></el-table-column>
          <el-table-column prop="category.name" label="课程分类"></el-table-column>
          <el-table-column prop="image" label="课程封面">
            <template  #default="scope">
              <div class="product-info">
                <div class="pic"><img v-img-url="scope.row.image.file_path" alt="" /></div>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="real_sales" label="购买人数"></el-table-column>
          <el-table-column prop="is_show" label="状态">
            <template  #default="scope">
              <el-switch v-model="scope.row.is_show" :active-value="0" :inactive-value="1" @change="catSet($event, scope.row.course_id)"></el-switch>
            </template>
          </el-table-column>
          <el-table-column prop="sort" label="排序"></el-table-column>
          <el-table-column prop="create_time" label="创建时间"></el-table-column>
          <el-table-column fixed="right" label="操作" width="150">
            <template  #default="scope">
              <el-button @click="editClick(scope.row)" type="text" size="small" v-auth="'/education/education/edit'">编辑</el-button>
              <el-button @click="sectionClick(scope.row)" type="text" size="small">详情</el-button>
              <el-button @click="delClick(scope.row)" type="text" size="small" v-auth="'/education/education/delete'">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <!--分页-->
    <div class="pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        background
        :current-page="curPage"
        :page-size="pageSize"
        layout="total, prev, pager, next, jumper"
        :total="totalDataNumber"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import EducationApi from '@/api/education.js';
import qs from 'qs';
export default {
  components: {},
  data() {
    return {
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
        is_show: -1,
        is_top: -1,
        is_week: -1
      },
      /*列表数据*/
      tableData: [],
      /*全部分类*/
      categoryList: [],
      /*课程统计*/
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
        path: '/education/education/add',
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
    /*获取列表*/
    getData() {
      let self = this;
      let Params = self.searchForm;
      Params.page = self.curPage;
      Params.list_rows = self.pageSize;
      self.loading = true;
      EducationApi.courseList(Params, true)
        .then(data => {
          self.loading = false;
          self.tableData = data.data.list.data.reverse();
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
    editClick(row) {
      this.$router.push({
        path: '/education/education/edit',
        query: {
          course_id: row.course_id,
          scene: 'edit'
        }
      });
    },
    sectionClick(row) {
      this.$router.push({
        path: '/education/education/detail',
        query: {
          course_id: row.course_id
        }
      });
    },
    catSet(e, id) {
      let self = this;
      EducationApi.courseState({
        course_id: id,
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
     ElMessageBox.confirm('删除后将移动到回收站，确定删除该记录吗?', '提示', {
          type: 'warning'
        })
        .then(() => {
          EducationApi.delCourse({
            course_id: row.course_id
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
