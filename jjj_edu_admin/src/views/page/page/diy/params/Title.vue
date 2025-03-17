<template>
  <!--
    	作者：wangxw
    	时间：2019-11-05
    	描述：diy组件 搜索栏
    -->
  <div>
    <div class="common-form">
      <span>{{ curItem.name }}</span>
    </div>
    <el-form size="small" :model="curItem" label-width="100px">
      <!--上下边距-->
      <el-form-item label="上下边距："><el-slider v-model="curItem.style.paddingTop" show-input></el-slider></el-form-item>
      <!--背景颜色-->
      <el-form-item label="背景颜色：">
        <div class="d-s-c">
          <el-color-picker v-model="curItem.style.background"></el-color-picker>
          <el-button type="button" style="margin-left: 10px;" @click.stop="$parent.onEditorResetColor(curItem.style, 'background', '#f6f6f6')">重置</el-button>
        </div>
      </el-form-item>
      <!--文字颜色-->
      <el-form-item label="文字颜色：">
        <div class="d-s-c">
          <el-color-picker v-model="curItem.style.textColor"></el-color-picker>
          <el-button type="button" style="margin-left: 10px;" @click.stop="$parent.onEditorResetColor(curItem.style, 'textColor', '#333333')">重置</el-button>
        </div>
      </el-form-item>
      <el-form-item label="图标显示：">
        <el-radio-group v-model="curItem.params.show_icon">
            <el-radio label="yes">显示</el-radio>
            <el-radio label="no">不显示</el-radio>
          </el-radio-group>
      </el-form-item>
      <!--标题图标-->
      <el-form-item label="标题图标：">
        <div class="diy-notice-icon">
          <img v-img-url="curItem.params.icon" alt="" @click="$parent.onEditorSelectImage(curItem.params, 'icon')">
        </div>
        <div>建议尺寸32×32</div>
      </el-form-item>
      <!-- 公告内容 -->
      <el-form-item label="标题文字：">
        <el-input v-model="curItem.params.title" class="w-auto"></el-input>
      </el-form-item>
      	<el-form-item label="选择链接">
      					  <div class="param-img-item">
         					 <div class="d-s-c">
        				    <div class="url-box flex-1">
          				    <span class="key-name">链接地址：</span>
         				     <el-input placeholder="请选择链接地址" v-model="curItem.params.name"></el-input>
         				   </div>
         				   <div class="url-box ml10">
         				     <el-button type="primary" @click="changeLink(index)">选择链接</el-button>
         				   </div>
          				</div>
      			  </div>
      </el-form-item>
    </el-form>
    <Setlink v-if="is_linkset" :is_linkset="is_linkset" @closeDialog="closeLinkset">选择链接</Setlink>
  </div>
</template>

<script>
	import Setlink from '@/components/setlink/Setlink.vue';
  export default {
    	components: {
			Setlink
		},
    data() {
      return {
	      is_linkset: false,
      	index: null,
      };
    },
    props: ['curItem', 'selectedIndex', 'opts'],
    created() {
      this.curItem.style.paddingTop = parseInt(this.curItem.style.paddingTop);
    },
    methods: {
		    /*选择链接*/
      changeLink(index) {
        this.is_linkset = true;
        this.index = index;
      },

      /*获取链接并关闭弹窗*/
      closeLinkset(e) {
        this.is_linkset = false;
        if (e) {
          this.curItem.params.linkUrl = e.url;
          this.curItem.params.name = '链接到' + ' ' + e.type + ' ' + e.name;
        }
      },
    }
  };
</script>

<style>
.diy-notice-icon, .diy-notice-icon img{ width: 32px; height: 32px;}
</style>
