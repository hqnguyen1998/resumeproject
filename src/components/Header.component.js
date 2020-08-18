import React from 'react';
import { Divider, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
  },
  headerText: {
    letterSpacing: theme.spacing(1),
    fontSize: '1.2rem',
    textTransform: 'uppercase',
  },
}));

const Header = ({ title }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Divider light />
      <Typography
        variant='subtitle1'
        align='center'
        className={classes.headerText}
      >
        {title}
      </Typography>
      <Divider light />
    </div>
  );
};

export default Header;
