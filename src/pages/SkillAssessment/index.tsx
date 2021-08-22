import React from "react";
import { makeStyles, Paper, Button, Typography, Container } from "@material-ui/core";
import { FormField } from './FormField'
import { useNavigate } from "react-router-dom";

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

const Form: React.FC<any> = () => {
  const classes = useStyles();
  const navigate = useNavigate()
  const handleSubmit = () => {
    navigate('explore')
  }

  return (
    <Container className={classes.root} maxWidth='md'>
      <Paper elevation={12} className={classes.formContainer}>
        <Typography variant="h4">Rate your skills</Typography>
        <form noValidate autoComplete="off">
          {profileFields.map((fieldName) => (
            <FormField
              key={fieldName}
              fieldName={fieldName}
              className={{
                div: classes.formField,
                input: classes.formFieldInput,
              }}
              selectedCarrer=""
            />
          ))}
        </form>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Paper>
    </Container>
  );
};

export default Form;

const useStyles = makeStyles({
  root: { position: "relative", width: "100%", padding: "2em" },
  formContainer: {
    padding: 24,
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