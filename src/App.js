import React, { useState, Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Paper, Button } from '@material-ui/core';

import theme from './theme.js';
import { Header, Footer } from './layout';

function App() {
  const [count, setCount] = useState(1);

  return (
    <Fragment>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        {/* Move to another component */}
        <main>
          <Paper>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => setCount(count + 1)}
            >
              {count}
            </Button>
          </Paper>
        </main>
        <Footer />
      </MuiThemeProvider>
    </Fragment>
  );
}

export default App;
