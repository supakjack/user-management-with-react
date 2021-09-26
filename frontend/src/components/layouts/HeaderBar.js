import { Layout } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'

const HeaderBar = ({ toggle, collapsed }) => {
  const { Header } = Layout
  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
      {collapsed ? (
        <MenuUnfoldOutlined className="trigger" onClick={toggle} />
      ) : (
        <MenuFoldOutlined className="trigger" onClick={toggle} />
      )}
    </Header>
  )
}

export default HeaderBar
