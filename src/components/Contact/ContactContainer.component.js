import React from 'react';
import Context from '../../context/Context';
import Header from '../Header.component';
import ContactBody from './ContactBody.component';

const ContactContainer = () => {
  const state = React.useContext(Context);

  return (
    <div>
      <Header title='Contact' />
      <ContactBody contacts={state.contact} />
    </div>
  );
};

export default ContactContainer;
