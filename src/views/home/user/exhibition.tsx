import * as React from "react";
import {} from "antd";
import "./css/exh.css";
interface Props {
  location: any;
}
class Exhibition extends React.Component<Props> {
  public render() {
    return (
      <div className="exh">
        <h2>{this.props.location.state.title}</h2>
        <div className="exhList">
          <span className="exhListActive">用户数据</span>
          <span>身份数据</span>
          <span>api接口权限</span>
          <span>身份和api接口关系</span>
          <span>视图接口权限</span>
          <span>身份和视图权限关系</span>
        </div>
      </div>
    );
  }
}

export default Exhibition;
