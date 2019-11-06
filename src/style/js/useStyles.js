import { makeStyles } from '@material-ui/styles';
import { LaTech } from '../../images';

export const useStyles = makeStyles(theme => ({
  appBar: {
    padding: '0px',
  },
  avatar: {
    margin: '0 auto 0.35em',
    width: '225px',
    height: '225px',
    [theme.breakpoints.down('xs')]: {
      width: '190px',
      height: '190px',
    },
  },
  button: {
    margin: theme.spacing(1),
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
    },
  },
  center: {
    margin: 'auto',
    display: 'flex',
  },
  contactForm: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '325px',
    margin: 'auto',
    minWidth: '30%',
    padding: theme.spacing(4),
  },
  contactParallax: {
    /* The image used */
    backgroundImage: `url(${LaTech})`,
    /* Create the parallax scrolling effect */
    height: '100%',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'rgba(0, 0, 0, 0.3) !important',
    backgroundBlendMode: 'color',
    backgroundSize: 'cover',
    padding: theme.spacing(7),
    [theme.breakpoints.down('md')]: {
      backgroundAttachment: 'scroll',
      minHeight: '0',
      padding: theme.spacing(1),
    },
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: 200,
      flexShrink: 0,
    },
  },
  factPaper: {
    padding: theme.spacing(1),
    maxWidth: '100%',
    height: 'auto',
    maxHeight: '400px',
  },
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  frame: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.primary.dark,
    borderRadius: theme.spacing(1),
  },
  grid: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(2),
    maxWidth: '1280px',
    margin: 'auto',
  },
  gridList: {
    width: 700,
    height: 'auto',
  },
  h3: {
    marginTop: theme.spacing(2),
  },
  h4: {
    padding: theme.spacing(1),
  },
  listIcon: {
    color: '#fff',
    textDecoration: 'none',
    [theme.breakpoints.down('sm')]: {
      minWidth: '40px',
    },
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  media: {
    height: '150px',
    padding: theme.spacing(1),
    maxWidth: '100%',
    display: 'block',
    margin: 'auto',
    // '&:hover': {
    //   msTransform: 'scale(1.1)' /* IE 9 */,
    //   webkitTransform: 'scale(1.1)' /* Safari 3-8 */,
    //   transform: 'scale(1.1)',
    // },
  },
  messageError: {
    color: '#f44336',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  messageSuccess: {
    color: '#4caf50',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paper: {
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  primary: {
    backgroundColor: theme.palette.primary.main,
  },
  primaryDark: {
    backgroundColor: theme.palette.primary.dark,
  },
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    overflow: 'hidden',
  },
  secondaryBackground: {
    backgroundColor: theme.palette.secondary.main,
  },
  smallPadding: {
    padding: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  textColor: {
    color: theme.palette.primary.main,
    '&:hover': {
      borderColor: theme.palette.secondary.dark,
    },
  },
  wrapper: {
    transform: 'translateY(calc(100vh - 85vh))',
    minHeight: '425px',
  },
}));
