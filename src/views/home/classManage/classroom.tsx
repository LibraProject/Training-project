import * as React from 'react';
interface Props{
  location: any
}
class ClassRoom extends React.Component <Props>{
  public render() {
    return (
      <div>
        <h2>{this.props.location.state.title}</h2>
      </div>
    );
  }
}

export default ClassRoom;
