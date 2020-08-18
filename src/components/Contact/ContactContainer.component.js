import React from 'react';
import Header from '../Header.component';
import ContactBody from './ContactBody.component';

import {
  LocationOn,
  Phone,
  Email,
  Link,
  GitHub,
  Facebook,
} from '@material-ui/icons';

const contacts = [
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
];

const ContactContainer = () => {
  return (
    <div>
      <Header title='Contact' />
      <ContactBody contacts={contacts} />
    </div>
  );
};

export default ContactContainer;
