<template>
  <!--
    	作者：luoyiming
    	时间：2020-06-20
    	描述：diy组件-参数设置-搜索栏
    -->
  <div>
    <div class="common-form"><span>{{ curItem.name }}</span></div>
     <el-form size="small" :model="curItem" label-width="100px">
       <el-form-item label="提示文字：">
         <el-input v-model="curItem.params.placeholder"></el-input>
       </el-form-item>
       <el-form-item label="搜索框样式：">
         <el-radio-group v-model="curItem.style.searchStyle">
             <el-radio label="3">方形</el-radio>
             <el-radio label="6">圆角</el-radio>
             <el-radio label="9">圆弧</el-radio>
           </el-radio-group>
       </el-form-item>
       <el-form-item label="文字对齐：">
         <el-radio-group v-model="curItem.style.textAlign">
             <el-radio label="3">居左</el-radio>
             <el-radio label="6">居中</el-radio>
             <el-radio label="9">居右</el-radio>
           </el-radio-group>
       </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      };
    },
    props: ['curItem'],
    methods: {

    }
  };
</script>

<style>

</style>
