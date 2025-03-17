<template>
  <!--
    作者：luoyiming
    时间：2020-06-04
    描述：插件中心-积分商城
  -->
  <div>
    <!--商品设置-->
    <Productindex v-if="activeName == 'product'"></Productindex>
    <!--兑换记录-->
    <Order v-if="activeName == 'order'"></Order>

  </div>
</template>
<script>
import { reactive, toRefs, defineComponent } from 'vue';
import { useUserStore } from "@/store";
import Productindex from './product/index.vue';
import Order from './order/index.vue';

export default defineComponent({
  components: {
    Productindex,
    Order
  },
  setup() {
   const { bus_emit, bus_off, bus_on } = useUserStore();
   const state = reactive({
        bus_emit,
        bus_off,
        bus_on,
      /*参数*/
      param: {},
      /*当前选中*/
      activeName: 'product',
      /*切换数组原始数据*/
      sourceList: [
        {
          key: 'product',
          value: '商品列表',
          path:'/plus/points/product/index'
        },
        {
          key: 'order',
          value: '兑换记录',
          path:'/plus/points/order/index'
        }
      ],
      /*权限筛选后的数据*/
      tabList:[],

})
      return {
    ...toRefs(state),
     };
  },
  created() {

    this.tabList=this.authFilter();

    if(this.tabList.length>0){
      this.activeName=this.tabList[0].key;
    }

    if (this.$route.query.type != null) {
      this.activeName = this.$route.query.type;
    }

    /*监听传插件的值*/
    this.bus_on('activeValue', res => {
      this.activeName = res;
    });

    //发送类别切换
    let params = {
      active: this.activeName,
      list: this.tabList,
      tab_type: 'points'
    };
   this.bus_emit('tabData', params);
  },
  beforeUnmount() {
    //发送类别切换
    this.bus_emit('tabData', { active: null, tab_type: 'points', list: [] });
    this.bus_off('activeValue');
  },
  methods: {

    /*权限过滤*/
    authFilter(){
      let list=[];
      for(let i=0;i<this.sourceList.length;i++){
        let item=this.sourceList[i];
        if(this.$filter.isAuth(item.path)){
          list.push(item);
        }
      }
      return list;
    },

  }
});
</script>
