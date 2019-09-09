import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Form, Select, Button, Pagination, Input, Modal, message } from "antd";
import './css/student.css'

const { Option } = Select;
const { confirm } = Modal;

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
    grade: [],
    student_name: '',
    room_text: '请选择班级号',
    grade_name: '班级名',
    sechList: {
      student_name: '',
      room_text: '',
      grade_name: ''
    },
    list: []
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

    this.serach()

    this.onChange(1, 20)
  }

  // 分页
  onChange = (page: any, pageSize: any) => {
    const { list } = this.state
    const start = (page - 1) * pageSize
    const end = page * pageSize
    this.setState({ arr: list.slice(start, end) })
  }

  // 是否删除
  showConfirm = (id: string) => {
    let that = this
    confirm({
      title: '你确定要删除这一项吗?',
      async onOk() {
        const studentList = await that.props.classroom.delMangerStudent(id);
        that.getStudent()
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  // 学生姓名
  changeVal = (e: any) => {
    const { sechList } = this.state
    sechList.student_name = e.target.value
    this.setState({ student_name: e.target.value, sechList})

  };

  // 教室号
  chooesRoom = (value: string) => {
    const result: any = this.state.room.filter((item: any) => item.room_id === value)
    const { sechList } = this.state
    sechList.room_text = result[0].room_text
    this.setState({ room_text: result[0].room_text, sechList })
    
  }

  // 班级名
  chooesClass = (value: string) => {
    const result: any = this.state.grade.filter((item: any) => item.grade_id === value)
    const { sechList } = this.state
    sechList.grade_name = result[0].room_text
    this.setState({ grade_name: result[0].grade_name, sechList })
  }

  // 搜索
  serach = () => {
    const { sechList, studentList } = this.state;
    let result = studentList.filter((item: any) => {
      let flag = true;
      for (let key in sechList) {
        if (sechList[key]) {
          flag = item[key] == sechList[key] && flag;
        }
      }
      return flag
    })
    this.setState({ arr: result }, () => {
      let { arr } = this.state
      this.setState({ list: arr })
    })

  }

  // 重置
  reset = () => {
    this.setState({ student_name: '', room_text: '请选择班级号', grade_name: '班级名' })
  }

  render() {
    const { arr, list, room, grade, student_name, room_text, grade_name } = this.state
    console.log(student_name,grade_name)
    return (
      <div className="studentBox">
        <h2>{this.props.location.state.title}</h2>

        <div className="studentTop">
          <Form layout="inline">
            <Form.Item>
              <Input placeholder="输入学姓名" value={student_name} onChange={this.changeVal} />
            </Form.Item>
            <Form.Item label="">
              <Select value={room_text} style={{ width: 180 }} onChange={this.chooesRoom}>
                {
                  room.map((item: any, i) => {
                    return <Option key={item.room_id}>{item.room_text}</Option>
                  })
                }
              </Select>
            </Form.Item>
            <Form.Item label="">
              <Select value={grade_name} style={{ width: 180 }} onChange={this.chooesClass}>
                {
                  grade.map((item: any) => {
                    return <Option key={item.grade_id}>{item.grade_name}</Option>
                  })
                }
              </Select>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="btn" onClick={this.serach}>搜索</Button>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="btn" onClick={this.reset}>重置</Button>
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
                  <td onClick={() => { this.showConfirm(el.student_id) }} >
                    删除
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="page">
            <Pagination showQuickJumper showSizeChanger defaultPageSize={20} total={list.length} onChange={this.onChange} />
          </div>

        </div>
      </div>
    );
  }
}

export default Student;