import {
  Grid,
  Paper,
  Typography,
  Zoom,
  Button,
  Container,
} from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useStyles } from '../style/js/useStyles';

function Home() {
  const classes = useStyles();

  const [advice, setAdvice] = useState('');
  const [dog, setDog] = useState('');
  const [RonQuote, setRonQuote] = useState('');

  const options = {
    method: 'GET',
    // mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  useEffect(() => {
    getDog();
    getAdvice();
    getRonQuote();
  }, []);

  function getDog() {
    // https://api.chucknorris.io/
    axios.get('https://random.dog/woof.json', options).then(res => {
      if (!res.data.url.endsWith('.mp4') && !res.data.url.endsWith('.webm')) {
        setDog(res.data.url);
      } else {
        getDog();
      }
    });
  }

  function getAdvice() {
    // https://api.adviceslip.com/
    axios.get('https://api.adviceslip.com/advice').then(res => {
      setAdvice(res.data.slip.advice);
    });
  }

  function getRonQuote() {
    axios
      .get('https://ron-swanson-quotes.herokuapp.com/v2/quotes', options)
      .then(res => {
        setRonQuote(res.data);
      });
  }

  const zoom = true;
  return (
    <div id="Home" className={classes.root}>
      <br />
      <Zoom in={zoom}>
        <Container>
          <Typography
            variant="h3"
            color="textPrimary"
            align="center"
            gutterBottom
          >
            Welcome
          </Typography>
          <hr />
        </Container>
      </Zoom>
      <Grid
        container
        className={classes.grid}
        spacing={3}
        justify="space-evenly"
      >
        <Grid item md={6} xs={12}>
          <Typography
            variant="h5"
            color="textPrimary"
            align="center"
            gutterBottom
          >
            This is a dog
          </Typography>
          <Paper elevation={8} className={classes.primaryDark}>
            <span className="img-container">
              <img
                src={dog}
                alt="Dog"
                className={`${classes.center} ${classes.factPaper}`}
              />
            </span>
            {/* For the gutterbottom space */}
            <Typography variant="h5" gutterBottom>
              {''}
            </Typography>
          </Paper>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={() => getDog()}
          >
            Get a new dog
          </Button>
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography
            variant="h5"
            color="textPrimary"
            align="center"
            gutterBottom
          >
            Free Advice
          </Typography>
          <Paper elevation={8}>
            <Typography
              variant="h6"
              color="textSecondary"
              className={classes.smallPadding}
              gutterBottom
            >
              {advice || 'Loading...'}
            </Typography>
          </Paper>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={() => getAdvice()}
          >
            I need more advice
          </Button>
          {/* For the gutterbottom space */}
          <Typography variant="h5" gutterBottom>
            {''}
          </Typography>
          <Typography
            variant="h5"
            color="textPrimary"
            align="center"
            gutterBottom
          >
            Ron Swanson
          </Typography>
          <Paper elevation={8}>
            <Typography
              variant="h6"
              color="textSecondary"
              align="left"
              className={classes.smallPadding}
              gutterBottom
            >
              {RonQuote || 'Loading...'}
            </Typography>
          </Paper>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={() => getRonQuote()}
          >
            I need more Ron wisdom
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
