import React from 'react';
import Context from '../../context/Context';
import Header from '../Header.component';
import SkillsBody from './SkillsBody.component';

const SkillsContainer = () => {
  const state = React.useContext(Context);
  return (
    <div>
      <Header title='Skills' />
      <SkillsBody skills={state.skills} />
    </div>
  );
};

export default SkillsContainer;
