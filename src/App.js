import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';

import theme from './theme.js';
import { Header, MainCanvas, Footer } from './layout';

function App(props) {
  return (
    <Fragment>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <MainCanvas />
        <Footer />
      </MuiThemeProvider>
    </Fragment>
  );
}

export default App;
