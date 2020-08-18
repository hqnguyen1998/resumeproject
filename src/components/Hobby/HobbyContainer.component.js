import React from 'react';
import Hobby from './Hobby.component';
import Header from '../Header.component';

const hobbies = ['Coding', 'Music', 'Coffee', 'Photography', 'Gym'];

const HobbyContainer = () => {
  return (
    <div>
      <Header title='Hobby' />
      <Hobby hobbies={hobbies} />
    </div>
  );
};

export default HobbyContainer;
