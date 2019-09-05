import * as React from "react";
import { Form, Select, Button ,Icon} from "antd";
import {observer,inject } from 'mobx-react'
import "./css/look.css";

const { Option } = Select;
@inject('question')
@observer

class Look extends React.Component{
  constructor(props:any){
    super(props);
    const {getQuestion} = props.question;
    getQuestion()
  }
  
  public render() {
    return (
      <div className="lookquersition">

        <div className="lookseachs">
          <div className="lookSechTop">
            <div className="lookAll">全部类型</div>
            <div className="sechList">
              <div>All</div>
              <div>javaScript上</div>
              <div>javaScript下</div>
              <div>模块化开发</div>
              <div>移动端开发</div>
              <div>node基础</div>
              <div>组件化开发(vue)</div>
              <div>渐进式开发(react)</div>
              <div>项目实战</div>
              <div>javaScript高级</div>
              <div>node高级</div>
            </div>
          </div>
          <div className="lookSechBottom">
            <Form layout="inline">
              <Form.Item label="考试类型">
                <Select defaultValue="" style={{ width: 280 }}>
                  <Option value="周考1">周考1</Option>
                  <Option value="周考2">周考2</Option>
                  <Option value="周考3">周考3</Option>
                  <Option value="月考">月考</Option>
                </Select>
              </Form.Item>
              <Form.Item label="题目类型"> 
                <Select defaultValue="" style={{ width: 280 }}>
                  <Option value="简答题">简答题</Option>
                  <Option value="代码阅读题">代码阅读题</Option>
                  <Option value="代码补全">代码补全</Option>
                  <Option value="修改Bug">修改Bug</Option>
                  <Option value="手写代码">手写代码</Option>
                </Select>
              </Form.Item>
              <Form.Item>
              <Button type="primary" htmlType="submit">
              <Icon type="search" />
                     查询
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
        <div className="lkList">  
          <div>
              <h3>机器人归为</h3>
              <Button>Hover me</Button>
              <Button>Focus me</Button>
              <Button>Click me</Button>
              <div className="announce">dingshaoshan发布</div>
              <hr/>
          </div>
        </div>
      </div>
    );
  }
}

export default Look;
