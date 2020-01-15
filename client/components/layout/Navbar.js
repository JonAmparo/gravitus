import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import gravitus_logo from '../../assets/images/gravitus_logo.svg';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout, props }) => {
  console.log('props', props);
  const authLinks = (
    <Fragment>
      <li className='nav-item'>
        <Link to={'/workouts'} className={'nav-link text-light m-1'}>
          Workouts
        </Link>
      </li>
      <li className='nav-item'>
        <Link to={'/articles'} className={'nav-link text-light m-1'}>
          Articles
        </Link>
      </li>

      <li className='nav-item'>
        <Link to={'/exercises'} className={'nav-link text-light m-1'}>
          Exercises
        </Link>
      </li>
      <li className='nav-item'>
        <Link to={'/profile'} className={'nav-link text-light m-1'}>
          Profile
        </Link>
      </li>
      <li className='nav-item'>
        <a onClick={logout} href='#!' className={'nav-link text-light m-1'}>
          <i className='fas fa-sign-out-alt' />{' '}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li className='nav-item'>
        <Link to={'/'} className={'nav-link text-light m-1'}>
          Home
        </Link>
      </li>
      <li className='nav-item'>
        <Link to={'/articles'} className={'nav-link text-light m-1'}>
          Articles
        </Link>
      </li>

      <li className='nav-item'>
        <Link to={'/exercises'} className={'nav-link text-light m-1'}>
          Exercises
        </Link>
      </li>
      <li className='nav-item'>
        <Link to={'/login'} className={'nav-link text-light m-1'}>
          Login
        </Link>
      </li>
      <li className='nav-item'>
        <Link
          to={'/register'}
          className={'btn btn-success nav-link text-light m-1'}
        >
          Register
        </Link>
      </li>
    </Fragment>
  );

  return (
    <Fragment>
      <div className='bg-gravitus container-fluid'>
        <nav className='navbar navbar-expand-md '>
          <div className='row align-items-center'>
            <Link to={'/'}>
              <img src={gravitus_logo} className='nav-logo' alt='Logo' />
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
        </nav>
      </div>
    </Fragment>
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
