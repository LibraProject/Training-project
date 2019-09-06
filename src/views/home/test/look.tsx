import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Form, Breadcrumb, Select, Button, Icon } from "antd";
import './css/look.css'

const { Option } = Select;

interface Props {
  question: any,
  location: any,
  exam_id: any,
  history:any
}

@inject('question')
@observer
class Look extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }
  state = {
    list: [],
    type: [],
    question: [],
    subject: [],
    exam_id: '',
    questions_type_id: '',
    subject_id: '',
    num: null
  }
  componentDidMount() {
    this.getList()
    // console.log(this.props)
  }

  getList = async () => {
    const data = await this.props.question.getQuestion();
    const examtype = await this.props.question.examType()
    const questionType = await this.props.question.getQuestionsType()
    const subject = await this.props.question.subject()

    this.setState({
      list: data,
      type: examtype,
      question: questionType,
      subject
    })
  }
  //考试类型接口 获取数据
  cSelected = (e: any) => {
    this.setState({
      exam_id: e
    })
  }
  //题目类型接口 获取数据
  tSelected = (e: any) => {
    this.setState({
      questions_type_id: e
    })
  }
  // 课程类型接口，获取数据
  subClick = (id: any,i:number) => {
    this.setState({
      subject_id: id,
      num:i
    })
  }
  // 点击查询
  search = async () => {
    const { exam_id, questions_type_id, subject_id } = this.state
    const data = await this.props.question.getQuestion({ exam_id, questions_type_id, subject_id })

    this.setState({
      list: data
    })
  }
  // 点击每一项跳转详情
  clickJump=(id: any)=>{
    this.props.history.push(`/home/detail/${id}`)
  }

  render() {
    const { num } = this.state
    return (
      <div className="lookquersition">
        <h2>{this.props.location.state.title}</h2>
        <div className="lookseachs">
          <div className="lookSechTop">
            <div className="lookAll">课程类型</div>
            <div className="sechList">
              <div>All</div>

              {
                this.state.subject.map((item: any, i) => {
                  return <div key={item.subject_id} className={num === i ? 'subactive' : ''} onClick={() => { this.subClick(item.subject_id,i) }}>{item.subject_text}</div>
                })
              }

            </div>
          </div>
          <div className="lookSechBottom">
            <Form layout="inline" className="formContent">
              <Form.Item label="考试类型" className="formIten">
                <Select defaultValue="" style={{ width: 130 }} onChange={this.cSelected}>
                  {
                    this.state.type.map((item: any) => {
                      return <Option key={item.exam_id} value={item.exam_id}>{item.exam_name}</Option>
                    })
                  }
                </Select>
              </Form.Item>
              <Form.Item label="题目类型" className="formIten">
                <Select defaultValue="" style={{ width: 130 }} onChange={this.tSelected}>
                  {
                    this.state.question.map((item: any) => {
                      return <Option key={item.questions_type_id} value={item.questions_type_id}>{item.questions_type_text}</Option>
                    })
                  }
                </Select>
              </Form.Item>
              <Form.Item className="formIten">
                <Button type="primary" htmlType="submit" className="btn" onClick={this.search}>
                  <Icon type="search" />
                  查询
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
        <div className="lkList">
          {
            this.state.list.map((item: any, i) => {
              return <div key={i} onClick={()=>{this.clickJump(item.questions_id)}}>
                <h3>{item.title}</h3>
                <Button>{item.questions_type_text}</Button>
                <Button>{item.subject_text}</Button>
                <Button>{item.exam_name}</Button>
                <a>编辑</a>
                <div className="announce">{item.user_name}发布</div>
                <hr />
              </div>
            })
          }
        </div>
      </div>
    );
  }

}

export default Look;
