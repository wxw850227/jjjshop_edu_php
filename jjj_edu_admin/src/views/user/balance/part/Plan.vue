<template>
  <!--
      作者 luoyiming
      时间：2020-06-09
      描述：会员-充值管理-充值设置
  -->
  <div class="pb50 plan-setiting">
    <div class="d-s-s f-w">
      <div class="item d-c-c d-c mb16" v-for="(item, index) in planList" :key="index">
        <div class="f16 fb pb16">{{ item.plan_name }}</div>
        <div class="f14 gray9">
          支付金额：
          <span class="orange">{{ item.money }}</span>
        </div>
        <div class="f14 gray9">
          到账金额：
          <span class="orange">{{ item.real_money }}</span>
        </div>
        <div class="f14 gray9">
          赠送金额：
          <span class="orange">{{ item.give_money }}</span>
        </div>
        <div class="mt16">
          <span class="p-0-20">
            <el-link type="primary" @click="openEdit(item)">编辑</el-link>
          </span>
          <span class="p-0-20">
            <el-link type="danger" @click="delClick(item)">删除</el-link>
          </span>
        </div>
      </div>

      <div class="item item-add d-c-c d-c" @click="openAdd">
        <el-icon>
          <Plus></Plus>
        </el-icon>
        <span>添加</span>
      </div>
    </div>

    <Add :open="open_add" @close="closeAdd"></Add>

    <Edit :open="open_edit" @close="closeEdit" :curModel="curModel"></Edit>

  </div>
</template>
<script>
import planApi from '@/api/balance.js';
import Add from './plan/Add.vue';
import Edit from './plan/Edit.vue';
export default {
  components: {
    Add,
    Edit
  },
  data() {
    return {
      /*是否正在加载*/
      loading: false,
      /*充值套餐列表*/
      planList: [],
      /*是否打开添加*/
      open_add: false,
      /*是否打开编辑*/
      open_edit: false,
      /*当前项*/
      curModel:{}
    };
  },
  created() {
    /*获取数据*/
    this.getData();
  },
  methods: {
    /*获取数据*/
    getData() {
      let self = this;
      let Params = {};
      planApi
        .listPlan(Params, true)
        .then(res => {
          self.planList = res.data.list;
        })
        .catch(error => {});
    },

    /*打开添加*/
    openAdd() {
      this.open_add = true;
    },

    /*关闭添加*/
    closeAdd(e) {
      this.open_add = false;
      if (e) {
        this.getData();
      }
    },

    /*打开编辑*/
    openEdit(e){
      this.curModel=e;
      this.open_edit = true;
    },

    /*关闭编辑*/
    closeEdit(e) {
      this.open_edit = false;
      if (e) {
        this.getData();
      }
    },

    /*删除*/
    delClick: function(row) {
      let self = this;
     ElMessageBox.confirm('删除后不可恢复，确认删除该记录吗?', '提示', {
          type: 'warning'
        })
        .then(() => {
          planApi.deletePlan({
            plan_id: row.plan_id
          }).then(data => {
            ElMessage({
              message: '删除成功',
              type: 'success'
            });
            self.getData();
          });
        });
    },

  }
};
</script>

<style>
.plan-setiting .item {
  width: 240px;
  height: 160px;
  margin-right: 10px;
  border-radius: 16px;
  background: #f4f5f6;
}

.plan-setiting .item .el-icon-plus {
  font-size: 40px;
  color: #999999;
}

.plan-setiting .item.item-add {
  cursor: pointer;
}
</style>
