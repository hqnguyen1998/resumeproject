import React from 'react';
import Context from '../../context/Context';
import Header from '../Header.component';
import ProfileDescription from './ProfileDescription.component';

const ProfileDescriptionContainer = () => {
  const state = React.useContext(Context);
  return (
    <div>
      <Header title='Profile' />
      <ProfileDescription text={state.summary} />
    </div>
  );
};

export default ProfileDescriptionContainer;
