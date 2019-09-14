import * as React from 'react';
import { Layout, Modal, Form, Icon, Input, Button, Upload, message } from 'antd';
import { observer, inject } from 'mobx-react'
import { FormComponentProps } from 'antd/lib/form'
interface UserFormProps extends FormComponentProps {
  schedullen: any,
  style: any
  len: any
  user: any
}
function getBase64(img: any, callback: any) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

const { Header } = Layout;

@inject('user')
@observer
class Head extends React.Component<UserFormProps, any> {
  constructor(props:any){
    super(props)
    const { userInfo,avatar } = this.props.user;
    console.log(userInfo.user_id)
    console.log(this.props.user)
  }
  state = { visible: false, loading: false, imageUrl: '', len: 0, schedule: false };

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
    this.setState({ schedule: true })
    this.setState({ len: info.file.percent })
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      this.setState({ schedule: false })
      this.props.user.changeAvatar(info.file.response.data[0].path);
      getBase64(info.file.originFileObj, (imageUrl: any) =>
        this.setState({
          imageUrl,
          loading: false
        }),
      );
    }
  };

  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values.response.data[0].path)
        console.log('Received values of form: ', values);
      }
    });
  };

  beforeUpload = (file: any) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      this.setState({ schedule: false })
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      this.setState({ schedule: false })
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  }
  public render() {
    const { getFieldDecorator } = this.props.form;
    const { avatar } = this.props.user;
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
            <img className="usePrice" src={avatar ? avatar : '/default.jpg'} alt="" />
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
                {getFieldDecorator('avatar', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Upload
                    name="avatar"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    action="http://123.206.55.50:11000/upload"
                    beforeUpload={this.beforeUpload}
                    onChange={this.handleChange}
                  >
                    {avatar ? <img src={avatar} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                  </Upload>,
                )}
              </Form.Item>

              {this.state.schedule && <div className="schedule">
                <span className="schedPos">{this.state.len && Math.floor(this.state.len) + "%"}</span>
                <div className="schedule_child" style={{ width: this.state.len + '%' }}>
                </div>
              </div>}
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
