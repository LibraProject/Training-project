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
  };
  componentDidMount() {
    this.getQuestiontypes();
  }
  getQuestiontypes = async () => {
    const questionType = await this.props.question.getQuestionsType();
    this.setState({
      questiontypes: questionType
    });
  };
  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  handleCancel = () => {
    this.setState({ visible: false });
  };
  render() {
    const { visible, loading } = this.state;
    return (
      <div className="main">

        <h2 className="titType">试题分类</h2>
        <div className="typesContent">
          <div className="tableType">
            <div className="btn">
              <Button type="primary" className="btns" onClick={this.showModal}>
                +添加类型
              </Button>
              <div className="m-none" id="m-test">
                <div className="tk">
                  <h3>创建新类型</h3>
                  <input type="text" placeholder="输入类型" name="type" />
                  <p></p>
                  <input
                    type="text"
                    placeholder="输入类型名称"
                    name="text_type"
                  />
                  <p></p>
                  <div className="bt">
                    <Button type="primary">确定</Button>
                    <Button>取消</Button>
                  </div>
                </div>
              </div>
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
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              关闭
            </Button>,
            <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
              提交
            </Button>,
          ]}
        >
         <Input type="text"/>
        </Modal>
      </div>
      </div>
    );
  }
}

export default classify;
