<template>
  <!--
    作者：luoyiming
    时间：2020-06-25
    描述：插件中心-直播-微信直播
  -->
  <div>
    <div class="common-form d-s-c">
      <span>直播同步</span>
      <div class="ml20 flex-1 d-b-c">
        <el-button type="primary" size="small" icon="Plus" @click="synLive">同步直播</el-button>
        <el-form size="small" :inline="true" :model="searchForm" class="demo-form-inline">
          <el-form-item label=""><el-input v-model="searchForm.search" placeholder="请输入直播间名称/主播昵称"></el-input></el-form-item>
          <el-form-item><el-button type="primary" icon="Search" @click="onSubmit">查询</el-button></el-form-item>
        </el-form>
      </div>
    </div>

    <!--内容-->
    <div class="live-list">
      <div class="table-wrap">
        <el-table size="small" :data="tableData" border style="width: 100%" v-loading="loading">
          <el-table-column prop="live_id" label="直播间ID"></el-table-column>
          <el-table-column prop="name" label="直播间名称"></el-table-column>
          <el-table-column prop="anchor_name" label="主播昵称"></el-table-column>
          <el-table-column prop="start_time_text" label="直播开始时间"></el-table-column>
          <el-table-column prop="end_time_text" label="直播结束时间"></el-table-column>
          <el-table-column prop="live_status" label="直播间状态">
            <template  #default="scope">
              {{ scope.row.live_status | convertStatus }}
            </template>
          </el-table-column>
          <el-table-column prop="is_top" label="置顶">
            <template  #default="scope">
              <span v-if="scope.row.is_top == 0" class="gray">未置顶</span>
              <span v-else class="red">已置顶</span>
            </template>
          </el-table-column>
          <el-table-column prop="create_time" label="更新时间"></el-table-column>
          <el-table-column fixed="right" label="操作" width="80">
            <template  #default="scope">
              <!-- <el-button @click="editClick(scope.row)" type="text" size="small" v-auth="'/product/product/edit'">编辑</el-button>
              <el-button @click="delClick(scope.row)" type="text" size="small" v-auth="'/product/product/delete'">删除</el-button> -->
              <el-button @click="setTop(scope.row)" type="text" size="small">
                {{scope.row.is_top == 0?'设为置顶':'取消置顶'}}
              </el-button>
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
import LiveApi from '@/api/live.js';
export default {
  data() {
    return {
      /*搜索表单对象*/
      searchForm: {},
      /*是否正在加载*/
      loading: true,
      /*一页多少条*/
      pageSize: 10,
      /*一共多少条数据*/
      totalDataNumber: 0,
      /*当前是第几页*/
      curPage: 1,
      /*列表数据*/
      tableData: []
    };
  },
  created() {
    this.getData();
  },
  filters: {
    convertStatus: function(num) {
      let str = '';
      switch (num) {
        case 101:
          str = '直播中';
          break;
        case 102:
          str = '未开始';
          break;
        case 103:
          str = '已结束';
          break;
        case 104:
          str = '禁播';
          break;
        case 105:
          str = '暂停';
          break;
        case 106:
          str = '异常';
          break;
        case 107:
          str = '已过期';
          break;
      }
      return str;
    }
  },
  methods: {
    /*查询*/
    onSubmit() {
      this.curPage = 1;
      this.getData();
    },

    /*选择第几页*/
    handleCurrentChange(val) {
      let self = this;
      self.curPage = val;
      self.getData();
    },

    /*每页多少条*/
    handleSizeChange(val) {
      this.pageSize = val;
      this.getData();
    },

    /*获取列表*/
    getData() {
      let self = this;
      let Params = self.searchForm;
      Params.page = self.curPage;
      Params.list_rows = self.pageSize;
      self.loading = true;
      LiveApi.getList(Params, true)
        .then(res => {
          self.tableData = res.data.list.data;
          self.totalDataNumber=res.data.list.total;
          self.loading = false;
        })
        .catch(error => {
          self.loading = false;
        });
    },

    /*直播同步*/
    synLive() {
      let self = this;
      self.loading = true;
      LiveApi.syn({}, true)
        .then(res => {
          self.loading = false;
        })
        .catch(error => {
          self.loading = false;
        });
    },

    /*设置是否置顶*/
    setTop(row) {
      let self = this;
      LiveApi.settop({
        live_id: row.live_id,
        is_top: row.is_top == 0 ? 1 : 0
      }).then(data => {
        ElMessage({
          message: '置顶成功',
          type: 'success'
        });
        self.getData();
      });
    },

    /*编辑*/
    editClick() {},

    /*删除*/
    delClick: function(row) {
      let self = this;
     ElMessageBox.confirm('删除后不可恢复，确认删除该记录吗?', '提示', {
          type: 'warning'
        })
        .then(() => {
          LiveApi.del({
            live_id: row.live_id
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

<style scoped="scoped"></style>
