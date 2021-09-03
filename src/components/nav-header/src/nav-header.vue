<template>
  <div class="nav-header">
    <i
      class="fold-menu"
      :class="isFold ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
      @click="foldMenu"
    ></i>
    <div class="content">
      <div>
        <hy-breadcrumb :breadcrumbs="breadcrumbs"></hy-breadcrumb>
      </div>
      <user-info></user-info>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ref, computed } from 'vue';
import userInfo from './user-info.vue';
import HyBreadcrumb from '@/base-ui/breadcrumb/index';
import { pathBreadcrumbs } from '@/utils/map-menus';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

export default defineComponent({
  emits: ['foldChange'],
  components: {
    userInfo,
    HyBreadcrumb
  },
  setup(props, { emit }) {
    const isFold = ref(false);
    const foldMenu = () => {
      isFold.value = !isFold.value;
      emit('foldChange', isFold.value);
    };

    // 面包屑的数据
    const store = useStore();
    const breadcrumbs = computed(() => {
      const userMenus = store.state.login.userMenus;
      const route = useRoute();
      const currentPath = route.path;
      return pathBreadcrumbs(userMenus, currentPath);
    });
    return {
      isFold,
      foldMenu,
      breadcrumbs
    };
  }
});
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;
  .fold-menu {
    font-size: 35px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .content {
    display: flex;
    justify-content: space-between;
    flex: 1;
    align-items: center;
    padding: 0 20px;
  }
}
</style>
