import React from 'react';
import PropTypes from 'prop-types';
import { Logo } from '../images';
import { AppBar, Toolbar, IconButton, withStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
  appBar: {
    padding: '0px',
  },
});

function Header(props) {
  const { classes } = props;
  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <IconButton color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <img src={Logo} alt="Logo" />
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
