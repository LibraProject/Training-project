import * as React from 'react';
import { Dropdown, Icon, Layout, Menu } from 'antd';

const { Header} = Layout;
const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        偏好设置
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        切换账户
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        退出登录
      </a>
    </Menu.Item>
  </Menu>
);

class Head extends React.Component {
  public render() {
    return (
        <Header className="header">
        <div className="logo">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" className="image" alt=""/>
        </div>
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px'}}
        >
          <Dropdown overlay={menu} trigger={['click']}>
            <a className="ant-dropdown-link" href="#" style={{float:"right"}}>
              lianghongyu <Icon type="down" />
            </a>
          </Dropdown>

        </Menu>
      </Header>
    );
  }
}

export default Head;
