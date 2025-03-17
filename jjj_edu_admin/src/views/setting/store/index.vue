<template>
  <!--
      作者 luoyiming
      时间：2019-10-26
      描述：设置-商城设置
  -->
  <div class="product-add" v-loading="loading">
    <!--form表单-->
    <el-form size="small" ref="form" :model="form" label-width="150px">
      <!--添加门店-->
      <div class="common-form">平台设置</div>
      <el-form-item label="平台名称" :rules="[{required: true,message: ' '}]" prop="name">
        <el-input v-model="form.name" placeholder="平台名称" class="max-w460"></el-input>
      </el-form-item>
	  <div class="common-form">会员设置</div>
	  <el-form-item label="默认头像" :rules="[{required: true,message: '请选择默认头像'}]">
	    <div class="ww100">
	    <el-button @click="chooseImg('avatarUrl')">选择图片</el-button>
	    </div>
	    <img class="mt10" v-img-url="form.avatarUrl" :width="200">
	  </el-form-item>
      <div class="common-form">日志记录</div>
      <el-form-item label="是否记录查询日志" prop="customer">
        <el-checkbox v-model="form.is_get_log">是否记录查询日志</el-checkbox>
        <div class="tips">如果记录，日志量会有点大</div>
      </el-form-item>
      <div class="common-form">政策协议</div>
      <el-form-item label="服务协议" :rules="[{required: true,message: ' '}]" prop="service">
        <el-input v-model="form.service" placeholder="" class="max-w460"></el-input>
        <el-col class="tips">进入app和登录、注册页面显示
        </el-col>
      </el-form-item>
      <el-form-item label="隐私政策" :rules="[{required: true,message: ' '}]" prop="privacy">
        <el-input v-model="form.privacy" placeholder="" class="max-w460"></el-input>
      </el-form-item>
      <!--提交-->
      <div class="common-button-wrapper">
        <el-button type="primary" @click="onSubmit" :loading="loading">提交</el-button>
      </div>
    </el-form>
    <!--上传图片-->
    <Upload v-if="isupload" :isupload="isupload" :type="type" :config="{ total: 3 }" @returnImgs="returnImgsFunc">
    </Upload>

  </div>

</template>

<script>
  import SettingApi from '@/api/setting.js';
  import Upload from '@/components/file/Upload.vue';
  import {
    formatModel
  } from '@/utils/base.js';
  import { useUserStore } from '@/store';
  const { changShop } = useUserStore();
  export default {
    components: {
      Upload
    },
    data() {
      return {
        /*是否正在加载*/
        loading: true,
        /*form表单数据*/
        form: {
          name: '',
          is_get_log: 0,
          service: '',
          privacy: '',
		  avatarUrl: '',
        },
        /*是否打开图片选择*/
        isupload: false
      };
    },
    created() {
      this.getParams()
    },

    methods: {
        contentChangeFunc(e){
        this.ueditor.text = e;
      },
      /*获取配置数据*/
      getParams() {
        let self = this;
        SettingApi.storeDetail({}, true).then(res => {
            let vars = res.data.vars.values;
            self.form = formatModel(self.form, vars);
            self.form.service = vars.policy.service;
            self.form.privacy = vars.policy.privacy;
            self.loading = false;
          })
          .catch(error => {

          });
      },


      /*提交*/
      onSubmit() {
        let self = this;
        let params = this.form;
        self.$refs.form.validate((valid) => {
          if (valid) {
            self.loading = true;
            SettingApi.editStore(params, true)
              .then(data => {
                self.loading = false;
                ElMessage({
                  message: '恭喜你，商城设置成功',
                  type: 'success'
                });
                changShop(params.name);
                self.$router.push('/setting/store/index');
              })
              .catch(error => {
                self.loading = false;
              });
          }
        });

      },
      /*选择图片*/
      chooseImg(e) {
        this.type = e;
        this.isupload = true;
      },

      /*关闭选择图片*/
      returnImgsFunc(e) {
        this.isupload = false;
        if (e != null && e.length > 0) {
          if (this.type == 'avatarUrl') {
            this.form.avatarUrl = e[0].file_path;
          }
        }
      }
    }

  };
</script>
<style>
  .tips {
    color: #ccc;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }
</style>
