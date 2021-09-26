import { Form, Input, Button, Checkbox } from 'antd'
import { useDataLayerValue } from '../contexts/DataLayer'
import { actionTypes } from '../contexts/reducer'
import { useHistory } from 'react-router-dom'
import { useEffect } from 'react'
const Authen = () => {
  const [{ token }, dispatch] = useDataLayerValue()
  const history = useHistory()
  const login = () => {
    dispatch({
      type: actionTypes.SET_TOKEN,
      token: 'all-login'
    })
    history.push('/profile')
  }
  const onFinish = (values) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  useEffect(() => {
    console.log('effect')
    console.log(token)
    if (token) {
      history.push('/profile')
    }
  },)

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button onClick={login} type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default Authen
