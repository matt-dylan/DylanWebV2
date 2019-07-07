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
import React, { useState, useEffect } from 'react';
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
    padding: theme.spacing(1),
  },
  contactParallax: {
    /* The image used */
    backgroundImage: `url(${LaTech})`,
    /* Set a specific height */
    minHeight: '100vh',
    /* Create the parallax scrolling effect */
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    backgroundBlendMode: 'color',
    backgroundSize: 'cover',
    [theme.breakpoints.down('xs')]: {
      backgroundAttachment: 'scroll',
      minHeight: '0px',
      padding: theme.spacing(1),
    },
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '300px',
    margin: 'auto',
    minWidth: '30%',
    transform: 'translateY(20%)',
    paddingBottom: theme.spacing(4),
    [theme.breakpoints.down('xs')]: {
      transform: 'translateY(0%)',
    },
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
  messageSuccess: {
    color: '#4caf50',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  messageError: {
    color: '#f44336',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  center: {
    margin: 'auto',
    display: 'flex',
  },
});

function Contact(props) {
  const { classes } = props;
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setForm({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    });
    setTimeout(() => {
      if (error) setError(false);
      if (success) setSuccess(false);
    }, 3000);
  }, [success, error]);

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  function handleSubmit(e) {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contactForm', ...form }),
    })
      .then(res => {
        if (res.status === 404) {
          setError(true);
        } else {
          setSuccess(true);
        }
      })
      .catch(error => {
        setError(true);
        console.log(error);
      });

    e.preventDefault();
  }

  return (
    <div id="Contact" className={`${classes.root} ${classes.contactParallax}`}>
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
          onSubmit={e => handleSubmit(e)}
          name="contactForm"
          method="POST"
          data-netlify-recaptcha="true"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contactForm" />
          <Container>
            <Grid container spacing={2} alignContent="center">
              <Grid item xs={12} sm={6}>
                <TextField
                  InputProps={{
                    className: classes.textField,
                  }}
                  id="firstName"
                  label="First Name"
                  name="firstName"
                  autoComplete="fname"
                  variant="filled"
                  value={form.firstName}
                  required
                  fullWidth
                  onChange={e => {
                    let newValue = e.target.value;
                    setForm(prevState => {
                      return { ...prevState, firstName: newValue };
                    });
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  InputProps={{
                    className: classes.textField,
                  }}
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  variant="filled"
                  value={form.lastName}
                  required
                  fullWidth
                  onChange={e => {
                    let newValue = e.target.value;
                    setForm(prevState => {
                      return { ...prevState, lastName: newValue };
                    });
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  InputProps={{
                    className: classes.textField,
                  }}
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  variant="filled"
                  value={form.email}
                  required
                  fullWidth
                  onChange={e => {
                    let newValue = e.target.value;
                    setForm(prevState => {
                      return { ...prevState, email: newValue };
                    });
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  InputProps={{
                    className: classes.textField,
                  }}
                  id="message"
                  label="Message"
                  name="message"
                  variant="filled"
                  rows="4"
                  value={form.message}
                  multiline
                  fullWidth
                  required
                  onChange={e => {
                    let newValue = e.target.value;
                    setForm(prevState => {
                      return { ...prevState, message: newValue };
                    });
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                {error && (
                  <div className={classes.messageError}>
                    Error no message sent!
                  </div>
                )}
                {success && (
                  <div className={classes.messageSuccess}>
                    Thank you for contacting me!
                  </div>
                )}
              </Grid>
              <Grid item xs={12}>
                <div data-netlify-recaptcha="true" />
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={success || error}
                  className={classes.center}
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
