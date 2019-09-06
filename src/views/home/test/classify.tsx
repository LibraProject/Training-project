import * as React from "react";
import "./css/classify.css";
import { Button ,Modal,Input} from "antd";
import { observer, inject } from "mobx-react";
interface Props {
  question: any;
}
@inject("question")
@observer
class classify extends React.Component<Props> {
  state = {
    questiontypes: [],
    loading: false,
    visible: false,
    val:'',
    len:0
  };
  componentDidMount() {
    this.getQuestiontypes();
  }
  addQuestionResult = async (text:String,sort:Number) =>{
    const questionResult = await this.props.question.addQuestions({text,sort});
    if(questionResult.code){
      this.setState({ visible: false,loading:false,val:''});
      this.getQuestiontypes();
    }

  }

  getQuestiontypes = async () => {
    const questionType = await this.props.question.getQuestionsType();
    this.setState({
      questiontypes: questionType,
      len:questionType.length
    });
  };
  handleOk = () => {
    let {val,len} = this.state;
    if(!val){return}
    len+=1;
    this.addQuestionResult(val,len)
    this.setState({ loading: true });
  };
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  handleCancel = () => {
    this.setState({ visible: false });
  };
  //设置val
  setVal = (e:any)=>{
    this.setState({
      val:e.target.value
    })
  }
  addQuestion = ()=>{
    console.log(1)
  }
  render() {
    const { visible, loading,val } = this.state;
    return (
      <div className="main">

        <h2 className="titType">试题分类</h2>
        <div className="typesContent">
          <div className="tableType">
            <div className="addtype">
              <Button type="primary" className="btns" onClick={this.showModal}>
                +添加类型
              </Button>
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
                {this.state.questiontypes.map((el: any) => (
                  <tr key={el.questions_type_id}>
                    <td>{el.questions_type_id}</td>
                    <td>{el.questions_type_text}</td>
                    <td></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div>
        <Modal
          visible={visible}
          title="添加试题类型"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          centered={true}
          bodyStyle ={{height:200}}
          keyboard
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              关闭
            </Button>,
            <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
              提交
            </Button>,
          ]}
        >
         <Input type="text"  value={val} onChange={this.setVal}/>
        </Modal>
      </div>
      </div>
    );
  }
}

export default classify;
