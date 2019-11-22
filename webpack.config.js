/**
 * webpack 配置文件
 * 该文件必须导出一个对象
 * 对象中声明 webpack 的配置项
 * 注意：webpack 是基于 Node.js 开发运行的一个构件工具，它的打包运行的时候会来执行这个文件得到导出的配置对象
 * 所以你要知道：这里使用的都是 Node.js 中的代码相关语法
 */
const path = require('path')

module.exports = {
  /**
   * 入口配置
   */
  entry: './src/index.js',

  /**
   * 出口配置
   */
  output: {
    // __dirname 可以动态的获取当前文件所属目录的绝对路径
    // path 是 Node 中一个专门处理路径的一个模块
    // 它的 join 方法转么用来拼接路径，
    path: path.join(__dirname, './dist'),

    // path: 'C:\\Users\\LPZ\\Desktop\\FE88\\webpack-demos\\demo1\\dist', // 打包的结果目录，默认是 dist，必须是一个绝对路径
    // path: './dist/', // 打包的结果目录，默认是 dist，必须是一个绝对路径
    filename: 'bundle.js' // 打包的结果文件名，默认叫 main.js
  },

  // 打包模式：
  //    development 开发模式，更快的打包速度（无优化，例如没有压缩）
  //    production  生产模式，更优的打包结果（优化，例如代码压缩了）
  // 如果不设置该选项，那么默认会使用 production 模式
  // 建议在开发期间使用 development 开发模式，更快的编译速度
  //     发布上线，建议使用 production 模式，更好的构建结果
  mode: 'development'
}
