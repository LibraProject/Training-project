import * as React from 'react';
import {observer, inject} from 'mobx-react';

@inject('question')
@observer
class Look extends React.Component {
  constructor(props:any){
    super(props)

    const {getQuestion}=props.question
    getQuestion()
  }

  public render() {
    return (
      <div>
        Look
      </div>
    );
  }
}

export default Look;
