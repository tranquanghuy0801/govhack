import {
  withStyles,
  Tab as MuiTab,
} from '@material-ui/core'

const Tab = withStyles({
  root: {
    minWidth: 80,
    padding: '16px 12px',
  },
  selected: {
    color: '#046ce4',
  }
})(MuiTab)

export default Tab
