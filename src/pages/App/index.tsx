import { Suspense } from 'react'
import { Outlet, useMatch, useNavigate } from 'react-router-dom'
import { Grid } from '@material-ui/core'
import Sidebar from './Sidebar'
import { useEffect } from 'react'

const Root = () => {
  const match = useMatch('/')
  const navigate = useNavigate()
  useEffect(() => {
    if(match?.path === '/') {
      navigate('user-profile')
    }
  }, [navigate, match?.path])

  return (
    <Grid container direction='row' style={{ height: '100vh' }}>
      <Grid item>
        <Sidebar />
      </Grid>
      <Grid item xs style={{ background: '#f3f6f6' }}>
        <Suspense fallback='loading...'>
          <Outlet />
        </Suspense>
      </Grid>
    </Grid>
  )
}
export default Root
