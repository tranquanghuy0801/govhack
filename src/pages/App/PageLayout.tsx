import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core"

type PageLayoutProps = {
  title: string
}
const PageLayout: React.FC<PageLayoutProps> = ({ title, children }) => {
  const classes = useStyles()
  
  return (
    <div className={classes.root}>
      <AppBar position='relative'>
        <Toolbar>
          <Typography variant='h5'>
            {title}
          </Typography>  
        </Toolbar>
      </AppBar>
      <div className={classes.content}>
        {children}
      </div>
    </div>
  )
}
export default PageLayout

const useStyles = makeStyles({
  root: {
    background: '#f3f6f6',
    width: '100%',
    height: '100%',
  },
  content: {
    width: '100%',
    height: 'calc(100% - 64px)',
  }
})