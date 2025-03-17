<template>
  <!--
    作者：luoyiming
    时间：2020-06-04
    描述：插件中心-直播-礼物-修改礼物
  -->
  <el-dialog title="修改礼物" v-model="dialogVisible" @close="dialogFormVisible" :close-on-click-modal="false" :close-on-press-escape="false">
    <el-form size="small" :model="form" :rules="formRules" ref="form">
      <el-form-item label="礼物名称" prop="gift_name" :label-width="formLabelWidth"><el-input v-model="form.gift_name" autocomplete="off"></el-input></el-form-item>

      <el-form-item label="礼物价格" prop="price" :label-width="formLabelWidth">
        <el-input type="number" v-model.number="form.price" autocomplete="off"></el-input>
       </el-form-item>

      <el-form-item label="商品图片" :label-width="formLabelWidth" :rules="[{ required: true, message: '请上传商品图片' }]" prop="image_id">
        <div class="gift-img-box d-c-c">
          <div v-if="form.image_id != null && form.image_id > 0" @click="openProductUpload">
            <img :src="form.file_path" alt="" />
          </div>
          <div class="gift-img-btn" @click="openProductUpload" v-else>
            <el-icon>
              <Plus></Plus>
            </el-icon>
          </div>
        </div>
      </el-form-item>

      <el-form-item label="是否热门" :label-width="formLabelWidth">
        <el-radio-group v-model="form.is_hot">
          <el-radio :label="1">是</el-radio>
          <el-radio :label="0">否</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="是否活动" :label-width="formLabelWidth">
        <el-radio-group v-model="form.is_active">
          <el-radio :label="1">是</el-radio>
          <el-radio :label="0">否</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="分类排序" prop="sort" :label-width="formLabelWidth"><el-input v-model.number="form.sort" autocomplete="off"></el-input></el-form-item>
    </el-form>
    <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogFormVisible">取 消</el-button>
          <el-button type="primary" @click="editFunc" :loading="loading">确 定</el-button>
        </div>
    </template>
    <!--商品图片组件-->
    <Upload v-if="isProductUpload" :config="{ total: 1 }" :isupload="isProductUpload" @returnImgs="returnProductImgsFunc">上传图片</Upload>
  </el-dialog>
</template>

<script>
import liveApi from '@/api/live.js';
import Upload from '@/components/file/Upload.vue';
export default {
  components: {
    Upload
  },
  data() {
    return {
      formRules: {
        gift_name: [
          {
            required: true,
            message: '请输入礼物名称',
            trigger: 'blur'
          }
        ],
        price: [
          {
            required: true,
            message: '请输入价格',
            trigger: 'blur'
          }
        ],
        sort: [
          {
            required: true,
            message: '分类排序不能为空'
          },
          {
            type: 'number',
            message: '分类排序必须为数字'
          }
        ]
      },
      /*左边长度*/
      formLabelWidth: '120px',
      /*是否显示*/
      dialogVisible: false,
      loading: false,
      /*是否上传图片*/
      isProductUpload: false
    };
  },
  props: ['open_edit','form'],
  created() {
    this.dialogVisible = this.open_edit;
  },
  methods: {
    /*修改*/
    editFunc() {
      let self = this;
      let params = {
        gift_id:self.form.gift_id,
        gift_name:self.form.gift_name,
        price:self.form.price,
        is_hot:self.form.is_hot,
        is_active:self.form.is_active,
        image_id:self.form.image_id,
        sort:self.form.sort
      }
      self.$refs.form.validate(valid => {
        if (valid) {
          self.loading = true;
          liveApi
            .editGift(params)
            .then(data => {
              self.loading = false;
              ElMessage({
                message: '添加成功',
                type: 'success'
              });
              self.dialogFormVisible(true);
            })
            .catch(error => {
              self.loading = false;
            });
        }
      });
    },

    /*关闭弹窗*/
    dialogFormVisible(e) {
      if (e) {
        this.$emit('close', {
          type: 'success',
          openDialog: false
        });
      } else {
        this.$emit('close', {
          type: 'error',
          openDialog: false
        });
      }
    },

    /*打开上传图片*/
    openProductUpload: function() {
      this.isProductUpload = true;
    },

    /*上传商品图片*/
    returnProductImgsFunc(e) {
      if (e != null) {
        this.form.file_path=e[0].file_path;
        this.form.image_id=e[0].file_id;
      }
      this.isProductUpload = false;
    }
  }
};
</script>

<style>
.img {
  margin-top: 10px;
}
.gift-img-box {
  width: 40px;
  height: 40px;
  border: 1px solid #cccccc;
  border-radius: 4px;
}
.gift-img-box img {
  width: 40px;
  height: 40px;
}
</style>
