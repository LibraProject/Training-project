import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Form, Breadcrumb, Select, Button ,Icon} from "antd";
import '../../../scss/look.css'

const { Option } = Select;

interface Props {
  question: any,
  location: any,
  exam_id:any
}

@inject('question')
@observer
class Look extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }
  state = {
    list: [],
    type:[],
    question:[]
  }
  componentDidMount() {
    this.getList()
    console.log(this.props)
  }

  getList = async () => {
    const data = await this.props.question.getQuestion();
    const examtype=await this.props.question.examType()
    const questionType=await this.props.question.getQuestionsType()

    this.setState({
      list:data,
      type:examtype,
      question:questionType
    })
  }
  tSelected = async (e: any)=> {
    const data = await this.props.question.getQuestion({exam_id:e});
    console.log(e)
    console.log(data)
  }

  render() {
    return (
      <div className="lookquersition">
         <h2>{this.props.location.state.title}</h2>
      <div className="lookseachs">
        <div className="lookSechTop">
          <div className="lookAll">课程类型</div>
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
          <Form layout="inline" className="formContent">
            <Form.Item label="考试类型" className="formIten">
              <Select defaultValue="" style={{ width: 130 }} onChange={this.tSelected}>
                {
                  this.state.type.map((item:any)=>{
                    return <Option key={item.exam_id} value={item.exam_id}>{item.exam_name}</Option>
                  })
                }
              </Select>
            </Form.Item>
            <Form.Item label="题目类型" className="formIten"> 
              <Select defaultValue="" style={{ width: 130 }} onChange={this.tSelected}>
                {
                  this.state.question.map((item:any)=>{
                    return <Option key={item.questions_type_id} value={item.questions_type_id}>{item.questions_type_text}</Option>
                  })
                }
              </Select>
            </Form.Item>
            <Form.Item className="formIten">
                <Button type="primary" htmlType="submit" className="btn"> 
                  <Icon type="search" />
                         查询
                </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <div className="lkList">  
        {
          this.state.list.map((item:any,i)=>{
            return <div key={i}>
                     <h3>{item.title}</h3>
                     <Button>{item.questions_type_text}</Button>
                     <Button>{item.subject_text}</Button>
                     <Button>{item.exam_name}</Button>
                     <a>编辑</a>
                     <div className="announce">{item.user_name}发布</div>
                     <hr/>
                  </div>
          })
        }
      </div>
    </div>
    );
  }

}

export default Look;
