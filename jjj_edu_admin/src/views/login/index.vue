<template>
  <!--
          作者：luoyiming
          时间：2019-10-24
          描述：登录页面
      -->
  <div class="login-bg" :style="'background-image:url(' + bgimg_url + ');'">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="left" label-width="0px"
      class="demo-ruleForm login-container">
      <h3 class="title">{{shop_name}}</h3>
      <el-form-item prop="account">
        <div class="left-img-input"><img class="l-img" src="@/assets/img/login-name.png">
          <el-input class="l-input" type="text" v-model="ruleForm.account" auto-complete="off" placeholder="账号">
          </el-input>
        </div>
      </el-form-item>
      <el-form-item prop="checkPass">
        <div class="left-img-input"><img class="l-img" src="@/assets/img/login-password.png">
          <el-input class="l-input" type="password" v-model="ruleForm.checkPass" auto-complete="off" placeholder="密码">
          </el-input>
        </div>
      </el-form-item>
      <el-form-item prop="verifycode" style="line-height:0px;">
        <div class="left-img-input">
          <img class="l-img" src="@/assets/img/login-code.png">
          <el-input class="l-input" type="text" v-model="ruleForm.verifycode" auto-complete="off" placeholder="验证码"></el-input>
          <sidentify :identifyCode="identifyCode"></sidentify>
        </div>
        <!-- <div class="d-b-c">
          <div class="left-img-input" style="width: auto;">
            <el-input v-model="ruleForm.verifycode" ref="verifycode" placeholder="验证码" class="l-input"
              style="width:230px;"></el-input>
          </div>
          <div class="identifybox" style="height: 41px; flex-shrink: 0;" @click="refreshCode">
            
          </div>
        </div> -->
      </el-form-item>
      <el-form-item>
        <el-button class="login-btn" @click.native.prevent="SubmitFunc" :loading="logining">登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import sidentify from '@/components/sidentify.vue';
  import IndexApi from '@/api/index.js';
  import bgimg from '@/assets/img/login_bg.png';
  import UserApi from '@/api/user.js';
  import { useUserStore } from '@/store';
  const { afterLogin } = useUserStore();
  export default {
    components: {
      sidentify
    },
    data() {
      // 验证码自定义验证规则
      const validateVerifycode = (rule, value, callback) => {
        if (value === "") {
          this.refreshCode();
          callback(new Error('请输入验证码'))
        } else if (value !== this.identifyCode) {
          console.log('验证码:', value);
          this.refreshCode();
          callback(new Error('验证码不正确!'))
        } else {
          callback()
        }
      }
      return {
        loginForm: {},
        identifyCodes: "1234567890", //验证码的数字库
        identifyCode: "", // 验证码组件传值
        /*是否正在加载*/
        loading: true,
        /*商城名称*/
        shop_name: '',
        /*背景图片*/
        bgimg_url: '',
        /*是否正在提交*/
        logining: false,
        /*表单对象*/
        ruleForm: {
          /*用户名*/
          account: '',
          /*密码*/
          checkPass: ''
        },
        /*验证规则*/
        rules: {
          /*用户名*/
          account: [{
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          }],
          /*密码*/
          checkPass: [{
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }],
          verifycode: [{
            required: true,
            trigger: 'blur',
            validator: validateVerifycode
          }]
        },
        /*基础配置*/
        baseData: {}
      };
    },
    created() {
      this.refreshCode();
      this.getData();
      if (this.$route.query.from && this.$route.query.from == 'admin') {
        this.saasLogin();
      }
    },
    mounted() {
      this.identifyCode = '';
      this.makeCode(this.identifyCodes, 4);
    },
    methods: {
      //验证码----start
      randomNum(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
      },
      refreshCode() {
        this.identifyCode = "";
        this.makeCode(this.identifyCodes, 4);
      },
      makeCode(o, l) {
        for (let i = 0; i < l; i++) {
          this.identifyCode += this.identifyCodes[
            this.randomNum(0, this.identifyCodes.length)
          ];
        }
        // console.log("this.identifyCode:", this.identifyCode);
      },
      refreshCode() {
        this.identifyCode = "";
        this.makeCode(this.identifyCodes, 4);
      },
      /*获取基础配置*/
      getData() {
        let self = this;
        IndexApi.base(true)
          .then(res => {
            self.loading = false;
            self.shop_name = res.data.settings.shop_name;
            if (res.data.settings.shop_bg_img != '') {
              self.bgimg_url = res.data.settings.shop_bg_img;
            } else {
              self.bgimg_url = bgimg;
            }
          })
          .catch(error => {
            self.loading = false;
          });
      },

      /*登录方法*/
      SubmitFunc(ev) {
        var _this = this;
        this.$refs.ruleForm.validate(valid => {
          if (valid) {
            this.logining = true;
            var Params = {
              username: this.ruleForm.account,
              password: this.ruleForm.checkPass
            };
            /*调用登录接口*/
            UserApi.login(Params, true)
              .then(async res => {
                this.logining = false;
                if (res.code == 1) {
                  // /*保存个人信息*/
                  // setCookie('userinfo', res.data);
                  // /*设置一个登录状态*/
                  // setCookie('isLogin', true);
                  await afterLogin(res);
                  /*跳转到首页*/
                  this.$router.push({
                    path: '/'
                  });
                } else {
                  ElMessage({
                    message: '登录失败',
                    type: 'error'
                  });
                }
              })
              .catch(error => {
                //接口调用方法统一处理
                this.logining = false;
              });
          }
        });
      },
      saasLogin() {
        /*调用登录接口*/
        UserApi.saasLogin({}, true)
          .then(res => {
            console.log(res);
            if (res.code == 1) {
              delCookie('baseInfo');
              /*保存个人信息*/
              setCookie('userinfo', res.data);
              /*设置一个登录状态*/
              setCookie('isLogin', true);
              /*跳转到首页*/
              this.$router.push({
                path: '/'
              });
            } else {
              ElMessage({
                message: '登录失败',
                type: 'error'
              });
            }
          }).catch(error => {
            console.log(error);
          });
      },
    }
  };
