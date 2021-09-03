export const rules = {
  phoneNum: [
    {
      required: true,
      message: '请填写手机号',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9a-z]{11,11}$/,
      message: '手机号码必须是11位数字',
      trigger: 'blur'
    }
  ],
  verifyCode: [
    {
      required: true,
      message: '验证码必须填写',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9a-z]{6,6}$/,
      message: '验证码必须是6位数字或字母',
      trigger: 'blur'
    }
  ]
};
