<template>
  <div>
    <div class="stem">{{ index + 1 }}.{{ data.question && data.question.title }}</div>
    <div class="options">
      <template v-if="data.question_type != 2">
        <el-radio-group :model-value="data.answer">
          <template v-if="data.question && data.question && data.question.option.length > 0">
            <div class="ww100"  v-for="(v,idx) in data.question.option" :key="idx">
              <el-radio :label="getPreOption(idx)">
                <template v-if="data.question.option_type == 1">
                {{getPreOption(idx)}} {{ v.content }}
                </template>
                <template v-if="data.question.option_type == 2">
                <div class="d-s-c"><span class="mr10">{{getPreOption(idx)}}</span> <img :src="v.content" width="80" /></div>
                </template>
              </el-radio>
            </div>
          </template>
        </el-radio-group>
      </template>
      <template v-else>
        <el-checkbox-group :model-value="checkBoxAnser(data.answer)">
          <template v-for="(v,idx) in data.question.option" :key="idx">
            <div class="checkBoxWrap" :class="{ imgWrap: data.question.option_type == 2 }">
              <el-checkbox :label="getPreOption(idx)">
                <template v-if="data.question.option_type == 1">
                {{getPreOption(idx)}} {{ v.content }}
                </template>
                <template v-if="data.question.option_type == 2">
                <div class="d-s-c"><span class="mr10">{{getPreOption(idx)}}</span> <img :src="v.content" width="100" /></div>
                </template>
              </el-checkbox>
            </div>
          </template>
        </el-checkbox-group>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
    },
    index: {
      type: Number,
    },
  },
  methods: {
    getPreOption(n){
      return String.fromCharCode(n + 65)
    },
    checkBoxAnser(val){
      if(!val){
        return []
      }
      let arr = val.split(",");
      return arr
    }
  }
};
</script>

<style scoped lang="scss">
::v-deep(.el-checkbox){
  height: auto !important;
}
.stem {
  margin-bottom: 10px;
  font-size: 14px;
}

.option {
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  gap: 6px;
}
.checkBoxWrap{
  width: 100%;
  margin-bottom: 14px;
  &:last-child{
    margin-bottom: 0;
  }
}
.imgWrap{
  margin-bottom: 20px;
  &:last-child{
    margin-bottom: 0;
  }
}
</style>
