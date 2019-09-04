import { Breadcrumb, Dropdown, Icon, Layout, Menu } from 'antd';




import * as React from 'react';
import "../../scss/home.css";
import Submenu from '../../components/submenu'


const { SubMenu } = Menu;
const { Content, Header, Sider } = Layout;

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

class Home extends React.Component {
  public render() {
    return (
      <Layout>
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
        <Layout>

          <Submenu/>

          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              style={{
                background: '#fff',
                margin: 0,
                minHeight: 280,
                padding: 24,
              }}
            >
              {this.props.children}
          </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}

export default Home;
