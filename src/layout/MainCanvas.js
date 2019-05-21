import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Typography, withStyles } from '@material-ui/core';

const styles = theme => ({
  h4: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '130px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '3em',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '2em',
    },
  },
  flexRow: {
    display: 'flex',
    justifyContent: 'center',
  },
});

function MainCanvas(props) {
  const { classes } = props;
  const [count, setCount] = useState(1);

  return (
    <main className="parallax">
      <Typography
        variant="h2"
        color="textPrimary"
        align="center"
        className={classes.h4}
        gutterBottom
      >
        Matthew Dylan Whitlock
      </Typography>
      <div className={classes.flexRow}>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setCount(count + 1)}
        >
          {count}
        </Button>
      </div>
    </main>
  );
}

MainCanvas.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainCanvas);
