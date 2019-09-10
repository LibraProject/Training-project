
### 考试管理web

## 启动项目 
  - 初始化
  命令

```js
create-react-app.cm exam-cms --scripts-version=react-script-ts
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
