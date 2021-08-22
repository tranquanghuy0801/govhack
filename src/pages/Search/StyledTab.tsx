import { Tab, withStyles } from "@material-ui/core"

const StyledTab = withStyles({
  root: {
    background: '#eaeaea',
    textTransform: 'none',
    fontSize: '1.4rem',
    fontWeight: 600,
  },
  selected: {
    background: '#fff',
  },
})((props: any) => <Tab {...props} disableFocusRipple disableRipple disableTouchRipple />)

export default StyledTab
