import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import gravitus_logo from '../../assets/images/gravitus_logo.svg';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

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

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <Fragment>
      {/* <NavList className='nav-item'>
        <Link to={'/'} className={'nav-link linkStyle m-1'}>
          Home
        </Link>
      </NavList> */}
      <NavList className='nav-item'>
        <Link to={'/workouts'} className={'nav-link linkStyle m-1'}>
          Workouts
        </Link>
      </NavList>
      <NavList className='nav-item'>
        <Link to={'/articles'} className={'nav-link linkStyle m-1'}>
          Articles
        </Link>
      </NavList>

      <NavList className='nav-item'>
        <Link to={'/exercises'} className={'nav-link linkStyle m-1'}>
          Exercises
        </Link>
      </NavList>
      <NavList className='nav-item'>
        <Link to={'/profile'} className={'nav-link linkStyle m-1'}>
          Profile
        </Link>
      </NavList>
      <NavList className='nav-item'>
        <a onClick={logout} href='#!' className={'nav-link linkStyle m-1'}>
          <i className='fas fa-sign-out-alt' />{' '}
          <span className='hide-sm'>Logout</span>
        </a>
      </NavList>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <NavList className='nav-item'>
        <Link to={'/'} className={'nav-link linkStyle m-1'}>
          Home
        </Link>
      </NavList>
      <NavList className='nav-item'>
        <Link to={'/articles'} className={'nav-link linkStyle m-1'}>
          Articles
        </Link>
      </NavList>

      <NavList className='nav-item'>
        <Link to={'/exercises'} className={'nav-link linkStyle m-1'}>
          Exercises
        </Link>
      </NavList>
      <NavList className='nav-item'>
        <Link to={'/login'} className={'nav-link linkStyle m-1'}>
          Login
        </Link>
      </NavList>
    </Fragment>
  );

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
            {!loading && (
              <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
            )}
          </ul>
        </div>
      </Nav>
    </div>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
