import * as React from 'react';
import { observer, inject } from 'mobx-react';
import './css/detail.css'

const ReactMarkdown = require('react-markdown')

interface Props {
  question: any,
  match: any,
  location: any,
  examMsg: any
}

@inject('question', 'examMsg')
@observer

class Detail extends React.Component<Props>{
  constructor(props: Props) {
    super(props)
  }
  state = {
    list: []||{}
  }
  componentDidMount() {
    this.getList()
  }

  getList = async () => {
    const { id } = this.props.match.params
    let data = []
    if (this.props.location.state === undefined) {
      data = await this.props.question.getQuestion({ questions_id: id });
    } else {
      data = await this.props.examMsg.teacherExam(id);
    }

    this.setState({
      list: data
    })
  }

  render() {
    const { list }: any = this.state

    return (
      <div style={{marginBottom: '20px'}}>
        <h2>试题详情</h2>
        <div className="detailBox">
          {
            Array.isArray(list) ? <div className="left">
              <p>出题人：{list[0] && list[0].user_name}</p>
              <h3>题目信息</h3>
              <div className="message">
                <div>{list[0] && list[0].questions_type_text}</div>
                <div>{list[0] && list[0].subject_text}</div>
                <div>{list[0] && list[0].exam_name}</div>
              </div>
              <h4>{list[0] && list[0].title}</h4>
              <div>
                <ReactMarkdown source={list[0] && list[0].questions_stem} />
              </div>
            </div>
              : <div className="left">
                {
                  list.data.questions.map((item: any, i: number) => {
                    return  <div key={i} className="left-item">
                      <h4>{i + 1}: {item.title}</h4>
                      <ReactMarkdown source={item.questions_stem} />
                    </div>

                  })
                }

              </div>
          }
          {
            Array.isArray(list) ? <div className="right">
              <h3>答案信息</h3>
              <div>
                <ReactMarkdown source={list[0] && list[0].questions_answer} />
              </div>
            </div>
              : <div className="right-list"></div>
          }

        </div>
      </div>
    );
  }
}

export default Detail;
