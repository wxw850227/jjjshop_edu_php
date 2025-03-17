<template>
  <!--
    	作者：luoyiming
    	时间：2019-10-26
    	描述：商品管理-商品编辑-规格/库存-单规格
    -->
  <div>
    <el-form-item label="兑换积分：" width="80" :rules="rules.product_points" prop="model.product_points">
      <el-input type="number" v-model="form.model.product_points" min="1" class="max-w180 mr10"></el-input>积分
    </el-form-item>
    <el-form-item label="兑换金额：" width="80" prop="model.product_price">
      <el-input type="number" v-model="form.model.product_price" class="max-w180 mr10"></el-input>元
    </el-form-item>
    <el-form-item label="库存数量：" :rules="[{ required: true, message: '请填写库存数量' }]" prop="model.product_stock">
      <el-input type="number" v-model="form.model.product_stock" class="max-w460"></el-input>
    </el-form-item>
  </div>
</template>

<script>
  export default {

    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入积分'));
        } else {
          if (value <= 0) {
            callback(new Error('兑换积分不小于1'));
          }
          callback();
        }
      };
      return {
        rules: {
          product_points: [{
            validator: validatePass,
            trigger: 'blur'
          }]
        }
      }
    },
    inject: ['form']
  }
</script>

<style>
  .max-w180 {
    max-width: 180px;
  }
</style>
