<template>
   <div class="login-bg" style="background-color: #323a4a;">
    <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px"
      class="demo-ruleForm login-container">
      <h3 class="title">Saas运营管理系统</h3>
      <el-form-item prop="account">
        <div class="left-img-input"><img class="l-img" src="/src/assets/img/login-name.png">
          <el-input class="l-input" type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="账号">
          </el-input>
        </div>
      </el-form-item>
      <el-form-item prop="checkPass">
        <div class="left-img-input"><img class="l-img" src="/src/assets/img/login-password.png">
          <el-input class="l-input" type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="密码">
          </el-input>
        </div>
      </el-form-item>
      <el-form-item prop="verifycode" style="line-height:0px;">
        <div class="left-img-input">
          <img class="l-img" src="@/assets/img/login-code.png">
          <el-input class="l-input" type="text" v-model="ruleForm2.verifycode" auto-complete="off" placeholder="验证码"></el-input>
          <sidentify :identifyCode="identifyCode"></sidentify>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button class="login-btn" @click.native.prevent="handleSubmit2" :loading="logining">登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import sidentify from '@/components/sidentify.vue';
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
        logining: false,
        ruleForm2: {
          account: '',
          checkPass: ''
        },
        rules2: {
          account: [{
            required: true,
            message: '请输入账号',
            trigger: 'blur'
          }],
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
        checked: true
      };
    },
    created() {
      this.refreshCode();
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
	handleReset2() {
			this.$refs.ruleForm2.resetFields();
		},
      /*登录方法*/
      handleSubmit2(ev) {
        var _this =this;
        this.$refs.ruleForm2.validate(valid => {
          if (valid) {
            this.logining = true;
            var Params = {
              username: this.ruleForm2.account,
              password: this.ruleForm2.checkPass
            };
            /*调用登录接口*/
         		UserApi.login(Params,true)
            .then(async (res) => {
              this.logining = false;
              if (res.code == 1) {
                await afterLogin(res);
                this.logining = false;
               this.$nextTick(() => {
               this.$router.push({
                path: '/home'
              });
            });
              } else {
                ElMessage({
                  message: '登录失败',
                  type: 'error'
                });
              }
            })
              .catch(error => {
                console.log("error",error)
                //接口调用方法统一处理
                _this.logining = false;
              });
          }
        });
      }
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

    }

    .el-input__inner {
      border: none;
      padding: 0;
    }

  }
</style>
