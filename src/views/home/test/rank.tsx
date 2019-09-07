import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Input, Select, Button, Layout, message } from "antd";
// import { WrappedFormUtils } from 'antd/lib/form/Form'
import Editor from 'for-editor'
import './css/rank.css'

const { Option } = Select;

interface Props {
  question: any,
  location: any
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
    subjectType: [],
    title: '',
    questions_stem: '',
    questions_type_id: '',
    exam_id: '',
    subject_id: '',
    questions_answer: '',
    user_id: ''
  }
  componentDidMount() {
    this.getList()
  }

  getList = async () => {
    const data = await this.props.question.getQuestion();
    const examtype = await this.props.question.examType()
    const questionType = await this.props.question.getQuestionsType()
    const subject = await this.props.question.subject()
    const userId = await this.props.question.userInfo()

    this.setState({
      list: data,
      type: examtype,
      subjectType: subject,
      question: questionType,
      user_id: userId.user_id
    })
  }

  // 题干内容
  titChange = (e: any) => {
    this.setState({ title: e.target.value })
  }

  // 主题内容
  handleChange = (value: string) => {
    this.setState({
      questions_stem: value
    })
  }

  // 考试类型内容
  examChange = (e: any) => {
    this.setState({ exam_id: e })
  }

  // 课程类型内容
  subjectChange = (e: any) => {
    this.setState({ subject_id: e })
  }

  // 题目类型内容
  questionChange = (e: any) => {
    this.setState({ questions_type_id: e })
  }

  // 答案信息
  handleChangeQuestion = (question: string) => {
    this.setState({
      questions_answer: question
    })
  }

  // 提交试题
  submitClick = async () => {
    const { title, questions_stem, questions_type_id, exam_id, subject_id, questions_answer, user_id } = this.state
    const add = await this.props.question.addQuestion({ title, questions_stem, questions_type_id, exam_id, subject_id, questions_answer, user_id })
    // console.log(add)
    if (add.code === 1) {
      message.success(add.msg);
    } else {
      message.error(add.msg);
    }
  }


  render() {
    const { questions_stem, questions_answer } = this.state
    return (
      <Layout className="rankquersition" >
        <h2>{this.props.location.state.title}</h2>

        <ul className="rankBox">
          <h3>题目信息</h3>
          <li className="li">
            <p>题干</p>
            <p>
              <Input placeholder="请输入题目标题，不超过20个字" className="ipt" onChange={this.titChange} />
            </p>
          </li>
          <li>
            <p>题目主题</p>
            <div className="editorBox">
              <Editor value={questions_stem} onChange={this.handleChange.bind(this)} />
            </div>
          </li>
          <li className="li">
            <p className="opItem">请选择考试类型</p>
            <Select defaultValue="周考1" style={{ width: 130 }} onChange={this.examChange}>
              {
                this.state.type.map((item: any) => {
                  return <Option key={item.exam_id} value={item.exam_id}>{item.exam_name}</Option>
                })
              }
            </Select>
          </li>
          <li className="li">
            <p className="opItem">请选择课程类型</p>
            <Select defaultValue="javaScript上" style={{ width: 130 }} onChange={this.subjectChange}>
              {
                this.state.subjectType.map((item: any) => {
                  return <Option key={item.subject_id} value={item.subject_id}>{item.subject_text}</Option>
                })
              }
            </Select>
          </li>
          <li className="li">
            <p className="opItem">请选择题目类型</p>
            <Select defaultValue="简答题" style={{ width: 130 }} onChange={this.questionChange}>
              {
                this.state.question.map((item: any) => {
                  return <Option key={item.questions_type_id} value={item.questions_type_id}>{item.questions_type_text}</Option>
                })
              }
            </Select>
          </li>
          <li>
            <p>答案信息</p>

            <div className="editorBox">
              <Editor value={questions_answer} onChange={this.handleChangeQuestion.bind(this)} />
            </div>
          </li>
          <li className="li">
            <Button type="primary" className="addBtn" onClick={this.submitClick}>提交</Button>
          </li>
        </ul>

      </Layout>
    );
  }

}

export default Rank;
