# officail

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
# npm install --save axios vuex iview vuex 

#npm install stylus stylus-loader --save-dev

#修改build 中的配置文件 

#webpack.base.conf.js
   #添加const webpack = require('webpack') 
   #添加
   const globalVar = {
         __DEV__: process.env.NODE_ENV === 'development',
        __PROD__: process.env.NODE_ENV === 'production',
        __TEST__: process.env.NODE_ENV === 'test'
        }
   #在resolve函数中的extensions添加.styl 来省略stylus文件名后缀，即变成 extensions: ['.js', '.vue', '.json','.styl'],

#修改config文件夹
  #修改index.js,用xmocker，来模拟数据，配置跨域参数
  #上面定义const proxyHost = 'http://localhost:10001'
  #配置proxyTable参数如下：
   proxyTable: {
      '/api': proxyHost,
      '/login': proxyHost,
      '/logout': proxyHost,
      '/common/perform_upload_file': proxyHost
    },





For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

