import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Form, Select, Button, Icon, Layout, Table, Divider, Tag } from "antd";
import './css/list.css'

const { Option } = Select;

interface Props {
  question: any,
  examMsg: any,
  location: any,
  exam_id: any,
  history: any
}

const columns = [
  {
    title: '试卷信息',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: '班级',
    dataIndex: 'grade_name',
    key: 'grade_name',
  },
  {
    title: '创始人',
    dataIndex: 'user_name',
    key: 'user_name',
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
    title: '操作',
    dataIndex: 'detail',
    key: 'detail',
  }
];

@inject('question', 'examMsg')
@observer

class List extends React.Component<Props>{
  constructor(props: Props) {
    super(props)
  }

  state = {
    type: [],
    subject: [],
    arr: ['全部', '进行中', '已结束'],
    num: 0,
    examList: []
  }

  componentDidMount() {
    this.getList()
  }

  getList = async () => {
    const examtype = await this.props.question.examType()
    const subject = await this.props.question.subject()
    const exammsg = await this.props.examMsg.exam()

    let examList = exammsg.map((item: any) =>{
      item.start_time=new Date(Number(item.start_time)).toLocaleString()
      item.end_time=new Date(Number(item.end_time)).toLocaleString()
      item.key=Math.random()
      item.detail = '详情'
      return item
    })

    this.setState({
      type: examtype,
      subject,
      examList
    })
  }

  choose = (i: number) => {
    this.setState({ num: i })
  }

  public render() {
    const { num, arr, type, subject, examList } = this.state
    return (
      <div>
        <h2>{this.props.location.state.title}</h2>
        <Layout className="listHead">
          <Form layout="inline" className="formContent">
            <Form.Item label="考试类型" className="formIten">
              <Select defaultValue="" style={{ width: 130 }}>
                {
                  type.map((item: any) => {
                    return <Option key={item.exam_id} value={item.exam_id}>{item.exam_name}</Option>
                  })
                }
              </Select>
            </Form.Item>
            <Form.Item label="课程" className="formIten">
              <Select defaultValue="" style={{ width: 130 }}>
                {
                  subject.map((item: any) => {
                    return <Option key={item.subject_id} value={item.subject_id}>{item.subject_text}</Option>
                  })
                }
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
            <div className="btn-right">
              {
                arr.map((item, i) => {
                  return <span key={i} className={num === i ? 'btn-active' : ''} onClick={() => { this.choose(i) }}>{item}</span>
                })
              }
            </div>
          </div>
          <Table dataSource={examList} columns={columns} />
        </Layout>
      </div>
    );
  }
}

export default List;
