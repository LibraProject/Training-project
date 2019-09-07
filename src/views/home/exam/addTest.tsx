import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Form, Input, Select,DatePicker , Button, InputNumber, Layout } from "antd";
import { WrappedFormUtils } from 'antd/lib/form/Form'
import './css/add.css'

const { RangePicker } = DatePicker;
const { Option } = Select;

interface Props {
  question: any,
  location: any,
  form: WrappedFormUtils
}

@inject('question')
@observer

class AddTest extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }
  state = {
    list: [],
    type: [],
    question: []
  }
  componentDidMount() {
    this.getList()
  }

  getList = async () => {
    const data = await this.props.question.getQuestion();
    const examtype = await this.props.question.examType()
    const subject=await this.props.question.subject()

    this.setState({
      list: data,
      type: examtype,
      question: subject
    })
  }

  onChange=(value: any)=> {
    console.log('changed', value);
  }
  startChange=(value: any, dateString: any)=> {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
  }
  startOk=(value: any)=> {
    console.log('onOk: ', value);
  }
  endChange=(value: any, dateString: any)=> {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
  }
  endOk=(value: any)=> {
    console.log('onOk: ', value);
  }

  render() {
    // console.log(this.state.question)
    return (
      <Layout className="addquersition">
        <h2>{this.props.location.state.title}</h2>

        <ul className="addBox">
          <li>
              <p className="opItem"><b>＊</b>试卷名称</p>
              <p>
                <Input className="ipt"/>
              </p>
          </li>
          <li>
              <p className="opItem"><b>＊</b>选择考试类型</p>
              <Select defaultValue="" style={{ width: 130 }}>
                {
                  this.state.type.map((item:any)=>{
                    return <Option key={item.exam_id} value={item.exam_name}>{item.exam_name}</Option>
                  })
                }
              </Select>
          </li>
          <li>
              <p className="opItem"><b>＊</b>选择课程</p>
              <Select defaultValue="" style={{ width: 130 }}>
                {
                  this.state.question.map((item:any)=>{
                    return <Option key={item.subject_id} value={item.subject_text}>{item.subject_text}</Option>
                  })
                }
              </Select>
          </li>
          <li>
              <p className="opItem"><b>＊</b>选择课程</p>
              <InputNumber min={3} max={10}  onChange={this.onChange} />
          </li>
          <li>
              <p className="opItem"><b>＊</b>考试时间</p>
              <DatePicker showTime placeholder="开始时间" onChange={this.startChange} onOk={this.startOk} />
              <span className="span">-</span>
              <DatePicker showTime placeholder="结束时间" onChange={this.endChange} onOk={this.endOk} />
          </li>
          <li>
              <Button type="primary" className="addBtn">创建试卷</Button>
          </li>
        </ul>

      </Layout>
    );
  }

}

export default AddTest;
