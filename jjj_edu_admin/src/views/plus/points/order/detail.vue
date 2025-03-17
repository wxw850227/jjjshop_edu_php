<template>
  <!--
      作者：luoyiming
      时间：2019-10-25
      描述：订单详情
  -->
  <div class="pb50" v-loading="loading">
    <!--内容-->
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
              <span class="gray9">兑换金额 (元)：</span>
              {{ detail.order_price }}
            </div>
          </el-col>
          <el-col :span="5">
            <div class="pb16">
              <span class="gray9">运费金额 (元)：</span>
              {{ detail.express_price }}
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
              <span class="gray9">兑换积分：</span>
              {{ detail.points_num }}
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
              <span class="gray9">配送方式：</span>
              {{ detail.delivery_type.text }}
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
          <el-table-column prop="product_name" label="商品" >
            <template #default="scope">
              <div class="product-info">
                <div class="pic"><img v-img-url="scope.row.file_path" /></div>
                <div class="info">
                  <div class="name">{{ scope.row.product_name }}</div>
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="product_price" label="金额(元)"></el-table-column>
          <el-table-column prop="product_points" label="积分"></el-table-column>
          <el-table-column prop="total_num" label="兑换数量">
            <template #default="scope">
              <p>x {{ scope.row.total_num }}</p>
            </template>
          </el-table-column>
          <el-table-column prop="total_price" label="商品总价">
            <template #default="scope">
              <p>金额：￥ {{ scope.row.total_price }}</p>
              <p>积分: {{ scope.row.points_num }}</p>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!--收货信息-->
      <div v-if="detail.delivery_type.value == 10">
        <div class="common-form mt16">收货信息</div>
        <div class="table-wrap">
          <el-row>
            <el-col :span="5">
              <div class="pb16">
                <span class="gray9">收货人：</span>
                {{ detail.address.name }}
              </div>
            </el-col>
            <el-col :span="5">
              <div class="pb16">
                <span class="gray9">收货电话：</span>
                {{ detail.address.phone }}
              </div>
            </el-col>
            <el-col :span="5">
              <div class="pb16">
                <span class="gray9">收货地址：</span>
                {{ detail.address.detail }}
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <!--自提门店信息-->
      <template v-if="detail.delivery_type.value == 20">
        <div class="common-form mt16">自提信息</div>
        <div class="table-wrap">
          <el-row>
            <el-col :span="5">
              <div class="pb16">
                <span class="gray9">门店ID：</span>
                {{ detail.store.shop_supplier_id }}
              </div>
            </el-col>
            <el-col :span="5">
              <div class="pb16">
                <span class="gray9">门店名称：</span>
                {{ detail.store.name }}
              </div>
            </el-col>
            <el-col :span="5">
              <div class="pb16">
                <span class="gray9">联系人：</span>
                {{ detail.store.link_name }}
              </div>
            </el-col>
            <el-col :span="5">
              <div class="pb16">
                <span class="gray9">联系电话：</span>
                {{ detail.store.link_phone }}
              </div>
            </el-col>
            <el-col :span="15">
              <div class="pb16">
                <span class="gray9">门店地址：</span>
                {{ detail.store.address }}
              </div>
            </el-col>
          </el-row>
        </div>
      </template>
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
                <span class="gray9">应付积分：</span>
                {{ detail.points_num }}
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
                {{ detail.pay_time }}
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <!--发货信息-->
      <div
        v-if="detail.pay_status.value == 20 && detail.delivery_type.value == 10 && [20, 21].indexOf(detail.order_status.value) === -1"
        v-auth="'/plus/points/order/delivery'">
        <div v-if="detail.delivery_status.value == 10">
          <!-- 去发货 -->
          <div class="common-form mt16">去发货</div>
          <el-form size="small" ref="form" :model="form" label-width="100px">
            <el-form-item label="物流公司">
              <el-select v-model="form.express_id" placeholder="请选择快递公司">
                <el-option :label="item.express_name" v-for="(item, index) in expressList" :key="index"
                  :value="item.express_id"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="物流单号">
              <el-input v-model="form.express_no" class="max-w460"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div v-else="">
          <div class="common-form mt16">发货信息</div>
          <div class="table-wrap">
            <el-row>
              <el-col :span="5">
                <div class="pb16">
                  <span class="gray9">物流公司：</span>
                  {{ detail.express.express_name }}
                </div>
              </el-col>
              <el-col :span="5">
                <div class="pb16">
                  <span class="gray9">物流单号：</span>
                  {{ detail.express_no }}
                </div>
              </el-col>
              <el-col :span="5">
                <div class="pb16">
                  <span class="gray9">发货状态：</span>
                  {{ detail.delivery_status.text }}
                </div>
              </el-col>
              <el-col :span="5">
                <div class="pb16">
                  <span class="gray9">发货时间：</span>
                  {{ detail.delivery_time }}
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
      <!--门店自提核销-->
      <div
        v-if="detail.delivery_type.value == 20 && detail.pay_status.value == 20 && detail.order_status.value != 21 && detail.order_status.value != 20"
        v-auth="'/plus/points/order/extract'">
        <div class="common-form mt16">门店自提核销</div>
        <div v-if="detail.delivery_status.value == 10">
          <el-form size="small" ref="extract_form" :model="extract_form" label-width="100px">
            <el-form-item label="买家取货状态 ">
              <el-radio v-model="extract_form.order.extract_status" :label="1">已取货</el-radio>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onExtract(detail.order_id)">确认核销</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div v-else class="table-wrap">
          <template >
            <el-row>
              <el-col :span="5">
                <div class="pb16">
                  <span class="gray9">自提门店名称：</span>
                  {{ detail.store.name }}
                </div>
              </el-col>
              <el-col :span="5">
                <div class="pb16">
                  <span class="gray9">自提门店电话：</span>
                  {{ detail.store.link_name }}
                </div>
              </el-col>
              <el-col :span="5">
                <div class="pb16">
                  <span class="gray9">核销状态：</span>
                  <template v-if="detail.delivery_status.value == 20">
                    已核销
                  </template>
                </div>
              </el-col>
              <el-col :span="5">
                <div class="pb16">
                  <span class="gray9">核销时间：</span>
                  {{ detail.delivery_time }}
                </div>
              </el-col>
            </el-row>
          </template>
        </div>
      </div>

    </div>
    <div class="common-button-wrapper">
      <el-button size="small" type="info" @click="cancelFunc">返回上一页</el-button>
      <!--确认发货-->
      <template
        v-if="detail.pay_status.value == 20 && detail.delivery_type.value == 10 && [20, 21].indexOf(detail.order_status.value) === -1">
        <el-button size="small" type="primary" @click="onSubmit" v-if="detail.delivery_status.value == 10">确认发货
        </el-button>
      </template>
    </div>
  </div>
