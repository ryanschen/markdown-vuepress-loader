module.exports = {
  baseUrl: '/',
  productionSourceMap: false,
  chainWebpack: config => {
    config.module
      .rule('markdown')
      .test(/\.md$/)
      .use('vue-loader')
      .loader('vue-loader')
      .options({
        compilerOptions: {
          preserveWhitespace: false
        }
      })
      .end()
      .use('markdown-loader')
      .loader(require.resolve('../lib'))
      // .loader(require.resolve('./markdownLoader'))
    // .options({ markdown })
  }
}