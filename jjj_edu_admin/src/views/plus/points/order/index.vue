<template>
  <!--
    作者：luoyiming
    时间：2020-06-04
    描述：插件中心-积分商城-兑换记录
  -->
  <div class="user">
    <!--搜索表单-->
    <div class="common-seach-wrap">
      <el-form size="small" :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="订单状态">
          <el-select v-model="formInline.order_status" placeholder="订单">
            <el-option label="全部" value="0"></el-option>
            <el-option v-for="(item, index) in status" :key="index" :label="item.name" :value="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="订单号">
          <el-input size="small" v-model="formInline.order_no" placeholder="请输入订单号"></el-input>
        </el-form-item>
        <el-form-item label="用户昵称">
          <el-input v-model="formInline.nickName" placeholder="请输入用户昵称"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="Search" @click="onSubmit">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button size="small" type="success" @click="onExport" v-auth="'/plus/points/order/export'">导出</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="product-content">
      <div class="table-wrap">
        <el-table size="small" :data="tableData" border style="width: 100%" v-loading="loading">
          <el-table-column prop="order_no" label="订单信息" width="330">
            <template #default="scope">
              <div class="product-info">
                <div class="pic"><img v-img-url="scope.row.file_path" alt="" /></div>
                <div class="info">
                  <div class="name gray3 product-name">
                    <span>{{ scope.row.product_name }}</span>
                  </div>
                </div>
                <div class="d-c-c d-c">
                  <div class="orange">金额：￥ {{ scope.row.product_price }}</div>
                  <div class="orange">积分： {{ scope.row.product_points }}</div>
                  <div class="gray3">数量：x{{ scope.row.total_num }}</div>
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="order_no" label="订单号"></el-table-column>
          <el-table-column prop="user.nickName" label="用户">
            <template #default="scope">
              <div class="d-s-c">
                <img v-img-url="scope.row.user.avatarUrl" width="30px" height="30px" />
                <div class="ml10">{{ scope.row.user.nickName }}</div>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="points_num" label="兑换积分">
            <template #default="scope">
              <span class="orange fb">{{ scope.row.points_num }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="pay_price" label="兑换金额">
            <template #default="scope">
              <div class="orange">{{ scope.row.pay_price }}</div>
              <p class="gray9">(含配送费：{{ scope.row.express_price }})</p>
            </template>
          </el-table-column>
          <el-table-column prop="delivery_type.text" label="配送方式">
            <template #default="scope">
              <span class="green">{{ scope.row.delivery_type.text }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="state_text" label="订单状态"></el-table-column>
          <el-table-column prop="create_time" label="兑换时间"></el-table-column>
          <el-table-column fixed="right" label="操作" width="150">
            <template #default="scope">
              <el-button @click="toDetail(scope.row)" type="text" size="small" v-auth="'/plus/points/order/detail'">订单详情
              </el-button>
              <el-button
                v-if="scope.row.delivery_status.value==10&&scope.row.pay_status.value==20&&scope.row.delivery_type.value==10"
                @click="toDetail(scope.row)" type="text" size="small" v-auth="'/plus/points/order/delivery'">发货
              </el-button>
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
  import PointsApi from '@/api/plus/points.js';
  import qs from 'qs';
  import { useUserStore } from '@/store';
  const { token } = useUserStore();
  export default {
    data() {
      return {
        /*搜索订单数据对象*/
        formInline: {
          /*状态*/
          order_status: '0',
          /*昵称*/
          nickName: '',
          /*配送方式*/
          style_id: '',
          /*订单号*/
          order_no: ''
        },
        tableData: [],
        /*一页多少条*/
        pageSize: 20,
        /*一共多少条数据*/
        totalDataNumber: 0,
        /*当前是第几页*/
        curPage: 1,
        /*是否加载完成*/
        loading: true,
        /*订单状态列表*/
        status: [{
            id: 10,
            name: '待发货'
          },
          {
            id: 20,
            name: '待收货'
          },
          {
            id: 30,
            name: '已完成'
          }
        ],
		token,
      };
    },
    created() {
      /*获取列表*/
      this.getData();
    },
    methods: {

      /*搜索*/
      onSubmit() {
        this.loading = true;
        this.curPage = 1;
        this.getData(true);
      },

      /*获取列表*/
      getData(isSearch) {
        let self = this;
        let Params = self.formInline;
        Params.page = self.curPage;
        Params.list_rows = self.pageSize;
        PointsApi.getExchange(Params, true)
          .then(data => {
            self.loading = false;
            self.tableData = data.data.list.data;
            self.totalDataNumber = data.data.list.total;
          })
          .catch(error => {});
      },

      /*选择第几页*/
      handleCurrentChange(val) {
        let self = this;
        self.curPage = val;
        self.loading = true;
        self.getData();
      },

      /*每页多少条*/
      handleSizeChange(val) {
        this.curPage = 1;
        this.pageSize = val;
        this.getData();
      },

      /*查看详情*/
      toDetail(row) {
        let self = this;
        let params = row.order_id;
        this.$router.push({
          path: '/plus/points/order/detail',
          query: {
            order_id: params
          }
        });
      },
      onExport: function() {
        let baseUrl = window.location.protocol + '//' + window.location.host;
		this.formInline.token = this.token;
        window.location.href = baseUrl + '/index.php/shop/plus.points.order/export?' + qs.stringify(this.formInline);
      },
    }
  };
</script>

<style></style>
