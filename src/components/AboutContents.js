import React from 'react';
import DylanWhitlockResume from '../pdf/DylanWhitlockResume.pdf';
import DylanWhitlockDiploma from '../pdf/DylanWhitlockDiploma.pdf';
import { Container, Typography, Paper, Button, Grid } from '@material-ui/core';
import { useStyles } from '../style/js/useStyles';

const AboutContents = () => {
  const classes = useStyles();

  return (
    <Container>
      <Typography variant="h5" color="textPrimary" align="left" gutterBottom>
        Profile
      </Typography>
      <Paper elevation={8}>
        <Typography
          variant="h6"
          color="textSecondary"
          align="left"
          className={classes.smallPadding}
          gutterBottom
        >
          Specializes in Web development, with a working background in the
          information technology industry for over three and a half years.
        </Typography>
      </Paper>

      <Typography variant="h5" color="textPrimary" align="left" gutterBottom>
        Employment
      </Typography>
      <Paper elevation={8}>
        <Typography
          variant="h6"
          color="textSecondary"
          align="left"
          className={classes.smallPadding}
          gutterBottom
        >
          Developing technical solutions as a Consultant at Fenway Group.
        </Typography>
      </Paper>

      <Typography variant="h5" color="textPrimary" align="left" gutterBottom>
        Education
      </Typography>
      <Paper elevation={8}>
        <Typography
          variant="h6"
          color="textSecondary"
          align="left"
          className={classes.smallPadding}
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
        className={classes.smallPadding}
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
