<template>
  <div>
    <el-form-item label="题型:" :rules="[{ required: true, message: '题型' }]" prop="model.question_type">
      <el-radio-group v-model="form.model.question_type" @change="changeQsType">
        <el-radio v-for="(item,index) in form.questionType" :key="item.id" :label="item.id">{{item.name}}</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="分类：" :rules="[{ required: true, message: '请选择分类' }]" prop="model.category_id">
      <el-select v-model="form.model.category_id">
        <template v-for="cat in form.category" :key="cat.category_id" >
          <el-option :value="cat.category_id" :label="cat.name"></el-option>
          <template v-if="cat.child !== undefined" >
            <template v-for="two in cat.child" :key="two.category_id" >
              <el-option :value="two.category_id" :label="two.name" style="padding-left: 30px;">
              </el-option>
              <template v-if="two.child !== undefined" >
                <template v-for="three in two.child" :key="three.category_id" > 
                  <el-option :value="three.category_id" :label="three.name"
                    style="padding-left: 60px;"></el-option>
                </template>
              </template>
            </template>
          </template>
        </template>
      </el-select>
    </el-form-item>
    <el-form-item label="题干：" :rules="[{ required: true, message: '请填写题干' }]" prop="model.title">
      <el-input v-model="form.model.title" class="max-w460"></el-input>
    </el-form-item>
    <template v-if="form.model.question_type != 3">
      <el-form-item label="选择类型:" :rules="[{ required: true, message: '选择类型' }]" prop="model.option_type">
        <el-radio-group @change="changeType" v-model="form.model.option_type">
          <el-radio :label="1">文本</el-radio>
          <el-radio :label="2">图片</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="" prop="option">
        <div>
          <div v-for="(item, index) in form.model.option" class="mb20" :key="index">
            <div class="d-s-c">
              <div>{{ fromCharCode(index) }} ：</div>
              <el-input v-if="item.type != 2" placeholder="请输入选项内容" v-model="item.content" class="max-w460"></el-input>
              <template v-else>
                <div class="draggable-list">
                  <div class="item img-select" v-if="!item.content" @click="openProductUpload('image', index)">
                      <el-icon>
                        <Plus></Plus>
                      </el-icon>
                    </div>
                  <div v-else class="item" @click="openProductUpload('image', index)"><img :src="item.content"
                      width="100" height="100" /></div>
                </div>
              </template>
            </div>
            <el-button type="text" @click="deleteOption(index)" v-if="form.model.option.length >= 3">删除选项</el-button>
          </div>
        </div>
        <el-button v-if="form.model.option.length <= 9" class="button-new-tag" size="small" @click="showInput">+ 添加
        </el-button> <div class="tips">最多可添加10个选项</div>
      </el-form-item>
    </template>
    <template v-if="form.model.question_type == 3">
      <el-form-item label="" prop="option">
        <div>
          <div v-for="(item, index) in form.model.option" class="mb20" :key="index">
            <div class="d-s-c">
              <div>{{ fromCharCode(index) }} ：</div>
              <el-input placeholder="请输入选项内容" disabled v-model="item.content" class="max-w460"></el-input>
            </div>
          </div>
        </div>
      </el-form-item>
    </template>
    <el-form-item label="正确答案:" :rules="[{ required: true, message: '请选择正确答案' }]" prop="model.answer">
      <el-radio-group v-if="form.model.question_type != 2" v-model="form.model.answer[0]" @change="changeQsType">
        <el-radio :label="fromCharCode(index)" v-for="(item, index) in form.model.option" :key="index">
          {{ fromCharCode(index) }}</el-radio>
      </el-radio-group>
      <el-checkbox-group v-else v-model="form.model.answer">
        <el-checkbox v-for="(item, index) in form.model.option" :key="index" :label="fromCharCode(index)">
          {{ fromCharCode(index) }}</el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="试题难度:" :rules="[{ required: true, message: '试题难度' }]" prop="model.difficulty">
      <div class="block d-s-c" style="height: 32px;">
        <el-rate v-model="form.model.difficulty"></el-rate>
      </div>
    </el-form-item>
    <el-form-item label="试题排序：" :rules="[{ required: true, message: ' ' }]" prop="model.sort">
      <el-input type="number" min="0" v-model="form.model.sort" class="max-w460"></el-input>
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
        inputValue: ''
      };
    },
    inject: ['form'],
    created() {},
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
      handleClose(tag) {
        this.form.model.label.splice(this.form.model.label.indexOf(tag), 1);
      },

      showInput() {
        let self = this;
        this.form.model.option.push({
          content: '',
          type: self.form.model.option_type
        });
        this.form.modelanswer = ['A'];
      },
      deleteOption(e) {
        this.form.model.option.splice(e, 1);
      },
      /*上传课程图片*/
      returnProductImgsFunc(e) {
        if (e != null) {
          if (this.file_name == 'image') {
            this.form.model.image_id = e[0].file_id;
            this.form.model.image = e[0];
          } else {
            this.form.model.option[this.file_name].content = e[0].file_path;
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
      changeType(e) {
        if (e == 1) {
          this.form.model.option = [{
            content: '',
            type: 1
          }, {
            content: '',
            type: 1
          }];
        } else if (e == 2) {
          this.form.model.option = [{
            content: '',
            type: 2
          }, {
            content: '',
            type: 2
          }];
        }
        this.form.modelanswer = ['A'];
      }
    }
  };
</script>

<style>
  .mb20 {
    margin-bottom: 20px;
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
</style>
