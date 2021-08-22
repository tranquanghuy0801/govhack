import {
  Slider as MuiSlider,
  SliderProps as MuiSliderProps,
  Typography
} from '@material-ui/core'

type SliderProps = MuiSliderProps & {
  label: string
}
const Slider: React.FC<SliderProps> = ({ label, ...props }) => {
  return (
    <>
      <Typography gutterBottom>
        {label}
      </Typography>
      <MuiSlider {...(props as any)} style={{ marginBottom: 8, marginTop: 24 }} marks valueLabelDisplay="auto"
        min={0}
        max={10}
        step={1}
      />
    </>
  )
}

export default Slider
