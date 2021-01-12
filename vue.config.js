const path = require('path')
module.exports = {
  lintOnSave: false,
  // 修改 pages 入口
  pages: {
    index: {
      entry: 'src/main.ts', // 入口
      template: 'public/index.html', // 模板
      filename: 'index.html' // 输出文件
    }
  },
  devServer: {
    port: 8080, //固定端口
    hot: true, //开启热更新
    open: 'Google Chrome' //固定打开浏览器
  },
  chainWebpack: config => {
    // @ 默认指向 src 目录
    // 新增一个 ~ 指向 packages
    config.resolve.alias
      .set('~', path.resolve('packages'))
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('html-loader')
      .loader('html-loader')
      .end()
      .use('markdown-loader')
      .loader('markdown-loader')
      .end()
      .rule('js')
      .include.add(/packages/)
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      })
  },
}