import * as React from 'react';
import { observer, inject } from 'mobx-react';

interface Props {
  question: any
}

@inject('question')
@observer
class Look extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }
  state = {
    list: []
  }
  componentDidMount() {
    this.getList()
  }

  getList = async () => {
    const data = await this.props.question.getQuestion();
    this.setState({
      list:data
    })
  }

  render() {
    console.log(this.state.list)
    return (
      <div>
        Look
      </div>
    );
  }

}

export default Look;
