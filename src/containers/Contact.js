import {
  Paper,
  Typography,
  Container,
  Avatar,
  Grid,
  TextField,
  Button,
} from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useStyles } from '../style/js/useStyles';
import { SelfImage } from '../images';

function Contact() {
  const classes = useStyles();
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
      <Paper elevation={3} className={classes.contactForm}>
        <div className={classes.flexCenter}>
          <Typography
            variant="h3"
            color="textSecondary"
            align="center"
            className={classes.h4}
          >
            Contact
          </Typography>
        </div>

        <Typography
          variant="body1"
          color="textSecondary"
          align="center"
          className={classes.h6}
          gutterBottom
        >
          I would love to share my personal and professional experiences!
        </Typography>
        <Avatar alt="Self Image" className={classes.avatar} src={SelfImage} />
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
                  color="secondary"
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

export default Contact;
