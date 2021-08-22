import { Button } from "@material-ui/core"
import { withStyles } from "@material-ui/styles"
import Slider from 'components/Slider'
import { useController, useFormContext } from "react-hook-form"

const SkillFilter = () => {
  const { register } = useFormContext()

  return (
    <div style={{ padding: 32 }}>
      <Button variant='contained' color='primary' type='submit' style={{ marginBottom: 32 }}>
        Search
      </Button>

      <StyledSlider label='Numeracy' {...register('numeracy')} />
      <StyledSlider label='Digital Engagement' {...register('engagement')} />
      <StyledSlider label='Team Work' {...register('teamwork')} />
      <StyledSlider label='Writing' {...register('writing')} />
      <StyledSlider label='Reading' {...register('reading')} />
      <StyledSlider label='Learning' {...register('learning')} />
      <StyledSlider label='Problem Solving' {...register('problemSolving')} />
      <StyledSlider label='Oral Communication' {...register('oralCommunication')} />
      <StyledSlider label='Planning and Organizing' {...register('planning')} />
    </div>
  )
}
export default SkillFilter

const StyledSlider = withStyles({

})((props: any) => {
  const { field, ...inputProps } = useController({ name: props.name })

  return (
    <Slider
      {...props}
      {...inputProps}
      marks
      step={1}
      min={0}
      max={10}
      valueLabelDisplay='auto'
      onChange={(_e, newValue) => field.onChange(newValue)}
    />
  )
})