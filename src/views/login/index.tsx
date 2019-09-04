import { Button, Checkbox, Form, Icon, Input, message } from 'antd';
import { FormComponentProps } from 'antd/lib/form'
import * as React from 'react';
import { inject, observer } from 'mobx-react'
import '../../scss/login.css'

interface UserFormProps extends FormComponentProps {
  age: number,
  name: string,
  history: any,
  user: any,
}

@inject('user')
@observer

class UserForm extends React.Component<UserFormProps, any>{
  public handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const { code, msg } = await this.props.user.login(values);
        
        if (code === 1) {
          // 跳转路由
          this.props.history.push('/home')
        } else {
          // 提示错误
          message.error(msg || '用户名或密码错误');
        }
      }
    });
  }

  public render() {
    const { getFieldDecorator } = this.props.form;
    const { user_name, user_pwd } = this.props.user.account;

    return (
      <div className="box">
        <div className="content">
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('user_name', {
                validateTrigger: 'onBlur',
                initialValue: user_name,
                rules: [{
                  validator: (ruler, value, callback) => {
                    if (/[a-z]{5,20}/.test(value)) {
                      callback()
                    } else {
                      callback('Please input your username!')
                    }
                  }
                }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('user_pwd', {
                validateTrigger: 'onBlur',
                initialValue: user_pwd,
                rules: [{
                  validator: (ruler, value, callback) => {
                    if (/^(?![a-z]+$)(?![A-Z]+$)(?!([^(a-zA-Z\!\*\.\#)])+$)^.{8,16}$/.test(value)) {
                      callback()
                    } else {
                      callback('Please input your Password!')
                    }
                  }
                }],
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
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('autoLogin', {
                valuePropName: 'checked',
                initialValue: true,
              })(<Checkbox>Auto login in 7 days</Checkbox>)}
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
