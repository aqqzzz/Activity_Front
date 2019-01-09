import * as React from 'react'
import { Input, Form, Button } from 'antd'
import { FormComponentProps } from 'antd/lib/form/Form'
import styles from './LoginContainer.module.scss'

interface LoginProps {

}

const FormItem = Form.Item

class LoginContainer extends React.Component<LoginProps & FormComponentProps> {
  public render() {
    const { getFieldDecorator } = this.props.form
    const nameDecorator = getFieldDecorator('username', {
      rules: [{
        required: true,
        message: '请填写用户名'
      }]
    })
    const passwordDecorator = getFieldDecorator('password', {
      rules: [{
        required: true,
        message: '请填写密码'
      }]
    })
    return (
      <div className={styles.container}>
        <div className={styles.card}>
          <Form>
            <FormItem>
              {nameDecorator(<Input placeholder="请填写用户名"/>)}
            </FormItem>
            <FormItem>
              {passwordDecorator(<Input placeholder="请填写密码" type="password"/>)}
            </FormItem>
            <FormItem>
              <Button type="primary">登录</Button>
            </FormItem>
          </Form>

        </div>
      </div>
    )
  }
}

export default Form.create()(LoginContainer)