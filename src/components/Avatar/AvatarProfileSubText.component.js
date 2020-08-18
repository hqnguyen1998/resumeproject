import React from 'react';
import { Typography } from '@material-ui/core';

const AvatarProfileSubText = ({ text }) => {
  return (
    <Typography
      variant='subtitle1'
      component='h1'
      align='center'
      color='secondary'
      style={{ fontStyle: 'italic' }}
    >
      {text}
    </Typography>
  );
};

export default AvatarProfileSubText;
