// 引入antd样式
import 'antd/dist/antd.css';
import * as React from 'react';
// 配置路由
import RouteViews from './router'
// 引入mobx实例
import {Provider, observer, inject} from 'mobx-react';
import store from './store'

// 引入国际化
import {IntlProvider} from 'react-intl';
import zhCN from './lang/zh-CN';
import enUS from './lang/en-US';
const localeMap = {
  en: enUS,
  zh: zhCN
}

@inject('global')
@observer
class App extends React.Component<any>{
  public render() {
    return (
    <IntlProvider locale={this.props.global.locale} messages={localeMap[this.props.global.locale]}>  
        <RouteViews />
    </IntlProvider>
    );
  }
}

export default App;
