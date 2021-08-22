import { makeStyles, Paper, Tabs } from "@material-ui/core"
import { useState } from "react"
import { FormProvider, useForm } from "react-hook-form"
import LocationFilter, { locations } from "./LocationFilter"
import SkillFilter from "./SkillFilter"
import StyledTab from "./StyledTab"

const Filters = ({ onChange }: any) => {
  const classes = useStyles()
  const [tab, setTab] = useState('location')
  const handleChangeTab = (event: React.ChangeEvent<{}>, newValue: string) => setTab(newValue)

  const methods = useForm({
    defaultValues: {
      location: locations[0].value
    }
  })
  const onSubmit = (data: any) => onChange?.(data)

  return (
    <Paper className={classes.root}>
      <Tabs
        variant='fullWidth'
        value={tab}
        onChange={handleChangeTab}
        TabIndicatorProps={{
          style: { display: 'none' }
        }}
      >
        <StyledTab label='Location' value='location' />
        <StyledTab label='Skills' value='skills' />
      </Tabs>

      <div className={classes.content}>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            {tab === 'location' ? <LocationFilter /> : <SkillFilter />}
          </form>
        </FormProvider>
      </div>
    </Paper>
  )
}
export default Filters

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    top: 12,
    right: 24,
    width: 340,
    zIndex: 2,
  },
  content: {
    height: 'calc(100vh - 64px - 51px - 12px - 40px)',
    overflow: 'auto',
  }
})


