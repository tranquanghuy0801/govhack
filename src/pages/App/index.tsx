import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Grid } from '@material-ui/core'
import Sidebar from './Sidebar'

const Root = () => {
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
