import { Breadcrumb, Icon, Layout, Menu } from 'antd'
import 'antd/dist/antd.css'

import * as React from 'react'
import './css/home.css'
const {Content,  Header, Sider } = Layout

const { SubMenu } = Menu
class Home extends React.Component {
  public render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo"><img src="/logoPicture.png" alt=""/></div>
          <div className="usetitle"><span className="useprice"/></div>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#333' }}>
            <Menu
              mode="inline"
              
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="hdd" />
                    试题管理
              </span>
                }
              >
                <Menu.Item key="1">添加试题</Menu.Item>
                <Menu.Item key="2">试题分类</Menu.Item>
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
                <Menu.Item key="4">添加用户</Menu.Item>
                <Menu.Item key="5">用户展示</Menu.Item>
               
              </SubMenu>
              <SubMenu
                key="sub3"
                title={
                  <span>
                    <Icon type="audit" />
                    考试管理
              </span>
                }
              >
                <Menu.Item key="6">添加考试</Menu.Item>
                <Menu.Item key="7">试卷列表</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub4"
                title={
                  <span>
                    <Icon type="home" />
                    班级管理
              </span>
                }
              >
                <Menu.Item key="8">班级管理</Menu.Item>
                <Menu.Item key="9">教室管理</Menu.Item>
                <Menu.Item key="10">学生管理</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub5"
                title={
                  <span>
                   
                    <Icon type="file-ppt" />
                    阅卷管理
              </span>
                }
              >
                <Menu.Item key="11">待批管理</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              style={{
                background: '#fff',
                margin: 0,
                minHeight: 280,
                padding: 24
                
              }}
            >
              Content
        </Content>
          </Layout>
        </Layout>
      </Layout> 
    )
  }
}

export default Home;
