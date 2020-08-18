import React from 'react';
import { Typography } from '@material-ui/core';

const ProfileDescription = ({ text }) => {
  return (
    <div style={{ marginTop: 20, marginBottom: 20 }}>
      <Typography variant='body1' component='p'>
        {text}
      </Typography>
    </div>
  );
};

export default ProfileDescription;
