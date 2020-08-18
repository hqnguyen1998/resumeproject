import React from 'react';
import Header from '../Header.component';
import SkillsBody from './SkillsBody.component';

const skills = [
  {
    id: '0',
    title: 'HTML5 & CSS3',
    value: 80,
  },
  {
    id: '1',
    title: 'NodeJs',
    value: 65,
  },
  {
    id: '2',
    title: 'Javascript',
    value: 75,
  },
  {
    id: '3',
    title: 'ReactJs',
    value: 85,
  },
  {
    id: '4',
    title: 'Redux',
    value: 60,
  },
  {
    id: '5',
    title: 'Material-UI',
    value: 80,
  },
];

const SkillsContainer = () => {
  return (
    <div>
      <Header title='Skills' />
      <SkillsBody skills={skills} />
    </div>
  );
};

export default SkillsContainer;
