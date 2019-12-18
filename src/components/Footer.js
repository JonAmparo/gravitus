import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SOCIAL_PROFILES from '../assets/data/socialProfiles';

const FooterColumn = styled.div`
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const FooterText = styled.span`
  font-size: 0.94118rem;
  color: black;
  float: left;
`;

const FooterLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const SocialProfiles = () => (
  <div className='float-right'>
    {SOCIAL_PROFILES.map(SOCIAL_PROFILES => {
      return (
        <SocialProfile
          key={SOCIAL_PROFILES.id}
          socialProfile={SOCIAL_PROFILES}
        />
      );
    })}
  </div>
);

const SocialProfile = props => {
  const { link, image } = props.socialProfile;
  return (
    <span className='mx-2'>
      <a href={link} target='_blank' rel='noopener noreferrer'>
        <img
          src={image}
          alt='social-profile'
          style={{ width: 35, height: 35, fill: 'blue' }}
          className='pb-0'
        />
      </a>
    </span>
  );
};

const OtherLinks = () => {
  return (
    <FooterText>
      ©2015-2019 Gravitus, Inc. |{' '}
      <FooterLink to='/gravitus/privacy'>Privacy Policy</FooterLink>
      &nbsp; | &nbsp;
      <FooterLink to='/gravitus/support'>Support</FooterLink>
      &nbsp; | &nbsp;
      <FooterLink to='/gravitus/contact'>Contact</FooterLink>
      &nbsp; | &nbsp;
    </FooterText>
  );
};

export default function Footer() {
  return (
    <div className='container-fluid bg-light border-top border-dark pt-3 pb-2'>
      <div className='row align-items-center justify-content-center'>
        <FooterColumn className='col-md-7'>
          <OtherLinks />
        </FooterColumn>
        <FooterColumn className='col-md-5 '>
          <SocialProfiles />
        </FooterColumn>
      </div>
    </div>
  );
}
