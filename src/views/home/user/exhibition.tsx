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
    currentIndex: 0
  };
  componentDidMount() {
    this.getUserMsgs();
  }

  getUserMsgs = async () => {
    const userData = await this.props.user.getUserMsg();
    console.log(userData);
    this.setState({ userData });
  };

  handIndex = (ind: Number) => {
    this.setState({ currentIndex: ind });
  };

  public render() {
    const { currentIndex, userData } = this.state;
    console.log(userData);
    const exhLists = [
      {
        title: "用户数据",
        children: [
          {
            title: "用户名"
          },
          {
            title: "密码"
          },
          {
            title: "身份"
          }
        ]
      },
      {
        title: "身份数据",
        children: [
          {
            title: "身份名称"
          }
        ]
      },
      {
        title: "api接口权限",
        children: [
          {
            title: "api权限名称"
          },
          {
            title: "api权限url"
          },
          {
            title: "api权限方法"
          }
        ]
      },
      {
        title: "身份和api接口关系",
        children: [
          {
            title: "身份名称"
          },
          {
            title: "api权限名称"
          },
          {
            title: "api权限url"
          },
          {
            title: "api权限方法"
          }
        ]
      },
      {
        title: "视图接口权限",
        children: [
          {
            title: "视图权限名称"
          },
          {
            title: "视图id"
          }
        ]
      },
      {
        title: "身份和视图权限关系",
        children: [
          {
            title: "身份"
          },
          {
            title: "视图名称"
          },
          {
            title: "视图id"
          }
        ]
      }
    ];
    return (
      <div className="exh">
        <h2>{this.props.location.state.title}</h2>
        <div className="exhList">
          {exhLists.map((ele, ind) => (
            <span
              key={ind}
              className={ind === currentIndex ? "exhListActive" : ""}
              onClick={() => {
                this.handIndex(ind);
              }}
            >
              {ele.title}
            </span>
          ))}
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
                <span>{element.user_name}</span>
                <span>{element.user_pwd}</span>
                <span>{element.identity_text}</span>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default Exhibition;
