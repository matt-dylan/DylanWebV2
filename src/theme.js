import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';

import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: red,
    text: {
      primary: '#fff',
    },
  },
  typography: {
    useNextVariants: true,
  },
});

export default theme;
