import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
  palette: {
    primary: {
      light: '5472d3',
      main: '#0d47a1', //Blue 900
      dark: '002171',
    },
    secondary: {
      light: 'ff5a36',
      main: '#ff0000',
      dark: 'c20000',
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
