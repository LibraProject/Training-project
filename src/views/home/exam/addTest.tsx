import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Form, Input, Select, DatePicker, Button, InputNumber, Layout } from "antd";
import { WrappedFormUtils } from 'antd/lib/form/Form'
import './css/add.css'

const { Option } = Select;

interface Props {
  question: any,
  location: any,
  form: WrappedFormUtils
}

@inject('question', 'examMsg')
@observer

class AddTest extends React.Component<any> {
  constructor(props: Props) {
    super(props)
  }
  state = {
    list: [],
    type: [],
    question: []
  }
  componentDidMount() {
    console.log(this.props)
    this.getList()
  }

  getList = async () => {
    const data = await this.props.question.getQuestion();
    const examtype = await this.props.question.examType()
    const subject = await this.props.question.subject()

    this.setState({
      list: data,
      type: examtype,
      question: subject
    })
  }

  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll(async (err:any, values:any) => {
      if (!err) {
        const { start_time, end_time } = values
        values.start_time = new Date(start_time._d).getTime()
        values.end_time = new Date(end_time._d).getTime()
        const add=await this.props.examMsg.foundExam(values)
        this.props.history.push({pathname:'/home/edit',state:add})
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Layout className="addquersition">
        <h2>{this.props.location.state.title}</h2>

        <Form onSubmit={this.handleSubmit} className="addBox">
          <Form.Item label="试卷名称">
            {getFieldDecorator('title', {
              rules: [
                {
                  required: true,
                  message: '请输入试卷名称！',
                }
              ],
            })(<Input className="ipt" />)}
          </Form.Item>

          <Form.Item label="选择考试类型">
            {getFieldDecorator('exam_id', {
              rules: [
                {
                  required: true,
                  message: '请选择考试类型！',
                }
              ],
            })(<Select style={{ width: 130 }}>
              {
                this.state.type.map((item: any) => {
                  return <Option key={item.exam_id}>{item.exam_name}</Option>
                })
              }
            </Select>)}
          </Form.Item>

          <Form.Item label="选择课程">
            {getFieldDecorator('subject_id', {
              rules: [
                {
                  required: true,
                  message: '请选择课程！',
                }
              ],
            })(<Select style={{ width: 130 }}>
              {
                this.state.question.map((item: any) => {
                  return <Option key={item.subject_id}>{item.subject_text}</Option>
                })
              }
            </Select>)}
          </Form.Item>

          <Form.Item label="设置题量">
            {getFieldDecorator('number', {
              rules: [
                {
                  required: true,
                  message: '请设置题量！',
                }
              ],
            })(<InputNumber min={3} max={10} />)}
          </Form.Item>
          <div className="time">
            <Form.Item label="考试时间">
              {getFieldDecorator('start_time', {
                rules: [
                  {
                    required: true,
                    message: '请选择考试时间！',
                  }
                ],
              })(<DatePicker showTime placeholder="开始时间" />)}
            </Form.Item>
            <Form.Item>
              <span className="span">-</span>
            </Form.Item>
            <Form.Item label="考试时间">
              {getFieldDecorator('end_time', {
                rules: [
                  {
                    required: true,
                    message: '请选择考试时间！',
                  }
                ],
              })(<DatePicker showTime placeholder="结束时间" />)}
            </Form.Item>
          </div>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="addBtn">创建试卷</Button>
          </Form.Item>
        </Form>

      </Layout>
    );
  }

}

export default Form.create()(AddTest);
