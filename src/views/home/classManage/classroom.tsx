import * as React from "react";
import { Button, Modal, Input, Form, Select, message } from "antd";
import { observer, inject } from 'mobx-react'
import { FormComponentProps } from "antd/lib/form";
import IsAffirm from '../../../components/dloag'
import "./css/grade.css";
interface UserFormProps extends FormComponentProps {
  age: number;
  name: string;
  history: any;
  user: any;
  form: any;
  classroom: any
  question: any
}
@inject('classroom', 'question')
@observer
class ClassRoom extends React.Component<UserFormProps, any> {
  state = {questiontypes: [],loading: false,visible: false,len: 0,mangergrade: [],mangerroom: [],subject: [],roomTitle: "添加班级",disableFlag: false,grade_name: '',room_text: '',subject_text: '',type: 1,obj: {}  };
  componentDidMount() {
    this.getMangerRooms()
  }
  getMangerRooms = async () => {
    const mangerroom = await this.props.classroom.getMangerRoom();
    const subject = await this.props.question.subject()
    const mangergrade = await this.props.classroom.getMangerGrade();
    this.setState({ mangerroom, subject, mangergrade });
  };

  // 添加班级 
  addMangerGrade = async (str: Object) => {
    const mangerroom = await this.props.classroom.addMangerGrade(str);
    mangerroom == "创建班级成功" ? message.success(mangerroom) : message.warning(mangerroom);
    this.handleCancel()
    this.getMangerRooms()
  }

  handleOk = () => {
    this.setState({ loading: true });
  };

  // 显示 弹框
  showModal = () => {
    this.setState({ visible: true, roomTitle: "添加班级", disableFlag: false, grade_name: '', room_text: '', subject_text: '', type: 1, });
  };
  handleCancel = () => {
    this.setState({ visible: false });
  };

  UpdateMangerGrade = async (str: Object) => {
    const Updatemangergrade = await this.props.classroom.UpdateMangerGrade(str);
    message.success(Updatemangergrade)
    this.handleCancel()
    this.getMangerRooms()
  }

  // 添加 && 修改提交
  handleSubmit = (e: any) => {
    const { type, obj } = this.state
    e.preventDefault();
    this.props.form.validateFields((err: any, values: any) => {
      if (!err) {
        if (type == 1) {
          this.addMangerGrade(values)
        } else {
          const newval = Object.assign(obj, values)
          // delete (newval.room_text)
          // delete (newval.subject_text)
          this.UpdateMangerGrade(newval)
        }
      }
    });
  };

  //  删除功能 
  DelteMangerGrade = async (id: String) => {
    const result = await this.props.classroom.DelteMangerGrade({ grade_id: id })
    message.success(result)
    this.getMangerRooms()
  }
  // 确认删除
  removeRoom = (id: String) => {
    IsAffirm(this.DelteMangerGrade, id)
  }

  // 修改
  ChangeRoom = (item: any) => {
    this.setState({ visible: true, roomTitle: "修改班级", disableFlag: true, grade_name: item.grade_name, room_text: item.room_text, subject_text: item.subject_text, type: 2, obj: item })
  }

  public render() {
    const { visible, mangergrade, mangerroom, subject, roomTitle, disableFlag, grade_name, room_text, subject_text } = this.state;
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
                  mangergrade && mangergrade.map((el: any, index: any) => <tr key={index}>
                    <td>{el.grade_name}</td>
                    <td>{el.subject_text}</td>
                    <td>{el.room_text}</td>
                    <td className="tabletrDelte">
                      <span className="tabBtn" onClick={() => { this.ChangeRoom(el) }}>修改</span> | <span className="tabBtn" onClick={() => { this.removeRoom(el.grade_id) }}>删除</span>
                    </td>
                  </tr>)
                }
              </tbody>
            </table>
          </div>
        </div>
        <Modal visible={visible} title={roomTitle} onCancel={this.handleCancel} centered={true} destroyOnClose={true} keyboard footer={null}>
          <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
            <Form.Item label="班级名">
              {getFieldDecorator('grade_name', {
                initialValue: `${grade_name}`,
                rules: [{ required: true, message: "请输入班级名！" }]
              })(<Input placeholder="班级名" disabled={disableFlag} />)}
            </Form.Item>

            <Form.Item label="教室号">
              {getFieldDecorator("room_id", {
                initialValue: `${room_text}`,
                rules: [{ required: true, message: "请选择教室号！" }]
              })(
                <Select placeholder="请选择教室号" >
                  {mangerroom.map((Item: any) => <Option key={Item.room_id} value={Item.room_id}>{Item.room_text}</Option>)}
                </Select>
              )}
            </Form.Item>

            <Form.Item label="课程名">
              {getFieldDecorator("subject_id", {
                initialValue: `${subject_text}`,
                rules: [{ required: true, message: "请选择课程名!" }]
              })(
                <Select placeholder="选择课程名">
                  {subject.map((Item: any) => <Option key={Item.subject_id} value={Item.subject_id}>{Item.subject_text}</Option>)}
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
