import { Typography, withStyles, Paper } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  h2: {
    backgroundColor: theme.palette.secondary.main,
    padding: theme.spacing(2),
  },
});

function Skills(props) {
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
          Skills
        </Typography>
      </Paper>
    </div>
  );
}

Skills.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Skills);
