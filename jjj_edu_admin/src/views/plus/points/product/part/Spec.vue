<template>
  <!--
    	作者：luoyiming
    	时间：2019-10-26
    	描述：商品管理-商品编辑-规格/库存
    -->
  <div>
    <!--规格设置-->
    <div class="common-form mt50">规格/库存</div>
    <!--单规格-->
    <Single></Single>
  </div>
</template>

<script>
  import Single from './spec/Single.vue';
  export default {
    components: {
      /*单规格*/
      Single,
    },
    data() {
      return {
        restaurants: []
      }
    },
    inject: ['form'],
    methods: {}
  };
</script>

<style>

</style>
