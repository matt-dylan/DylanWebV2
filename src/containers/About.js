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
      {/* <Paper elevation={0}> */}
      <Grid container className={classes.grid} spacing={3}>
        <Grid item sm={6} xs={12}>
          <AboutContents />
        </Grid>
        <Grid item sm={6} xs={12}>
          <GridPhotos />
        </Grid>
      </Grid>
      {/* </Paper> */}
    </div>
  );
}

export default About;
