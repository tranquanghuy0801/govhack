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
      <MuiSlider {...(props as any)} style={{ marginBottom: 12 }} />
    </>
  )
}

export default Slider
