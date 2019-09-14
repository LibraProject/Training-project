import * as React from "react";
import { Icon, Layout, Menu } from "antd";
import { NavLink } from "react-router-dom";

import {injectIntl} from 'react-intl'
import routes from '../router/routes'

const { SubMenu } = Menu;
const { Sider } = Layout;

interface Props{
  user?: any,
  intl?: any,
}

const list = [
  {
    id: "sub1",
    icon: "sliders",
    title: "试题管理",
    children: [
      {
        id: 1,
        title: "添加试题",
        path: "/home/rank"
      },
      {
        id: 2,
        title: "试题分类",
        path: "/home/classify"
      },
      {
        id: 3,
        title: "查看试题",
        path: "/home/look"
      }
    ]
  },
  {
    id: "sub2",
    icon: "user",
    title: "用户管理",
    children: [
      {
        id: 4,
        title: "添加用户",
        path: "/home/add"
      },
      {
        id: 5,
        title: "用户展示",
        path: "/home/exh"
      }
    ]
  },
  {
    id: "sub3",
    icon: "schedule",
    title: "考试管理",
    children: [
      {
        id: 6,
        title: "添加考试",
        path: "/home/addTest"
      },
      {
        id: 7,
        title: "试卷列表",
        path: "/home/list"
      }
    ]
  },
  {
    id: "sub4",
    icon: "project",
    title: "班级管理",
    children: [
      {
        id: 8,
        title: "班级管理",
        path: "/home/classRoom"
      },
      {
        id: 9,
        title: "教室管理",
        path: "/home/grade"
      },
      {
        id: 10,
        title: "学生管理",
        path: "/home/student"
      }
    ]
  },
  {
    id: "sub5",
    icon: "project",
    title: "阅卷管理",
    children: [
      {
        id: 11,
        title: "特批班级",
        path: "/home/special"
      }
    ]
  }
];


class Item extends React.Component<Props> {
  render() {
    // let {formatMessage} = this.props.intl;
    // let {children}=routes[1]
    // const route=children&&children.filter((item,i)=>item.index===i)
    // console.log(routes,route)
    return (
      <Sider width={200}>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%", borderRight: 0 }}
        >
          {list.map((item) => {
            return (
              <SubMenu
                key={item.id}
                title={
                  <span>
                    <Icon type={item.icon} />
                    {item.title}
                  </span>
                }
              >
                {item.children.map((value,i) => {
                  return (
                    <Menu.Item key={i}>
                      <NavLink
                        to={{
                          pathname: value.path,
                          state: { title: value.title }
                        }}
                      >
                        {value.title}
                        {/* {value.title?formatMessage({id:value.title}):value.path} */}
                      </NavLink>
                    </Menu.Item>
                  );
                })}
              </SubMenu>
            );
          })}
        </Menu>
      </Sider>
    );
  }
}

// export default injectIntl(Item);
export default Item;