</template>
<script>
  import PointsApi from '@/api/plus/points.js';
  import {
    deepClone
  } from '@/utils/base.js';
  export default {
    components: {},
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
          store: [],
          express: [],
          delivery_status: [],
        },
        /*是否打开添加弹窗*/
        open_add: false,
        /*一页多少条*/
        pageSize: 20,
        /*一共多少条数据*/
        totalDataNumber: 0,
        /*当前是第几页*/
        curPage: 1,
        /*发货*/
        form: {
          /*订单ID*/
          express_id: null,
          /*订单号*/
          express_no: ''
        },
        extract_form: {
          order: {
            extract_status: 1
          }
        },
        order: {},
        delivery_type: 0,
        /*时间*/
        create_time: '',
        /*快递公司列表*/
        expressList: [],
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
        PointsApi.orderdetail({
              order_id: params
            },
            true
          )
          .then(data => {
            self.loading = false;
            self.detail = data.data.detail;
            self.expressList = data.data.expressList;
          })
          .catch(error => {
            self.loading = false;
          });
      },

      /*发货*/
      onSubmit() {
        let self = this;
        let param = self.form;
        if (param.express_id == null) {
          ElMessage.error('请选择物流公司');
          return;
        }
        if (param.express_no == '') {
          ElMessage.error('请填写物流单号');
          return;
        }
        let order_id = this.$route.query.order_id;
        PointsApi.delivery({
              param: param,
              order_id: order_id
            },
            true
          )
          .then(data => {
            self.loading = false;
            ElMessage({
              message: '恭喜你，发货成功',
              type: 'success'
            });
            self.getParams();
          })
          .catch(error => {
            self.loading = false;
          });
      },

      /*核销*/
      onExtract(e) {
        let self = this;
        let extract_form = self.extract_form;
        let order_id = e;
        PointsApi.extract({
              order_id
            },
            true
          )
          .then(data => {
            self.loading = false;
            ElMessage({
              message: '恭喜你，操作成功',
              type: 'success'
            });
            self.getParams();
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
