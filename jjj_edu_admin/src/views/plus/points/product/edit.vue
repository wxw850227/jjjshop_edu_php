<template>
  <!--
    	作者：luoyiming
    	时间：2019-10-26
    	描述：商品管理-商品添加
    -->
  <div class="product-add" v-loading="loading">
    <!--form表单-->
    <el-form size="small" ref="form" :model="form" label-width="180px" v-if="!loading">
      <!--基础信息-->
      <Basic></Basic>
      <!--规格设置-->
      <Spec></Spec>
      <!--高级设置-->
      <Buyset></Buyset>
      <!--提交-->
      <div class="common-button-wrapper">
        <el-button size="small" type="info" @click="cancelFunc">取消</el-button>
        <el-button size="small" type="primary" @click="onSubmit" :loading="loading">修改</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
  import PointsApi from '@/api/plus/points.js';
  import Basic from './part/Basic.vue';
  import Spec from './part/Spec.vue';
  import Buyset from './part/Buyset.vue';
  import {
    formatModel
  } from '@/utils/base.js';
  export default {

    components: {
      /*基础信息*/
      Basic,
      /*规格信息*/
      Spec,
      /*高级设置*/
      Buyset,
    },
    data() {

      return {
        /*商品ID*/
        product_id: 0,
        /*是否正在加载*/
        loading: true,
        /*是否正在提交保存*/
        save_loading: false,
        /*form表单数据*/
        form: {
          model: {},
        },
        /*模型数据*/
        model: {
          /*商品名称*/
          product_name: '',
          product_price: '',
          product_points: '',
          /*商品分类*/
          category_id: null,
          /*商品图片*/
          file_path: '',
          image_id: '',
          /*商品状态*/
          product_status: 10,
          /*商品排序，默认100*/
          product_sort: 100,
          /*限购数量*/
          limit_num: 0,
          express_price: '',
          product_stock: ''
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
      this.product_id = this.$route.query.product_id;
      this.getData();
    },
    methods: {
      /**
       * 获取基础数据
       */
      getData: function() {
        let self = this;
        PointsApi.getEditProduct({
              product_id: self.product_id
            },
            true
          )
          .then(res => {
            self.loading = false;
            Object.assign(self.form, res.data);
            self.form.model.product_status = res.data.model.product_status.value;
          })
          .catch(error => {
            self.loading = false;
          });
      },

      /*提交*/
      onSubmit: function() {
        let self = this;
        self.$refs.form.validate(valid => {
          let params = formatModel(self.model, self.form.model);
          if (valid) {
            let params = formatModel(self.model, self.form.model);
            params.product_id = self.product_id;
            self.save_loading = true;
            PointsApi.editProduct({
                product_id: self.product_id,
                params: JSON.stringify(params)
              }, true)
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
