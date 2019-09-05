import * as React from 'react';
interface Props{
  location: any
}
class Add extends React.Component <Props>{
  public render() {
    return (
      <div>
          <h2>{this.props.location.state.title}</h2>Add
      </div>
    );
  }
}

export default Add;
