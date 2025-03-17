<template>
  <!--
      作者 wangxw
      时间：2021-01-14
      描述：设置-商城设置
  -->
  <div class="product-add">
    <!--form表单-->
    <el-form size="small" ref="form" :model="form" label-width="150px">
      <div class="common-form">管理后台设置</div>
      <el-form-item label="管理后台名称" :rules="[{required: true,message: ' '}]" prop="shop_name">
        <el-input v-model="form.shop_name" placeholder="管理后台名称" class="max-w460"></el-input>
        <el-col class="tips">
          shop端商城名称，显示在登录页
        </el-col>
      </el-form-item>
      <el-form-item label="管理后台背景" prop="shop_bg_img">
        <el-input v-model="form.shop_bg_img" placeholder="管理后台背景" class="max-w460"></el-input>
        <el-col class="tips">
          shop端商城登录背景，不填则为系统默认登录背景，填写网络地址
        </el-col>
      </el-form-item>
      <div class="common-form">微信服务商支付设置</div>
      <el-form-item label="微信服务商支付">
        <div>
          <el-radio v-model="form.weixin_service.is_open" :label="1">开启</el-radio>
          <el-radio v-model="form.weixin_service.is_open" :label="0">关闭</el-radio>
        </div>
      </el-form-item>
      <template v-if="form.weixin_service.is_open == 1">
        <el-form-item label="服务商户号">
          <el-input v-model="form.weixin_service.mch_id" placeholder="服务商户号" class="max-w460"></el-input>
          <el-col class="tips">
            填写服务商户号、10位数字
          </el-col>
        </el-form-item>
        <el-form-item label="服务商支付秘钥apikey">
          <el-input v-model="form.weixin_service.apikey" placeholder="服务商支付秘钥apikey" class="max-w460"></el-input>
          <el-col class="tips">
            填写服务商户支付秘钥apikey
          </el-col>
        </el-form-item>
        <el-form-item label="服务商appid">
          <el-input v-model="form.weixin_service.app_id" placeholder="服务商appid" class="max-w460"></el-input>
          <el-col class="tips">
            填写服务商户号绑定的公众号appid
          </el-col>
        </el-form-item>
        <el-form-item label="证书序列号serial">
        	<el-input v-model="form.weixin_service.serial_no" placeholder="证书序列号serial" class="max-w460"></el-input>
        	<el-col class="tips">
        	  填写平台支付证书序列号serial
        	</el-col>
        </el-form-item>
        <el-form-item label="apiclient_cert.pem">
          <el-input type="textarea" :rows="4" placeholder="使用文本编辑器打开apiclient_cert.pem文件，将文件的全部内容复制进来" v-model="form.weixin_service.cert_pem" class="max-w460"></el-input>
          <el-col class="tips">使用文本编辑器打开apiclient_key.pem文件，将文件的全部内容复制进来</el-col>
        </el-form-item>
        <el-form-item label="apiclient_key.pem">
          <el-input type="textarea" :rows="4" placeholder="使用文本编辑器打开apiclient_cert.pem文件，将文件的全部内容复制进来" v-model="form.weixin_service.key_pem" class="max-w460"></el-input>
          <el-col class="tips">使用文本编辑器打开apiclient_key.pem文件，将文件的全部内容复制进来</el-col>
        </el-form-item>
      </template>
      <!--提交-->
      <div class="button-wrapper">
        <el-button size="large" type="primary" @click="onSubmit" :loading="loading">提交</el-button>
      </div>
    </el-form>

  </div>

</template>

<script>
  import SettingApi from '@/api/setting.js';
  export default {
    data() {
      return {
        /*是否正在加载*/
        loading: false,
        /*form表单数据*/
        form: {
          service_open:1,
          weixin_service: {}
        },

      };
    },
    created() {
      this.getParams()
    },

    methods: {

      /*获取配置数据*/
      getParams() {
        let self = this;
        SettingApi.serviceDetail({}, true).then(res => {
            self.form = res.data.vars.values;
            self.form.service_open = parseInt(self.form.service_open);
            self.form.weixin_service.is_open = parseInt(self.form.weixin_service.is_open);
            self.loading=false;
          })
          .catch(error => {
            self.loading=false;
          });

      },
      /*提交*/
      onSubmit() {
        let self = this;
        let params = this.form;
        self.$refs.form.validate((valid) => {
          if (valid) {
            self.loading = true;
            SettingApi.editService(params, true)
              .then(data => {
                self.loading = false;
                ElMessage({
                  message: '恭喜你，设置成功',
                  type: 'success'
                });
                self.$router.push('/setting/Index');
              })
              .catch(error => {
                self.loading = false;
              });
          }
        });
      },
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
  input[type="number"]{
    -moz-appearance: textfield;
  }
  .button-wrapper{
    display: flex;
  }
</style>
