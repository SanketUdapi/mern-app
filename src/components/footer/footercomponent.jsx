import React from 'react';

import {
  FooterContainer,
  SocialLogo,
} from './FooterElements';


const Footer = () => {
  return (
    <FooterContainer>
      <SocialLogo to='/'>© Vijay Bhavan Sweet Mart {new Date().getFullYear()}</SocialLogo>
    </FooterContainer>
  );
};

export default Footer;