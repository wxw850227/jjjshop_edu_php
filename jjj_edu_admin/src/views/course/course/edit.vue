<template>
  <div class="product-add" v-loading="loading">
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="基础设置" name="basic"></el-tab-pane>
      <el-tab-pane label="课程详情" name="content"></el-tab-pane>
    </el-tabs>
    <!--form表单-->
    <el-form size="small" ref="form" :model="form" label-width="180px" v-if="!loading">
      <!--基础信息-->
      <Basic v-show="activeName == 'basic'"></Basic>
      <!--商品详情-->
      <Content v-show="activeName == 'content'"></Content>
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
  import CourseApi from '@/api/course.js';
  import Basic from './part/Basic.vue';
  import Content from './part/Content.vue';
  import {
    formatModel
  } from '@/utils/base.js';
  export default {

    components: {
      /*基础信息*/
      Basic,
      /*商品详情*/
      Content,
    },
    data() {

      return {
        activeName: 'basic',
        /* 审核状态*/
        /*商品ID*/
        course_id: 0,
        /*判断是编辑*/
        scene: 'edit',
        /*是否正在加载*/
        loading: true,
        /*是否正在提交保存*/
        save_loading: false,
        /*form表单数据*/
        form: {
          model: {},
          /*商品分类*/
          category: [],
          lecturer: []
        },
        /*模型数据*/
        model: {
          /*商品名称*/
          title: '',
          /*商品分类*/
          category_id: '',
		  lecturer_id: '',
          video_link: '',
          video_image: '',
          label: [],
          banner: [],
          image_id: 0,
          image: {
            file_path: ''
          },
          /*商品详情内容*/
          content: '',
          /*商品排序，默认100*/
          sort: 100,
          course_price: '',
          is_pay: 0,
          is_show: 0,
          is_top: 0,
          is_points_discount: '',
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
      this.course_id = this.$route.query.course_id;
      this.scene = this.$route.query.scene;
      this.getData();
    },
    methods: {
      /**
       * 获取基础数据
       */
      getData: function() {
        let self = this;
        CourseApi.getEditCourse({
              course_id: self.course_id,
              scene: self.scene
            },
            true
          )
          .then(res => {
            self.loading = false;
            Object.assign(self.form, res.data);
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
          let params = formatModel(self.model, self.form.model);
          if (valid) {
            let params = formatModel(self.model, self.form.model);
            params.scene = self.scene;
            params.course_id = self.course_id;
            self.save_loading = true;
            CourseApi.editCourse(params, true)
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
