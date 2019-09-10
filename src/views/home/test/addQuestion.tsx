import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Input, Select, Button, Layout, message } from "antd";
import Editor from 'for-editor'
import './css/rank.css'

const { Option } = Select;

interface Props {
  question: any,
  history:any,
  location: any,
  match: any
}

@inject('question')
@observer

class AddQuestion extends React.Component<Props> {
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
    questions_id: '',
    exam_name: '',
    subject_text: '',
    questions_type_text: ''
  }
  componentDidMount() {
    this.getList()
  }

  getList = async () => {
    const data = await this.props.question.getQuestion();
    const examtype = await this.props.question.examType()
    const questionType = await this.props.question.getQuestionsType()
    const subject = await this.props.question.subject()

    const list = data.filter((item: any) => item.questions_id === this.props.match.params.id)[0]

    this.setState({
      list,
      type: examtype,
      subjectType: subject,
      question: questionType,
      title: list.title,
      questions_stem: list.questions_stem,
      questions_type_id: list.questions_type_id,
      exam_id: list.exam_id,
      subject_id: list.subject_id,
      questions_answer: list.questions_answer,
      questions_id: list.questions_id,
      exam_name: list.exam_name,
      subject_text: list.subject_text,
      questions_type_text: list.questions_type_text
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
  examChange = (value: string) => {
    const data = this.state.type.filter((item: any) => item.exam_id === value)
    let { exam_name } = data[0]
    this.setState({ exam_id: value, exam_name })
  }

  // 课程类型内容
  subjectChange = (value: string) => {
    const data = this.state.subjectType.filter((item: any) => item.subject_id === value)
    let { subject_text } = data[0]
    this.setState({ subject_id: value, subject_text })
  }

  // 题目类型内容
  questionChange = (value: string) => {
    const data = this.state.question.filter((item: any) => item.questions_type_id === value)
    let { questions_type_text } = data[0]
    this.setState({ questions_type_id: value, questions_type_text })
  }

  // 答案信息
  handleChangeQuestion = (question: string) => {
    this.setState({
      questions_answer: question
    })
  }

  // 提交试题
  submitClick = async () => {
    const { title, questions_stem, questions_type_id, exam_id, subject_id, questions_answer, questions_id } = this.state
    const data = await this.props.question.updateQuestion({ title, questions_stem, questions_type_id, exam_id, subject_id, questions_answer, questions_id });
    if(data.code===1){
      message.success(data.msg);
      this.props.history.push({
        pathname:'/home/look',
        state:{title:'查看试题'}
      })
    }else{
      message.warning(data.msg);
      this.props.history.push({
        pathname:'/home/look',
        state:{title:'查看试题'}
      })
    }
  }


  render() {
    const { title, questions_stem, questions_type_text, exam_name, subject_text, questions_answer } = this.state
    return (
      <Layout className="rankquersition" >
        <h2>编辑试题</h2>
        <ul className="rankBox">
          <h3>题目信息</h3>
          <li className="li">
            <p>题干</p>
            <p>
              <Input placeholder="请输入题目标题，不超过20个字" value={title} className="ipt" onChange={this.titChange} />
            </p>
          </li>
          <li>
            <p>题目主题</p>
            <div>
              <Editor value={questions_stem} onChange={this.handleChange.bind(this)} />
            </div>
          </li>
          <li className="li">
            <p className="opItem">请选择考试类型</p>
            <Select value={exam_name} style={{ width: 130 }} onChange={this.examChange}>
              {
                this.state.type.map((item: any) => {
                  return <Option key={item.exam_id}>{item.exam_name}</Option>
                })
              }
            </Select>
          </li>
          <li className="li">
            <p className="opItem">请选择课程类型</p>
            <Select value={subject_text} style={{ width: 130 }} onChange={this.subjectChange}>
              {
                this.state.subjectType.map((item: any) => {
                  return <Option key={item.subject_id}>{item.subject_text}</Option>
                })
              }
            </Select>
          </li>
          <li className="li">
            <p className="opItem">请选择题目类型</p>
            <Select value={questions_type_text} style={{ width: 130 }} onChange={this.questionChange}>
              {
                this.state.question.map((item: any) => {
                  return <Option key={item.questions_type_id}>{item.questions_type_text}</Option>
                })
              }
            </Select>
          </li>
          <li>
            <p>答案信息</p>

            <div>
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

export default AddQuestion;
