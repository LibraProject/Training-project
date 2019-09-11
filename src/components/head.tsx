import * as React from 'react';
import { Layout } from 'antd';
const { Header} = Layout;
class Head extends React.Component{
  public render() {
    return (
        <Header className="header">
        <div className="logo">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" className="imgage" alt=""/>
        </div>
        <div className="showUser">
          <img className="usePrice" src="http://pic26.nipic.com/20130121/9252150_101440518391_2.jpg" alt=""/>
        </div>
      </Header>
    )
  }
  
}

export default Head;
