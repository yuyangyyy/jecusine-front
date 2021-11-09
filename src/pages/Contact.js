import React from 'react';
import Navigation from '../components/Navigation';
import Formulaire from '../components/Formulaire';
import Logo from '../components/Logo';
const Contact = () => {
  return (
    <div className="contact">
      <Logo />
      <Navigation />
      <h1>Contact-us</h1>
      <Formulaire />
    </div>
  );
};

export default Contact;
