import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Typography, withStyles, Fade } from '@material-ui/core';

const styles = theme => ({
  h2: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  h3: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paddingSpace: {
    paddingTop: '130px',
  },
  flexRow: {
    display: 'flex',
    justifyContent: 'center',
  },
});

function MainCanvas(props) {
  const { classes } = props;
  const [checked, setChecked] = useState(true);

  return (
    <main className={'parallax'}>
      <Fade in={checked} timeout={2000}>
        <Typography
          variant="h2"
          color="textPrimary"
          align="center"
          className={classes.h2}
          gutterBottom
        >
          Matthew Dylan Whitlock
        </Typography>
      </Fade>
      <Fade in={checked} timeout={3000}>
        <Typography
          variant="h3"
          color="textPrimary"
          align="center"
          className={classes.h3}
          gutterBottom
        >
          Moscow, ID
        </Typography>
      </Fade>
      <div className={classes.flexRow}>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setChecked(!checked)}
        >
          Hide
        </Button>
      </div>
    </main>
  );
}

MainCanvas.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainCanvas);
