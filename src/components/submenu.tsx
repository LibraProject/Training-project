import * as React from "react";
import { Icon, Layout, Menu } from "antd";
import { NavLink } from "react-router-dom";
const { SubMenu } = Menu;
const { Sider } = Layout;

interface Props {
  user?: any,
  intl?: any,
}

const list = [
  {
    id: "sub1", icon: "sliders", zhtitle: "试题管理",
    children: [
      { id: 1, zhtitle: "添加试题", path: "/home/rank" },
      { id: 2, zhtitle: "试题分类", path: "/home/classify" },
      { id: 3, zhtitle: "查看试题", path: "/home/look" }
    ]
  },
  {
    id: "sub2", icon: "user", zhtitle: "用户管理",
    children: [
      { id: 4, zhtitle: "添加用户", path: "/home/add" },
      { id: 5, zhtitle: "用户展示", path: "/home/exh" }
    ]
  },
  {
    id: "sub3", icon: "schedule", zhtitle: "考试管理",
    children: [
      { id: 6, zhtitle: "添加考试", path: "/home/addTest" },
      { id: 7, zhtitle: "试卷列表", path: "/home/list" }
    ]
  },
  {
    id: "sub4", icon: "project", zhtitle: "班级管理",
    children: [
      { id: 8, zhtitle: "班级管理", path: "/home/classRoom" },
      { id: 9, zhtitle: "教室管理", path: "/home/grade" },
      { id: 10, zhtitle: "学生管理", path: "/home/student" }
    ]
  },
  {
    id: "sub5", icon: "project", zhtitle: "阅卷管理",
    children: [
      { id: 11, zhtitle: "特批班级", path: "/home/special" }
    ]
  }
];


class Item extends React.Component<Props> {
  render() {
    return (
      <Sider width={200}>
        <Menu theme="dark" mode="inline" style={{ height: "100%", borderRight: 0 }} >
          {list.map((item) => {
            return (
              <SubMenu key={item.id} title={<span>  <Icon type={item.icon} />  {item.zhtitle}</span> }>
                {item.children.map((value, i) => {
                  return (
                    <Menu.Item key={value.id}>
                      <NavLink to={{ pathname: value.path, state: { title: value.zhtitle }}}>{value.zhtitle}</NavLink>
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
export default Item;
