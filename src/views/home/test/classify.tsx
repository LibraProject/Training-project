import * as React from "react";
import "./css/classify.css";
import { Button, Modal, Input, Layout, message} from "antd";
import { observer, inject } from "mobx-react";

interface Props {
  question: any,
  location: any
}

@inject("question")
@observer

class Classify extends React.Component<Props> {
  state = {
    questiontypes: [],
    loading: false,
    visible: false,
    val: '',
    len: 0
  };
  componentDidMount() {
    this.getQuestiontypes();
  }
  addQuestionResult = async (text:String,sort:Number) =>{
    const questionResult = await this.props.question.addQuestion({text,sort});
    message.success(questionResult.msg)
    if(questionResult.code){
      this.setState({ visible: false,loading:false,val:''});
      this.getQuestiontypes();
    }
  }

  getQuestiontypes = async () => {
    const questionType = await this.props.question.getQuestionsType();
    this.setState({
      questiontypes: questionType,
      len: questionType.length
    });
  };
  handleOk = () => {
    let {val,len} = this.state;
    if(!val){alert('内容不能为空');return}
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
    this.setState({ visible: false, loading: false  });
  };
  //设置val
  setVal = (e: any) => {
    this.setState({
      val: e.target.value
    })
  }
 
  render() {
    const { visible, loading, val } = this.state;
    return (
      <Layout className="main">
        <h2>{this.props.location.state.title}</h2>
        <div className="typesContent">
          <div className="tableType">
            <div className="addtype">
              <Button type="primary" className="btnsa" onClick={this.showModal}>
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
            bodyStyle={{ height: 200 }}
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
            <Input type="text" value={val} onChange={this.setVal} />
          </Modal>
        </div>
      </Layout>
    );
  }
}

export default Classify;
