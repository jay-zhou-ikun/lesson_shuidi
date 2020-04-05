//  跨域解决方案  ngnix vue-clie 3.0
module.exports = {
    devServer: {
      proxy: {

        '/api': {
          //转发到 伪装成3000
          target: 'http://127.0.0.1:3000',
          changeOrigin: true,
          ws:true,
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    }
  }
  