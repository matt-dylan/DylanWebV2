import { Drawer, withStyles } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';

const styles = theme => ({
  sidebarStyle: {
    backgroundColor: theme.palette.secondary.main,
  },
});

function AppDrawer(props) {
  const { classes } = props;
  return (
    <Drawer
      anchor="left"
      classes={{ paperAnchorLeft: classes.sidebarStyle }}
      open={props.open}
      onClose={props.toggleDrawer(false)}
    >
      {props.sideList()}
    </Drawer>
  );
}

AppDrawer.propTypes = {
  open: PropTypes.bool,
  classes: PropTypes.object.isRequired,
  toggleDrawer: PropTypes.func,
  sideList: PropTypes.func,
};

export default withStyles(styles)(AppDrawer);
