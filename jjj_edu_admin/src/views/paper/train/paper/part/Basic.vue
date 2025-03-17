<template>
  <div>
    <el-form-item label="试卷名称：" :rules="[{ required: true, message: '请填写题干' }]" prop="model.title">
      <el-input v-model="form.model.title" class="max-w460"></el-input>
    </el-form-item>
    <el-form-item label="分类：" :rules="[{ required: true, message: '请选择分类' }]" prop="model.category_id">
      <el-select v-model="form.model.category_id">
        <template v-for="cat in form.category" :key="cat.category_id">
          <el-option :value="cat.category_id" :label="cat.name"></el-option>
        </template>
      </el-select>
    </el-form-item>
    <el-form-item label="考试封面：" :rules="[{ required: true, message: '请上传考试封面' }]" prop="model.image_id">
      <el-row>
        <div class="draggable-list">
          <div class="item img-select" v-if="form.model.image_id == 0" @click="openProductUpload('image', 'image')">
            <el-icon>
              <Plus></Plus>
            </el-icon>
          </div>
          <div v-if="form.model.image_id != 0" class="item" @click="openProductUpload('image', 'image')"><img
              :src="form.model.image.file_path" width="100" height="100" /></div>
        </div>
        <div class="tips red">尺寸：630*440</div>
      </el-row>
    </el-form-item>
    <div class="d-s-c mb20">
      <el-form-item label="单选题数量：" :rules="[{ required: true, message: '单选题数量' }]" prop="model.single_number">
        <el-input type="number" min="0" v-model="form.model.single_number" class="max-w460"></el-input>
      </el-form-item>
    </div>
    <div class="d-s-c mb20">
      <el-form-item label="多选题数量：" :rules="[{ required: true, message: '多选题数量' }]" prop="model.many_number">
        <el-input type="number" min="0" v-model="form.model.many_number" class="max-w460"></el-input>
      </el-form-item>
    </div>
    <div class="d-s-c mb20">
      <el-form-item label="判断题数量：" :rules="[{ required: true, message: '判断题数量' }]" prop="model.judge_number">
        <el-input type="number" min="0" v-model="form.model.judge_number" class="max-w460"></el-input>
      </el-form-item>
    </div>
    <div class="d-s-c mb20">
      <el-form-item label="试题总数：" prop="item_number">
        <el-input type="number" disabled v-model="item_number" class="max-w460"></el-input>
      </el-form-item>
      <el-form-item label="虚拟答题人数：" :rules="[{ required: true, message: '虚拟答题人数' }]" prop="model.virtual_answer">
        <el-input type="number" min="0" v-model="form.model.virtual_answer" class="max-w460"></el-input>
      </el-form-item>
    </div>
    <el-form-item label="试卷难度:" :rules="[{ required: true, message: '试题难度' }]" prop="model.difficulty">
      <div class="block d-s-c" style="height: 32px;">
        <el-rate v-model="form.model.difficulty"></el-rate>
      </div>
    </el-form-item>
    <el-form-item label="考试排序：" :rules="[{ required: true, message: '考试排序' }]" prop="model.sort">
      <el-input type="number" min="0" v-model="form.model.sort" class="max-w460"></el-input>
    </el-form-item>
    <el-form-item label="练习状态:" :rules="[{ required: true, message: '选择练习状态' }]" prop="model.is_show">
      <el-radio-group v-model="form.model.is_show">
        <el-radio :label="0">显示</el-radio>
        <el-radio :label="1">隐藏</el-radio>
      </el-radio-group>
    </el-form-item>
    <!--课程图片组件-->
    <Upload v-if="isProductUpload" :config="config" :isupload="isProductUpload" @returnImgs="returnProductImgsFunc">上传图片
    </Upload>
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
        inputValue: '',
      };
    },
    inject: ['form'],
    created() {},
    computed: {
      item_number() {
        let judge_number = this.form.model.judge_number;
        let single_number = this.form.model.single_number;
        let many_number = this.form.model.many_number;
        let item_number = judge_number * 1 + single_number * 1 + many_number * 1;
        this.form.model.item_number = item_number;
        return item_number
      },
    },
    methods: {
      fromCharCode(number) {
        var str = [];
        for (var i = 0; i < 26; i++) {
          str.push(String.fromCharCode(i + 65));
        }
        return str[number];
      },
      /*打开上传图片*/
      openProductUpload: function(file_type, file_name) {
        this.file_name = file_name;
        if (file_type == 'image') {
          this.config = {
            total: 9,
            file_type: 'image'
          };
        }
        this.isProductUpload = true;
      },
      showInput() {
        let self = this;
        this.form.model.grade.push({
          name: '',
          min: '',
          max: ''
        });
      },
      deleteOption(e) {
        this.form.model.grade.splice(e, 1);
      },
      /*上传课程图片*/
      returnProductImgsFunc(e) {
        if (e != null) {
          if (this.file_name == 'image') {
            this.form.model.image_id = e[0].file_id;
            this.form.model.image = e[0];
          }
        }
        this.isProductUpload = false;
      },

      /*删除课程图片*/
      deleteImg(index) {
        this.form.model.banner.splice(index, 1);
      },
      delVideo() {
        this.form.model.video_link = '';
        this.form.model.video_image = '';
      },
      delPdf() {
        this.form.model.pdf_link = '';
        this.form.model.pdf_name = '';
      },
      /*打开添加*/
      setExpress() {
        this.$router.push('/setting/delivery/index');
      },
      changeDelivery(e) {
        if (e == 0) {
          this.form.model.delivery_id = '';
        }
      },
      changeQsType(e) {
        if (e == 1) {
          this.form.model.option_type = 1;
          this.form.model.option = [{
            content: '',
            type: 1
          }, {
            content: '',
            type: 1
          }];
        } else if (e == 2) {
          this.form.model.option_type = 1;
          this.form.model.option = [{
            content: '',
            type: 1
          }, {
            content: '',
            type: 1
          }];
        } else if (e == 3) {
          this.form.model.option_type = 1;
          this.form.model.option = [{
            content: '正确',
            type: 1
          }, {
            content: '错误',
            type: 1
          }];
        }
        this.form.modelanswer = ['A'];
      },
    }
  };
</script>

<style>
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

  .draggable-list .wrapper>span {
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

  .el-tag+.el-tag {
    margin-left: 10px;
  }

  .button-new-tag {
    margin-left: 22px;
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

  .el-input.is-disabled .el-input__inner {
    background-color: #fff;
    border-color: #dcdfe6;
    color: #606266;
    cursor: auto;
  }

  .label-name {
    width: 100px;
  }
</style>
