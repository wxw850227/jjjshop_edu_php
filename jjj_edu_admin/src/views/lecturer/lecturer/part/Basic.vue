<template>
  <div>
    <!--基本信息-->
    <div class="common-form">基本信息</div>
    <el-form-item label="讲师名称：" :rules="[{ required: true, message: '请填写讲师名称' }]" prop="model.name">
      <el-input v-model="form.model.name" class="max-w460"></el-input>
    </el-form-item>
    <el-form-item label="简介："><el-input type="textarea" rows="6" v-model="form.model.describe" class="max-w460"></el-input></el-form-item>
    <el-form-item label="所属分类：" :rules="[{ required: true, message: '请选择讲师分类' }]" prop="model.category_id">
      <el-select v-model="form.model.category_id">
        <template v-for="cat in form.category" :key="cat.category_id" >
          <el-option :value="cat.category_id" :label="cat.name"></el-option>
          <template v-if="cat.child !== undefined">
            <template v-for="two in cat.child" :key="two.category_id" >
              <el-option :value="two.category_id" :label="two.name" style="padding-left: 30px;"></el-option>
              <template v-if="two.child !== undefined">
                <template v-for="three in two.child" :key="three.category_id" >
                  <el-option :value="three.category_id" :label="three.name" style="padding-left: 60px;"></el-option>
                </template>
              </template>
            </template>
          </template>
        </template>
      </el-select>
    </el-form-item>
    <el-form-item label="标签："  :rules="[{ required: true, message: '请填写标签' }]" prop="model.label">
      <el-tag :key="tag" v-for="tag in form.model.label" closable :disable-transitions="false" @close="handleClose(tag)">{{ tag }}</el-tag>
      <el-input
        class="input-new-tag"
        v-if="inputVisible"
        maxlength="100"
        v-model="inputValue"
        ref="saveTagInput"
        size="small"
        @keyup.enter.native="handleInputConfirm"
        @blur="handleInputConfirm"
      ></el-input>
      <el-button v-else-if="form.model.label.length < 1" class="button-new-tag" size="small" @click="showInput">+ 添加</el-button>
    </el-form-item>
    <el-form-item label="讲师封面：" :rules="[{ required: true, message: '请上传封面' }]" prop="model.image_id">
      <el-row>
        <div class="draggable-list">
          <div class="item img-select" v-if="form.model.image_id == 0" @click="openProductUpload('image', 'image')">
            <el-icon>
              <Plus></Plus>
            </el-icon>
          </div>
          <div v-else class="item" @click="openProductUpload('image', 'image')">
            <img v-if="form.model.image" :src="form.model.image.file_path" width="100" height="100" />
            <a href="javascript:void(0);" class="delete-btn" @click.stop="deleteImg">
              <el-icon><Close /></el-icon>
            </a>
          </div>
        </div>
        <div class="tips red">尺寸：1:1</div>
      </el-row>
      
    </el-form-item>
	<el-form-item label="讲师星级:" :rules="[{ required: true, message: '讲师星级' }]" prop="model.star">
	  <div class="block d-s-c" style="height: 32px;">
	    <el-rate v-model="form.model.star"></el-rate>
	  </div>
	</el-form-item>
    <!--其他设置-->
    <div class="common-form">其他设置</div>
    <el-form-item label="讲师排序：" :rules="[{ required: true, message: ' ' }]" prop="model.sort">
      <el-input type="number" min="0" v-model="form.model.sort" class="max-w460"></el-input>
    </el-form-item>
    <!-- <el-form-item label="虚拟课程数量：" :rules="[{ required: true, message: ' ' }]" prop="model.virtual_browse">
      <el-input type="number" min="0" v-model="form.model.virtual_browse" class="max-w460"></el-input>
    </el-form-item>
    <el-form-item label="虚拟收藏数量：" :rules="[{ required: true, message: ' ' }]" prop="model.virtual_collect">
      <el-input type="number" min="0" v-model="form.model.virtual_collect" class="max-w460"></el-input>
    </el-form-item>
    <el-form-item label="虚拟点赞数量：" :rules="[{ required: true, message: ' ' }]" prop="model.virtual_like">
      <el-input type="number" min="0" v-model="form.model.virtual_like" class="max-w460"></el-input>
    </el-form-item> -->
    <!--讲师图片组件-->
    <Upload v-if="isProductUpload" :config="config" :isupload="isProductUpload" @returnImgs="returnProductImgsFunc">上传图片</Upload>
  </div>
</template>

<script>
import Upload from '@/components/file/Upload.vue';
import draggable from 'vuedraggable';
export default {
  components: {
    Upload,
    draggable
  },
  data() {
    return {
      isProductUpload: false,
      config: {},
      file_name: 'image',
      inputVisible: false,
      inputValue: ''
    };
  },
  inject: ['form'],
  created() {

  },
  methods: {

    /*打开上传图片*/
    openProductUpload: function(file_type, file_name) {
      this.file_name = file_name;
      this.config = {
        total: 1,
        file_type: 'image'
      };
      this.isProductUpload = true;
    },
    handleClose(tag) {
      this.form.model.label.splice(this.form.model.label.indexOf(tag), 1);
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        if (this.form.model.label == '') {
          this.form.model.label = [];
        }
        this.form.model.label.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = '';
    },
    /*上传讲师图片*/
    returnProductImgsFunc(e) {
      if (e != null) {
        if (this.file_name == 'image') {
          this.form.model.image={
            file_path : e[0].file_path
          };
          this.form.model.image_id = e[0].file_id;
        }
      }
      this.isProductUpload = false;
    },

    /*删除讲师图片*/
    deleteImg(index) {
      this.form.model.image_id=0;
    },
  }
};
</script>

<style lang="scss" scoped>
.el-tag--small{
  height: var(--el-component-size-small);
}
.edit_container {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  line-height: 20px;
  color: #2c3e50;
}

.ql-editor {
  height: 400px;
}

.draggable-list {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.draggable-list .wrapper > span {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.draggable-list .item {
  position: relative;
  width: 110px;
  height: 110px;
  margin-top: 10px;
  margin-right: 10px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #dddddd;
}

.draggable-list .delete-btn {
  position: absolute;
  top: 0;
  right: 0;
  width: 16px;
  height: 16px;
  background: red;
  line-height: 16px;
  font-size: 16px;
  color: #ffffff;
  display: none;
}

.draggable-list .item:hover .delete-btn {
  display: block;
}

.draggable-list .item img {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  max-height: 100%;
  max-width: 100%;
}

.draggable-list .img-select {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px dashed #dddddd;
  font-size: 30px;
}

.draggable-list .img-select i {
  color: #409eff;
}

.el-tag + .el-tag {
  margin-left: 10px;
}

.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}

.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>
