<template>
  <!--
    	作者：luoyiming
    	时间：2020-06-20
    	描述：diy组件-模拟显示-轮播图
    -->
  <div class="drag optional" @click.stop="$parent.$parent.onEditer(index)" :class="{selected: index === selectedIndex}"
    :style="'background-color:'+item.style.background+';'">
    <div class="diy-banner round" :style="'height:'+(item.style.height*0.5)+'px;'" >
      <div class="img-list">
        <template v-for="(banner, index) in item.data" :key="index">
          <div :key="index" v-if="index <= 1">
            <img :style="'height:'+(item.style.height*0.5)+'px;'" v-img-url="banner.imgUrl">
          </div>
        </template>
      </div>
      <div class="dots center d-c-c">
        <div :key="index" :class="index==0?'active '+item.style.btnShape:item.style.btnShape"
          v-for="(banner,index) in item.data" :style="index==0?'background:item.style.btnColor':''"></div>
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

      };
    },
    props: ['item', 'index', 'selectedIndex'],
    methods: {

    }
  };
</script>

<style lang="scss">
  .p15{
    padding: 15px;
  }
  .diy-banner.round {
    padding: 12px;
    box-sizing: content-box;
    overflow: hidden;
    text-align: center;
  }

  .diy-banner.round img {
    width: 100%;
    height: 100px;
    object-fit: fill;
    border-radius: 10px;
    margin-bottom: 12px;
    box-sizing: content-box;
  }

  .diy-banner.square {
    height: 100px;
    overflow: hidden;
    text-align: center;
  }

  .diy-banner.square img {
    width: 100%;
    height: 100px;
    object-fit: fill;
  }

  .diy-banner.square .dots {
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    bottom: 10px;
  }

  .diy-banner.round .dots {
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    bottom: 20px;
  }

  .diy-banner .dots .square,
  .diy-banner .dots .round,
  .diy-banner .dots .rectangle {
    bottom: 40rpx;
    left: 0;
    right: 0;
    margin: auto;
  }

  .diy-banner .dots .square {
    width: 7px;
    height: 7px;
    margin: 0 2px;
    background: #ebedf0;
    opacity: 0.3;
  }

  .diy-banner .dots .round {
    width: 11px;
    height: 11px;
    margin: 0 2px;
    background: #ebedf0;
    opacity: 0.3;
    border-radius: 50%;
  }

  .diy-banner .dots .rectangle {
    width: 20px;
    height: 3px;
    margin: 0 2px;
    background: #ebedf0;
    opacity: 0.3;
    border-radius: 4rpx;
  }

  .diy-banner .dots .active {
    opacity: 1;
  }
</style>
