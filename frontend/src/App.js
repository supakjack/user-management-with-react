import { Layout } from 'antd'
import { useState } from 'react'
import Sidebar from './components/layouts/Sidebar'
import HeaderBar from './components/layouts/HeaderBar'
import Content from './components/layouts/Content'
import { useDataLayerValue } from './contexts/DataLayer'
import('./styles/App.css')

const App = () => {
  const [collapsed, setCollapsed] = useState(false)
  const [{ token }] = useDataLayerValue()
  const toggle = () => {
    setCollapsed(!collapsed)
  }


  return (
    <Layout className="h-screen">
      {token && <Sidebar collapsed={collapsed} />}
      <Layout className="site-layout">
        {token && <HeaderBar toggle={toggle} collapsed={collapsed} />}
        <Content />
      </Layout>
    </Layout>
  )
}

export default App
