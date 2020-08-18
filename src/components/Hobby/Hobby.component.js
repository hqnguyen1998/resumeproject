import React from 'react';
import { makeStyles, Chip } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop: theme.spacing(2),
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

const Hobby = ({ hobbies }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {hobbies.map((hobby, i) => (
        <Chip key={i} label={hobby} color='primary' />
      ))}
    </div>
  );
};

export default Hobby;
