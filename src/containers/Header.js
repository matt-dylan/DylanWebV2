import {
  AppBar,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  withStyles,
} from '@material-ui/core';
import ComputerIcon from '@material-ui/icons/Computer';
import EmailIcon from '@material-ui/icons/Email';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { AppDrawer } from '../components';
import { Logo } from '../images';

const drawerWidth = 200;
const styles = theme => ({
  appBar: {
    padding: '0px',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  listItem: {
    [theme.breakpoints.down('sm')]: {
      minWidth: '40px',
    },
  },
});

function Header(props) {
  const { classes } = props;
  const [open, setOpen] = useState(false);

  const toggleDrawer = open => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setOpen(open);
  };

  const sideList = () => (
    <div
      className={classes.drawer}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List root={classes.sidebar} disablePadding>
        {[
          { text: 'Home', icon: <HomeIcon /> },
          { text: 'About', icon: <PersonIcon /> },
          { text: 'Skills', icon: <ComputerIcon /> },
          { text: 'Contact', icon: <EmailIcon /> },
        ].map(item => (
          <ListItem alignItems="center" button divider key={item.text}>
            <ListItemIcon className={classes.listItem}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="Menu"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <AppDrawer
          open={open}
          sideList={sideList}
          toggleDrawer={toggleDrawer}
        />
        <img src={Logo} alt="Logo" />
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  toggleDrawer: PropTypes.func,
  sideList: PropTypes.func,
};

export default withStyles(styles)(Header);
