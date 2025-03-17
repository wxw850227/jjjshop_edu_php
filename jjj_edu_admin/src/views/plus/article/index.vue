<template>
  <!--
      	作者：luoyiming
      	时间：2019-12-25
      	描述：插件中心-文章
      -->
    <div class="user">
        <div class="common-seach-wrap">
            <el-tabs v-model="activeName">
                <el-tab-pane label="文章管理" name="article">
                    <ArticleIndex v-if="activeName=='article'"></ArticleIndex>
                </el-tab-pane>
                <el-tab-pane label="分类管理" name="category">
                    <CategoryIndex v-if="activeName=='category'"></CategoryIndex>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
    import ArticleIndex from './article/Index.vue';
    import CategoryIndex from './category/Index.vue';
    export default {
        components: {
            ArticleIndex,
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
