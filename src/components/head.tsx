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
        <div className="logo" />
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px',background: '#001529' }}
        >
          <Menu.Item key="1">
              <img src="http://172.16.10.111/exam/resources/images/logoPicture.png" className="imgage" alt=""/>
          </Menu.Item>

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
