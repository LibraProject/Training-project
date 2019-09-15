import * as React from "react";
import { Form, Button, Input, Select, Radio } from "antd";
import { FormComponentProps } from 'antd/lib/form'
import "./css/add.css";


interface UserFormProps extends FormComponentProps {
  schedullen: any,
  style: any
  len: any
  global: any
}

const { Option } = Select;

class Add extends React.Component<UserFormProps, any> {
  state = {
    size: "large"
  };

  handleSizeChange = (e: any) => {
    this.setState({ size: e.target.value });
  };

  addUser = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { size } = this.state;
    return (
      <div className="add">
        <h3>添加用户</h3>
        <div className="content">
          <div className="wrap">
            <div className="wrap_item zxy">
              <div className="tits">
                <Radio.Group value={size} onChange={this.handleSizeChange}>
                  <Radio.Button value="large">添加用户</Radio.Button>
                  <Radio.Button value="default">更新用户</Radio.Button>
                </Radio.Group>
              </div>
              <Form onSubmit={this.addUser} className={size === "large" ? 'show' : 'hide'}>
                <Form.Item style={{marginBottom:0}}>
                  {getFieldDecorator('username', {
                    rules: [{ required: true, message: '请输入用户名!' }],
                  })(
                    <Input placeholder="请输入用户名" />,
                  )}
                </Form.Item>
                <Form.Item style={{marginBottom:0}}>
                  {getFieldDecorator('password', {
                    rules: [{ required: true, message: '请输入密码!' }],
                  })(
                    <Input placeholder="请输入密码" />,
                  )}
                </Form.Item>
                <Form.Item style={{marginBottom:0}}>
                  {getFieldDecorator('preson_id', {
                    rules: [{ required: true, message: '请选择身份id!' }],
                  })(<Select placeholder="请选择身份id" style={{ width: 180 }}>
                    <Option value="管理员">管理员</Option>
                    <Option value="出题者">出题者</Option>
                    <Option value="浏览者">管理员</Option>
                  </Select>)}
                </Form.Item>
                <Form.Item className="btns" style={{marginBottom:0}}>
                  <Button type="primary" htmlType="submit" className="sure">确定</Button>
                  <Button className="reset" htmlType="reset">
                    重置
                  </Button>
                </Form.Item>
              </Form>

              <div className={size === "default" ? 'show' : 'hide'}>
                <div>

                  <Select placeholder="请选择身份id" style={{ width: 180 }}>
                    <Option value="zhaoxiaoru">zhaoxiaoru</Option>
                    <Option value="liuyu">liuyu</Option>
                    <Option value="yihang">yihang</Option>
                  </Select>
                  <Input placeholder="请输入用户名" />
                  <Input placeholder="请输入密码" />
                  <Select placeholder="请选择身份id" style={{ width: 180 }}>
                    <Option value="管理员">管理员</Option>
                    <Option value="出题者">出题者</Option>
                    <Option value="浏览者">管理员</Option>
                  </Select>
                </div>
                <div className="btns">
                  <Button className="sure">确定</Button>
                  <Button className="reset" htmlType="reset">
                    重置
                  </Button>
                </div>
              </div>
            </div>

            <div className="wrap_item">
              <div className="tits">
                <p className="active">添加身份</p>
              </div>
              <div>
                <Input placeholder="请输入身份名称" />
              </div>
              <div className="item_box">
                <div className="btns">
                  <Button className="sure">确定</Button>
                  <Button className="reset">重置</Button>
                </div>
              </div>
            </div>

            <div className="wrap_item">
              <div className="tits">
                <p className="active">添加api接口权限</p>
              </div>
              <div>
                <Input placeholder="请输入api接口权限名称" />
                <Input placeholder="请输入api接口权限url" />
                <Input placeholder="请输入api接口权限方法" />
              </div>
              <div className="item_box">
                <div className="btns">
                  <Button className="sure">确定</Button>
                  <Button className="reset">重置</Button>
                </div>
              </div>
            </div>

            <div className="wrap_item">
              <div className="tits">
                <p className="active">添加视图接口权限</p>
              </div>
              <Form>
              <div>
              <Form.Item style={{marginBottom:0}}>
                  {getFieldDecorator('viewPort', {
                    rules: [{ required: true, message: '请选择身份id!' }],
                  })(<Select placeholder="请选择已有视图" style={{ width: 180 }}>
                  <Option value="管理员">管理员</Option>
                  <Option value="出题者">出题者</Option>
                  <Option value="浏览者">管理员</Option>
                </Select>)}
                </Form.Item>
                
              </div>
              <div className="item_box">
                <div className="btns">
                  <Button className="sure">确定</Button>
                  <Button className="reset">重置</Button>
                </div>
              </div>
              </Form>
            </div>

            <div className="wrap_item">
              <div className="tits">
                <p className="active">给身份设置api接口权限</p>
              </div>
              <div>
                <Select placeholder="请选择身份id" style={{ width: 180 }}>
                  <Option value="管理员">管理员</Option>
                  <Option value="出题者">出题者</Option>
                  <Option value="浏览者">管理员</Option>
                </Select>
              </div>
              <div>
                <Select
                  placeholder="请选择api接口权限id"
                  style={{ width: 180 }}
                >
                  <Option value="管理员">管理员</Option>
                  <Option value="出题者">出题者</Option>
                  <Option value="浏览者">管理员</Option>
                </Select>
              </div>
              <div className="item_box">
                <div className="btns">
                  <Button className="sure">确定</Button>
                  <Button className="reset">重置</Button>
                </div>
              </div>
            </div>
            <div className="wrap_item">
              <div className="tits">
                <p className="active">给身份设置视图权限</p>
              </div>
              <div>
                <Select placeholder="请选择身份id" style={{ width: 180 }}>
                  <Option value="管理员">管理员</Option>
                  <Option value="出题者">出题者</Option>
                  <Option value="浏览者">管理员</Option>
                </Select>
              </div>
              <div>
                <Select placeholder="请选择视图权限id" style={{ width: 180 }}>
                  <Option value="管理员">管理员</Option>
                  <Option value="出题者">出题者</Option>
                  <Option value="浏览者">管理员</Option>
                </Select>
              </div>
              <div className="item_box">
                <div className="btns">
                  <Button className="sure">确定</Button>
                  <Button className="reset">重置</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form.create()(Add);
