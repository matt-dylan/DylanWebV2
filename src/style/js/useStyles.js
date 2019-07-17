import { makeStyles } from '@material-ui/styles';
import { Germany, LaTech } from '../../images';

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
  canvasParallax: {
    /* The image used */
    backgroundImage: `url(${Germany})`,
    /* Set a specific height */
    minHeight: 'calc(100vh - 64px)',
    height: '100%',
    /* Create the parallax scrolling effect */
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    backgroundBlendMode: 'color',
    backgroundSize: 'cover',
    [theme.breakpoints.down('md')]: {
      backgroundAttachment: 'scroll',
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
    width: '300px',
    margin: 'auto',
    minWidth: '30%',
    paddingBottom: theme.spacing(4),
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
    marginTop: '35px',
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.spacing(1),
  },
  grid: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(3),
  },
  gridList: {
    width: 700,
    height: 'auto',
  },
  h3: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(3),
  },
  h4: {
    padding: theme.spacing(1),
  },
  icon: {
    margin: theme.spacing(2),
    backgroundColor: 'darkslategrey',
  },
  listIcon: {
    color: theme.palette.secondary.main,
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
    height: 200,
    backgroundSize: 'contain',
    backgroundOrigin: 'content-box',
    padding: theme.spacing(1),
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
  primaryBackground: {
    backgroundColor: theme.palette.primary.main,
  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.main,
    overflow: 'hidden',
  },
  secondaryBackground: {
    backgroundColor: theme.palette.secondary.main,
  },
  smallPadding: {
    padding: theme.spacing(2),
  },
  textField: {
    color: theme.palette.primary.dark,
    '&:hover': {
      outline: theme.palette.primary.dark,
    },
  },
  wrapper: {
    transform: 'translateY(calc(100vh - 85vh))',
    minHeight: '425px',
  },
}));
