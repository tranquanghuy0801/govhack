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
    position: 'relative',
    cursor: 'pointer'
  },
  progress: {
    background: '#c6dcf6',
    position: 'absolute',
    zIndex: 1,
    width: 50,
    left: 0,
    height: '100%',
    opacity: '0.5'
  }
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
  const [number] = value.split('%')

  return (
    <div className={classes.progressBar} onClick={handleOnClick}>
      <div className={classes.progress} style={{ width: `calc(100% * ${number} / 100)` }} />
      <h4>{label}</h4>
      <h4>{value}</h4>
    </div>
  );
};

const Explorer = ({ openDialog }: any) => {
  const classes = useStyles();

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
                    handleOnClick={() => openDialog(label)}
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
