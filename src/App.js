import React, { useState } from 'react';
import { Paper, Button } from '@material-ui/core';

import { Header, Footer } from './layout';
// import { createMuiTheme } from '@material-ui/core/styles';
// import indigo from '@material-ui/core/colors/indigo';
// import red from '@material-ui/core/colors/red';

// const theme = createMuiTheme({
//   palette: {
//     primary: red,
//     secondary: indigo,
//   },
// });

function App() {
  const [count, setCount] = useState(1);

  return (
    <div>
      <Header />
      <Paper>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setCount(count + 1)}
        >
          {count}
        </Button>
      </Paper>
      <Footer />
    </div>
  );
}

export default App;
