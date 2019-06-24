import { Paper, Typography, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

const styles = theme => ({
  paper: {
    backgroundColor: theme.palette.secondary.main,
  },
});

function About(props) {
  const { classes } = props;
  return (
    <Paper className={classes.paper} square>
      <Typography
        variant="h3"
        color="textPrimary"
        align="center"
        className={classes.h2}
      >
        About
      </Typography>
    </Paper>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
