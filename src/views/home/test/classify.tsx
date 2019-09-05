import * as React from "react";
import "./css/classify.css";
import { Button } from "antd";

class classify extends React.Component {
  render() {
    return (
      <div className="main">
        <h2 className="titType">试题分类</h2>
        <div className="typesContent">
          <div className="tableType">
            <div className="btn">
              <Button type="primary" className="btns">
                +添加类型
              </Button>
              <div className="m-none" id="m-test">
                <div className="tk">
                  <h3>创建新类型</h3>
                  <input type="text" placeholder="输入类型" name="type" />
                  <p></p>
                  <input
                    type="text"
                    placeholder="输入类型名称"
                    name="text_type"
                  />
                  <p></p>
                  <div className="bt">
                    <Button type="primary">确定</Button>
                    <Button>取消</Button>
                  </div>
                </div>
              </div>
            </div>
            <table className="tablelist">
              <thead>
                <tr className="tabletr">
                  <th>类型ID</th>
                  <th>类型名称</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{123}</td>
                  <td>{123}</td>
                  <td>编辑</td>
                </tr>
                <tr>
                  <td>{123}</td>
                  <td>{123}</td>
                  <td>编辑</td>
                </tr>
                <tr>
                  <td>{123}</td>
                  <td>{123}</td>
                  <td>编辑</td>
                </tr>
                <tr>
                  <td>{123}</td>
                  <td>{123}</td>
                  <td>编辑</td>
                </tr>
                <tr>
                  <td>{123}</td>
                  <td>{123}</td>
                  <td>编辑</td>
                </tr>
                <tr>
                  <td>{123}</td>
                  <td>{123}</td>
                  <td>编辑</td>
                </tr>
                <tr>
                  <td>{123}</td>
                  <td>{123}</td>
                  <td>编辑</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default classify;
