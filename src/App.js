import React, { useState, Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Button, Typography, withStyles } from '@material-ui/core';
import { Parallax, Background } from 'react-parallax';

import theme from './theme.js';
import { Header, Footer } from './layout';
import { Switzerland } from './images';

const styles = theme => ({
  h4: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '300px',
  },
});

function App(props) {
  const { classes } = props;
  const [count, setCount] = useState(1);

  return (
    <Fragment>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        {/* Move to another component */}
        <main>
          <Parallax className="parallax" strength={800}>
            <Typography
              variant="h2"
              color="textPrimary"
              align="justify"
              className={classes.h4}
            >
              Dylan Whitlock
            </Typography>
            <Background>
              <img src={Switzerland} alt="Switzerland" />
            </Background>
          </Parallax>

          <Button
            variant="contained"
            color="secondary"
            onClick={() => setCount(count + 1)}
          >
            {count}
          </Button>
        </main>
        <Footer />
      </MuiThemeProvider>
    </Fragment>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
