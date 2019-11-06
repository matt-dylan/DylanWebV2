import { Typography, Grid, Container } from '@material-ui/core';
import React from 'react';
import { AboutContents, GridPhotos } from '../components';
import { useStyles } from '../style/js/useStyles';

function About() {
  const classes = useStyles();

  return (
    <div id="About" className={classes.root}>
      <Container>
        <Typography
          variant="h3"
          color="textPrimary"
          align="center"
          className={classes.h3}
        >
          About
        </Typography>
        <hr />
      </Container>
      <Grid container className={classes.grid} spacing={3}>
        <Grid item sm={6} xs={12}>
          <AboutContents />
        </Grid>
        <Grid item sm={6} xs={12}>
          {/* For the gutterbottom space */}
          <Typography variant="h5" className="hidden" gutterBottom>
            dylanwhitlock.com
          </Typography>
          <GridPhotos />
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
