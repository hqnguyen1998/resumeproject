import React from 'react';
import { Typography } from '@material-ui/core';

const AvatarProfileText = ({ name }) => {
  return (
    <Typography variant='h5' component='h1' align='center'>
      {name}
    </Typography>
  );
};

export default AvatarProfileText;
