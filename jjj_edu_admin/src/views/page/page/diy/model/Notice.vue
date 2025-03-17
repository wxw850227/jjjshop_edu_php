<template>
  <!--
    	作者：wangxw
    	时间：2019-11-05
    	描述：diy组件 搜索栏
    -->
  <div class="p12 box-s-b">
    <div @click.stop="$parent.$parent.onEditer(index)">
      <div class="drag optional" :class="{selected:index === selectedIndex}">
        <div class="diy-notice" :style="{padding: item.style.paddingTop + 'px' + ' 10rpx', background: item.style.background}">
          <div class="notice-icon">
            <img v-img-url="item.params.icon">
          </div>
          <div class="notice-text flex-1 text-ellipsis">
            <span :style="{color: item.style.textColor}">{{item.params.text}}</span>
          </div>
        </div>
        <div class="btn-edit-del">
          <div class="btn-del" @click.stop="$parent.$parent.onDeleleItem(index)">删除</div>
        </div>
      </div>
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

<style>
  .p12{
    padding: 12px;
  }
.diy-notice{ display: flex; justify-content: flex-start; align-items: center;border-radius: 12px;}
.diy-notice .notice-icon{ width: 20px; height: 20px;}
.diy-notice .notice-text{ margin-left: 10px; overflow: hidden; white-space: nowrap;}
</style>
