import * as React from "react";
import { observer, inject } from "mobx-react";
import { Pagination } from 'antd';
import "./css/special.css";

interface Props {
  manger: any;
}

@inject("manger")
@observer

class Special extends React.Component<Props> {
  state = {
    grade: [],
    arr: []
  };

  componentDidMount() {
    this.getGrade()
  }

  getGrade = async () => {
    const grade = await this.props.manger.approval();

    this.setState({ grade })
    
    this.onChange(1, 10)
  }

  onChange = (page: any, pageSize: any) => {
    const { grade } = this.state
    const start = (page - 1) * pageSize
    const end = page * pageSize
    this.setState({ arr: grade.slice(start, end) })
  }

  render() {
    const { grade, arr } = this.state
    return (
      <div className="main">

        <h2 className="titType">阅卷管理</h2>
        <div className="typesContent">
          <div className="tableType">
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
                {arr.map((el: any) => (
                  <tr key={el.grade_id}>
                    <td>{el.grade_name}</td>
                    <td>{el.subject_text}</td>
                    <td></td>
                    <td>{el.room_text}</td>
                    <td>{el.questions_type_text}</td>
                    <td><a className="last">批卷</a></td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="page">
              <Pagination showQuickJumper showSizeChanger total={grade.length} onChange={this.onChange} />
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Special;
