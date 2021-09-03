<template>
  <div>
    <el-form :rules="rules" :model="phoneInfo">
      <el-form-item label="手机号" prop="phoneNum">
        <el-input v-model="phoneInfo.phoneNum" />
      </el-form-item>
      <el-form-item label="验证码" prop="verifyCode">
        <div class="verify-code">
          <el-input v-model="phoneInfo.verifyCode" />
          <el-button type="primary" plain class="verify-code-btn">
            获取验证码
          </el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { reactive } from 'vue';
import { rules } from '../config/phone-config';

export default defineComponent({
  setup() {
    const phoneInfo = reactive({
      phoneNum: '',
      verifyCode: ''
    });
    return {
      phoneInfo,
      rules
    };
  }
});
</script>

<style scoped lang="less">
.verify-code {
  display: flex;
}
.verify-code-btn {
  margin-left: 8px;
}
</style>
