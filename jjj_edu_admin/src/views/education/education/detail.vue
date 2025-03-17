<template>
  <!--
      作者：luoyiming
      时间：2019-10-24
      描述：章节管理
  -->
  <div class="">
    <div class="d-b-s" style="margin-bottom: 10px;">
      <div style="margin-right: 10px;"><img style="width: 131px;height: 74px;" v-img-url="detail.image_id ? detail.image.file_path : ''" alt="" /></div>
      <div class="flex-1 d-c d-b-s" style="height: 74px;">
        <div class="f14 gray3">{{ detail.title }}</div>
        <div class="f12 orange">￥{{ detail.course_price }}</div>
        <el-button size="mini" type="success"  v-auth="'/education/section/add'" @click="addSection">添加课时</el-button>
      </div>
    </div>
    <el-tabs v-model="activeName" @tab-change="handleClick">
      <el-tab-pane label="课时列表" name="Section"><Section :course_id="course_id" v-if="activeName == 'Section'"></Section></el-tab-pane>
      <el-tab-pane label="学员列表" name="Order"><Order :course_id="course_id" v-if="activeName == 'Order'"></Order></el-tab-pane>
      <el-tab-pane label="课程评价" name="Comment"><Comment :course_id="course_id" v-if="activeName == 'Comment'"></Comment></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import EducationApi from '@/api/education.js';
import Section from '../section/index.vue';
import Order from '../order/index.vue';
import Comment from '../comment/index.vue';
export default {
  components: {
    Section,
    Order,
    Comment
  },
  data() {
    return {
      course_id: 0,
      /*是否正在加载*/
      loading: true,
      activeName: 'Section',
      detail: {
        image_id: 0,
        image: {
          file_path: ''
        }
      }
    };
  },
  created() {
    /*获取列表*/
    this.course_id = this.$route.query.course_id;
    this.getData();
  },
  methods: {
    handleClick(tab, event) {},
    /*获取列表*/
    getData() {
      let self = this;
      self.loading = true;
      let Params = {
        course_id: self.course_id
      };
      EducationApi.getCourseDetail(Params, true)
        .then(data => {
          self.detail = data.data.model;
          self.loading = false;
        })
        .catch(error => {
          self.loading = false;
        });
    },
    addSection() {
      this.$router.push({
        path: '/education/section/add',
        query: {
          course_id: this.course_id,
          scene: 'add'
        }
      });
    }
  }
};
</script>

<style></style>
