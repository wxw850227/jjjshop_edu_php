<template>

  <el-dialog title="添加插件" v-model="dialogVisible" @close='dialogFormVisible' :close-on-click-modal="false"
    :close-on-press-escape="false">
      <el-table size="small" :data="categoryList" border style="width: 100%" v-loading="loading">
        <el-table-column prop="name" label="名称"></el-table-column>
        <el-table-column prop="name" label="操作" width="80">
          <template  #default="scope">
            <el-button @click="addClick(scope.row)" size="small">添加</el-button>
           </template>
        </el-table-column>
      </el-table>
    <!-- <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible">取 消</el-button>
      <el-button type="primary" @click="addClick()" :loading="loading">确 定</el-button>
    </div> -->
  </el-dialog>
</template>

<script>
  import PlugsApi from '@/api/plugs.js';
  export default {
    data() {
      return {
        form: {
          status: 0,
          srot: 1,
          plus_name: '',
          desc: '',
          ico: '',
          url: 'index/index',
          sort: 1,

        },
        categoryList: [],
        srot: '1',
        radio: '1',
        /*左边长度*/
        formLabelWidth: '120px',
        /*是否显示*/
        dialogVisible: false,
        /*是否正在加载*/
        loading: true,
      };
    },
    props: {
      open_add:Boolean,
      curModel:Object
    },
    created() {
      this.dialogVisible = this.open_add;
      /*获取插件列表*/
      this.getCategoryList();
    },
    methods: {

      /*获取插件*/
      getCategoryList() {
        let self = this;
        let Params = {
          plus_category_id:self.curModel.plus_category_id
        };
        PlugsApi.getplugs(Params, true)
          .then(data => {
            self.loading = false;
            self.categoryList = data.data.accessList;
          })
          .catch(error => {
            self.loading = false;
          });
      },

      /*添加插件*/
      addClick(e) {
        let self = this;
        let params = {
          access_id:e.access_id,
          plus_category_id:self.curModel.plus_category_id
        };
        PlugsApi.addplugs(params, true).then(res => {
            self.loading = false;
            if (res.code == 1) {
              ElMessage({
                message: '恭喜你，添加成功',
                type: 'success'
              });
              self.dialogFormVisible(true);
            } else {
                self.loading = false;
              ElMessage.error('错了哦，这是一条错误消息');
            }
          })
          .catch(error => {
              self.loading = false;
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
