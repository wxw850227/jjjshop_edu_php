<template>
  <!--
    作者：luoyiming
    时间：2020-06-04
    描述：插件中心-积分商城-商品列表
  -->
  <div class="user" v-loading="loading">
    <div class="common-form d-s-c">
      <span>活动商品</span>
      <div class="ml20"><el-button type="primary" size="small" icon="Plus" @click="changeProduct" v-auth="'/plus/points/product/add'">添加商品</el-button></div>
    </div>
    <div class="product-content point-list">
      <div class="table-wrap">
        <el-table size="small" :data="tableData" border style="width: 100%">
          <el-table-column prop="product_name" label="商品名称" width="360">
            <template #default="scope">
              <div class="product-info">
                <div class="pic" style="width: 40px; height: 40px;"><img v-img-url="scope.row.file_path" alt="" /></div>
                <div class="info">
                  <div class="name">{{ scope.row.product_name }}</div>
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="积分">
            <template #default="scope">
              {{ scope.row.product_points }}
            </template>
          </el-table-column>
          <el-table-column label="金额">
            <template #default="scope">
              <span class="orange fb">{{ scope.row.product_price }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="limit_num" label="限购数量"></el-table-column>
          <el-table-column prop="product_stock" label="活动库存"></el-table-column>
          <el-table-column prop="product_sort" label="排序"></el-table-column>
          <el-table-column label="状态">
            <template #default="scope">
              <span v-if="scope.row.product_status.value == 10" class="green">上架</span>
              <span v-if="scope.row.product_status.value == 20" class="gray">下架</span>
            </template>
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="120">
            <template #default="scope">
              <el-button v-auth="'/plus/points/product/edit'" @click="editClick(scope.row.product_id)" type="text" size="small">编辑</el-button>
              <el-button  @click="deleteClick(scope.row.product_id)" type="text" size="small">删除</el-button>
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
  </div>
</template>
<script>
import PointsApi from '@/api/plus/points.js';
export default {
  components: {
  },
  data() {
    return {
      /*表格数据*/
      tableData: [],
      /*一页多少条*/
      pageSize: 15,
      /*一共多少条数据*/
      totalDataNumber: 0,
      /*当前是第几页*/
      curPage: 1,
      /*是否加载完成*/
      loading: true,
    };
  },
  created() {
    /*获取列表*/
    this.getTableList();
  },
  methods: {
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
      let Params = {};
      Params.page = self.curPage;
      Params.list_rows = self.pageSize;
      PointsApi.productList(Params, true)
        .then(res => {
          self.tableData = res.data.list.data;
          self.totalDataNumber = res.data.list.total;
          self.loading = false;
        })
        .catch(error => {
          self.loading = false;
        });
    },

    /*打开添加*/
    changeProduct(list) {
      this.$router.push('/plus/points/product/add');
    },

    /*编辑商品*/
    editClick(e) {
      let self = this;
      this.$router.push({
        path: '/plus/points/product/edit',
        query: {
          product_id: e
        }
      });
    },

    /*删除用户*/
    deleteClick(e) {
       console.log('Delete button clicked for product ID:', e);
      let self = this;
      ElMessageBox.confirm('此操作将永久删除该记录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
        .then(() => {
          self.loading = true;
          PointsApi.deleteProduct(
            {
              product_id: e
            },
            true
          )
            .then(data => {
              self.loading = false;
              ElMessage({
                message: data.msg,
                type: 'success'
              });
              self.getTableList();
            })
            .catch(error => {
              self.loading = false;
              console.error('Error deleting product:', error);
            });
        })
        .catch(() => {
          self.loading = false;
        });
    }

  }
};
</script>

<style>
.point-list .el-input-number--mini {
  width: auto;
}
</style>
