<template>
  <div class="userInfo">
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar
          src="https://mingxuan3569.oss-cn-beijing.aliyuncs.com/image/1332726596_018ea02c53b6cb96004f53458d804f09.jpg"
        ></el-avatar>
        <span class="avatar-name">{{ name }}</span>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>用户信息</el-dropdown-item>
          <el-dropdown-item>系统管理</el-dropdown-item>
          <el-dropdown-item
            divided
            icon="el-icon-circle-close"
            @click="handleExitClick"
            >退出登录</el-dropdown-item
          >
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import localCache from '@/utils/cache';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const store = useStore();
    const name = computed(() => store.state.login.userInfo.name);
    const router = useRouter();
    const handleExitClick = () => {
      localCache.deleteCache('token');
      router.push('/main');
    };
    return {
      name,
      handleExitClick
    };
  }
});
</script>

<style scoped lang="less">
.el-dropdown-link {
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 20px;
  .avatar-name {
    padding: 0 10px;
  }
}
</style>
