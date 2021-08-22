import { Button, MenuItem, TextField, withStyles } from "@material-ui/core"
import { useFormContext } from "react-hook-form"
import { e4 } from 'components/Map/utils'
import { options as industries } from 'assets/industry'
import { useEffect } from "react"

const locations = Object.keys(e4).map(key => ({
  label: key,
  value: key
}))

const LocationFilter = () => {
  const { register, setValue } = useFormContext()

  useEffect(() => {
    setValue('location', locations[0].value, { shouldValidate: false })
    console.log(locations[0].value)
  }, [])

  return (
    <div style={{ padding: 32 }}>
      <StyledSelect label='Location' {...register('location')}>
        {locations.map(location => (
          <MenuItem key={location.value} value={location.value}>
            {location.label}
          </MenuItem>
        ))}
      </StyledSelect>

      <StyledSelect label='Industry' {...register('industry')}>
        {industries.map(industry => (
          <MenuItem key={industry} value={industry}>
            {industry}
          </MenuItem>
        ))}
      </StyledSelect>

      <Button variant='contained' color='primary' type='submit'>
        Search
      </Button>
    </div>
  )
}
export default LocationFilter

const StyledSelect = withStyles({
  root: {
    marginBottom: 16,
  }
})((props: any) => <TextField {...props} variant='filled' fullWidth select />)
