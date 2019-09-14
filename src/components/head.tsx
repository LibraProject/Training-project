import * as React from 'react';
import { Layout, Modal,  Form, Icon, Input, Button, Checkbox  } from 'antd';
import {FormComponentProps} from 'antd/lib/form'
import { observer, inject } from 'mobx-react';

interface Props {
  global?: any,
  user?: any,
  // form?: WrappedFormUtils
  form?: any
}
const { Header } = Layout;
@inject('global', 'user')
@observer
class Head extends React.Component <Props, any> {
  state = { visible: false };
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  // 按下确定
  handleOk = (e: any) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  // 按下取消
  handleCancel = (e: any) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };


  handleSubmit = (e:any) => {
    e.preventDefault();
    this.props.form.validateFields((err:any, values:any) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  public render() {
    const { getFieldDecorator } = this.props.form;
    const { locale } = this.props.global;
    return (
      <React.Fragment>
        <Header className="header">
          <div className="logo">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" className="imgage" alt="" /> 
          </div>
          <div className="showUser">
            <img className="usePrice" src="http://pic26.nipic.com/20130121/9252150_101440518391_2.jpg" alt="" />
            <span>用户名称</span>
            <button style={{marginLeft:'20px'}} onClick={() => this.props.global.changeLocale(locale === 'zh' ? 'en' : 'zh')}>{locale === 'zh' ? '英文' : '中文'}</button>
            <div className="posuser">
              <p>个人中心</p>
              <p>我的班级</p>
              <div className="hr"></div>
              <p onClick={this.showModal}>设置</p>
              <p>退出登录</p>
            </div>
          </div>
        </Header>
        <div>
        <Modal title="修改个人资料"  visible={this.state.visible} footer={null} onOk={this.handleOk} onCancel={this.handleCancel}>
        <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
      </Form>
        </Modal>
      </div>
      </React.Fragment>
    )
  }

}

export default Form.create()(Head);
