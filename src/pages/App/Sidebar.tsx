import { useLocation, useNavigate } from 'react-router-dom'

import { makeStyles, Paper, Tabs } from '@material-ui/core'
import { SignalCellularAlt, Person, LocalAtm } from '@material-ui/icons'

import Tab from './StyledTab'
import logo from 'assets/logo.png'

const Sidebar = () => {
  const classes = useStyles()

  const { pathname } = useLocation()
  const [_, path] = pathname.split('/')
  console.log(path)

  const navigate = useNavigate()
  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => navigate(newValue)

  return (
    <Paper elevation={10} className={classes.root}>
      <Tabs
        orientation='vertical'
        variant='scrollable'
        value={path}
        onChange={handleChange}
        TabIndicatorProps={{
          style: { display: 'none' }
        }}
      >
        <Tab
          disabled
          style={{ opacity: 1, marginBottom: 32 }}
          icon={<img src={logo} alt='logo' style={{ width: 40 }} />}
        />

        <Tab
          value='user-profile'
          icon={<Person fontSize='large' />}
        />
        <Tab
          value='search'
          icon={<SignalCellularAlt fontSize='large' />}
        />

        <Tab
          value='/cash'
          icon={<LocalAtm fontSize='large' />}
          disabled
          title='Coming soon'
        />
      </Tabs>
    </Paper>
  )
}
export default Sidebar

const useStyles = makeStyles({
  root: {
    background: '#fff',
    height: '100%',
    width: '100%',
  },
})
