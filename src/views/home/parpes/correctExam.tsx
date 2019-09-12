import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Form, Select, Button, Icon, Layout, Table } from "antd";
import './css/correct.css'

const { Option } = Select;

interface Props {
  manger: any,
  location: any,
  history: any,
  classroom:any
}

@inject('manger','classroom')
@observer

class CorrectExam extends React.Component<Props>{
  constructor(props: Props) {
    super(props)
  }

  state = {
    list: [],
    grade: [],
    type:[],
    columns:[
      {
        title: '班级',
        dataIndex: 'grade_name',
        key: 'grade_name',
      },
      {
        title: '姓名',
        dataIndex: 'user_name',
        key: 'user_name',
      },
      {
        title: '阅卷状态',
        dataIndex: 'status',
        key: 'status',
      },
      {
        title: '开始时间',
        dataIndex: 'start_time',
        key: 'start_time',
      },
      {
        title: '结束时间',
        dataIndex: 'end_time',
        key: 'end_time',
      },
      {
        title: '成材率',
        dataIndex: 'questions_type_text',
        key: 'questions_type_text'
      },
      {
        title: '操作',
        dataIndex: 'handle',
        key: 'handle'
      }
    ]
  }

  componentDidMount() {
    this.getList()
  }

  getList = async () => {
    const {id}=this.props.location.state
    const grade = await this.props.classroom.getMangerGrade();
    const list = await this.props.manger.student({grade_id:id});
    
    this.setState({
      grade,
      list
    })
  }

  render() {   
    const { grade, list, columns,type } = this.state

    return (
      <div>
        <h2></h2>
        <Layout className="listHead">
          <Form layout="inline" className="formContent">
            <Form.Item label="状态" className="formIten">
              <Select defaultValue="" style={{ width: 130 }}>
                {/* {
                  type.map((item: any) => {
                    return <Option key={item.exam_id} value={item.exam_id}>{item.exam_name}</Option>
                  })
                } */}
              </Select>
            </Form.Item>
            <Form.Item label="班级" className="formIten">
              <Select defaultValue="" style={{ width: 130 }}>
                    {grade.map((Item: any) => <Option key={Item.grade_id} value={Item.grade_name}>{Item.grade_name}</Option>)}
              </Select>
            </Form.Item>
            <Form.Item className="formIten">
              <Button type="primary" htmlType="submit" className="btn"> 
                <Icon type="search" />
                    查询
              </Button>
            </Form.Item>
          </Form>
        </Layout>

        <Layout className="listFoot">
          <div className="bom-head">
            <h4>试卷列表</h4>
          </div>
          <Table dataSource={type} columns={columns} />
        </Layout>
      </div>
    );
  }
}

export default CorrectExam;
