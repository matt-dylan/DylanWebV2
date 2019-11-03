import { Grid, Paper, Typography, Zoom } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useStyles } from '../style/js/useStyles';

function Home() {
  const classes = useStyles();

  const [advice, setAdvice] = useState('');
  const [dog, setDog] = useState('');
  const [fortyTwoQuote, setFortyTwoQuote] = useState('');

  const options = {
    method: 'GET',
    // mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  useEffect(() => {
    getDog();
  }, []);

  useEffect(() => {
    getAdvice();
  }, [dog]);

  useEffect(() => {
    getFortyTwoQuote();
  }, [advice]);

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

  function getFortyTwoQuote() {
    axios.get('http://numbersapi.com/42', options).then(res => {
      setFortyTwoQuote(res.data);
    });
  }

  let zoom = true;
  return (
    <div id="Home" className={classes.root}>
      <br />
      <Zoom in={zoom}>
        <Typography
          variant="h3"
          color="textPrimary"
          align="center"
          // className={classes.flexCenter}
          gutterBottom
        >
          Welcome to dylanwhitlock.com
        </Typography>
      </Zoom>
      <Grid container className={classes.grid} spacing={3}>
        <Grid item md={6} xs={12}>
          <Typography
            variant="h5"
            color="textPrimary"
            align="center"
            gutterBottom
          >
            Random Dogs
          </Typography>
          <Paper elevation={8}>
            <span className="img-container">
              <img
                src={dog}
                alt="Dog"
                className={`${classes.center} ${classes.factPaper}`}
              />
            </span>
          </Paper>
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
          <br />
          <Typography
            variant="h5"
            color="textPrimary"
            align="center"
            gutterBottom
          >
            Facts of 42
          </Typography>
          <Paper elevation={8}>
            <Typography
              variant="h6"
              color="textSecondary"
              className={classes.smallPadding}
              gutterBottom
            >
              {fortyTwoQuote || 'Loading...'}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
