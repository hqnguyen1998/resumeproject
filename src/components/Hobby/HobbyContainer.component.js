import React from 'react';
import Context from '../../context/Context';
import Hobby from './Hobby.component';
import Header from '../Header.component';

const HobbyContainer = () => {
  const state = React.useContext(Context);
  return (
    <div>
      <Header title='Hobby' />
      <Hobby hobbies={state.hobbies} />
    </div>
  );
};

export default HobbyContainer;
