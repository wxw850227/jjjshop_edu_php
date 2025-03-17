<template>
  <!--
      作者 luoyiming
      时间：2020-06-09
      描述：会员-充值管理-充值设置-添加充值套餐
  -->
  <el-dialog title="添加充值套餐" v-model="dialogVisible" @close='dialogFormVisible' :close-on-click-modal="false"
    :close-on-press-escape="false" width="600px">
    <el-form size="small" :model="form" ref="form">
      <el-form-item label="套餐名称" :label-width="formLabelWidth" prop="plan_name" :rules="[{required: true,message: '请输入套餐名称'}]">
        <el-input v-model="form.plan_name" placeholder="请输入套餐名称"></el-input>
      </el-form-item>
      <el-form-item label="支付金额" :label-width="formLabelWidth" prop="money" :rules="[{required: true,message: '请输入支付金额'}]">
        <el-input type="number" v-model="form.money" placeholder="请输入支付金额"></el-input>
      </el-form-item>
      <el-form-item label="赠送金额" :label-width="formLabelWidth" prop="give_money" :rules="[{required: true,message: '请输入赠送金额'}]">
        <el-input type="number" placeholder="请输入赠送金额" v-model="form.give_money">
        </el-input>
      </el-form-item>
      <el-form-item label="到账金额" :label-width="formLabelWidth" prop="real_money" :rules="[{required: true,message: '请输入到账金额'}]">
        <el-input type="number" placeholder="请输入到账金额" v-model="form.real_money">
        </el-input>
      </el-form-item>
      <el-form-item label="排序" :label-width="formLabelWidth" prop="sort" :rules="[{required: true,message: '请输入排序'}]">
        <el-input type="number" placeholder="请输入排序" v-model="form.sort">
        </el-input>
      </el-form-item>
    </el-form>
    <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogFormVisible">取 消</el-button>
          <el-button type="primary" :disabled="submit_loading" @click="edit">确 定</el-button>
        </div>
    </template>
  </el-dialog>
</template>

<script>
  import planApi from '@/api/balance.js';
  import { deepClone } from '@/utils/base.js'
  export default {
    data() {
      return {
        form: {
            /*套餐名称*/
            plan_name:'',
            /*支付金额*/
            money:'',
            /*到账金额*/
            real_money:'',
            /*赠送金额*/
            give_money:'',
            /*排序*/
            sort:6,
        },
        /*左边长度*/
        formLabelWidth: '160px',
        /*是否显示*/
        dialogVisible: false,
        /*是否正在提交*/
        submit_loading: false,
      };
    },
    props: ['open','curModel'],
    watch:{
      open:function(n,o){
        if(n!=o){
           this.dialogVisible = this.open;
           this.form=deepClone(this.curModel);
        }
      }
    },
    created() {

    },
    methods: {

      /*添加等级*/
      edit() {
        let self = this;
        let params = this.form;
        self.$refs.form.validate((valid) => {
          if (valid) {
            self.submit_loading = true;
            planApi.editPlan(params, true).then(data => {
                self.submit_loading = false;
                ElMessage({
                  message: data.msg,
                  type: 'success'
                });
                self.dialogFormVisible(true);
              })
              .catch(error => {
                self.submit_loading = false;
              });
          }
        });
      },

      /*关闭弹窗*/
      dialogFormVisible(e) {
        if (e) {
          this.$emit('close', true)
        } else {
          this.$emit('close', false)
        }
      }

    }
  };
</script>

<style></style>
