<template>
  <!--
      作者：luoyiming
      时间：2019-10-24
      描述：讲师管理
  -->
  <div class="product-list">
    <!--搜索表单-->
    <div class="common-seach-wrap">
      <el-form size="small" :inline="true" :model="searchForm" class="demo-form-inline">
        <el-form-item label="讲师分类">
          <el-select size="small" v-model="searchForm.category_id" placeholder="所有分类">
            <el-option label="全部" value="0"></el-option>
            <el-option v-for="(item, index) in categoryList" :key="index" :label="item.name" :value="item.category_id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="讲师状态">
          <el-select size="small" v-model="searchForm.is_show" placeholder="讲师状态">
            <el-option label="全部" :value="-1"></el-option>
            <el-option label="显示" :value="0"></el-option>
            <el-option label="隐藏" :value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="讲师推荐">
          <el-select size="small" v-model="searchForm.is_top" placeholder="讲师推荐">
            <el-option label="全部" :value="-1"></el-option>
            <el-option label="未推荐" :value="0"></el-option>
            <el-option label="推荐" :value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="讲师名称">
          <el-input size="small" v-model="searchForm.search" placeholder="请输入讲师名称"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button size="small" type="primary" icon="Search" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!--添加讲师-->
    <div class="common-level-rail">
      <el-button size="small" type="primary" icon="Plus" @click="addClick" v-auth="'/lecturer/lecturer/add'">
        添加讲师
      </el-button>
    </div>
    <!--内容-->
    <div class="product-content">
      <div class="table-wrap">
        <el-table size="small" :data="tableData" border style="width: 100%" v-loading="loading">
          <el-table-column prop="name" label="讲师名称"></el-table-column>
          <el-table-column prop="category.name" label="讲师分类"></el-table-column>
          <el-table-column prop="image" label="讲师封面">
            <template  #default="scope">
              <div class="product-info">
                <div class="pic"><img v-img-url="scope.row.image_id!=0?scope.row.image.file_path:''" alt="" /></div>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="course_count" label="课程数量"></el-table-column>
          <el-table-column prop="virtual_browse" label="虚拟浏览"></el-table-column>
          <el-table-column prop="real_browse" label="实际浏览"></el-table-column>
          <el-table-column prop="is_show" label="状态">
            <template  #default="scope">
              <el-switch v-model="scope.row.is_show" :active-value="0" :inactive-value="1"
                @change="catSet($event,scope.row.lecturer_id)">
              </el-switch>
            </template>
          </el-table-column>
          <el-table-column prop="is_top" label="首页推荐">
            <template  #default="scope">
              <el-switch v-model="scope.row.is_top" :active-value="1" :inactive-value="0"
                @change="topSet($event,scope.row.lecturer_id)">
              </el-switch>
            </template>
          </el-table-column>
          <el-table-column prop="sort" label="排序" width="80"></el-table-column>
          <el-table-column fixed="right" label="操作" width="80">
            <template  #default="scope">
              <div>
                <el-button @click="editClick(scope.row)" type="text" size="small" v-auth="'/lecturer/lecturer/edit'">
                  编辑讲师
                </el-button>
              </div>
              <div>
                <el-button @click="delClick(scope.row)" type="text" size="small" v-auth="'/lecturer/lecturer/delete'">
                  删除讲师
                </el-button>
              </div>
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
  import LecturerApi from '@/api/lecturer.js';
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
          is_top: -1
        },
        /*列表数据*/
        tableData: [],
        /*全部分类*/
        categoryList: [],
        /*讲师统计*/
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
          path: '/lecturer/lecturer/add',
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
        LecturerApi.lecturerList(Params, true)
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
      editClick(row) {
        this.$router.push({
          path: '/lecturer/lecturer/edit',
          query: {
            lecturer_id: row.lecturer_id,
            scene: 'edit'
          }
        });
      },
      catSet(e, id) {
        let self = this;
        LecturerApi.lecturerState({
          lecturer_id: id,
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
        LecturerApi.lecturerTop({
          lecturer_id: id,
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
       ElMessageBox.confirm('删除后不可恢复，确定删除该记录吗?', '提示', {
            type: 'warning'
          })
          .then(() => {
            LecturerApi.delLecturer({
              lecturer_id: row.lecturer_id
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
