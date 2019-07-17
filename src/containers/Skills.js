import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Grow,
  Paper,
  Typography,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import {
  AWS,
  CSharp,
  Css,
  Groovy,
  HTML5,
  Java,
  Javascript,
  Python,
  ReactIcon,
  Scrum,
  SQL,
  UXUI,
} from '../images/skills';
import { useStyles } from '../style/js/useStyles';

const skillItems = [
  {
    title: 'AWS',
    image: AWS,
  },
  {
    title: 'C#',
    image: CSharp,
  },
  {
    title: 'Css',
    image: Css,
  },
  {
    title: 'Groovy',
    image: Groovy,
  },
  {
    title: 'HTML5',
    image: HTML5,
  },
  {
    title: 'Java',
    image: Java,
  },
  {
    title: 'Javascript',
    image: Javascript,
    time: 3100,
  },
  {
    title: 'Python',
    image: Python,
  },
  {
    title: 'React',
    image: ReactIcon,
  },
  {
    title: 'Scrum',
    image: Scrum,
  },
  {
    title: 'SQL',
    image: SQL,
  },
  {
    title: 'UX/UI',
    image: UXUI,
  },
];

function Skills() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);

  const handleGrow = () => {
    let grid = document.getElementById('skillGrid');
    var rect = grid.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Only completely visible elements return true:
    var isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;
    // Partially visible elements return true:
    isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    // return isVisible;
    if (isVisible) {
      setChecked(isVisible);
      removeListener();
    }
  };

  function removeListener() {
    window.removeEventListener('scroll', handleGrow);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleGrow);
    return function cleanup() {
      removeListener();
    };
  }, []);

  return (
    <div id="Skills" className={classes.root}>
      <Paper elevation={0}>
        <Typography
          variant="h3"
          color="textPrimary"
          align="center"
          className={classes.h3}
        >
          Skills
        </Typography>

        <Grid id="skillGrid" container className={classes.grid} spacing={3}>
          {skillItems.map((skill, i) => {
            return (
              <Grid key={skill.title} item md={2} sm={3} xs={6}>
                <Grow
                  in={checked}
                  style={{ transformOrigin: '0 0 0' }}
                  {...(checked ? { timeout: i * 500 + 250 } : {})}
                >
                  <Card elevation={7}>
                    <CardMedia
                      className={classes.media}
                      image={skill.image}
                      title={skill.title}
                    />
                    <CardContent className={classes.secondaryBackground}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        align="center"
                        color="textPrimary"
                      >
                        {skill.title}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grow>
              </Grid>
            );
          })}
        </Grid>
      </Paper>
    </div>
  );
}

export default Skills;
