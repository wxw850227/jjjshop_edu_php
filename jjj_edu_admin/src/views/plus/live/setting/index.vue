<template>
  <!--
    作者：luoyiming
    时间：2020-06-25
    描述：插件中心-直播-直播设置
  -->
  <div class="user">
    <el-form size="small" ref="form" :model="form" label-width="150px">
      <div class="common-form">基础设置</div>
      <el-form-item label="是否开启直播">
        <div>
          <el-radio v-model="form.is_open" label="1">开启</el-radio>
          <el-radio v-model="form.is_open" label="0">关闭</el-radio>
        </div>
      </el-form-item>
      <el-form-item label="是否开启审核">
        <div>
          <el-radio v-model="form.is_audit" label="1">开启</el-radio>
          <el-radio v-model="form.is_audit" label="0">关闭</el-radio>
        </div>
      </el-form-item>
      <el-form-item label="礼物币名称" :rules="[{required: true,message: ' '}]" prop="gift_name">
        <el-input v-model="form.gift_name" placeholder="礼物币名称" class="max-w460"></el-input>
        <p class="gray">前台充值显示的礼物币名称</p>
      </el-form-item>
      <div class="common-form">声网sdk设置</div>
      <el-form-item label="app_id" :rules="[{required: true,message: ' '}]" prop="app_id">
        <el-input v-model="form.app_id" class="max-w460"></el-input>
        <p class="gray">声网APPID,<a href="https://www.agora.io/" target="_blank">申请地址</a></p>
      </el-form-item>
      <el-form-item label="key" :rules="[{required: true,message: ' '}]" prop="key">
        <el-input v-model="form.key" class="max-w460"></el-input>
        <p class="gray">声网证书</p>
      </el-form-item>
      <el-form-item label="是否开启录制">
        <div>
          <el-radio v-model="form.is_record" label="1">开启</el-radio>
          <el-radio v-model="form.is_record" label="0">关闭</el-radio>
        </div>
      </el-form-item>
      <el-form-item label="存储选择">
        <el-select v-model="form.vendor" placeholder="请选择" @change="showRegion">
          <el-option v-for="(item, index) in storage" :key="index" :label="item.name" :value="item.vendor"></el-option>
        </el-select>
        <p class="gray">如果需要录制请填写</p>
      </el-form-item>
      <el-form-item label="存储地区选择">
        <el-select v-model="form.region" placeholder="请选择">
          <el-option v-for="(item, key) in region_arr" :key="item" :label="key" :value="item"></el-option>
        </el-select>
        <p class="gray">如果需要录制请选择</p>
      </el-form-item>
      <el-form-item label="bucket" prop="bucket">
        <el-input v-model="form.bucket" class="max-w460"></el-input>
        <p class="gray">第三方云存储的 bucket</p>
      </el-form-item>
      <el-form-item label="accessKey" prop="accessKey">
        <el-input v-model="form.accessKey" class="max-w460"></el-input>
        <p class="gray">第三方云存储的 accessKey</p>
      </el-form-item>
      <el-form-item label="secretKey" prop="secretKey">
        <el-input v-model="form.secretKey" class="max-w460"></el-input>
        <p class="gray">第三方云存储的 secretKey,建议提供只写权限的访问密钥</p>
      </el-form-item>
      <el-form-item label="fileNamePrefix" prop="fileNamePrefix">
        <el-input v-model="form.fileNamePrefix" class="max-w460"></el-input>
        <p class="gray">存储位置。举个例子，fileNamePrefix = ["directory1","directory2"]，将在录制文件名前加上前缀 "directory1/directory2/"，即
          directory1/directory2/xxx.m3u8。前缀长度（包括斜杠）不得超过 128 个字符。字符串中不得出现斜杠</p>
      </el-form-item>
      <el-form-item label="RESTful 客户ID" prop="username">
        <el-input v-model="form.username" class="max-w460"></el-input>
        <p class="gray">声网RESTful 客户ID</p>
      </el-form-item>
      <el-form-item label="RESTful客户秘钥" prop="password">
        <el-input v-model="form.password" type="password" class="max-w460"></el-input>
        <p class="gray">声网RESTful 客户秘钥</p>
      </el-form-item>
      <el-form-item label="空间域名 Domain" prop="domain">
        <el-input v-model="form.domain" class="max-w460"></el-input>
        <p class="gray">存储空间域名 Domain</p>
      </el-form-item>
    </el-form>

    <!--提交-->
    <div class="common-button-wrapper">
      <el-button size="small" type="primary" @click="onSubmit" :disabled="loading">保存</el-button>
    </div>
  </div>
</template>
<script>
  import liveApi from '@/api/live.js';
  export default {
    data() {
      return {
        form: {
          key: '',
          app_id: '',
          sign_key: '',
          is_open: 0,
          is_record: 0,
          is_audit: 1,
          gift_name: '',
          vendor: '',
          region: '',
          bucket: '',
          accessKey: '',
          secretKey: '',
          username: '',
          password: '',
          domain: ''
        },
        loading: false,
        storage: [],
        region_arr: []
      };
    },
    created() {
      /*获取列表*/
      this.getSetting();
    },
    methods: {

      /*获取设置*/
      getSetting() {
        let self = this;
        let Params = {};
        liveApi.getSetting(Params, true)
          .then(data => {
            self.loading = false;
            self.form = data.data.vars.values;
            self.storage = data.data.storage;
            self.showRegion(self.form.vendor);
          })
          .catch(error => {});
      },

      /*点击保存*/
      onSubmit() {
        let self = this;
        let params = self.form;
        self.$refs.form.validate((valid) => {
          if (valid) {
            self.loading = true;
            liveApi.setSetting(params, true)
              .then(data => {
                self.loading = false;
                ElMessage({
                  message: '恭喜你，保存成功',
                  type: 'success'
                });
              })
              .catch(error => {
                self.loading = false;
              });
          }
        });
      },
      /*切换存储*/
      showRegion(e) {
        this.region = '';
        for (let key in this.storage) {
          if (this.storage[key].vendor == e) {
            this.region_arr = this.storage[key].region;
          }
        }
      },
    }
  };
</script>

<style></style>
