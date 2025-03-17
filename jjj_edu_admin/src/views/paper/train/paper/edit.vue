<template>
  <div class="product-add" v-loading="loading">
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="基础设置" name="basic"></el-tab-pane>
      <el-tab-pane label="答案解析" name="question"></el-tab-pane>
    </el-tabs>
    <!--form表单-->
    <el-form size="small" ref="form" :model="form" label-width="180px" v-if="!loading">
      <!--基础信息-->
      <Basic v-show="activeName == 'basic'"></Basic>
      <!--题库-->
      <Questionindex v-show="activeName == 'question'"></Questionindex>
      <!--审核-->
      <div class="common-button-wrapper" style="height: 50px">
        <el-button size="small" type="info" @click="cancelFunc">取消</el-button>
        <el-button size="small" type="primary" @click="onSubmit('edit')" :disabled="save_loading">发布
        </el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
  import PaperApi from '@/api/paper.js';
  import Basic from './part/Basic.vue';
  import Questionindex from './part/Question.vue';
  import {
    formatModel
  } from '@/utils/base.js';
  export default {

    components: {
      /*基础信息*/
      Basic,
      /*商品详情*/
      Questionindex,
    },
    data() {

      return {
        save_loading: false,
        activeName: 'basic',
        /*是否正在加载*/
        loading: false,
        paper_id: 0,
        scene: 'edit',
        /*form表单数据*/
        form: {
          model: {
            paper_paper_id: 0,
            title: '',
            image_id: '',
            item_number: '',
            virtual_answer: '',
            single_number: '',
            single_score: '',
            many_number: '',
            many_score: '',
            judge_number: '',
            judge_score: '',
            difficulty: null,
            sort: 0,
            is_score:0,
            is_show: 0,
            virtual_sales: 0,
            question: [],
            single: [],
            many: [],
            judge: []
          },
          /*商品分类*/
          category: [],
          questionType: [],
          single: [],
          many: [],
          judge: [],
          
        }
      };
    },
    provide: function() {
      return {
        form: this.form
      };
    },
    created() {
      /*获取列表*/
      this.paper_id = this.$route.query.paper_id;
      this.scene = this.$route.query.scene;
      console.log('form',this.form);
      console.log('form',this.form.model.single);
      this.getData();
    },
    methods: {
      /**
       * 获取基础数据
       */
      getData: function() {
        let self = this;
        PaperApi.getEdittrainPaper({
              paper_id: self.paper_id,
              scene: self.scene
            },
            true
          )
          .then(res => {
            self.loading = false;
            Object.assign(self.form, res.data);
            let single = {};
            if (self.form.model.single.length > 0) {
              self.form.model.single.forEach((item, index) => {
                single = {
                  question_id: item.question_id,
                  category: {
                    name: item.question.category.name
                  },
                  type_name: item.question.type_name,
                  title: item.question.title,
                  sort: item.question.sort,
                  question_type: item.question_type,
                  question_id: item.question_id,
                  paper_question_id: item.paper_question_id,
                  paper_id: item.paper_id
                }
                self.form.single.push(single)
              })
            }
            let many = {};
            if (self.form.model.many.length > 0) {
              self.form.model.many.forEach((item, index) => {
                many = {
                  question_id: item.question_id,
                  category: {
                    name: item.question.category.name
                  },
                  type_name: item.question.type_name,
                  title: item.question.title,
                  sort: item.question.sort,
                  question_type: item.question_type,
                  question_id: item.question_id,
                  paper_question_id: item.paper_question_id,
                  paper_id: item.paper_id
                }
                self.form.many.push(many)
              })
            }
            let judge = {};
            if (self.form.model.judge.length > 0) {
              self.form.model.judge.forEach((item, index) => {
                judge = {
                  question_id: item.question_id,
                  category: {
                    name: item.question.category.name
                  },
                  type_name: item.question.type_name,
                  title: item.question.title,
                  sort: item.question.sort,
                  question_type: item.question_type,
                  question_id: item.question_id,
                  paper_question_id: item.paper_question_id,
                  paper_id: item.paper_id
                }
                self.form.judge.push(judge)
              })
            }

            self.form.model.single = self.form.single;
            self.form.model.many = self.form.many;
            self.form.model.judge = self.form.judge;
          })
          .catch(error => {
            self.loading = false;
          });
      },

      /*转JSON字符串*/
      convertJson(list) {
        let obj = {};
        list.forEach(item => {
          obj[item.grade_id] = item.product_equity;
        });
        return JSON.stringify(obj);
      },

      /*提交*/
      onSubmit: function(submit_type) {
        let self = this;
        self.$refs.form.validate(valid => {
          if (valid) {
            let params = self.form.model;
            console.log(params)
            params.scene = self.scene;
            params.paper_id = self.paper_id;
            params.question = [...self.form.model.single, ...self.form.model.many, ...self.form.model.judge];
            self.save_loading = true;
			params = JSON.stringify(params);
            PaperApi.edittrainPaper({params:params}, true)
              .then(data => {
                self.save_loading = false;
                ElMessage({
                  message: '保存成功',
                  type: 'success'
                });
                self.cancelFunc();
              })
              .catch(error => {
                self.save_loading = false;
              });
          } else {
            ElMessage({
              message: '请检查必填项是否填写完整',
              type: 'error'
            });
          }
        });
      },

      /*图片数值只保留id*/
      ImgKeepId(list) {
        let arr = [];
        for (let i = 0, length = list.length; i < length; i++) {
          let obj = {
            image_id: list[i].image_id,
            file_id: list[i].file_id
          };
          arr.push(obj);
        }
        return arr;
      },

      /*保存为草稿*/
      Draft() {
        let self = this;
        self.form.model.product_status = 30;
        self.onSubmit();
      },

      /*取消*/
      cancelFunc() {
        this.$router.back(-1);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .basic-setting-content {}

  .product-add {
    padding-bottom: 50px;
  }

  .mb50 {
    margin-bottom: 50px;
  }
</style>
