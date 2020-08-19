import React from 'react';
import Context from '../../context/Context';
import Header from '../Header.component';
import Education from './Education.component';

const EducationContainer = () => {
  const state = React.useContext(Context);
  return (
    <div>
      <Header title='Education & Projects' />
      <Education educations={state.educations} />
    </div>
  );
};

export default EducationContainer;
