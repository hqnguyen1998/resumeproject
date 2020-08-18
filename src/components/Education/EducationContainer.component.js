import React from 'react';
import Header from '../Header.component';
import Education from './Education.component';

const educations = [
  {
    time: '2013 - 2015',
    description: 'Started to learn code online sources',
  },
  {
    time: '2015',
    description: 'Graduated High School',
  },
  {
    time: '2016',
    description: 'Enrolled Oakton Community College',
  },
  {
    time: '2017',
    description: 'Completed MERN STACK Course from Brad Traversy on Udemy',
  },
  {
    description: 'Graduated High School',
  },
  {
    description: 'Github Finder Project',
    project: 'https://github.1998.dev',
  },
  {
    description: 'SpaceX Apollo GraphQL Project',
    project: 'https://spacexapiql.herokuapp.com',
  },
  {
    time: 'now',
    description: 'Working on a small E-Commercial Full-Stack Projects ',
    project: 'https://doanvat-project.herokuapp.com',
  },
];

const EducationContainer = () => {
  return (
    <div>
      <Header title='Education & Projects' />
      <Education educations={educations} />
    </div>
  );
};

export default EducationContainer;
