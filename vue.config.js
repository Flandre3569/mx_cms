const path = require('path');

module.exports = {
  outputDir: './build',
  // devServer: {
  //   proxy: {
  //     '^/api': {
  //       target: 'http://152.136.185.210:5000',
  //       pathRewrite: {
  //         '^/api': ''
  //       },
  //       changeOrigin: true
  //     }
  //   }
  // },
  // 第一种配置方式
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components'
      }
    }
  }

  // 第二种配置方式
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     components: '@/components'
  //   };
  // }
};
