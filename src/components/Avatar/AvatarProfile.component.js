import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  avatarContainer: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    width: '170px',
    borderRadius: '50%',
    border: '1px solid #000',
  },
}));

const AvatarProfile = ({ avatar }) => {
  const classes = useStyles();
  return (
    <div className={classes.avatarContainer}>
      <img src={avatar} alt='avatar' className={classes.avatar} />
    </div>
  );
};

export default AvatarProfile;
