import React from 'react';
import DylanWhitlockResume from '../pdf/DylanWhitlockResume.pdf';
import DylanWhitlockDiploma from '../pdf/DylanWhitlockDiploma.pdf';
import {
  Container,
  Typography,
  Paper,
  Button,
  makeStyles,
  Grid,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
    },
  },
  paper: {
    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
  },
  input: {
    display: 'none',
  },
  typo: {
    padding: theme.spacing(2),
  },
  btnGrid: {
    padding: theme.spacing(2),
  },
}));

const AboutContents = () => {
  const classes = useStyles();

  return (
    <Container>
      <Typography variant="h5" color="textPrimary" align="left" gutterBottom>
        Profile
      </Typography>
      <Paper className={classes.paper}>
        <Typography
          variant="h6"
          color="textSecondary"
          align="left"
          className={classes.typo}
          gutterBottom
        >
          Specializes in Web development, with a working background in the
          information technology industry for over three and a half years.
        </Typography>
      </Paper>

      <Typography variant="h5" color="textPrimary" align="left" gutterBottom>
        Employment
      </Typography>
      <Paper className={classes.paper}>
        <Typography
          variant="h6"
          color="textSecondary"
          align="left"
          className={classes.typo}
          gutterBottom
        >
          Developing technical solutions as a Consultant at Fenway Group.
        </Typography>
      </Paper>

      <Typography variant="h5" color="textPrimary" align="left" gutterBottom>
        Education
      </Typography>
      <Paper className={classes.paper}>
        <Typography
          variant="h6"
          color="textSecondary"
          align="left"
          className={classes.typo}
          gutterBottom
        >
          B.S in Computer Science from Louisiana Tech University
        </Typography>
      </Paper>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.btnGrid}
        spacing={2}
      >
        <Button
          variant="contained"
          color="secondary"
          href={DylanWhitlockResume}
          className={classes.button}
          download="DylanWhitlockResume.pdf"
        >
          Resumé
        </Button>
        <Button
          variant="contained"
          color="secondary"
          href={DylanWhitlockDiploma}
          className={classes.button}
          download="DylanWhitlockDiploma.pdf"
        >
          Diploma
        </Button>
        <Button
          variant="contained"
          color="secondary"
          href="https://github.com/matt-dylan"
          className={classes.button}
        >
          Github
        </Button>
      </Grid>
    </Container>
  );
};

export default AboutContents;
