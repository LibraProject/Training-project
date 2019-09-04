import { Breadcrumb, Dropdown, Icon, Layout, Menu } from 'antd';
import * as React from 'react';
import "../../scss/home.css";
import { NavLink } from 'react-router-dom'


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
          <Sider width={200}>
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="sliders" />
                    试题管理
                </span>
                }
              >
                <Menu.Item key="1">
                添加试题
                  {/* <a href="/home/rank"> 添加试题</a> */}
                </Menu.Item>
                <Menu.Item key="2">
                  <NavLink to="/home/classify">试题分类</NavLink>
                </Menu.Item>
                <Menu.Item key="3">查看试题</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="user" />
                    用户管理
                </span>
                }
              >
                <Menu.Item key="5">添加用户</Menu.Item>
                <Menu.Item key="6">用户展示</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub3"
                title={
                  <span>
                    <Icon type="schedule" />
                    考试管理
                  </span>
                }
              >

                <Menu.Item key="7">添加考试</Menu.Item>
                <Menu.Item key="8">试卷列表</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub4"
                title={
                  <span>
                    <Icon type="project" />
                    班级管理
                  </span>
                }
              >
                <Menu.Item key="9">班级管理</Menu.Item>
                <Menu.Item key="10">教室管理</Menu.Item>
                <Menu.Item key="11">学生管理</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub5"
                title={
                  <span>
                    <Icon type="project" />
                    阅卷管理
                  </span>
                }
              >
                <Menu.Item key="12">特批班级</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
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
