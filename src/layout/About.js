import React from 'react';
import PropTypes from 'prop-types';
import { Paper, withStyles } from '@material-ui/core';

const styles = theme => ({
  Paper: {
    backgroundColor: theme.palette.secondary.main,
  },
});

function About(props) {
  const { classes } = props;
  return (
    <Paper className={classes.Paper} square>
      About
    </Paper>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
