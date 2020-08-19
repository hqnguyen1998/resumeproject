import React from 'react';
import { ContextProvider } from './context/Context';
import ResumeContainer from './components/ResumeContainer.component';

import {
  LocationOn,
  Phone,
  Email,
  Link,
  GitHub,
  Facebook,
} from '@material-ui/icons';

function App() {
  const state = {
    profile: {
      name: 'Nguyen Quang Huy',
      title: 'Web Developer',
      avatar:
        'https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/80898940_888625658225716_4781715845166399488_n.jpg?_nc_cat=108&_nc_sid=174925&_nc_ohc=9H0JB-iJs9wAX-P1y9x&_nc_ht=scontent-ort2-1.xx&oh=5b58eb21abf466a7ce440a452260c6d2&oe=5F6323A4',
    },
    contact: [
      {
        title: 'Morton Grove, 60053',
        link:
          'https://www.google.com/maps/place/Morton+Grove,+IL+60053/@42.0426397,-87.8113611,14z/data=!3m1!4b1!4m5!3m4!1s0x880fc8bbd9d66205:0xb77e9e491a69454!8m2!3d42.0421545!4d-87.7910891',
        icon: <LocationOn color='primary' />,
      },
      {
        title: '312-459-8472',
        link: 'tel:312-459-8472',
        icon: <Phone color='primary' />,
      },
      {
        title: 'hqnguyen1998@gmail.com',
        link: 'mailto:hqnguyen1998@gmail.com',
        icon: <Email color='primary' />,
      },
      {
        title: '1998.dev',
        link: 'https://www.1998.dev',
        icon: <Link color='primary' />,
      },
      {
        title: 'Github: hqnguyen1998',
        link: 'https://github.com/hqnguyen1998',
        icon: <GitHub color='primary' />,
      },
      {
        title: 'Fb: Qi Nguyen',
        link: 'https://www.facebook.com/JerryQ.Nguyen/',
        icon: <Facebook color='primary' />,
      },
    ],
    summary:
      "My name is Huy Nguyen, and I'm 20 years old. I graduated high school in the US. I'm learning code when I was in high school. For somehow I can't finish my Computer Science Degree, so I decide to learn code from online sources as Udemy, Youtube, FreeCodeCamp, and W3School...",
    skills: [
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
    ],
    educations: [
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
    ],
    hobbies: ['Coding', 'Music', 'Coffee', 'Photography', 'Gym'],
  };

  return (
    <ContextProvider value={state}>
      <ResumeContainer />
    </ContextProvider>
  );
}

export default App;
