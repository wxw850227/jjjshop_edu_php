<template>
  <!--
    作者：luoyiming
    时间：2020-06-04
    描述：插件中心-直播-直播房间列表-审核房间
  -->
  <el-dialog title="审核编辑" v-model="dialogVisible" @close="dialogFormVisible" :close-on-click-modal="false" :close-on-press-escape="false" width="500px">
    <el-form size="small" :model="form" :rules="formRules" ref="form">
      <el-form-item label="是否通过" prop="audit_status" :label-width="formLabelWidth">
        <el-radio v-model="form.audit_status" label="10">通过</el-radio>
        <el-radio v-model="form.audit_status" label="20">未通过</el-radio>
      </el-form-item>
      <el-form-item label="备注" :label-width="formLabelWidth" v-if="form.audit_status==20">
        <el-input
          type="textarea"
          :rows="2"
          placeholder="请输入备注"
          v-model="form.audit_remark">
        </el-input>
      </el-form-item>
    </el-form>
    <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogFormVisible">取 消</el-button>
          <el-button type="primary" @click="eidtLive" :loading="loading">确 定</el-button>
        </div>
    </template>
  </el-dialog>
</template>

<script>
import LiveApi from '@/api/live.js';
export default {
  components: {},
  data() {

    var audit_status = (rule, value, callback) => {
            if (value === ''||value===0) {
              callback(new Error('请选择状态'));
            } else {
              callback();
            }
          };

    return {
      file_path: '',
      formRules: {
        audit_status: [
          {
            validator: audit_status,
            required: true,
            trigger: ['blur','change']
          }
        ]
      },
      /*左边长度*/
      formLabelWidth: '120px',
      /*是否显示*/
      dialogVisible: true,
      loading: false
    };
  },
  props: ['form', 'categorys'],
  created() {
  },
  methods: {
    /*审核*/
    eidtLive() {
      let self = this;
      let params = {
        room_id:self.form.room_id,
        status:self.form.audit_status,
        remark:self.form.audit_remark
      }
      self.$refs.form.validate(valid => {
        if (valid) {
          self.loading = true;
          LiveApi
            .auditRoom(params, true)
            .then(data => {
              self.loading = false;
              ElMessage({
                message: '审核成功',
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
    }
  }
};
</script>

<style>
.img {
  margin-top: 10px;
}
</style>
