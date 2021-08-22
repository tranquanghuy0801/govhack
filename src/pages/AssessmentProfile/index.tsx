import React from "react";
import { Grid, makeStyles, Paper, Button, Typography } from "@material-ui/core";
import SkillSlider from "../../components/Slider";
import DropDown from "../../components/Dropdown";

const profileFields = [
  "Numeracy",
  "Digital engagement",
  "Teamwork",
  "Writing",
  "Reading",
  "Listening",
  "Problem solving",
  "Oral & Communication",
  "Interactive & Innovation",
  "Planning & Organising",
];

type FormFieldProps = {
  fieldName: string;
  className: {
    div: string;
    input: string;
  };
  showCarrers: boolean;
  selectedCarrer: string;
};

const FormField: React.FC<FormFieldProps> = ({
  fieldName,
  className,
  showCarrers,
}) => {
  const [fieldValue, setFieldValue] = React.useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setFieldValue(event.target.value as string[]);
  };

  return (
    <div className={className.div}>
      <Grid container>
        <Grid item md={3}>
          <Typography id="discrete-slider-always" gutterBottom>
            {fieldName}
          </Typography>
        </Grid>
        <Grid item md={6}>
          <SkillSlider />
          <DropDown handleChange={handleChange} value={fieldValue} />
        </Grid>
        <Grid item md={3}>
          <input className={className.input} value={fieldValue} disabled />
        </Grid>
      </Grid>
    </div>
  );
};

const useStyles = makeStyles({
  root: { position: "relative", width: "100%", padding: "2em" },
  formContainer: {
    padding: "3em",
  },
  formField: {
    padding: "1em 0",
  },
  formFieldInput: {
    height: "2.5em",
    backgroundColor: "#d9edff",
    border: "1px solid #66a3ff",
  },
});

const Form: React.FC<any> = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper elevation={12} className={classes.formContainer}>
        <form noValidate autoComplete="off">
          {profileFields.map((fieldName) => (
            <FormField
              fieldName={fieldName}
              className={{
                div: classes.formField,
                input: classes.formFieldInput,
              }}
              showCarrers
              selectedCarrer=""
            />
          ))}
        </form>
        <Button variant="contained" color="primary">
          Submit
        </Button>
      </Paper>
    </div>
  );
};

export default Form;
