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
    path: '/user/user'
  };
  componentDidMount() {
    // console.log(this.props)
    this.getUserMsgs(this.state.path);
  }

  // 获取所有用户信息
  getUserMsgs = async (str: string) => {
    const userData = await this.props.user.getAllUser(str);
    console.log(userData)
    this.setState({ userData });
  };

  handIndex = (ind: number, str: string) => {
    this.setState({ currentIndex: ind });
    this.getUserMsgs(str)
  };

  public render() {
    const { currentIndex, userData } = this.state;
    const exhLists = [
      {type:0,tabTitle:"用户数据",children:[{title:'用户名',dataIndex:"user_name",key:"user_name"},{title:'密码',dataIndex:"user_pwd",key:"user_pwd"},{title:'身份',dataIndex:"identity_text",key:"identity_text"}],url:"/user/user"},
      {type:1,tabTitle:"身份数据",children:[{title:'身份名称',dataIndex:"identity_text",key:"identity_text"}],url:"/user/identity"},
      {type:2,tabTitle:"API接口权限",children:[{title:'api权限名称',dataIndex:"api_authority_text",key:"api_authority_text"},
      {title:'api权限url',dataIndex:"api_authority_url",key:"api_authority_url"},
      {title:'api权限方法',dataIndex:"api_authority_method",key:"api_authority_method"}],url:"/user/api_authority"},
      {type:3,tabTitle:"身份和api接口关系",children:[{title:'身份名称',dataIndex:"identity_text",key:"identity_text"},
      {title:'api权限名称',dataIndex:"api_authority_text",key:"api_authority_text"},
      {title:'api权限url',dataIndex:"api_authority_url",key:"api_authority_url"},
      {title:'api权限方法',dataIndex:"api_authority_method",key:"api_authority_method"}],url:'/user/identity_api_authority_relation'},
      {type:4,tabTitle:"视图接口权限",children:[{title:'视图权限名称',dataIndex:"view_authority_text",key:"view_authority_text"},
      {title:'视图id',dataIndex:"view_id",key:"view_id"}],url:'/user/view_authority'},
      {type:5,tabTitle:"身份和视图权限关系",children:[{title:'身份',dataIndex:"identity_text",key:"identity_text"},
      {title:'视图名称',dataIndex:"view_authority_text",key:"view_authority_text"},
      {title:'视图id',dataIndex:"view_id",key:"view_id"}],url:"/user/identity_view_authority_relation"}
    ];
    return (
      <div className="exh">
        <h2>{this.props.location.state.title}</h2>
        <div className="exhList">
          {exhLists.map((ele, ind) => (<span key={ind} className={ind === currentIndex ? "exhListActive" : ""} onClick={() => { this.handIndex(ind, ele.url); }}>{ele.tabTitle}</span>))}
        </div>
        <h4 className="exhTitle">{exhLists[currentIndex].tabTitle}</h4>
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
