import { Button, Checkbox, Form, Icon, Input } from 'antd';
import { FormComponentProps } from 'antd/lib/form'
import * as React from 'react';
import {inject, observer} from 'mobx-react'
import '../../scss/login.css'

interface UserFormProps extends FormComponentProps {
  age: number
  name: string
  user: any
}
//挂载props user 方法
 @inject('user')
 @observer
class UserForm extends React.Component<UserFormProps, any>{
  public handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    this.props.form.validateFields( async (err, values) => {
      if (!err) {
          console.log(values)
          const result = await this.props.user.login(values)
          console.log(result)
      }
    });
  }

  public render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="box">
        <div className="content">
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ message: 'Please input your username!', required: true }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ message: 'Please input your Password!', required: true }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('remember', {
                initialValue: true,
                valuePropName: 'checked',
              })(<Checkbox>Remember me</Checkbox>)}
              <a className="login-form-forgot" href="">
                Forgot password
              </a>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Login
              </Button>
              Or <a href="">register now!</a>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

export default Form.create()(UserForm);
