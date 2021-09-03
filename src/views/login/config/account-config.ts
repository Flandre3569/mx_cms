export const rules = {
  name: [
    {
      required: true,
      message: '用户名必须填写',
      trigger: 'change'
    },
    {
      pattern: /^[a-z0-9]{5,12}$/,
      message: '用户名必须是5~12个数字或字母',
      trigger: 'change'
    }
  ],
  password: [
    {
      required: true,
      message: '密码必须填写',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '密码必须是3位以上数字或字母',
      trigger: 'blur'
    }
  ]
};
