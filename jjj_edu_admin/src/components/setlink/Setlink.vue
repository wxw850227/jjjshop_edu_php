<template>
  <el-dialog
    title="超链接设置"
    v-model="dialogVisible"
    @close="dialogFormVisible"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
  >
    <!--内容-->
    <el-tabs type="border-card" v-model="activeName">
      <!--页面-->
      <el-tab-pane label="页面" name="pages">
        <Pages
          v-if="activeName == 'pages'"
          @changeData="activeDataFunc"
        ></Pages>
      </el-tab-pane>
      <el-tab-pane label="文章" name="Article">
        <Article
          v-if="activeName == 'Article'"
          @changeData="activeDataFunc"
        ></Article>
      </el-tab-pane>
      <el-tab-pane label="课程" name="CourseIndex">
        <CourseIndex
          v-if="activeName == 'CourseIndex'"
          @changeData="activeDataFunc"
        ></CourseIndex>
      </el-tab-pane>
      <el-tab-pane label="教务" name="EducationIndex">
        <EducationIndex
          v-if="activeName == 'EducationIndex'"
          @changeData="activeDataFunc"
        ></EducationIndex>
      </el-tab-pane>
      <el-tab-pane label="讲师" name="LectureIndex">
        <LectureIndex
          v-if="activeName == 'LectureIndex'"
          @changeData="activeDataFunc"
        ></LectureIndex>
      </el-tab-pane>
      <el-tab-pane label="练习" name="TrainIndex">
        <TrainIndex
          v-if="activeName == 'TrainIndex'"
          @changeData="activeDataFunc"
        ></TrainIndex>
      </el-tab-pane>
      <el-tab-pane label="自定义" name="diypage">
        <DiyPage
          v-if="activeName == 'diypage'"
          @changeData="activeDataFunc"
        ></DiyPage>
      </el-tab-pane>
      <el-tab-pane label="我的菜单" name="menu">
        <Menu v-if="activeName == 'menu'" @changeData="activeDataFunc"></Menu>
      </el-tab-pane>
    </el-tabs>
    <template #footer>
      <div class="dialog-footer d-b-c">
        <div class="flex-1">
          <div v-if="activeData != null" class="d-s-s d-c tl">
            <p class="text-ellipsis setlink-set-link">
              <span>当前链接：</span>
              <span class="gray9">{{ activeData.type }}</span>
              <span class="p-0-10 gray">/</span>
              <span class="blue">{{ activeData.name }}</span>
            </p>
            <p class="text-ellipsis gray" style="font-size: 10px">
              {{ activeData.url }}
            </p>
          </div>
          <div v-else class="tl">暂无</div>
        </div>
        <div class="setlink-footer-btn">
          <el-button size="small" @click="dialogFormVisible(false)"
            >取 消</el-button
          >
          <el-button
            size="small"
            type="primary"
            @click="dialogFormVisible(true)"
            >确 定</el-button
          >
        </div>
      </div>
    </template>
  </el-dialog>
</template>

<script>
import Pages from "./part/Pages.vue";
import DiyPage from "./part/DiyPage.vue";
import CourseIndex from "./part/Courses.vue";
import LectureIndex from "./part/Lecture.vue";
import TrainIndex from "./part/Trains.vue";
import EducationIndex from "./part/Education.vue";
import Menu from "./part/Menu.vue";
import Article from "./part/Article.vue";
import SmallProgram from "./part/SmallProgram.vue";
import H5 from "./part/H5.vue";
export default {
  components: {
    Menu,
    Pages,
    Article,
    SmallProgram,
    CourseIndex,
    H5,
    DiyPage,
    LectureIndex,
    TrainIndex,
    EducationIndex,
  },
  data() {
    return {
      /*是否显示*/
      dialogVisible: true,
      /*选中的链接*/
      activeData: null,
      activeName: "pages",
    };
  },
  props: ["is_linkset"],
  created() {
    this.dialogVisible = this.is_linkset;
  },
  methods: {
    /*关闭弹窗*/
    dialogFormVisible(e) {
      if (e) {
        this.$emit("closeDialog", this.activeData);
      } else {
        this.$emit("closeDialog", null);
      }
    },

    /*页面返回值*/
    activeDataFunc(e) {
      this.activeData = e;
    },
  },
};
</script>

<style>
.marketing-box .el-tabs__item {
  font-size: 12px;
}

.setlink-footer-btn {
  width: 160px;
}

.setlink-set-link {
  width: 500px;
}
</style>
