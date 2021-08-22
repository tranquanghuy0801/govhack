import { Grid, makeStyles, Paper, Button, Typography } from "@material-ui/core";
import SkillCluster from "../../assets/skill_cluster.png";

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: "2em",
  },
  img: {
    width: "100%",
    "& img": {
      height: "300px",
    },
  },
  exploreContainer: {
    maxHeight: "30em",
  },
  header: {
    padding: "1em 0 0 1em",
  },
}));

const recommendations = [
  { label: "Software Engineer", value: "60%" },
  { label: "Data Engineer", value: "50%" },
  { label: "Quality Engineer", value: "30%" },
  { label: "Software Tester", value: "20%" },
  { label: "Software Manager", value: "10%" },
];

const Explorer = () => {
  const classes = useStyles();
  return (
    <Grid container justifyContent="space-around" className={classes.root}>
      <Grid item md={7}>
        <Paper elevation={12}>
          <Typography variant="h3" className={classes.header}>
            Explore
          </Typography>
          <img className={classes.img} src={SkillCluster} alt="skill-cluster" />
        </Paper>
      </Grid>
      <Grid item md={4}>
        <Paper elevation={12}>
          <Typography variant="h3" className={classes.header}>
            Recommended job
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Explorer;
