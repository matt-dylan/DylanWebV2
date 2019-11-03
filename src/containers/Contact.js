import {
  Paper,
  Typography,
  Grid,
  TextField,
  Button,
  Container,
} from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useStyles } from '../style/js/useStyles';

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
      <Grid container spacing={3} justify="center">
        <Grid item xs={12}>
          <Paper elevation={3} className={classes.contactForm}>
            <Container>
              <Typography
                variant="h4"
                color="primary"
                align="center"
                gutterBottom
              >
                Contact
              </Typography>
            </Container>
            <form
              className={classes.form}
              onSubmit={e => handleSubmit(e)}
              name="contactForm"
              method="POST"
              data-netlify-recaptcha="true"
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="contactForm" />
              <Grid container spacing={2} alignContent="center">
                <Grid item xs={12} sm={6}>
                  <TextField
                    InputProps={{
                      className: classes.textColor,
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
                      className: classes.textColor,
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
                      className: classes.textColor,
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
                      className: classes.textColor,
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
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Contact;
