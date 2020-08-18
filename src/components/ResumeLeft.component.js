import React from 'react';
import AvatarProfileContainer from './Avatar/AvatarProfileContainer.component';
import Contact from './Contact/ContactContainer.component';
import ProfileDescriptionContainer from './Profile/ProfileDescriptionContainer.component';
import SkillsContainer from './Skills/SkillsContainer.component';

const ResumeLeft = () => {
  return (
    <div>
      <AvatarProfileContainer />
      <Contact />
      <ProfileDescriptionContainer />
      <SkillsContainer />
    </div>
  );
};

export default ResumeLeft;
