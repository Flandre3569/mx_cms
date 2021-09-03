<template>
  <div>
    <el-form :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { reactive, ref } from 'vue';
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import { rules } from '../config/account-config';
import { ElForm } from 'Element-Plus';
import localCache from '@/utils/cache';

export default defineComponent({
  setup() {
    const account = reactive({
      name: localCache.getCache('name') ?? '',
      password: localCache.getCache('password') ?? ''
    });

    // 拿到store
    const store = useStore();

    const formRef = ref<InstanceType<typeof ElForm>>();

    const loginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          // 判断是否需要记住密码
          if (isKeepPassword) {
            // 如果需要记住密码则本地缓存，如果不需要则删除本地缓存
            localCache.setCache('name', account.name);
            localCache.setCache('password', account.password);
          } else {
            localCache.deleteCache('name');
            localCache.deleteCache('password');
          }
        }
        // 验证登录信息
        store.dispatch('login/accountLoginAction', { ...account });
      });
    };

    // 编写好规则,我对规则进行了抽离，放在了config文件中
    // 以此减少一个文件中的代码量
    return {
      account,
      rules,
      loginAction,
      formRef
    };
  }
});
</script>

<style scoped></style>
