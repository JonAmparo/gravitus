import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import gravitus_logo from '../assets/images/gravitus_logo.svg';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #22262a;
`;
const NavLogo = styled.img`
  height: 4.5rem;
  width: 4.5rem;
  margin-top: 1rem;
`;

const NavList = styled.li`
  text-align: center;
`;

function Header(props) {
  const { location } = props;

  return (
    <div className='container-fluid bg-site'>
      <Nav className='navbar navbar-expand-md'>
        <div className='row align-items-center'>
          <Link to={'/'}>
            <NavLogo src={gravitus_logo} className='nav-logo' alt='Logo' />
          </Link>
          <h3>Gravitus</h3>
        </div>

        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarTogglerDemo01'
          aria-controls='navbarTogglerDemo01'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <i className='fas fa-bars text-light'></i>
        </button>
        <div className='collapse navbar-collapse' id='navbarTogglerDemo01'>
          <ul className='navbar-nav ml-auto'>
            <NavList className='nav-item'>
              <Link
                to={'/'}
                className={
                  location.pathname === '/'
                    ? 'nav-link active m-1'
                    : 'nav-link linkStyle m-1'
                }
              >
                Home
              </Link>
            </NavList>
            <NavList className='nav-item'>
              <Link
                to={'/articles'}
                className={
                  location.pathname === '/articles'
                    ? 'nav-link active m-1'
                    : 'nav-link linkStyle m-1'
                }
              >
                Articles
              </Link>
            </NavList>

            <NavList className='nav-item'>
              <Link
                to={'/exercises'}
                className={
                  location.pathname === '/exercises'
                    ? 'nav-link active m-1'
                    : 'nav-link linkStyle m-1'
                }
              >
                Exercises
              </Link>
            </NavList>
            <NavList className='nav-item'>
              <Link
                to={'/profiles'}
                className={
                  location.pathname === '/profiles'
                    ? 'nav-link active m-1'
                    : 'nav-link linkStyle m-1'
                }
              >
                Profiles
              </Link>
            </NavList>
            {/* <NavList className='nav-item'>
              <Link
                to={'/login'}
                className={
                  location.pathname === '/login'
                    ? 'nav-link active m-1'
                    : 'nav-link linkStyle m-1'
                }
              >
                Login
              </Link>
            </NavList> */}
          </ul>
        </div>
      </Nav>
    </div>
  );
}

Header.propTypes = {
  location: PropTypes.object.isRequired
};

export default withRouter(Header);
