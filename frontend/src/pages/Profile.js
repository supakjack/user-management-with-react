import { useDataLayerValue } from '../contexts/DataLayer'
import { useHistory } from 'react-router-dom'
import { useEffect } from 'react'
const Profile = () => {
  const [{ token }] = useDataLayerValue()
  const history = useHistory()
  useEffect(() => {
    console.log('effect')
    console.log(token)
    if (!token) {
      history.push('/')
    }
  },)
  return <div>profile </div>
}

export default Profile
