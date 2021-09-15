import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createTheme({
  palette: {
    primary: {
      light: '#4d4d4d',
      main: '#212121',
      dark: '#171717',
    },
    secondary: {
      light: '#a84c4c',
      main: '#932020', //Red
      dark: '#661616',
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
