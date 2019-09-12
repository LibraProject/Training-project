import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Form, Select, Button, Pagination, Input, message, Empty } from "antd";
import { FormComponentProps } from "antd/lib/form";
import Isremove from '../../../components/dloag'
import './css/student.css'
const { Option } = Select;
interface UserFormProps extends FormComponentProps {
  classroom: any,
  location: any,
  exam_id: any,
  history: any,
  delete: Function,
  student_name: never,
  key: any
}

@inject("classroom")
@observer
/**
 * studentList:学生初始数据
 * room ：教室号
 * grade :班级号
 * arr: 筛选后数组
 * list : 筛选后数组长度
 **/
class Student extends React.Component<UserFormProps, any>{
  state = {
    studentList: [],
    room: [],
    grade: [],
    arr: [],
    list: [],
    obj: {
      student_name: '',
      room_text: '',
      grade_name: ''
    }

  }

  componentDidMount() {
    this.getStudent()

  }

  // 获取数据
  getStudent = async () => {
    const studentList = await this.props.classroom.getMangerStudent();
    const room = await this.props.classroom.getMangerRoom();
    const grade = await this.props.classroom.getMangerGrade();
    this.setState({ studentList, room, grade })
    this.serach(this.state.obj)
    this.onChange(1, 20)
  }

  // 分页
  onChange = (page: any, pageSize: any) => {
    const {list}  = this.state;
    let start = (page - 1) * pageSize, end = page * pageSize;
    this.setState({ arr: list.slice(start, end)})
  }

 
  // 删除功能
  delMangerStudent = async (id:String)=>{
    const studentList = await this.props.classroom.delMangerStudent(id);
    message.success(studentList.msg)
    this.getStudent()
  }

  //搜索功能
  handleSubmit = async (e: any) => {
    e.preventDefault();
    this.props.form.validateFields((err: any, values: any) => {
      this.serach(values)
    });
  };

  // 搜索模块返回搜索结果
  serach = (str: any) => {
    const { studentList } = this.state;
      let result = studentList.filter((item: any) => {
        let flag = true;
        for (let key in str) {
          if (str[key]) {
            flag = item[key] == str[key] && flag;
          }
        }
        return flag
      })
      this.setState({ arr: result, list: result })
  }

  removeStudent = (id:any)=>{
    Isremove(this.delMangerStudent,id)
  }

  // 重置
  handleReset = () => {
    this.props.form.resetFields();
  };
  public render() {
    const { getFieldDecorator } = this.props.form;
    const { room, grade, arr, list } = this.state
    return (
      <div className="studentBox">
        <h2>{this.props.location.state.title}</h2>
        <div className="studentTop">
          <Form layout="inline" onSubmit={this.handleSubmit} >
            <Form.Item>
              {getFieldDecorator('student_name', {
              })(<Input placeholder="请输入学生姓名" />)}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("room_text", {
              })(
                <Select placeholder="请选择教室号" style={{ width: 150 }}>
                  {room.map((Item: any) => <Option key={Item.room_id} value={Item.room_text}>{Item.room_text}</Option>)}
                </Select>
              )}
            </Form.Item>

            <Form.Item>
              {getFieldDecorator("grade_name", {
              })(
                <Select placeholder="选择班级名" style={{ width: 150 }}>
                  {grade.map((Item: any) => <Option key={Item.grade_id} value={Item.grade_name}>{Item.grade_name}</Option>)}
                </Select>
              )}
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="btn" onClick={this.serach}>搜索</Button>
            </Form.Item>

            <Form.Item>
              <Button type="primary" className="btn" onClick={this.handleReset}>重置</Button>
            </Form.Item>

          </Form>
        </div>

        {
            arr.length===0?<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} style={{backgroundColor:'#fff',height:'200px',lineHeight:'200px'}}/>:        
        <div>

          <table>
            <thead>
              <tr className="tabletr">
                <th>姓名</th>
                <th>学号</th>
                <th>班级</th>
                <th>教室</th>
                <th>密码</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              {
                arr.map((el: any) => <tr key={el.student_id}>
                  <td>{el.student_name}</td>
                  <td>{el.student_id}</td>
                  <td>{el.grade_name}</td>
                  <td>{el.room_text}</td>
                  <td>{el.student_pwd}</td>
                  <td className="removeStudent" onClick={()=>{this.removeStudent(el.student_id)}}>删除</td>
                </tr>)
              }

            </tbody>
          </table>

          <div className="page">
            <Pagination showQuickJumper showSizeChanger defaultPageSize={20} total={list.length} onChange={this.onChange} />
          </div>

        </div>
        }

      </div>
    );
  }
}

export default Form.create()(Student);