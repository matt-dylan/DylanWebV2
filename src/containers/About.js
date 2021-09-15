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
        <Grid container className={classes.grid} spacing={2}>
          <Grid item sm={6} xs={12}>
            <AboutContents />
          </Grid>
          <Grid item sm={6} xs={12}>
            {/* For the gutterbottom space */}
            <Typography variant="h5" className="hidden" gutterBottom>
              mdwhitlock.com
            </Typography>
            <GridPhotos />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default About;
