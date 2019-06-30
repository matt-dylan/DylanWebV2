import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { UncleDylan, DenverDylan, Graduation } from '../images';
import { GridList, GridListTile } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.spacing(1),
  },
  gridList: {
    width: 700,
    height: 'auto',
  },
}));

const tileData = [
  {
    img: DenverDylan,
    title: 'Denver Dylan',
    author: 'Dylan',
    cols: 1,
  },
  {
    img: UncleDylan,
    title: 'Uncle Dylan',
    author: 'Dylan',
    cols: 2,
  },
  {
    img: Graduation,
    title: 'Graduation',
    author: 'Dylan',
    cols: 3,
  },
];

function GridPhotos() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={300} className={classes.gridList} cols={3}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default GridPhotos;