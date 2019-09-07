import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Form, Select, Button, Pagination, Input } from "antd";
import './css/student.css'

const { Option } = Select;

interface Props {
  classroom: any,
  location: any,
  exam_id: any,
  history: any,
  delete: Function
}

@inject("classroom")
@observer

class Student extends React.Component<Props>{
  state = {
    studentList: [],
    arr: [],
    room: [],
    grade: []
  }

  componentDidMount() {
    this.getStudent()
  }

  getStudent = async () => {
    const studentList = await this.props.classroom.getMangerStudent();
    const room = await this.props.classroom.getMangerRoom();
    const grade = await this.props.classroom.getMangerGrade();

    this.setState({ studentList, room, grade })

    this.onChange(1, 20)
  }

  onChange = (page: any, pageSize: any) => {
    const { studentList } = this.state
    const start = (page - 1) * pageSize
    const end = page * pageSize
    this.setState({ arr: studentList.slice(start, end) })
  }

  delete = async (id: string) => {
    const studentList = await this.props.classroom.delMangerStudent(id);
    this.getStudent()
  }

  public render() {
    const { arr, studentList, room, grade } = this.state
    console.log(room, grade)
    return (
      <div className="studentBox">
        <h2>{this.props.location.state.title}</h2>

        <div className="studentTop">
          <Form layout="inline">
            <Form.Item>
              <Input placeholder="输入学姓名" />
            </Form.Item>
            <Form.Item label="">
              <Select defaultValue="请选择教室号" style={{ width: 180 }}>
                {
                    room.map((item: any) => {
                      return <Option key={item.room_id} value={item.room_id}>{item.room_text}</Option>
                    })
                }
              </Select>
            </Form.Item>
            <Form.Item label="">
              <Select defaultValue="班级名" style={{ width: 180 }}>
                {
                    grade.map((item: any) => {
                      return <Option key={item.grade_id} value={item.grade_id}>{item.grade_name}</Option>
                    })
                }
              </Select>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="btn">搜索</Button>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="btn">重置</Button>
            </Form.Item>
          </Form>
        </div>
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
              {arr.map((el: any, i) => (
                <tr key={i}>
                  <td>{el.student_name}</td>
                  <td>{el.student_id}</td>
                  <td>{el.grade_name}</td>
                  <td>{el.room_text}</td>
                  <td>{el.student_pwd}</td>
                  <td onClick={() => { this.delete(el.student_id) }}>
                    删除
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="page">
            <Pagination showQuickJumper showSizeChanger defaultPageSize={20} total={studentList.length} onChange={this.onChange} />
          </div>

        </div>
      </div>
    );
  }
}

export default Student;