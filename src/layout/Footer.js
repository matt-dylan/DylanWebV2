import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const styles = theme => ({
  footer: {
    backgroundColor: theme.palette.secondary.main,
    padding: theme.spacing.unit * 3,
  },
});

function Footer(props) {
  const { classes } = props;
  return (
    <footer className={classes.footer}>
      <Typography color="primary" align="center" gutterBottom>
        Copywright by Dylan Whitlock
      </Typography>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Footer);
