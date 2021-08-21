import { Outlet, useNavigate } from 'react-router-dom'
import { Grid, IconButton, makeStyles } from '@material-ui/core'
import { LocationOn } from '@material-ui/icons'

const Root = () => {
  return (
    <Grid container direction='row' style={{ height: '100vh' }}>
      <Grid item style={{ width: 72 }}>
        <AppBar />
      </Grid>
      <Grid item xs>
        <Outlet />
      </Grid>
    </Grid>
  )
}
export default Root

const AppBar = () => {
  const classes = useStyles()
  const navigate = useNavigate()

  return (
    <div className={classes.appbar}>
      <IconButton onClick={() => navigate('searcher')}>
        <LocationOn />
      </IconButton>
    </div>
  )
}
const useStyles = makeStyles({
  appbar: {
    background: '#ececec',
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center'
  }
})