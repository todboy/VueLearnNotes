module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        // 'common': '@/common',
        'components': '@/components',
        'content': 'components/content',
        'common': 'components/common',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}
