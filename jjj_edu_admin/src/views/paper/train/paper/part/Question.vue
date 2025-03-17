<template>
  <!--
    	作者：luoyiming
    	时间：2019-10-26
    	描述：商品管理-商品编辑-商品内容
    -->
  <div>
    <!--单选试题-->
    <div class="common-form">单选试题</div>
    <div class="mb20">
      <el-button class="button-new-tag" size="small" @click="addFunct(1)">+ 添加单选题</el-button>
    </div>

    <el-table class="mb20" size="small" :data="form.model.single" border style="width: 100%">
      <el-table-column prop="question_id" label="ID"></el-table-column>
      <el-table-column prop="category.name" label="分类"></el-table-column>
      <el-table-column prop="type_name" label="题型"></el-table-column>
      <el-table-column prop="browse_count" label="题干">
        <template  #default="scope">
          <div class="text-ellipsis">{{scope.row.title}}</div>
        </template>
      </el-table-column>
      <el-table-column prop="sort" label="排序"></el-table-column>
      <el-table-column fixed="right" label="操作" width="150">
        <template  #default="scope">
          <el-button @click="delClick(scope.$index,1)" type="text" size="small">
            删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--多选试题-->
    <div class="common-form">多选试题</div>
    <div class="mb20">
      <el-button class="button-new-tag" size="small" @click="addFunct(2)">+ 添加多选题</el-button>
    </div>
    <el-table class="mb20" size="small" :data="form.model.many" border style="width: 100%">
      <el-table-column prop="question_id" label="ID"></el-table-column>
      <el-table-column prop="category.name" label="分类"></el-table-column>
      <el-table-column prop="type_name" label="题型"></el-table-column>
      <el-table-column prop="browse_count" label="题干">
        <template  #default="scope">
          <div class="text-ellipsis">{{scope.row.title}}</div>
        </template>
      </el-table-column>
      <el-table-column prop="sort" label="排序"></el-table-column>
      <el-table-column fixed="right" label="操作" width="150">
        <template  #default="scope">
          <el-button @click="delClick(scope.$index,2)" type="text" size="small">
            删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--判断试题-->
    <div class="common-form">判断试题</div>
    <div class="mb20">
      <el-button class="button-new-tag" size="small" @click="addFunct(3)">+ 添加判断题</el-button>
    </div>
    <el-table class="mb20" size="small" :data="form.model.judge" border style="width: 100%">
      <el-table-column prop="question_id" label="ID"></el-table-column>
      <el-table-column prop="category.name" label="分类"></el-table-column>
      <el-table-column prop="type_name" label="题型"></el-table-column>
      <el-table-column prop="browse_count" label="题干">
        <template  #default="scope">
          <div class="text-ellipsis">{{scope.row.title}}</div>
        </template>
      </el-table-column>
      <el-table-column prop="sort" label="排序"></el-table-column>
      <el-table-column fixed="right" label="操作" width="150">
        <template  #default="scope">
          <el-button @click="delClick(scope.$index,3)" type="text" size="small">
            删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <Question :isDisabled='true' :questionType="questionType" :isquestion="isquestion" :islist="true"
      @closeDialog="closeFunc"></Question>
  </div>
</template>

<script>
  import Question from '@/components/question/question.vue';
  export default {
    components: {
      Question
    },
    data() {
      return {
        isquestion: false,
        questionType: 1
      };
    },
    created() {

    },
    inject: ['form'],
    methods: {
      addFunct(n) {
        this.questionType = n;
        this.isquestion = true;
      },
      delClick(n, type) {
        if (type == 1) {
          this.form.model.single.splice(n, 1)
        } else if (type == 2) {
          this.form.model.many.splice(n, 1);
        } else if (type == 3) {
          this.form.model.judge.splice(n, 1);
        }
      },
      closeFunc(e) {
        this.isquestion = false;
        console.log(e)
        if (e.params && e.params.length > 0) {
          if (this.questionType == 1) {
            e.params.forEach((item, index) => {
              if (this.form.model.single.length < this.form.model.single_number) {
                this.form.model.single.push(item)
              }
            })
          } else if (this.questionType == 2) {
            e.params.forEach((item, index) => {
              if (this.form.model.many.length < this.form.model.many_number) {
                this.form.model.many.push(item)
              }

            })
          } else if (this.questionType == 3) {
            e.params.forEach((item, index) => {
              if (this.form.model.judge.length < this.form.model.judge_number) {
                this.form.model.judge.push(item)
              }

            })
          }
        }
      }
    }
  };
</script>

<style></style>
