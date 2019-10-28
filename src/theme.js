import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
  palette: {
    primary: {
      light: '#515b5f',
      main: '#263238',
      dark: '#1a2327',
    },
    secondary: {
      light: '#db5858',
      main: '#d32f2f', //Red
      dark: '#932020',
    },

    text: {
      primary: '#fff',
      secondary: '#000',
    },
  },
  typography: {
    useNextVariants: true,
  },
});

theme = responsiveFontSizes(theme); //Responsive Fonts

export default theme;
