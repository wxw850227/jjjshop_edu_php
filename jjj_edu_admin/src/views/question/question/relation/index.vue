<template>
  <!--
    	作者：luoyiming
    	时间：2019-10-25
    	描述：组件-选择课程
    -->
  <el-dialog title="知识点" v-model="dialogVisible" @close="dialogFormVisible" :close-on-click-modal="false"
    :close-on-press-escape="false" width="900px" :modal-append-to-body="false">
    <el-button class="mb10" size="small" type="primary" icon="Plus" @click="addClick">关联知识点</el-button>
    <!--内容-->
    <div class="product-content">
      <div class="table-wrap">
        <el-table size="small" :data="listData" border style="width: 100%" highlight-current-row v-loading="loading"
          @selection-change="tableCurrentChange">
          <el-table-column type="selection" :selectable="selectableFunc" width="44"></el-table-column>
          <el-table-column width="70" label="课程图片">
            <template  #default="scope">
              <img :src="scope.row.course.image.file_path" width="30" height="30" />
            </template>
          </el-table-column>
          <el-table-column prop="course.title" label="课程名称"></el-table-column>
          <el-table-column prop="create_time" width="140" label="添加时间"></el-table-column>
          <el-table-column prop="create_time" width="100" label="排序">
            <template  #default="scope">
              <el-input @blur="changeSort(scope.row.sort,scope.row.id)" placeholder="请输入选项内容"
                v-model="scope.row.sort"></el-input>
            </template>
          </el-table-column>
          <el-table-column width="80" label="操作">
            <template  #default="scope">
              <el-button size="mini" @click="delFunc(scope.row.id)">移除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <!--分页-->
      <div class="pagination">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" background
          :current-page="curPage" :page-sizes="[2, 10, 20, 50, 100]" :page-size="pageSize"
          layout="total, prev, pager, next, jumper" :total="totalDataNumber"></el-pagination>
      </div>
    </div>
    <template #footer>
        <div class="dialog-footer">
          <el-button size="small" @click="dialogVisible=false">取 消</el-button>
        </div>
    </template>
    <course :iscourse="iscourse" :excludeIds="exclude_ids" :islist="true" @closeDialog="closeFunc"></course>
  </el-dialog>
</template>

<script>
  import QuestionApi from '@/api/question.js';
  import course from '@/components/course/course.vue';
  export default {
    components: {
      course
    },
    data() {
      return {
        /*是否加载完成*/
        loading: true,
        /*当前是第几页*/
        curPage: 1,
        /*一页多少条*/
        pageSize: 20,
        /*一共多少条数据*/
        totalDataNumber: 0,
        formInline: {},
        //课程分类列表
        cateList: [],
        //课程列表
        listData: [],
        multipleSelection: [],
        /*左边长度*/
        formLabelWidth: '120px',
        /*是否显示*/
        dialogVisible: false,
        /*结果类别*/
        type: 'error',
        /*传出去的参数*/
        params: null,
        iscourse: false,
        exclude_ids: []
      };
    },
    props: ['isPopUp', 'question_id'],
    watch: {
      isPopUp: function(n, o) {
        if (n != o) {
          if (n) {
            this.dialogVisible = n;
            this.type = 'error';
            this.params = null;
            this.getData();
          }
        }
      }
    },
    created() {

    },
    methods: {

      /*是否可以勾选*/
      selectableFunc(e) {
        if (typeof e.noChoose !== 'boolean') {
          return true;
        }
        return e.noChoose;
      },

      /*选择第几页*/
      handleCurrentChange(val) {
        this.curPage = val;
        this.getData();
      },

      /*每页多少条*/
      handleSizeChange(val) {
        this.curPage = 1;
        this.pageSize = val;
        this.getData();
      },

      /*获取课程列表*/
      getData() {
        let self = this;
        let params = self.formInline;
        self.loading = true;
        params.page = self.curPage;
        params.list_rows = self.pageSize;
        params.question_id = self.question_id;
        QuestionApi.relationList(params, true)
          .then(res => {
            self.loading = false;
            self.listData = res.data.list.data;
            self.exclude_ids = res.data.list.data;
            self.totalDataNumber = res.data.list.total;
          })
          .catch(error => {});
      },

      /*单选*/
      SingleFunc(row) {
        this.multipleSelection = [row];
        this.addClerk();
      },

      //点击确定
      addClerk() {
        let self = this;
        let params = null;
        let type = 'success';
        if (self.multipleSelection.length < 1) {
          ElMessage({
            message: '请至少选择一件产品课程！',
            type: 'error'
          });
          return;
        }
        params = self.multipleSelection[0];
        params.image = params.image[0].file_path;
        self.params = params;
        self.type = 'success';
        self.dialogVisible = false;
      },

      /*关闭弹窗*/
      dialogFormVisible() {
        this.$emit('closeDialog', {
          type: this.type,
          openDialog: false,
          params: this.params
        });
      },

      /*监听复选按钮选中事件*/
      tableCurrentChange(val) {
        this.multipleSelection = val;
      },
      addClick() {
        this.iscourse = true;
      },
      changeSort(n, id) {
        let self = this;
        self.iscourse = false;
        let params = {
          id: id,
          sort: n
        };
        QuestionApi.setsortRelation(params, true)
          .then(res => {
            self.loading = false;
            ElMessage({
              message: '操作成功',
              type: 'success'
            });
            self.getData()
          })
          .catch(error => {});
      },
      delFunc(id) {
        let self = this;
       ElMessageBox.confirm('确认后将永久删除，确定删除该关联吗?', '提示', {
            type: 'warning'
          })
          .then(() => {
            QuestionApi.delRelation({
              id: id
            }).then(data => {
              ElMessage({
                message: '删除成功',
                type: 'success'
              });
              self.getData();
            });
          });
      },
      closeFunc(e) {
        let self = this;
        this.iscourse = false;
        if (e.type == 'success') {

          let params = {
            question_id: self.question_id,
            course_id: []
          };
          e.params.forEach((item, index) => {
            params.course_id.push(item.course_id)
          })
          QuestionApi.addRelation(params, true)
            .then(res => {
              self.loading = false;
              self.getData()
            })
            .catch(error => {});
        }
      }
    }
  };
</script>

<style>
  .no-list .el-checkbox {
    display: none;
  }

  .mb10 {
    margin-bottom: 10px;
  }
</style>
