<template>
  <!--
      作者 luoyiming
      时间：2020-06-09
      描述：会员-积分管理-积分设置
  -->
  <div class="pb50">
    <el-form ref="form" size="small" :model="form" label-width="200px">
      <div class="common-form">充值设置</div>
      <el-form-item label="是否开启余额充值">
        <el-radio-group v-model="form.is_open">
          <el-radio label="1">开启</el-radio>
          <el-radio label="0">关闭</el-radio>
        </el-radio-group>
        <div class="lh18 mt10 gray9">
          <p>注：如开启则移动端显示充值按钮，如果小程序没有资质审核不过可不开启</p>
        </div>
      </el-form-item>
      <el-form-item label="是否开启自定义金额">
        <el-radio-group v-model="form.is_plan">
          <el-radio label="1">开启</el-radio>
          <el-radio label="0">关闭</el-radio>
        </el-radio-group>
        <div class="lh18 mt10 gray9">
          <p>注：如开启则用户可以填写充值金额</p>
        </div>
      </el-form-item>
      <el-form-item label="最低充值金额" prop="min_money" :rules="[{required: true,message: ' '}]">
        <el-input placeholder="请输入内容" v-model="form.min_money" class="max-w460">
          <template #append>元</template>
        </el-input>
        <div class="lh18 mt10 gray9">
          <p> 注：自定义充值金额最低充值多少元</p>
        </div>
      </el-form-item>
      <el-form-item label="充值说明" :rules="[{required: true,message: ' '}]">
        <el-input type="textarea" rows="5" v-model="form.describe" autocomplete="off"></el-input>
      </el-form-item>
      <!--提交-->
      <div class="common-button-wrapper">
        <el-button type="primary" size="small" @click="onSubmit" :loading="loading">提交</el-button>
      </div>
    </el-form>
  </div>
</template>
<script>
  import BalanceApi from '@/api/balance.js';
  export default {
    data() {
      return {
        form: {

        },
        loading: false,
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
        BalanceApi.getSettings(Params, true).then(data => {
          self.form = data.data.values;
        }).catch(error => {

        });
      },

      /*保存*/
      onSubmit() {
        let self = this;
        let form = self.form;
        self.$refs.form.validate((valid) => {
          if (valid) {
            self.loading = true;
            BalanceApi.setSettings(form, true)
              .then(data => {
                self.loading = false;
                if (data.code == 1) {
                  ElMessage({
                    message: '恭喜你，保存成功',
                    type: 'success'
                  });
                } else {
                  self.loading = false;
                }
              })
              .catch(error => {
                self.loading = false;
              });
          }
        });
      },
    }
  };
</script>

<style>
</style>
