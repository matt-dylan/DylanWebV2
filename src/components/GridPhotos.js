import React from 'react';
import { UncleDylan, DenverDylan, Graduation, CowboyDylan } from '../images';
import { GridList, GridListTile, Paper } from '@material-ui/core';
import { useStyles } from '../style/js/useStyles';

const tileData = [
  {
    img: DenverDylan,
    title: 'Denver Dylan',
    author: 'Dylan',
    cols: 2,
  },
  {
    img: UncleDylan,
    title: 'Uncle Dylan',
    author: 'Dylan',
    cols: 2,
  },
  {
    img: CowboyDylan,
    title: 'Cowboy Dylan',
    author: 'Dylan',
    cols: 2,
  },
  {
    img: Graduation,
    title: 'Graduation',
    author: 'Dylan',
    cols: 6,
  },
];

function GridPhotos() {
  const classes = useStyles();

  return (
    <Paper className={classes.frame} elevation={8}>
      <GridList cellHeight={275} className={classes.gridList} cols={6}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </Paper>
  );
}

export default GridPhotos;
