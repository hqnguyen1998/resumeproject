import React from 'react';
import Context from '../../context/Context';
import { Grid } from '@material-ui/core';
import AvatarProfileText from './AvatarProfileText.component';
import AvatarProfileSubText from './AvatarProfileSubText.component';
import AvatarProfile from './AvatarProfile.component';

const AvatarProfileContainer = () => {
  const state = React.useContext(Context);

  const { name, title, avatar } = state.profile;

  return (
    <Grid container>
      <Grid item xs={12}>
        <AvatarProfileText name={name} />
        <AvatarProfileSubText text={title} />
        <AvatarProfile avatar={avatar} />
      </Grid>
    </Grid>
  );
};

export default AvatarProfileContainer;
