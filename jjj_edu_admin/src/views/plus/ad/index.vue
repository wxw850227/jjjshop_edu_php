<template>
  <!--
      	作者：luoyiming
      	时间：2019-12-25
      	描述：广告
      -->
    <div class="user">
        <div class="common-seach-wrap">
            <el-tabs v-model="activeName">
                <el-tab-pane label="广告管理" name="article">
                    <adIndex v-if="activeName=='article'"></adIndex>
                </el-tab-pane>
                <el-tab-pane label="分类管理" name="category">
                    <CategoryIndex v-if="activeName=='category'"></CategoryIndex>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
    import PageApi from '@/api/page.js';
    import adIndex from './ad/index.vue';
    import CategoryIndex from './category/index.vue';
    export default {
        components: {
            adIndex,
            CategoryIndex,
        },
        data() {
            return {
                activeName: 'article',
                /*是否加载完成*/
                loading: true,
            }
        },
        created() {


        },
        methods: {}
    }
</script>
