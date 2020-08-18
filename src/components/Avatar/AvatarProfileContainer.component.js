import React from 'react';
import { Grid } from '@material-ui/core';
import AvatarProfileText from './AvatarProfileText.component';
import AvatarProfileSubText from './AvatarProfileSubText.component';
import AvatarProfile from './AvatarProfile.component';

const AvatarProfileContainer = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <AvatarProfileText name='Nguyen Quang Huy' />
        <AvatarProfileSubText text='Web Developer' />
        <AvatarProfile avatar='https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/80898940_888625658225716_4781715845166399488_n.jpg?_nc_cat=108&_nc_sid=174925&_nc_ohc=9H0JB-iJs9wAX-hTnfS&_nc_ht=scontent-ort2-1.xx&oh=35aefa082b948fa6f14c971131849ed2&oe=5F6323A4' />
      </Grid>
    </Grid>
  );
};

export default AvatarProfileContainer;
