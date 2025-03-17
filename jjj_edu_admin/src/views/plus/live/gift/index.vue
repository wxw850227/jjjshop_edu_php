<template>
  <!--
        作者：luoyiming
        时间：2020-07-25
        描述：插件中心-直播-礼物
    -->
  <div class="list">
    <div class="common-level-rail"><el-button size="small" type="primary" @click="addClick" icon="Plus" v-auth="'/plus/live/gift/add'">添加礼物</el-button></div>

    <!--内容-->
    <div class="product-content">
      <div class="table-wrap">
        <el-table size="small" :data="tableData" border style="width: 100%" v-loading="loading">
          <el-table-column prop="gift_id" label="id" width="70"></el-table-column>
          <el-table-column prop="image_id" label="图标" width="70">
            <template  #default="scope">
              <img v-img-url="scope.row.file_path" style="width: 30px; height: 30px;" alt="" />
            </template>
          </el-table-column>
          <el-table-column prop="gift_name" label="礼物名称"></el-table-column>
          <el-table-column prop="price" label="礼物价格"></el-table-column>
          <el-table-column prop="is_hot" label="是否热门" >
            <template  #default="scope">
              {{scope.row.is_hot!=1?'否':'是'}}
            </template>
          </el-table-column>
          <el-table-column prop="is_active" label="是否活动" >
            <template  #default="scope">
              {{scope.row.is_active!=1?'否':'是'}}
            </template>
          </el-table-column>
          <el-table-column prop="create_time" label="添加时间"></el-table-column>
          <el-table-column fixed="right" label="操作" width="100">
            <template  #default="scope">
              <el-button @click="editClick(scope.row)" type="text" size="small" v-auth="'/plus/live/gift/edit'">编辑</el-button>
              <el-button @click="deleteClick(scope.row)" type="text" size="small" v-auth="'/plus/live/gift/delete'">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
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

    <!--添加-->
    <Add v-if="open_add" :open_add="open_add" @close="closeAdd($event, 'add')"></Add>

    <!--修改-->
    <Edit v-if="open_edit" :open_edit="open_edit" :form="curModel" @close="closeEdit($event, 'edit')"></Edit>
  </div>
</template>

<script>
import liveApi from '@/api/live.js';
import Add from './dialog/Add.vue';
import Edit from './dialog/Edit.vue';
export default {
  components: {
    Add,
    Edit
  },
  inject: ['reload'],
  data() {
    return {
      /*是否加载完成*/
      loading: false,
      /*列表数据*/
      tableData: [{}],
      /*一页多少条*/
      pageSize: 20,
      /*一共多少条数据*/
      totalDataNumber: 0,
      /*当前是第几页*/
      curPage: 1,
      /*横向表单数据模型*/
      searchForm: {
        search: ''
      },
      /*是否打开弹窗*/
      open: false,
      /*编辑对象*/
      curModel: {},
      /*是否打开添加弹窗*/
      open_add: false,
      /*是否打开编辑弹窗*/
      open_edit: false
    };
  },
  created() {
    /*获取列表*/
    this.getTableList();
  },
  methods: {
    /*搜索*/
    searchSubmit() {
      this.curPage = 1;
      this.getTableList();
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
      this.pageSize = val;
      this.getTableList();
    },

    /*获取列表*/
    getTableList() {
      let self = this;
      let Params = {
        page: self.curPage,
        list_rows: self.pageSize,
        username: self.searchForm.search
      };

      liveApi
        .getGift(Params, true)
        .then(data => {
          self.loading = false;
          self.tableData = data.data.list.data;
          self.totalDataNumber = data.data.list.total;
        })
        .catch(error => {});
    },

    /*删除分类*/
    deleteClick(row) {
      let self = this;
     ElMessageBox.confirm('删除后不可恢复，确认删除该记录吗?', '提示', {
          type: 'warning'
        })
        .then(() => {
          liveApi.deleteGift({
            gift_id: row.gift_id
          }).then(data => {
            ElMessage({
              message: '删除成功',
              type: 'success'
            });
            self.getTableList();
          });
        });
    },

    /*打开添加*/
    addClick() {
      this.open_add = true;
    },

    /*关闭添加*/
    closeAdd() {
      this.open_add = false;
      this.getTableList();
    },

    /*打开编辑*/
    editClick(item) {
      this.curModel = item;
      this.open_edit = true;
    },

    /*关闭弹窗*/
    closeEdit(e, f) {
      this.open_edit = false;
      this.getTableList();
    }
  }
};
</script>

<style></style>
