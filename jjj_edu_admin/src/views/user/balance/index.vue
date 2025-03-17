<template>
  <!--
      作者 luoyiming
      时间：2020-06-09
      描述：会员-积分管理
  -->
  <div class="common-seach-wrap">
    <el-tabs v-model="activeName">
      <el-tab-pane label="余额明细" name="log"></el-tab-pane>
      <el-tab-pane label="充值设置" name="settings"></el-tab-pane>
      <el-tab-pane label="充值套餐" name="plan"></el-tab-pane>
      <el-tab-pane label="充值记录" name="record"></el-tab-pane>
    </el-tabs>

    <!--余额明细-->
    <Log v-if="activeName == 'log'"></Log>
    <!--余额设置-->
    <Setting v-if="activeName == 'settings'"></Setting>
    <!--充值套餐-->
    <Plan v-if="activeName == 'plan'"></Plan>
    <!--充值记录-->
    <Record v-if="activeName == 'record'"></Record>

  </div>
</template>
<script>
import Setting from './part/Setting.vue';
import Log from './part/Log.vue';
import Plan from './part/Plan.vue';
import Record from './part/Record.vue';
export default {
  components: {
    Setting,
    Log,
    Plan,
    Record
  },
  data() {
    return {
      form: {
        status: 0
      },
      activeName: 'log'
    };
  },
  methods: {}
};
</script>

<style>

</style>
