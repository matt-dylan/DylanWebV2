import {
  Typography,
  withStyles,
  Grid,
  Paper,
  Container,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { AboutContents, GridPhotos } from '../components';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.main,
    overflowX: 'hidden',
    paddingBottom: theme.spacing(3),
  },
  h2: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(3),
  },
  grid: {
    backgroundColor: theme.palette.primary.main,
  },
  paper: {
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  button: {
    margin: theme.spacing(1),
  },
});

function About(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Paper>
        <Typography
          variant="h3"
          color="textPrimary"
          align="center"
          className={classes.h2}
        >
          About
        </Typography>
      </Paper>
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
    </div>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
