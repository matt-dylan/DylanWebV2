import {
  Grid,
  Paper,
  Typography,
  Zoom,
  Button,
  Container,
} from '@material-ui/core';
import axios from 'axios';
import { Bitcoin } from '../images';
import React, { useEffect, useState } from 'react';
import { useStyles } from '../style/js/useStyles';

function Home() {
  const classes = useStyles();

  const [advice, setAdvice] = useState('');
  const [dog, setDog] = useState('');
  const [catFact, setCatFact] = useState('');
  const [btc, setBtc] = useState({ USD: '', GBP: '', EUR: '' });

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  useEffect(() => {
    getDog();
    getAdvice();
    getCatFact();
    getBtc();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      getBtc();
    }, 5000);
  }, [btc]);

  function getDog() {
    axios.get('https://random.dog/woof.json', options).then(res => {
      if (!res.data.url.endsWith('.mp4') && !res.data.url.endsWith('.webm')) {
        setDog(res.data.url);
      } else {
        getDog();
      }
    });
  }

  function getAdvice() {
    axios.get('https://www.boredapi.com/api/activity', options).then(res => {
      setAdvice(res.data.activity);
    });
  }

  function getCatFact() {
    axios
      .get('https://catfact.ninja/fact', options)
      .then(res => {
        setCatFact(res.data.fact);
      });
  }

  function getBtc() {
    console.log('Calling Bitcoin');
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json').then(res => {
      setBtc({
        USD: res.data.bpi.USD.rate,
        GBP: res.data.bpi.GBP.rate,
        EUR: res.data.bpi.EUR.rate,
      });
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
      <Container>
        <Grid
          container
          className={classes.grid}
          spacing={2}
          justifyContent="space-evenly"
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
              Bitcoin Live Price Tracker
            </Typography>
            <Paper elevation={8} className={classes.primaryDark}>
              <Grid
                container
                alignItems="center"
                justifyContent="space-evenly"
                className={classes.smallPadding}
              >
                <Grid item md={6} xs={12}>
                  <img style={{ maxWidth: '100%' }} src={Bitcoin} />
                </Grid>
                <Grid item md={6} xs={12}>
                  <Paper elevation={8}>
                    <Typography
                      variant="h5"
                      color="textSecondary"
                      align="center"
                      className={classes.smallPadding}
                    >
                      United States Dollar<br/>
                    &#36;{btc.USD || 'Loading...'}
                    </Typography>
                  </Paper>
                  {/* For the gutterbottom space */}
                  <Typography variant="h5" gutterBottom>
                    {''}
                  </Typography>
                  <Paper elevation={8}>
                    <Typography
                      variant="h5"
                      color="textSecondary"
                      align="center"
                      className={classes.smallPadding}
                    >
                      British Pound Sterling<br/>
                    &pound;{btc.GBP || 'Loading...'}
                    </Typography>
                  </Paper>
                  {/* For the gutterbottom space */}
                  <Typography variant="h5" gutterBottom>
                    {''}
                  </Typography>
                  <Paper elevation={8}>
                    <Typography
                      variant="h5"
                      color="textSecondary"
                      align="center"
                      className={classes.smallPadding}
                    >
                      Euro <br/>
                    &euro;{btc.EUR || 'Loading...'}
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      {/* For the gutterbottom space */}
      <Typography variant="h5" gutterBottom>
        {''}
      </Typography>
      <Container>
        <Grid
          container
          className={classes.grid}
          spacing={2}
          justifyContent="space-evenly"
        >
          <Grid item md={6} xs={12}>
            <Typography
              variant="h5"
              color="textPrimary"
              align="center"
              gutterBottom
            >
              Feeling Bored?
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
              Find another activity
            </Button>
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography
              variant="h5"
              color="textPrimary"
              align="center"
              gutterBottom
            >
              Cat Facts
            </Typography>
            <Paper elevation={8}>
              <Typography
                variant="h6"
                color="textSecondary"
                align="left"
                className={classes.smallPadding}
                gutterBottom
              >
                {catFact || 'Loading...'}
              </Typography>
            </Paper>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              onClick={() => getCatFact()}
            >
              New Cat Fact
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Home;
