<template>
  <div>
    <!--基本信息-->
    <div class="common-form">基本信息</div>
    <el-form-item label="章节名称：" :rules="[{ required: true, message: '请填写章节名称' }]" prop="model.title">
      <el-input v-model="form.model.title" class="max-w460"></el-input>
    </el-form-item>
    <el-form-item label="章节视频：">
      <el-row>
        <div class="mb16"><el-input v-model="form.model.video_link" class="max-w460"></el-input></div>
        <el-col class="draggable-list">
          <div class="item img-select" v-if="form.model.video_link == ''" @click="openProductUpload('video', 'video_link')">
            <el-icon>
              <Plus></Plus>
            </el-icon>
          </div>
          <div v-if="form.model.video_link != ''">
            <video width="150" height="150" :src="form.model.video_link" :autoplay="false" controls>您的浏览器不支持 video 标签</video>
            <div><el-button icon="Picture" @click="delVideo">删除视频</el-button></div>
          </div>
        </el-col>
      </el-row>
    </el-form-item>
    <el-form-item label="视频封面：">
      <div>{{form.model.video_image}}</div>
      <el-row>
        <div class="draggable-list">
          <div class="item img-select" v-if="form.model.video_image == ''" @click="openProductUpload('image', 'video_image')">
            <el-icon>
              <Plus></Plus>
            </el-icon>
          </div>
          <div v-if="form.model.video_image != ''" class="item" @click="openProductUpload('image', 'video_image')">
            <img :src="form.model.video_image" width="100" height="100" />
          </div>
        </div>
        <div class="tips red">尺寸：4:3</div>
      </el-row>
    </el-form-item>
    
    <el-form-item label="章节音频：">
      <el-row>
        <div class="mb16"><el-input v-model="form.model.audio_link" class="max-w460"></el-input></div>
        <el-col class="draggable-list">
          <div class="item img-select" v-if="form.model.audio_link == ''" @click="openProductUpload('audio', 'audio_link')">
            <el-icon>
              <Plus></Plus>
            </el-icon>
          </div>
          <div v-if="form.model.audio_link != ''">
            <audio width="150" height="150" :src="form.model.audio_link" :autoplay="false" controls>您的浏览器不支持 audio 标签</audio>
            <div><el-button icon="Picture" @click="delAudio">删除音频</el-button></div>
          </div>
        </el-col>
      </el-row>
    </el-form-item>
    <el-form-item label="音频封面：">
      <div>{{form.model.audio_image}}</div>
      <el-row>
        <div class="draggable-list">
          <div class="item img-select" v-if="form.model.audio_image == ''" @click="openProductUpload('image', 'audio_image')">
            <el-icon>
              <Plus></Plus>
            </el-icon>
          </div>
          <div v-if="form.model.audio_image != ''" class="item" @click="openProductUpload('image', 'audio_image')">
            <img :src="form.model.audio_image" width="100" height="100" />
          </div>
        </div>
        <div class="tips red">尺寸：4:3</div>
      </el-row>
    </el-form-item>
    <!--其他设置-->
    <div class="common-form">其他设置</div>
    <el-form-item label="章节排序：" :rules="[{ required: true, message: ' ' }]" prop="model.sort">
      <el-input type="number" min="0" v-model="form.model.sort" class="max-w460"></el-input>
    </el-form-item>
    <el-form-item label="是否试看：" :rules="[{ required: true, message: ' ' }]" prop="model.is_see">
      <el-radio-group v-model="form.model.is_see">
        <el-radio :label="1">是</el-radio>
        <el-radio :label="0">否</el-radio>
      </el-radio-group>
    </el-form-item>
    <!-- <el-form-item v-if="form.model.is_see" label="试看时长：" :rules="[{ required: true, message: ' ' }]"
      prop="model.see_time">
      <el-input type="number" min="0" v-model="form.model.see_time" class="max-w460"></el-input>
    </el-form-item> -->
    <!--章节图片组件-->
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
  created() {},
  methods: {
    /*打开上传图片*/
    openProductUpload: function(file_type, file_name) {
      this.file_name = file_name;
      if (file_type == 'image') {
        this.config = {
          total: 9,
          file_type: 'image'
        };
      } else if (file_type == 'video') {
        this.config = {
          total: 1,
          file_type: 'video'
        };
      } else if (file_type == 'audio') {
        this.config = {
          total: 1,
          file_type: 'audio'
        };
      }

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
    /*上传章节图片*/
    returnProductImgsFunc(e) {
      if (e != null) {
        if (this.file_name == 'video_link') {
          this.form.model.video_link = e[0].file_path;
        } else if (this.file_name == 'banner') {
          let imgs = this.form.model.banner.concat(e);
          this.form.model.banner = imgs;
        } else if (this.file_name == 'image') {
          this.form.model.image_id = e[0].file_id;
          this.form.model.image = e[0];
        } else if (this.file_name == 'video_image') {
          this.form.model.video_image = e[0].file_path;
        } else if (this.file_name == 'audio_link') {
          this.form.model.audio_link = e[0].file_path;
        } else if (this.file_name == 'audio_image') {
          this.form.model.audio_image = e[0].file_path;
        }
      }
      this.isProductUpload = false;
    },

    /*删除章节图片*/
    deleteImg(index) {
      this.form.model.image.splice(index, 1);
    },
    delVideo() {
      this.form.model.video_link = '';
      this.form.model.video_image = '';
    },
    delAudio() {
      this.form.model.audio_link = '';
    },
    /*打开添加*/
    setExpress() {
      this.$router.push('/setting/delivery/index');
    },
    changeDelivery(e) {
      if (e == 0) {
        this.form.model.delivery_id = '';
      }
    }
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
