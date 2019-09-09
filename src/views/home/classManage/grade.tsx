import * as React from "react";
import { Button, Modal, Input, Form, message } from "antd";
import { observer, inject } from "mobx-react";
import IsDelte from "../../../components/dloag";
import { FormComponentProps } from "antd/lib/form";
import "./css/classroom.css";
interface UserFormProps extends FormComponentProps {
  age: number;
  name: string;
  history: any;
  user: any;
  form: any;
  classroom: any;
}
@inject("classroom")
@observer
class ClassRoom extends React.Component<UserFormProps, any> {
  state = {
    questiontypes: [],
    visible: false,
    len: 0,
    mangerroom: []
  };
  componentDidMount() {
    // 初始化
    this.getMangerRooms();
  }

  // 获取所有教室
  getMangerRooms = async () => {
    const mangerroom = await this.props.classroom.getMangerRoom();
    this.setState({ mangerroom });
  };

  // 弹框隐藏
  handleOk = () => {
    this.setState({ loading: true });
  };

  // 弹框显示
  showModal = () => {
    this.setState({
      visible: true
    });
  };

  //  x 号关闭
  handleCancel = () => {
    this.setState({ visible: false });
  };

  // 添加教室
  addManger = async (str: string) => {
    const msg = await this.props.classroom.addMangerRoom({ room_text: str });
    msg == '教室创建成功' ? message.success(msg) : message.warning(msg);
    this.setState({ visible: false }); 
    this.getMangerRooms();
  };

  //  删除教室接口
  DeleteMangerRoom = async (str:any) => {
    const msg = await this.props.classroom.DelteMangerRoom(str);
    message.success(msg);
    this.getMangerRooms();
  };

  //  容错操作
  DeleteIsManger = (id: string) => {
    IsDelte(this.DeleteMangerRoom,{'room_id':id});
  };

  //  验证不为空添加教室号
  handleSubmit = async (e: any) => {
    e.preventDefault();
    this.props.form.validateFields((err: any, values: any) => {
      if (!err) {
        this.addManger(values.classNames);
      }
    });
  };

  public render() {
    const { visible, mangerroom } = this.state;
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="main">
        <h2 className="titType">教室管理</h2>
        <div className="typesContent">
          <div className="tableType">
            <div className="addtype">
              <Button type="primary" className="btnsa" onClick={this.showModal}>
                +添加教室
              </Button>
            </div>
            <table className="tableType tableTypeText" style={{ width: "100%" }}>
              <thead>
                <tr className="tabletr tableTypeText">
                  <th>教室号</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                {
                  mangerroom && mangerroom.map((el: any) => (
                    <tr key={el.room_id}>
                      <td>{el.room_text}</td>
                      <td className="tabletrDelte" onClick={() => {this.DeleteIsManger(el.room_id);}}>删除</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
        <Modal visible={visible} title="添加班级" onOk={this.handleOk} onCancel={this.handleCancel} centered={true} destroyOnClose={true} keyboard footer={null}>
          <Form  labelCol={{ span: 5 }}  wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit} >
              <Form.Item label="教室名"> {getFieldDecorator("classNames", {
                  rules: [{ required: true, message: "请输入教室名！" }]
                })(<Input placeholder="教室名" />)}
              </Form.Item>
              <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
                <Button type="primary" htmlType="submit">提交</Button>
              </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default Form.create()(ClassRoom);
