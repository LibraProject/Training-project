import * as React from "react";
import { Button, Modal, Input, Form, Select } from "antd";
import {observer,inject} from 'mobx-react'
import { FormComponentProps } from "antd/lib/form";
import "./css/classroom.css";
interface UserFormProps extends FormComponentProps {
  age: number;
  name: string;
  history: any;
  user: any;
  form: any;
  classroom:any
}
@inject('classroom')
@observer
class ClassRoom extends React.Component<UserFormProps, any> {
  state = {
    questiontypes: [],
    visible: false,
    len: 0,
    mangerroom:[]
  };
  componentDidMount(){
     this.getMangerRooms()
  }

  // 获取所有教室
  getMangerRooms = async ()=>{
    const mangerroom = await this.props.classroom.getMangerRoom();
    console.log(mangerroom)
    this.setState({mangerroom})
  }

  handleOk = () => {
    this.setState({ loading: true });
  };
  showModal = () => {
    this.setState({
      visible: true
    });
  };
  handleCancel = () => {
    this.setState({ visible: false });
  };
  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.form.validateFields((err: any, values: any) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  handleSelectChange = (value: any) => {
    console.log(value);
    this.props.form.setFieldsValue({
      note: `Hi, ${value === "male" ? "man" : "lady"}!`
    });
  };
  public render() {
    const { visible ,mangerroom} = this.state;
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
            <table className="tableType tableTypeText"  style={{'width':'100%'}}>
              <thead >
                <tr className="tabletr tableTypeText">
                  <th>教室号</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                {
                  mangerroom && mangerroom.map((el:any,i)=> <tr key={i}>
                    <td>{el.room_text}</td>
                    <td className="tabletrDelte">删除</td>
                  </tr>)
                }
               
              </tbody>
            </table>
          </div>
        </div>
        <Modal
          visible={visible}
          title="添加班级"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          centered={true}
          destroyOnClose={true}
          keyboard
          footer={null}
        >
          <Form
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 12 }}
            onSubmit={this.handleSubmit}
          >
            <Form.Item label="教室名">
              {getFieldDecorator("classNames", {
                rules: [{ required: true, message: "请输入教室名！" }]
              })(<Input placeholder="教室名" />)}
            </Form.Item>
            <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
              <Button type="primary" htmlType="submit">
                提交
              </Button>
            </Form.Item>
          </Form>
        </Modal>
        
      </div>
    );
  }
}

export default Form.create()(ClassRoom);
