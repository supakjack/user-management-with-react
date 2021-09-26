import { Layout, Menu } from 'antd'
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined
} from '@ant-design/icons'

const Sidebar = ({ collapsed }) => {
  const { Sider } = Layout
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          รายงานระบบ
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          จัดการสมาชิก
        </Menu.Item>
        <Menu.Item key="3" icon={<VideoCameraOutlined />}>
          จัดการสมัครสมาชิก
        </Menu.Item>
        <Menu.Item key="4" icon={<UploadOutlined />}>
          ตั้งค่าระบบ
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

export default Sidebar
