<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch v-model="currentTabs">
      <el-tab-pane name="account">
        <template #label>
          <span><i class="el-icon-user"></i> 账号登入</span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span><i class="el-icon-mobile-phone"></i> 手机登入</span>
        </template>
        <login-phone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>

    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button class="login-btn" type="primary" @click="loginClick">
      立即登录
    </el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import LoginAccount from './login-account.vue';
import LoginPhone from './login-phone.vue';

export default defineComponent({
  components: {
    LoginAccount,
    LoginPhone
  },
  setup() {
    // 定义属性
    const isKeepPassword = ref(true);
    const accountRef = ref<InstanceType<typeof LoginAccount>>();
    const phoneRef = ref<InstanceType<typeof LoginPhone>>();
    const currentTabs = ref('account');

    // 定义方法
    const loginClick = () => {
      if (currentTabs.value === 'account') {
        accountRef.value?.loginAction(isKeepPassword.value);
      } else {
        console.log('phoneRef被触发了');
      }
    };
    return {
      isKeepPassword,
      currentTabs,
      accountRef,
      phoneRef,
      loginClick
    };
  }
});
</script>

<style scoped lang="less">
.login-panel {
  margin-top: -200px;
  width: 400px;
  .title {
    text-align: center;
  }
}
.account-control {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
.login-btn {
  width: 100%;
  margin-top: 20px;
}
</style>
