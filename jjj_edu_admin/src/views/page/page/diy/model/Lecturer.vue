<template>
  <!--
    	作者：luoyiming
    	时间：2020-06-20
    	描述：diy组件-模拟显示-商品栏
    -->
  <div class="drag optional p-0-12 box-s-b" :class="{ selected: index === selectedIndex }"
    @click.stop="$parent.$parent.onEditer(index)">
    <div class="diy-lecturer">
      <div v-for="(litem,index) in item.data" :key="index" class="lecturer-item">
        <div class="lecturer-image"><img v-img-url="litem.image"></div>
        <div class="lecturer-name">{{litem.title}}</div>
      </div>
    </div>
    <div class="btn-edit-del">
      <div class="btn-del" @click.stop="$parent.$parent.onDeleleItem(index)">删除</div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        /*分类id*/
        category_id: 0,
      };
    },
    created() {
      /*获取列表*/
      console.log(this.item)
    },
    props: ['item', 'index', 'selectedIndex'],
    methods: {
      /*计算宽度*/
      getUlwidth(item) {
        if (item.style.display == 'slide') {
          let total = 0;
          if (item.params.source == 'choice') {
            total = item.data.length;
          } else {
            total = item.defaultData.length;
          }
          let w = 0;
          if (item.style.column == 2) {
            w = total * 150;
          } else {
            w = total * 100;
          }
          return 'width:' + w + 'px;';
        }
      }
    }
  };
</script>

<style>
  .diy-lecturer{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    overflow-x: auto;
  }
  .lecturer-item {
    width: 124px;
    height: 143px;
    background: #FFFFFF;
    border: 2px solid #FFFFFF;
    border-radius: 12px;
    padding-top: 19px;
    box-sizing: border-box;
    margin-right: 11px;
  }

  .lecturer-image {
    overflow: hidden;
    margin: 0 auto;
    margin-bottom: 10px;
  }

  .lecturer-image,
  .lecturer-image>img {
    width: 71px;
    height: 71px;
    border-radius: 50%;
  }

  .lecturer-name {
    font-size: 13px;
    color: #111111;
    text-align: center;
  }
</style>
