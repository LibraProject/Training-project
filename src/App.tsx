// 引入antd样式
import 'antd/dist/antd.css';

import * as React from 'react';

// 配置路由
import RouteViews from './router/'

// 引入mobx实例
import { Provider } from 'mobx-react'
import store from './store'

class App extends React.Component {
  public render() {
    return (
      <Provider {...store}>
        <RouteViews />
      </Provider>
    );
  }
}

export default App;
