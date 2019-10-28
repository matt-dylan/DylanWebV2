import {
  AppBar,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@material-ui/core';
import {
  Person,
  Menu,
  Home,
  Computer,
  // PermContactCalendar,
  Email,
} from '@material-ui/icons';
import PropTypes from 'prop-types';
import React, { Fragment, useState } from 'react';
import { AppDrawer } from '../components';
import { useStyles } from '../style/js/useStyles';

function Header() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  function scrollIntoView() {
    window.location.hash = '';
  }

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
          { text: 'Home', icon: <Home /> },
          { text: 'About', icon: <Person /> },
          { text: 'Skills', icon: <Computer /> },
          { text: 'Contact', icon: <Email /> },
        ].map(item => (
          <a
            key={item.text}
            href={`#${item.text}`}
            className={classes.link}
            onClick={scrollIntoView}
          >
            <ListItem alignItems="center" button divider>
              <ListItemIcon className={classes.listIcon}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          </a>
        ))}
      </List>
    </div>
  );

  return (
    <Fragment>
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Menu"
            onClick={toggleDrawer(true)}
          >
            <Menu />
          </IconButton>
          <AppDrawer
            open={open}
            sideList={sideList}
            toggleDrawer={toggleDrawer}
          />
          {/* <img src={Logo} alt="Logo" /> */}
          <Typography variant="h6" className={classes.title}>
            Dylan Whitlock
          </Typography>
          <a
            href="mailto:matthew.whitlock8@gmail.com"
            style={{ color: 'inherit' }}
          >
            <IconButton color="inherit" aria-label="email">
              <Email />
            </IconButton>
          </a>
          {/* <IconButton color="inherit" aria-label="email">
            <PermContactCalendar />
          </IconButton> */}
        </Toolbar>
      </AppBar>
    </Fragment>
  );
}

Header.propTypes = {
  balance: PropTypes.number,
  toggleDrawer: PropTypes.func,
  sideList: PropTypes.func,
};

export default Header;
