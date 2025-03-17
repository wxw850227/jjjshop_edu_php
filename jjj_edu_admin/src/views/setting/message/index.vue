<template>
  <!--
      作者 luoyiming
      时间：2019-10-26
      描述：设置-消息设置
  -->
  <div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="会员通知" name="user">
      </el-tab-pane>
      <el-tab-pane label="获取手机号" name="mobile">
      </el-tab-pane>
    </el-tabs>
    
    <!--会员通知-->
    <Message v-if="activeName=='user'" :message_to="10"></Message>
    <!--获取手机号-->
    <GetPhone v-if="activeName=='mobile'"></GetPhone>

  </div>
</template>
<script>
  import Message from './Message.vue';
  import GetPhone from './getphone.vue'
  export default {
    components: {
      /*编辑组件*/
      Message,
      /*获取手机*/
      GetPhone
    },
    data() {
      return {
        /*参数*/
        message_to: 10,
        /*当前选中*/
        activeName: 'user'
      };
    },
    created() {
      if(this.$route.query.type!=null){
        this.activeName=this.$route.query.type;
      }

    },
    methods: {

    }
  };
</script>
