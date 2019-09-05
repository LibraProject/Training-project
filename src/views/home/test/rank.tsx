import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Form, Input, Select,DatePicker , Button, InputNumber, Layout } from "antd";
import { WrappedFormUtils } from 'antd/lib/form/Form'
import './css/rank.css'

const { RangePicker } = DatePicker;
const { TextArea } = Input;
const { Option } = Select;

interface Props {
  question: any,
  location: any,
  form: WrappedFormUtils
}

@inject('question')
@observer
class Rank extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }
  state = {
    list: [],
    type: [],
    question: [],
    subjectType:[]
  }
  componentDidMount() {
    this.getList()
  }

  getList = async () => {
    const data = await this.props.question.getQuestion();
    const examtype = await this.props.question.examType()
    const questionType=await this.props.question.getQuestionsType()
    const subject=await this.props.question.subject()

    this.setState({
      list: data,
      type: examtype,
      subjectType: subject,
      question:questionType
    })
  }

  render() {
    return (
      <Layout className="rankquersition">
        <h2>{this.props.location.state.title}</h2>

        <ul className="rankBox">
          <h3>题目信息</h3>
          <li className="li">
              <p>题干</p>
              <p>
                  <Input placeholder="请输入题目标题，不超过20个字" className="ipt"/>
              </p>
          </li>
          <li>
              <p>题目主题</p>
              <p>
                  <TextArea rows={4} />
              </p>
          </li>
          <li className="li">
              <p className="opItem">请选择考试类型</p>
              <Select defaultValue="周考1" style={{ width: 130 }}>
                {
                  this.state.type.map((item:any)=>{
                    return <Option key={item.exam_id} value={item.exam_name}>{item.exam_name}</Option>
                  })
                }
              </Select>
          </li>
          <li className="li">
              <p className="opItem">请选择课程类型</p>
              <Select defaultValue="javaScript上" style={{ width: 130 }}>
                {
                  this.state.subjectType.map((item:any)=>{
                    return <Option key={item.subject_id} value={item.subject_text}>{item.subject_text}</Option>
                  })
                }
              </Select>
          </li>
          <li className="li">
              <p className="opItem">请选择题目类型</p>
              <Select defaultValue="简答题" style={{ width: 130 }}>
                {
                  this.state.question.map((item:any)=>{
                    return <Option key={item.questions_type_id} value={item.questions_type_text}>{item.questions_type_text}</Option>
                  })
                }
              </Select>
          </li>
          <li>
              <p>答案信息</p>
              <p>
                  <TextArea rows={4} />
              </p>
          </li>
          <li className="li">
              <Button type="primary" className="addBtn">提交</Button>
          </li>
        </ul>

      </Layout>
    );
  }

}

export default Rank;
