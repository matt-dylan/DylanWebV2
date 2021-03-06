import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme.js';
import AppContainer from './AppContainer';

function App() {
  return (
    <Fragment>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <AppContainer />
      </MuiThemeProvider>
    </Fragment>
  );
}

export default App;
