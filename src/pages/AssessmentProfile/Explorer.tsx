import { Grid, makeStyles, Paper, Button, Typography } from "@material-ui/core";
import SkillCluster from "../../assets/skill_cluster.png";
import React from "react";

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: "2em",
  },
  img: {
    width: "100%",
    height: "550px",
    objectFit: "cover",
  },
  exploreContainer: {},
  header: {
    padding: "1em 0 0 1em",
  },
  recommendations: {
    padding: "1em",
    height: "100%",
  },
  progressBar: {
    display: "flex",
    justifyContent: "space-between",
    borderRadius: "10px",
    backgroundColor: "#f2f2f2",
    padding: "0 1em",
  },
}));

const recommendations = [
  { label: "Software Engineer", value: "60%" },
  { label: "Data Engineer", value: "50%" },
  { label: "Quality Engineer", value: "30%" },
  { label: "Software Tester", value: "20%" },
  { label: "Software Manager", value: "10%" },
];

type ProgressBarProps = {
  label: string;
  value: string;
  handleOnClick: () => void;
};

const ProgressBar: React.FC<ProgressBarProps> = ({
  label,
  value,
  handleOnClick,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.progressBar} onClick={handleOnClick}>
      <h4>{label}</h4>
      <h4>{value}</h4>
    </div>
  );
};

const Explorer = () => {
  const classes = useStyles();
  const handleSuggestionClick = () => {
    //add dialog opener
  };
  return (
    <Grid container justifyContent="space-around" className={classes.root}>
      <Grid item md={7}>
        <Paper elevation={12}>
          <Typography variant="h5" className={classes.header}>
            Explore
          </Typography>
          <img className={classes.img} src={SkillCluster} alt="skill-cluster" />
        </Paper>
      </Grid>
      <Grid item md={4}>
        <Paper elevation={12}>
          <Typography variant="h5" className={classes.header}>
            Recommended job
          </Typography>
          <div className={classes.recommendations}>
            {recommendations.map(({ label, value }) => {
              return (
                <>
                  <ProgressBar
                    key={label}
                    label={label}
                    value={value}
                    handleOnClick={handleSuggestionClick}
                  />
                  <br />
                </>
              );
            })}
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Explorer;
