<template>
  <!--
    	作者：wangxw
    	时间：2019-11-05
    	描述：diy组件 搜索栏
    -->
  <div>
    <div @click.stop="$parent.$parent.onEditer(index)">
      <div class="drag optional" :class="{selected:index === selectedIndex}">
        <div class="diy-title"
          :style="{padding: item.style.paddingTop + 'px' + ' 10px', background: item.style.background}">
          <div class="title-icon pr" v-if="item.params.show_icon == 'yes'" :style="{background: item.style.background}">
            <img v-img-url="item.params.icon">
          </div>
          <span class="title-text text-ellipsis pr"  :style="{color: item.style.textColor,background: item.style.background}">
            {{item.params.title}}
          </span>
          <!-- <div class="title-line"></div> -->
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
  .optional .diy-title {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .optional .diy-title .title-icon {
    width: 32px;
    height: 32px;
    padding: 5px;
    z-index: 1;
  }

  .diy-title .title-text {
    overflow: hidden;
    white-space: nowrap;
    padding: 0 5px;
    z-index: 1;
    font-size: 16px;
    font-weight: 800;
  }

  .title-line {
    width: 245px;
    height: 1px;
    background-color: #c7c7c7;
    border-radius: 1px;
    position: absolute;
    left: 0;
    bottom: 0;
    top: 0;
    right: 0;
    margin: auto;
    z-index: 0;
  }
</style>
