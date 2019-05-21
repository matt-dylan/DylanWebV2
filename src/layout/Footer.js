import React from 'react';
import PropTypes from 'prop-types';
import Copyright from '@material-ui/icons/Copyright';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const styles = theme => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing.unit * 3,
  },
  icon: {
    paddingTop: '5px',
    fontSize: 16,
  },
});

function Footer(props) {
  const { classes } = props;
  return (
    <footer className={classes.footer}>
      <Typography color="textPrimary" align="center" gutterBottom>
        Copyright <Copyright className={classes.icon} /> 2019 Dylan Whitlock.
        All rights reserved
      </Typography>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
