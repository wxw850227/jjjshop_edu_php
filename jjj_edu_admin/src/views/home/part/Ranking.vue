<template>
  <div class="right-box d-s-s d-c">
    <div class="lh30 f16 tl">排行榜</div>
    <div class="ww100 mt10">
      <el-tabs v-model="activeName" type="card" @tab-change="handleClick">
        <el-tab-pane label="课程TOP10" name="sale"></el-tab-pane>
      </el-tabs>
    </div>
    <div class="list ww100">
      <ul v-if="listData.length>0">
        <li v-for="(item, index) in listData" :key="index" class="d-s-c p-6-0 border-b-d">
          <span class="key-box">{{ index + 1 }}</span>
          <span class="text-ellipsis-2 flex-1 ml10">{{ item.title }}</span>
          <span class="gray9 tr" style="width: 200px;" >
            <template v-if="activeName=='sale'">
              销量：{{ item.total_num }}
              销售额：{{ item.total_price }}
            </template>
           </span>
        </li>
      </ul>
      <div v-else class="tc pt30">暂无上榜记录</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: 'sale',
      /*列表数据*/
      listData: []
    };
  },
  inject: ['dataRank'],
  created() {
 this.listData = this.dataRank.courseRank;
 console.log(this.listData);
  },
  mounted() {
   
  },
  methods: {
    handleClick() {
      if(this.activeName=='sale'){
        this.listData=this.dataRank.courseRank;
      }
    }
  }
};
</script>

<style scoped="scoped">
.right-box {

  width: 100%;
  box-sizing: border-box;
}
.Echarts > div {
  height: 400px;
}
.right-box .list .key-box {
  width: 20px;
  height: 20px;
  line-height: 20px;
  border-radius: 50%;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
  background: red;
}
.right-box .list img {
  width: 30px;
  height: 30px;
}
</style>
