import * as React from 'react';
import { Layout, Modal, Form, Icon, Input, Button, Upload, message } from 'antd';
import { FormComponentProps } from 'antd/lib/form'
interface UserFormProps extends FormComponentProps {

}
function getBase64(img: any, callback: any) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file: any) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}
const { Header } = Layout;
class Head extends React.Component<UserFormProps, any> {
  state = { visible: false, loading: false, imageUrl: '' };

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

  handleChange = (info: any) => {
    console.log(info.file.percent)
    // if (info.file.status === 'uploading') {
    //   this.setState({ loading: true });
    //   return;
    // }
    // if (info.file.status === 'done') {
    //   // Get this url from response in real world.
    //   getBase64(info.file.originFileObj, (imageUrl: any) =>
    //     this.setState({
    //       imageUrl,
    //       loading: false,

    //     }),
    //   );
    // }
  };

  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  public render() {
    const { imageUrl } = this.state;
    const { getFieldDecorator } = this.props.form;
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <React.Fragment>
        <Header className="header">
          <div className="logo">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" className="imgage" alt="" />
          </div>
          <div className="showUser">
            <img className="usePrice" src="/19825.jpg" alt="" />
            <span>用户名称</span>
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
          <Modal title="修改个人资料" visible={this.state.visible} footer={null} onOk={this.handleOk} onCancel={this.handleCancel}>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <Form.Item>
                {getFieldDecorator('url', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Upload
                    name="avatar"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    beforeUpload={beforeUpload}
                    onChange={this.handleChange}
                  >
                    {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                  </Upload>,
                )}

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
                提交
          </Button>
            </Form>
          </Modal>
        </div>
      </React.Fragment>
    )
  }

}

export default Form.create()(Head);
