import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Button, Layout, Modal, Drawer } from "antd";
import { WrappedFormUtils } from 'antd/lib/form/Form'
import './css/edit.css'

const ReactMarkdown = require('react-markdown')
const { confirm } = Modal;

interface Props {
    question: any,
    location: any,
    form: WrappedFormUtils,
    examMsg: any,
    history: any,
    values: any
}

@inject('examMsg')
@observer

class Edit extends React.Component<Props> {
    constructor(props: Props) {
        super(props)
    }
    state = {
        list: {
            title: '',
            end_time: 0,
            start_time: 0,
            questions: [],
            exam_exam_id: ''
        },
        questions: [],
        visible: false
    }

    componentDidMount() {
        this.getlist()
    }

    // 获取数据
    getlist = () => {
        const data = this.props.location.state.data
        this.setState({ list: { ...data }, questions: data.questions })
    }

    // 删除
    showDeleteConfirm = (id: any, i: number) => {
        const that = this
        confirm({
            title: '你确定要删除吗？',
            content: '此次删除是不可逆的！',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            async onOk() {
                const { questions } = that.state.list
                questions.splice(i, 1)
                that.setState({ questions })
                const data = await that.props.examMsg.delExam(id)
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    // 创建试卷
    addexam = async (questions: any) => {
        const arr: any = []
        questions.map((item: any) => {
            return arr.push(item.questions_id)
        })
        const str = JSON.stringify(arr.join(''))
        const { exam_exam_id } = this.state.list
        const obj = { question_ids: str }
        const data = await this.props.examMsg.updateExam(exam_exam_id, obj)
        this.props.history.replace({
            pathname: '/home/list',
            state: { title: '试卷列表' }
        })
    }

    // 弹出蒙层抽屉
    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    // 点击空白关闭
    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        const { title, end_time, start_time, questions, exam_exam_id } = this.state.list
        const time = new Date(end_time - start_time).toTimeString()
        const start = new Date(start_time).toLocaleString()
        return (
            <Layout className="addquersition">
                <h2>创建试卷</h2>

                <div className="editBox">
                    <Button onClick={this.showDrawer}>添加新题</Button>
                    <Drawer
                        title="所有题目"
                        placement="right"
                        closable={false}
                        onClose={this.onClose}
                        visible={this.state.visible}
                    >
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </Drawer>
                    <div className="content">
                        <h2>{title}</h2>
                        <p>考试时间：{time} 监考人：刘于 开始考试时间：{start} 阅卷人：刘于</p>
                        {
                            this.state.questions.map((item: any, i: number) => {
                                return <div className="everyItem" key={i}>
                                    <h4>{i + 1}: {item.title} <a onClick={() => { this.showDeleteConfirm(exam_exam_id, i) }} type="dashed">删除</a></h4>
                                    <ReactMarkdown source={item.questions_stem} />
                                </div>
                            })
                        }
                        <Button onClick={() => { this.addexam(questions) }} className="btn">创建试卷</Button>
                    </div>
                </div>

            </Layout>
        );
    }

}

export default Edit;
