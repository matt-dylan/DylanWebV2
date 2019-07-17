import React from 'react';
import { SelfImage } from '../images';
import { Typography, Fade, Avatar } from '@material-ui/core';
import { useStyles } from '../style/js/useStyles';

function MainCanvas() {
  const classes = useStyles();

  return (
    <main id="Home" className={classes.canvasParallax}>
      <div className={classes.wrapper}>
        <Fade in timeout={2000}>
          <Typography
            variant="h2"
            color="textPrimary"
            align="center"
            className={classes.flexCenter}
            gutterBottom
          >
            Matthew Dylan Whitlock
          </Typography>
        </Fade>
        <Fade in timeout={3500}>
          <Avatar alt="Self Image" className={classes.avatar} src={SelfImage} />
        </Fade>
        <Fade in timeout={5000}>
          <i>
            <Typography
              variant="h4"
              color="textPrimary"
              align="center"
              className={classes.flexCenter}
            >
              "Putting people first"
            </Typography>
          </i>
        </Fade>
      </div>
    </main>
  );
}

export default MainCanvas;
