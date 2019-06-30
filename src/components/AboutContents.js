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
  input: {
    display: 'none',
  },
}));

const AboutContents = () => {
  const classes = useStyles();

  return (
    <Container>
      <Typography variant="h5" color="textPrimary" align="left" gutterBottom>
        Profile
      </Typography>
      <Paper>
        <Typography
          variant="h6"
          color="textSecondary"
          align="left"
          gutterBottom
        >
          Specializes in Web development, with a working background in the
          information technology industry for over three and a half years.
        </Typography>
      </Paper>

      <Typography variant="h5" color="textPrimary" align="left" gutterBottom>
        Employment
      </Typography>
      <Paper>
        <Typography
          variant="h6"
          color="textSecondary"
          align="left"
          gutterBottom
        >
          Working as a Consultant at Fenway Group.
        </Typography>
      </Paper>

      <Typography variant="h5" color="textPrimary" align="left" gutterBottom>
        Education
      </Typography>
      <Paper>
        <Typography
          variant="h6"
          color="textSecondary"
          align="left"
          gutterBottom
        >
          B.S in Computer Science from Louisiana Tech University
        </Typography>
      </Paper>

      <Typography variant="h5" color="textPrimary" align="left" gutterBottom>
        GPA
      </Typography>
      <Paper>
        <Typography
          variant="h6"
          color="textSecondary"
          align="left"
          gutterBottom
        >
          3.0/4.0
        </Typography>
      </Paper>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <Button
          variant="contained"
          color="secondary"
          href={DylanWhitlockResume}
          className={classes.button}
          download
        >
          Resumé
        </Button>
        <Button
          variant="contained"
          color="secondary"
          href={DylanWhitlockDiploma}
          className={classes.button}
          download
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