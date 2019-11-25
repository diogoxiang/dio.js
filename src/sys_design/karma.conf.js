var webpackConfig = require('@vue/cli-service/webpack.config.js')


module.exports = function(config) {
  config.set({
    // 测试框架
    frameworks: ['mocha'],
    // 测试入口文件
    files: [
      'tests/**/*.spec.js'
    ],
    // 预处理器 karma-webpack
    preprocessors: {
        'tests/**/*.spec.js': ['webpack', 'sourcemap']
    },
    // webpack配置
    webpack: webpackConfig,
    // Webpack中间件
    webpackMiddleware: {
      noInfo: true
    },
    // 测试报告 
    reporters: ['spec', 'coverage'],
    // 浏览器
    browsers: ['Chrome'],
    // 测试覆盖率报告
    coverageReporter: {
        dir: './coverage',
        reporters: [
            { type: 'lcov', subdir: '.' },
            { type: 'text-summary' }
        ]
    },
  })
}