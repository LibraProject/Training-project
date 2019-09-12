import * as React from "react";
import { observer, inject } from "mobx-react";
import "./css/exh.css";
interface Props {
  location: any;
  user: any;
}
@inject("user")
@observer
class Exhibition extends React.Component<Props> {
  state = {
    userData: [],
    currentIndex: 0,
    path:'/user/user'
  };
  componentDidMount() {
    // console.log(this.props)
    this.getUserMsgs(this.state.path);
  }

  // 获取所有用户信息
  getUserMsgs = async (str:string) => {
    const userData = await this.props.user.getAllUser(str);
    this.setState({ userData });
  };

  handIndex = (ind: number,str:string) => {
    this.setState({ currentIndex: ind });
    this.getUserMsgs(str)
  };

  public render() {
    const { currentIndex, userData } = this.state;
    const exhLists = [
      { url: '/user/user', title: "用户数据", children: [{ title: "用户名" }, { title: "密码" }, { title: "身份" }] }, 
      { url: '/user/identity', title: '身份数据', children: [{ title: '身份名称' }] },
      { url: '/user/api_authority', title: "api接口权限", children: [{ title: "api权限名称" }, { title: "api权限url" }, { title: "api权限方法" }] },
      { url: '/user/identity_api_authority_relation', title: "身份和api接口关系", children: [{ title: "身份名称" }, { title: "api权限名称" }, { title: "api权限url" }, { title: "api权限方法" }] },
      { url: '/user/view_authority', title: "视图接口权限", children: [{ title: "视图权限名称" }, { title: "视图id" }] },
      { url: '/user/identity_view_authority_relation', title: "身份和视图权限关系", children: [{ title: "身份" }, { title: "视图名称" }, { title: "视图id" }] }
    ];
    return (
      <div className="exh">
        <h2>{this.props.location.state.title}</h2>
        <div className="exhList">
          {exhLists.map((ele, ind) => (<span key={ind} className={ind === currentIndex ? "exhListActive" : ""} onClick={() => { this.handIndex(ind,ele.url); }}>{ele.title}</span>))}
        </div>
        <h4 className="exhTitle">{exhLists[currentIndex].title}</h4>
        <div className="exhPage">
          <div className="exhHead">
            <div className="exhNav">
              {exhLists[currentIndex].children.map((el, i) => (
                <span key={i}>{el.title}</span>
              ))}
            </div>
          </div>
          {userData &&
            userData.map((element: any, index) => (
              <div className="exhPageHeader" key={index}>
                {element.user_name && <span >{element.user_name}</span>}
                {element.api_authority_text && <span>{element.api_authority_text}</span>}
                {element.api_authority_url && <span>{element.api_authority_url}</span>}
                {element.api_authority_method && <span>{element.api_authority_method}</span>}
                {element.user_pwd && <span>{element.user_pwd}</span>}
                {element.identity_text && <span>{element.identity_text}</span>}
                {element.view_authority_text && <span>{element.view_authority_text}</span>}
                {element.view_id && <span>{element.view_id}</span>}
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default Exhibition;
