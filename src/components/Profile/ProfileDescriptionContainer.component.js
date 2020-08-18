import React from 'react';
import Header from '../Header.component';
import ProfileDescription from './ProfileDescription.component';

const ProfileDescriptionContainer = () => {
  return (
    <div>
      <Header title='Profile' />
      <ProfileDescription text="My name is Huy Nguyen, and I'm 20 years old. I graduated high school in the US. I'm learning code when I was in high school. For somehow I can't finish my Computer Science Degree, so I decide to learn code from online sources as Udemy, Youtube, FreeCodeCamp, and W3School..." />
    </div>
  );
};

export default ProfileDescriptionContainer;
