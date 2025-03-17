<template>
  <!--
          作者：luoyiming
          时间：2019-10-25
          描述：广告分类-添加
      -->
  <el-dialog title="添加分类" v-model="dialogVisible" @close='dialogFormVisible' :close-on-click-modal="false"
    :close-on-press-escape="false">
    <el-form size="small" :model="form" :rules="formRules" ref="form">
      <el-form-item label="分类名称" :label-width="formLabelWidth" prop="name">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogFormVisible">取 消</el-button>
          <el-button type="primary" @click="addCategory" :loading="loading">确 定</el-button>
        </div>
    </template>
  </el-dialog>
</template>

<script>
  import AdApi from '@/api/ad.js';
  export default {
    data() {
      return {
        form: {
          /*名称*/
          name: '',
          sort: 1,
        },
        formRules: {
          name: [{
            required: true,
            message: '请输入分类名称',
            trigger: 'blur'
          }],
        },
        /*左边长度*/
        formLabelWidth: '120px',
        /*是否显示*/
        dialogVisible: false,
        loading: false,
      };
    },
    props: ['open_add'],
    created() {
      this.dialogVisible = this.open_add;
    },
    methods: {
      /*添加分类*/
      addCategory() {
        let self = this;
        let params = this.form;
        self.$refs.form.validate((valid) => {
          if (valid) {
            self.loading = true;
            AdApi.addAdCategory(params, true).then(data => {
                self.loading = false;
                ElMessage({
                  message: data.msg,
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
          this.$emit('closeDialog', {
            type: 'success',
            openDialog: false
          })
        } else {
          this.$emit('closeDialog', {
            type: 'error',
            openDialog: false
          })
        }
      }

    }
  };
</script>

<style></style>
