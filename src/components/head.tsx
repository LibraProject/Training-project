import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Layout, Modal, Form, Icon, Button, Upload, message } from 'antd';
import { FormComponentProps } from 'antd/lib/form'
interface UserFormProps extends FormComponentProps {
  schedullen:any,
  style:any
  len:any
  global:any
  user:any
}
function getBase64(img: any, callback: any) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}
const { Header } = Layout;
@inject('global', 'user')
@observer
class Head extends React.Component<UserFormProps, any> {
  state = { visible: false, loading: false, imageUrl: '',len:0,schedule:false};
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
    this.props.form.resetFields();
  };

  handleChange = (info: any) => {
    this.setState({len:info.file.percent})
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      this.setState({schedule:false})
      getBase64(info.file.originFileObj, (imageUrl: any) =>
        this.setState({
          imageUrl,
          loading: false,
        }),
      );
    }
  };

  handleSubmit = (e: any) => {
    const {userInfo} = this.props.user
    e.preventDefault();
    this.props.form.validateFields((err:any, values:any) => {
      if (!err) {
        let obj = {
          user_id:userInfo.user_id,
          avatar:values.url.file.response.data[0].path
        }
        this.UpdataUser(obj)
      }
    });
  };

  // 更新用户信息 
  UpdataUser = async (obj:any)=>{
    let result = await this.props.user.UpdataUser(obj)
    message.success(result)
    this.setState({visible:false})
    this.props.form.resetFields();
  }
   beforeUpload = (file: any)=> {
    this.setState({schedule:true})
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      this.setState({schedule:false})
      message.error('仅支持上传 JPG/PNG 文件!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      this.setState({schedule:false})
      message.error('图片大小不能超过2MB!');
    }
    return isJpgOrPng && isLt2M;
  }
  public render() {
    const { imageUrl } = this.state;
    const { getFieldDecorator } = this.props.form;
    const { locale } = this.props.global;
    const {userInfo} = this.props.user
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
            <img className="usePrice" src={userInfo.avatar?userInfo.avatar:'/default.jpg'} alt="" />
            <span>{userInfo.user_name}</span>
            {/* <button style={{marginLeft:'20px'}} onClick={() => this.props.global.changeLocale(locale === 'zh' ? 'en' : 'zh')}>{locale === 'zh' ? '英文' : '中文'}</button> */}
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
                  rules: [{ required: true, message: '请选择一张图片' }],
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
                    {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                  </Upload>,
                )}
              </Form.Item>
              {this.state.schedule && <div className="schedule">
                <span className="schedPos">{this.state.len && Math.floor(this.state.len)+"%"}</span>
                  <div className="schedule_child" style={{width:this.state.len+'%'}}>
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
