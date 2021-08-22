import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Slider, { SliderProps as MuiSliderProps } from "@material-ui/core/Slider";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 100,
    label: "100",
  },
];

function valuetext(value: number) {
  return `${value}`;
}

type SliderProps = MuiSliderProps & {
  
};

const SkillSlider: React.FC<SliderProps> = ({
  defaultValue,
  value,
  onChange,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Slider
        onChange={(e, value) => {
          onChange?.(e, value)
        }}
        value={value}
        defaultValue={defaultValue}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-always"
        step={10}
        marks={marks}
        valueLabelDisplay="auto"
      />
    </div>
  );
};

export default SkillSlider;
