import { Typography, Grid, Paper, Container } from '@material-ui/core';
import React from 'react';
import { AboutContents, GridPhotos } from '../components';
import { useStyles } from '../style/js/useStyles';

function About() {
  const classes = useStyles();

  return (
    <div id="About" className={classes.root}>
      <Paper elevation={0}>
        <Typography
          variant="h3"
          color="textPrimary"
          align="center"
          className={classes.h3}
        >
          About
        </Typography>

        <Grid container className={classes.grid} spacing={2}>
          <Grid item sm={6} xs={12}>
            <Container>
              <AboutContents />
            </Container>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Container>
              <GridPhotos />
            </Container>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default About;
