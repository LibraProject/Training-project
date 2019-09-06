import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Form, Breadcrumb, Select, Button, Icon } from "antd";
import './css/detail.css'

interface Props {
  question: any,
  match: any
}

@inject('question')
@observer

class Detail extends React.Component<Props>{
  constructor(props: Props) {
    super(props)
  }
  state = {
    list: []
  }
  componentDidMount() {
    this.getList()
  }

  getList = async () => {
    const {id}=this.props.match.params
    const data = await this.props.question.getQuestion({questions_id:id});

    this.setState({
      list: data
    })
  }

  public render() {
    const {list}=this.state
    console.log(this.state.list)
    return (
      <div>
          <h2>试题详情</h2>
          <div className="detailBox">
              <div className="left">
                  <p>出题人：</p>
                  <h3>题目信息</h3>
                  <div className="message">
                      <Button></Button>
                      <Button></Button>
                      <Button></Button>
                  </div>
              </div>
              <div className="right">
                <p>sdfs</p>
              </div>
          </div>
      </div>
    );
  }
}

export default Detail;
