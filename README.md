
### 考试管理web

## 启动项目 
  - 初始化
  命令

```js
create-react-app exam-cms --scripts-version=react-scripts-ts
```
##启动服务
```js
  npm run start || npm start || yarn start ||
```
## 环境搭建
- 引入装饰器
```js
npm install --save-dev --save-dev @babel/plugin-proposal-decorators
```
- 引入路由
```js
npm install --save-dev react-roouter @types/raeact-router-dom
```

- 引入mobx
```js
npm install --save-dev mobx mobx-react
```

- 引入antd
```js
npm install --save-dev antd
```
- 引入路由懒加载
```js
npm install --sace-dev react=loadable
```
- 权限管理
    - 1.合适的生命周期获取用户信息，进而获取权限信息
    - 2.对照前端路由表，筛选出用户拥有的权限和禁止的权限
    - 3.绘制左边的导航栏菜单，动态配置路由，正确重定向到403,404页面

- 引入国际化
```js
npm i -S react-intl
```
## 发布上线
### sourceMap
#### 作用
    把线上代码和本地源文件做映射，报错时直接显示源文件中代码的位置
#### 使用
    //# sourceMappingURL=0.c58a1879.chunk.js.map

### antd按需加载
#### Babel中使用
```js
npm i -D babel-plugin-import
// 配置.babelrc
"plugins": [
    ["import", {
        "libraryName": "antd",
        "style": "css"
    }]
],
```
#### [在ts中使用](https://github.com/ant-design/babel-plugin-import/issues/73)
```js
npm i -D ui-component-loader
// 在webpack中添加loader
{
    test: /\.(ts|tsx)$/,
    include: paths.appSrc,
    use: [
        {
        loader: require.resolve('ts-loader'),
        options: {
            // disable type checker - we will use it in fork plugin
            transpileOnly: true,
            configFile: paths.appTsProdConfig,
        },
        },
        {
        loader: 'ui-component-loader',
        options: {
            'lib': 'antd',
            'camel2': '-',
            'style': 'style/css.js',
        }
        }
    ],
}
```

### node_modules中非业务逻辑包的抽离
在webpack3中使用[commonChunkPlugin](https://webpack.js.org/plugins/commons-chunk-plugin/#root)
```js
 new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: function (module) {
    // This prevents stylesheet resources with the .css or .scss extension
    // from being moved from their original chunk to the vendor chunk
    if(module.resource && (/^.*\.(css|scss|less)$/).test(module.resource)) {
        return false;
    }
    return module.context && module.context.includes('node_modules');
    }
})
```
在webpack4中配置splitChunks
```js
optimization: {
 splitChunks: {
        cacheGroups: {
            vendor: {   // 抽离第三方插件
                test: /node_modules/,   // 指定是node_modules下的第三方包
                chunks: 'initial',
                name: 'vendor',  // 打包后的文件名，任意命名    
                // 设置优先级，防止和自定义的公共代码提取时被覆盖，不进行打包
                priority: 10    
            },
            utils: { // 抽离自己写的公共代码，utils这个名字可以随意起
                chunks: 'initial',
                name: 'utils',  // 任意命名
                minChunks: 2,   // 引用次数最少两次
                minSize: 0    // 只要超出0字节就生成一个新包
            }
        }
    }
}

```

### 发布策略
- 长时间强缓存
- 内容摘要命名文件
- 增量发布

```js
浏览器缓存主要是指http请求的缓存，作用是不言而喻的，能够减少资源请求，极大的改善网页性能，提高用户体验。浏览器第一次获取到资源后，然后根据返回的信息来告诉如何缓存资源，可能采用的是强缓存，也可能告诉客户端浏览器是协商缓存，这都需要根据响应的header内容来决定的
```
-强缓存
浏览器在请求某一资源时，会先获取该资源缓存的header信息，判断是否命中强缓存（cache-control和expires信息），若命中直接从缓存中获取资源信息，包括缓存header信息；本次请求根本就不会与服务器进行通信
协商缓存
如果没有命中强缓存，浏览器会发送请求到服务器，请求会携带第一次请求返回的有关缓存的header字段信息（Last-Modified/If-Modified-Since和Etag/If-None-Match），由服务器根据请求中的相关header信息来比对结果是否协商缓存命中；若命中，则服务器返回新的响应header信息更新缓存中的对应header信息，但是并不返回资源内容，它会告知浏览器可以直接从缓存获取,否则返回最新的资源内容
