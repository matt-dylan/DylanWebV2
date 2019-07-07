import React from 'react';
import PropTypes from 'prop-types';
import { Germany } from '../images';
import { SelfImage } from '../images';
import { Typography, withStyles, Fade, Avatar } from '@material-ui/core';

const styles = theme => ({
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    margin: '0 auto 0.35em',
    width: '190px',
    height: '190px',
  },
  canvasParallax: {
    /* The image used */
    backgroundImage: `url(${Germany})`,
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
    },
  },
  wrapper: {
    transform: 'translateY(50%)',
  },
});

function MainCanvas(props) {
  const { classes } = props;

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
          <Typography
            variant="h4"
            color="textPrimary"
            align="center"
            className={classes.flexCenter}
          >
            "Putting people first"
          </Typography>
        </Fade>
      </div>
    </main>
  );
}

MainCanvas.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainCanvas);
