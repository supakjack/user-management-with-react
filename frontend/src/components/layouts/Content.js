import { Layout } from 'antd'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Authen from '../../pages/Authen'
import Profile from '../../pages/Profile'
import { useDataLayerValue } from './../../contexts/DataLayer'

const Content = () => {
  const [{ token }] = useDataLayerValue()
  const { Content } = Layout
  const style = token
    ? {
        margin: '24px 16px',
        padding: 24
      }
    : null
  const className = token ? '' : 'flex justify-center flex-wrap content-center'
  return (
    <Content className={`site-layout-background ${className}`} style={style}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Authen />
          </Route>
          <Route path="/profile" exact>
            <Profile />
          </Route>
        </Switch>
      </Router>
    </Content>
  )
}

export default Content
