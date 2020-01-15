import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SOCIAL_PROFILES from '../../assets/data/socialProfiles';

const FooterColumn = styled.div`
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const FooterText = styled.span`
  font-size: 0.94118rem;
  color: black;
  // float: left;
`;

const FooterLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const SocialProfiles = () => (
  // <div className='float-right'>
  <div>
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
  const FooterSocial = styled.span`
    @media (min-width: 576px) {
      float: right;
    }
  `;

  const { link, image } = props.socialProfile;
  return (
    <FooterSocial className='mx-2'>
      <a href={link} target='_blank' rel='noopener noreferrer'>
        <img
          src={image}
          alt='social-profile'
          style={{ width: 35, height: 35, fill: 'blue' }}
          className='pb-0'
        />
      </a>
    </FooterSocial>
  );
};

const OtherLinks = () => {
  return (
    <FooterText>
      &nbsp; | &nbsp;
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
    <div className='container-fluid bg-light border-top border-dark py-3'>
      <div className='row align-items-center justify-content-between'>
        <FooterColumn className='col-sm-6 my-2'>
          <OtherLinks />
        </FooterColumn>
        <FooterColumn className='col-sm-6 my-2'>
          <SocialProfiles />
        </FooterColumn>
      </div>
      {/* <div className='row justify-content-center'>
        <FooterText>
          <div className='text-center pt-3 large'>
            ©2015-2019 Gravitus, Inc.
          </div>
        </FooterText>
      </div> */}
    </div>
  );
}
