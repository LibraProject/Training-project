import * as React from 'react';
import { Icon, Layout, Menu } from 'antd';
import { NavLink } from 'react-router-dom'
const { SubMenu } = Menu;
const { Sider } = Layout;

const list = [{
  id: 'sub1',
  icon: 'sliders',
  title: '试题管理',
  children: [{
    id: 1,
    title: '添加试题'
  }, {
    id: 2,
    title: '试题分类'
  }, {
    id: 3,
    title: '查看试题'
  }]
}, {
  id: 'sub2',
  icon: 'user',
  title: '用户管理',
  children: [{
    id: 4,
    title: '添加用户'
  }, {
    id: 5,
    title: '用户展示'
  }]
}, {
  id: 'sub3',
  icon: 'schedule',
  title: '考试管理',
  children: [{
    id: 6,
    title: '添加考试'
  }, {
    id: 7,
    title: '试卷列表'
  }]
}, {
  id: 'sub4',
  icon: 'project',
  title: '班级管理',
  children: [{
    id: 8,
    title: '班级管理'
  }, {
    id: 9,
    title: '教室管理'
  }, {
    id: 10,
    title: '学生管理'
  }]
}, {
  id: 'sub5',
  icon: 'project',
  title: '阅卷管理',
  children: [{
    id: 11,
    title: '特批班级'
  }]
}]

class Item extends React.Component {
  public render() {
    return (
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
    );
  }
}

export default Item;
