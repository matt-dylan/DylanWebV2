import { red } from '@material-ui/core/colors';

import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2962ff',
    },
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
