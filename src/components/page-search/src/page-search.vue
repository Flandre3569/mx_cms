<template>
  <div class="page-search">
    <hy-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1 class="header">高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btn">
          <el-button
            type="primary"
            icon="el-icon-search"
            plain
            @click="queryClick"
            >搜索</el-button
          >
          <el-button
            type="primary"
            icon="el-icon-refresh"
            plain
            @click="resetClick"
            >重置</el-button
          >
        </div>
      </template>
    </hy-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import HyForm from '@/base-ui/form/index';

export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    HyForm
  },
  emits: ['resetBtnClick', 'queryBtnClick'],
  setup(props, { emit }) {
    // 双向绑定的属性应当由配置文件中的field来确定
    const formItems = props.searchFormConfig?.formItems ?? [];
    const formOriginData: any = {};
    for (const item of formItems) {
      formOriginData[item.filed] = '';
    }

    const formData = ref(formOriginData);

    // 页面点击重置
    const resetClick = () => {
      // for (const key in formOriginData) {
      //   formData.value[`${key}`] = formOriginData[key];
      // }
      formData.value = formOriginData;
      emit('resetBtnClick');
    };

    // 当用户点击搜索
    const queryClick = () => {
      emit('queryBtnClick', formData.value);
    };
    return {
      formData,
      resetClick,
      queryClick
    };
  }
});
</script>

<style scoped lang="less">
.handle-btn {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
