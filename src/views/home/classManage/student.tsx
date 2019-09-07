import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Form, Select, Button, Pagination, Input } from "antd";
import './css/student.css'

const { Option } = Select;

interface Props {
  question: any,
  location: any,
  exam_id: any,
  history: any
}

@inject("manger")
@observer

class Student extends React.Component<Props>{
  state = {
    studentList: []
  }

  componentDidMount() {

  }

  onChange = (page: any, pageSize: any) => {
    // const { grade } = this.state
    // const start = (page - 1) * pageSize
    // const end = page * pageSize
    // this.setState({ arr: grade.slice(start, end) })
  }

  public render() {
    return (
      <div className="studentBox">
        <h2>{this.props.location.state.title}</h2>

        <div className="studentTop">
          <Form layout="inline">
            <Form.Item>
             <Input placeholder="输入学姓名"/>
            </Form.Item>
            <Form.Item label="">
              <Select defaultValue="请选择教室号" style={{ width: 180 }}>
                {/* {
                    this.state.type.map((item: any) => {
                      return <Option key={item.exam_id} value={item.exam_id}>{item.exam_name}</Option>
                    })
                  } */}
              </Select>
            </Form.Item>
            <Form.Item label="">
              <Select defaultValue="班级名" style={{ width: 180 }}>
                {/* {
                    this.state.question.map((item: any) => {
                      return <Option key={item.questions_type_id} value={item.questions_type_id}>{item.questions_type_text}</Option>
                    })
                  } */}
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
                  <th>班级名</th>
                  <th>课程名称</th>
                  <th>阅卷状态</th>
                  <th>课程名称</th>
                  <th>成材率</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                {/* {arr.map((el: any) => (
                  <tr key={el.grade_id}>
                    <td>{el.grade_name}</td>
                    <td>{el.subject_text}</td>
                    <td></td>
                    <td>{el.room_text}</td>
                    <td>{el.questions_type_text}</td>
                    <td><a className="last">批卷</a></td>
                  </tr>
                ))} */}
                <tr>
                    <td>dsfsdf</td>
                    <td>subject_text</td>
                    <td></td>
                    <td>room_text</td>
                    <td>questions_type_text</td>
                    <td><a className="last">删除</a></td>
                </tr>
              </tbody>
            </table>
                
          <div className="page">
            <Pagination showQuickJumper showSizeChanger total={500} onChange={this.onChange} />
          </div>

        </div>
      </div>
    );
  }
}

export default Student;