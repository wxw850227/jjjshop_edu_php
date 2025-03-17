<template>
  <!--
      作者：luoyiming
      时间：2019-10-25
      描述：订单详情
  -->
  <div class="pb50" v-loading="loading">
    <div class="product-content">
      <!--基本信息-->
      <div class="common-form">基本信息</div>
      <div class="table-wrap">
        <el-row>
          <el-col :span="5">
            <div class="pb16">
              <span class="gray9">订单号：</span>
              {{ detail.order_no }}
            </div>
          </el-col>
          <el-col :span="5">
            <div class="pb16">
              <span class="gray9">买家：</span>
              {{ detail.user.nickName }}
              <span>用户ID：({{ detail.user.user_id }})</span>
            </div>
          </el-col>
          <el-col :span="5">
            <div class="pb16">
              <span class="gray9">订单金额 (元)：</span>
              {{ detail.order_price }}
            </div>
          </el-col>
          <el-col :span="5">
            <div class="pb16" v-if="detail.points_money > 0">
              <span class="gray9">积分抵扣 (元)：</span>
              {{ detail.points_money }}
            </div>
          </el-col>
          <el-col :span="5">
            <div class="pb16">
              <span class="gray9">实付款金额 (元)：</span>
              {{ detail.pay_price }}
            </div>
          </el-col>
          <el-col :span="5">
            <div class="pb16">
              <span class="gray9">支付方式：</span>
              {{ detail.pay_type.text }}
            </div>
          </el-col>
          <el-col :span="5">
            <div class="pb16">
              <span class="gray9">交易状态：</span>
              {{ detail.order_status.text }}
            </div>
          </el-col>
        </el-row>
      </div>
      <!--商品信息-->
      <div class="common-form mt16">商品信息</div>
      <div class="table-wrap">
        <el-table size="small" :data="detail.product" border style="width: 100%">
          <el-table-column prop="product_name" label="商品" width="400">
            <template  #default="scope">
              <div class="product-info">
                <div class="pic"><img v-img-url="scope.row.image.file_path" /></div>
                <div class="info">
                  <div class="name">{{ scope.row.title }}</div>
                  <div class="price">
                    <span class="gray6">￥
                      {{ scope.row.product_price }}</span>
                  </div>
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="total_num" label="购买数量">
            <template  #default="scope">
              <p>x {{ scope.row.total_num }}</p>
            </template>
          </el-table-column>
          <el-table-column prop="total_price" label="商品总价(元)">
            <template  #default="scope">
              <p>￥ {{ scope.row.total_price }}</p>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <!--付款信息-->
      <div class="table-wrap" v-if="detail.pay_status.value == 20">
        <div class="common-form mt16">付款信息</div>
        <div class="table-wrap">
          <el-row>
            <el-col :span="5">
              <div class="pb16">
                <span class="gray9">应付款金额：</span>
                {{ detail.pay_price }}
              </div>
            </el-col>
            <el-col :span="5">
              <div class="pb16">
                <span class="gray9">支付方式：</span>
                {{ detail.pay_type.text }}
              </div>
            </el-col>
            <el-col :span="5">
              <div class="pb16">
                <span class="gray9">支付流水号：</span>
                {{ detail.transaction_id }}
              </div>
            </el-col>
            <el-col :span="5">
              <div class="pb16">
                <span class="gray9">付款状态：</span>
                {{ detail.pay_status.text }}
              </div>
            </el-col>
            <el-col :span="5">
              <div class="pb16">
                <span class="gray9">付款时间：</span>
                {{ detail.pay_time_text }}
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <div class="common-button-wrapper">
      <el-button size="small" type="info" @click="cancelFunc">返回上一页</el-button>
    </div>
  </div>
</template>

<script>
  import OrderApi from '@/api/order.js';
  import {
    deepClone,

  } from '@/utils/base.js';
  export default {
    components: {
    },
    data() {
      return {
        active: 0,
        /*是否加载完成*/
        loading: true,
        /*订单数据*/
        detail: {
          pay_status: [],
          pay_type: [],
          delivery_type: [],
          user: {},
          address: [],
          product: [],
          order_status: [],
        },
        /*是否打开添加弹窗*/
        open_add: false,
        /*一页多少条*/
        pageSize: 20,
        /*一共多少条数据*/
        totalDataNumber: 0,
        /*当前是第几页*/
        curPage: 1,
        order: {},
        /*当前编辑的对象*/
        userModel: {},
        /*时间*/
        create_time: '',
      };
    },
    created() {
      /*获取列表*/
      this.getParams();
    },
    methods: {
      next() {
        if (this.active++ > 4) this.active = 0;
      },
      /*获取参数*/
      getParams() {
        let self = this;
        // 取到路由带过来的参数
        const params = this.$route.query.order_id;
        OrderApi.orderdetail({
              order_id: params
            },
            true
          )
          .then(data => {
            self.loading = false;
            self.detail = data.data.detail;
          })
          .catch(error => {
            self.loading = false;
          });
      },

      /*取消*/
      cancelFunc() {
        this.$router.back(-1);
      },

    }
  };
</script>
<style></style>
