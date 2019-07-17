import { Drawer } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { useStyles } from '../style/js/useStyles';

function AppDrawer(props) {
  const classes = useStyles();
  return (
    <Drawer
      anchor="left"
      classes={{ paperAnchorLeft: classes.primaryBackground }}
      open={props.open}
      onClose={props.toggleDrawer(false)}
    >
      {props.sideList()}
    </Drawer>
  );
}

AppDrawer.propTypes = {
  open: PropTypes.bool,
  toggleDrawer: PropTypes.func,
  sideList: PropTypes.func,
};

export default AppDrawer;
