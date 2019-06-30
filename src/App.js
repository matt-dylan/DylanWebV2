import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme.js';
import { Header, MainCanvas, About, Skills, Footer } from './containers';

function App() {
  return (
    <Fragment>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <MainCanvas />
        <About />
        <Skills />
        <Footer />
      </MuiThemeProvider>
    </Fragment>
  );
}

export default App;
