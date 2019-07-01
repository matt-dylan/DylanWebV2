import {
  Paper,
  Typography,
  withStyles,
  Container,
  Avatar,
  Grid,
  TextField,
  Button,
} from '@material-ui/core';
import { PermContactCalendar } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';
import { LaTech } from '../images';
// import CircularIntegration from '../components/CircularIntegration';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.secondary.main,
    overflowX: 'hidden',
    paddingBottom: theme.spacing(3),
  },
  h4: {
    // backgroundColor: theme.palette.secondary.main,
    padding: theme.spacing(1),
  },
  contactParallax: {
    /* The image used */
    backgroundImage: `url(${LaTech})`,
    /* Set a specific height */
    minHeight: '550px',
    paddingTop: theme.spacing(8),
    /* Create the parallax scrolling effect */
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    backgroundBlendMode: 'color',
    backgroundSize: 'cover',
    [theme.breakpoints.down('xs')]: {
      backgroundAttachment: 'scroll',
    },
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '300px',
    margin: 'auto',
    minWidth: '30%',
    paddingBottom: theme.spacing(4),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.dark,
  },
  textField: {
    color: theme.palette.primary.dark,
    '&:hover': {
      outline: theme.palette.primary.dark,
    },
  },
  btn: {
    margin: theme.spacing(1),
    color: theme.palette.primary.dark,
  },
});

function Contact(props) {
  const { classes } = props;

  function handleSubmit(event) {
    console.log(event.target);
  }

  return (
    <div className={`${classes.root} ${classes.contactParallax}`}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <PermContactCalendar />
        </Avatar>
        <Typography
          variant="h4"
          color="textSecondary"
          align="center"
          className={classes.h4}
        >
          Contact
        </Typography>
        <form
          className={classes.form}
          onSubmit={handleSubmit}
          method="POST"
          data-netlify-recaptcha="true"
          data-netlify="true"
        >
          <Container>
            <Grid container spacing={2} alignContent="center">
              <Grid item xs={12} sm={6}>
                <TextField
                  InputProps={{
                    className: classes.textField,
                  }}
                  autoComplete="fname"
                  name="firstName"
                  variant="filled"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  InputProps={{
                    className: classes.textField,
                  }}
                  variant="filled"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  InputProps={{
                    className: classes.textField,
                  }}
                  variant="filled"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  InputProps={{
                    className: classes.textField,
                  }}
                  variant="filled"
                  required
                  rows="4"
                  multiline
                  fullWidth
                  id="message"
                  label="Message"
                  name="message"
                />
              </Grid>
              <Grid item xs={12}>
                <div data-netlify-recaptcha="true" />
                {/* <CircularIntegration /> */}
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  style={{ margin: 'auto', display: 'flex' }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Container>
        </form>
      </Paper>
    </div>
  );
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);
