import * as React from "react";
import { Button, Modal, Input, Form ,Select} from "antd";
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
}
@inject('classroom')
@observer
class ClassRoom extends React.Component<UserFormProps, any> {
  state = {
    questiontypes: [],
    loading: false,
    visible: false,
    len: 0,
    mangergrade:[]
  };
  componentDidMount(){
    this.getMangerGrades()
    //getMangerGrade
  }

  // 获取所有教室
  getMangerGrades = async ()=>{
    const mangergrade= await this.props.classroom.getMangerGrade();
    console.log(mangergrade)
    this.setState({mangergrade})
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
    const { visible ,mangergrade} = this.state;
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
                    <td className="tabletrDelte">删除|删除</td>
                  </tr>)
                }
              </tbody>
            </table>
          </div>
        </div>

        
      
        
        <Modal
          visible={visible}
          title="添加班级"
          
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
            <Form.Item label="班级名">
              {getFieldDecorator("classNames", {
                rules: [{ required: true, message: "请输入班级名！" }]
              })(<Input placeholder="班级名" />)}
            </Form.Item>

            <Form.Item label="教室号">
              {getFieldDecorator("classRoom", {
                rules: [{ required: true, message: "请选择教室号！" }]
              })(
                <Select
                  placeholder="请选择教室号"
                  onChange={this.handleSelectChange}
                >
                  <Option value="教室1">教室1</Option>
                  <Option value="教室2">教室2</Option>
                </Select>
              )}
            </Form.Item>

            <Form.Item label="课程名">
              {getFieldDecorator("courseName", {
                rules: [{ required: true, message: "请选择课程名!" }]
              })(
                <Select
                  placeholder="选择课程名"
                  onChange={this.handleSelectChange}
                >
                  <Option value="课程1">课程1</Option>
                  <Option value="课程2">课程2</Option>
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
