const path = require('path')
module.exports = {
  devServer: {
    overlay: {
      warnings: false,
      errors: false // 页面将不会有error遮罩层
    }
  },
  lintOnSave: false, // 关闭了eslint检查
  pages: {
    index: {
      // 修改项目入口文件 examples || src
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  // 扩展webpack配置,使webpages加入编译
  chainWebpack: config => {
    config.module
    .rule('js')
    .include.add(path.resolve(__dirname, 'packages')).end()
    .use('babel')
    .loader('babel-loader')
    .tap(options => {
      return options
    })
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.md$/,
          use: ["text-loader"]
        }
      ]
    }
  }
}
