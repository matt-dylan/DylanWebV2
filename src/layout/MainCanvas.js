import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Typography, withStyles } from '@material-ui/core';

const styles = theme => ({
  h4: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '300px',
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
        align="justify"
        className={classes.h4}
      >
        Dylan Whitlock
      </Typography>

      <Button
        variant="contained"
        color="secondary"
        onClick={() => setCount(count + 1)}
      >
        {count}
      </Button>
    </main>
  );
}

MainCanvas.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainCanvas);
