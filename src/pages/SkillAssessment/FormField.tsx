import React from "react";
import { Grid, Typography } from "@material-ui/core";
import SkillSlider from "../../components/Slider";
import DropDown from "../../components/Dropdown";

type FormFieldProps = {
  fieldName: string;
  className: {
    div: string;
    input: string;
  };
  selectedCarrer: string;
};

export const FormField: React.FC<FormFieldProps> = ({ fieldName, className }) => {
  const [fieldValue, setFieldValue] = React.useState<string | undefined>();
  const [sliderValue, setSliderValue] = React.useState<number>(0);

  const handleSelectionChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    const value = String(event.target.value);
    setFieldValue(value);
  };

  const handleSliderValueChange = (e: any, value: number) => {
    setSliderValue(value);
  };

  return (
    <div className={className.div}>
      <Grid container>
        <Grid item xs={3}>
          <Typography id="discrete-slider-always" gutterBottom>
            {fieldName}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <SkillSlider
            label={'' as any}
            defaultValue={0}
            value={sliderValue as any}
            onChange={handleSliderValueChange as any}
          />
          {/* {!!sliderValue ? (
            <DropDown handleChange={handleSelectionChange} value={fieldValue} />
          ) : null} */}
        </Grid>
        <Grid item xs={3}>
          {/* {fieldValue ? (
            <input className={className.input} value={fieldValue} disabled />
          ) : null} */}
          <DropDown handleChange={handleSelectionChange} value={fieldValue} />
        </Grid>
      </Grid>
    </div>
  );
};