import * as React from "react";
import { Button, Modal, Input, Form ,Select, message } from "antd";
import {observer,inject} from 'mobx-react'
import { FormComponentProps } from "antd/lib/form";
import "./css/grade.css";
interface UserFormProps extends FormComponentProps {
  age: number;
  name: string;
  history: any;
  user: any;
  form: any;
  classroom:any
  question:any
}
@inject('classroom','question')
@observer
class ClassRoom extends React.Component<UserFormProps, any> {
  state = {
    questiontypes: [],
    loading: false,
    visible: false,
    len: 0,
    mangergrade:[],
    mangerroom:[],
    subject:[]
  };
  componentDidMount(){
    this.getMangerRooms()
  }
  getMangerRooms = async () => {
    const mangerroom = await this.props.classroom.getMangerRoom();
    const subject = await this.props.question.subject()
    const mangergrade= await this.props.classroom.getMangerGrade();
    this.setState({ mangerroom, subject, mangergrade });
  };

  // 添加班级 
  addMangerGrade = async (str:Object)=>{
    const mangerroom = await this.props.classroom.addMangerGrade(str);
    message.success(mangerroom);
    this.handleCancel()
    this.getMangerRooms()
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
        this.addMangerGrade(values)
      }
    });
  };

  public render() {
    const { visible, mangergrade, mangerroom, subject } = this.state;
    const { getFieldDecorator } = this.props.form;
    const { Option } = Select;
    return (
      <div className="main">
        <h2 className="titType">班级管理</h2>
        <div className="typesContent">
          <div className="tableType">
            <div className="addtype">
              <Button type="primary" className="btnsa" onClick={this.showModal}>
                +添加班级
              </Button>
            </div>
            <table className="tablelist">
              <thead>
                <tr className="tabletr">
                  <th>班级名</th>
                  <th>课程名</th>
                  <th>教室号</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
              {
                  mangergrade && mangergrade.map((el:any,i)=> <tr key={i}>
                    <td>{el.grade_name}</td>
                    <td>{el.subject_text}</td>
                    <td>{el.room_text}</td>
                    <td className="tabletrDelte"><span className="tabBtn">修改</span> | <span className="tabBtn">删除</span></td>
                  </tr>)
                }
              </tbody>
            </table>
          </div>
        </div>
        <Modal visible={visible} title="添加班级" onCancel={this.handleCancel} centered={true} destroyOnClose={true} keyboard footer={null}>
          <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
            <Form.Item label="班级名">
              {getFieldDecorator("grade_name", {
                rules: [{ required: true, message: "请输入班级名！" }]
              })(<Input placeholder="班级名" />)}
            </Form.Item>

            <Form.Item label="教室号">
              {getFieldDecorator("room_id", {
                rules: [{ required: true, message: "请选择教室号！" }]
              })(
                <Select placeholder="请选择教室号">
                  {mangerroom.map((Item:any)=><Option key={Item.room_id} value={Item.room_id}>{Item.room_text}</Option>)}
                </Select>
              )}
            </Form.Item>

            <Form.Item label="课程名">
              {getFieldDecorator("subject_id", {
                rules: [{ required: true, message: "请选择课程名!" }]
              })(
                <Select placeholder="选择课程名">
                  {subject.map((Item:any)=><Option key={Item.subject_id} value={Item.subject_id}>{Item.subject_text}</Option>)}
                </Select>
              )}
            </Form.Item>
            <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
              <Button type="primary" htmlType="submit">
                确认提交
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default Form.create()(ClassRoom);
