import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Button, Layout } from "antd";
import { WrappedFormUtils } from 'antd/lib/form/Form'
import './css/edit.css'

const ReactMarkdown = require('react-markdown')

interface Props {
    question: any,
    location: any,
    form: WrappedFormUtils,
    examMsg:any
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
        },
        type: [],
        question: []
    }
    componentDidMount() {
        const data = this.props.location.query.data
        this.setState({ list: { ...data } })
    }

    delete = async () => {
        const data = await this.props.examMsg.delExam()
        console.log(data)
    }

    render() {
        console.log(this.props)
        const { title, end_time, start_time, questions } = this.state.list
        const time = new Date(end_time - start_time).toTimeString()
        const start = new Date(start_time).toLocaleString()
        return (
            <Layout className="addquersition">
                <h2>创建试卷</h2>

                <div className="editBox">
                    <Button>添加新题</Button>
                    <div className="content">
                        <h2>{title}</h2>
                        <p>考试时间：{time} 监考人：刘于 开始考试时间：{start} 阅卷人：刘于</p>
                        {
                            questions.map((item: any, i: number) => {
                                return <div className="everyItem" key={i}>
                                    <h4>{i + 1}: {item.title} <a onClick={this.delete}>删除</a></h4>
                                    <ReactMarkdown source={item.questions_stem} />
                                </div>
                            })
                        }
                        <Button>创建试卷</Button>
                    </div>
                </div>

            </Layout>
        );
    }

}

export default Edit;