</script>

<style lang="scss">
  .login-bg {
    width: 100%;
    height: 100%;
    background: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .login-container {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 15% auto 0 auto;
    width: 447px;
    height: 406px;
    padding: 40px 40px 45px 40px;
    background: #ffffff;
    box-sizing: border-box;
    // box-shadow: 0px 8px 5px 0px rgba(0, 0, 0, 0.15);
    position: relative;

    .checkbox {
      margin-right: 13px;

      .el-checkbox__inner {
        border-radius: 50%;
        border-color: #5cb85c;
      }

      .el-checkbox__input.is-checked .el-checkbox__inner {
        background-color: #5cb85c;
      }
    }

    .login-btn {
      width: 368px;
      height: 51px;
      background: linear-gradient(0deg, #409eff, #409eff);
      border-radius: 5px;
      margin: 0 auto;
      font-size: 18px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #FFFFFF;
      text-align: center;
      line-height: 1;
      border: none;
    }

    .title {
      text-align: center;
      font-size: 22px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #999999;
      line-height: 34px;
      margin-bottom: 46px;
    }

    .remember {
      margin: 0px 0px 35px 0px;
    }
  }

  .login-container::after {
    content: '';
    position: absolute;
    left: 0;
    top: 99px;
    width: 8px;
    height: 76px;
    background: #49494E;
  }

  .left-img-input {
    width: 370px;
    height: 44px;
    line-height: 44px;
    background: #FFFFFF;
    border: 1px solid #EEEEEE;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 14px;

    .l-img {
      width: 20px;
      height: 20px;
      margin-right: 10px;
      flex-shrink: 0;
    }

    .l-input {
      flex: 1;
      border: none;
      background: none;
      font-size: 14px;
      color: #666666;
      input{
        border: 0;
      }
    }

    .el-input__inner {
      border: none;
      padding: 0;
    }

  }
</style>
