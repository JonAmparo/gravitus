import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../assets/images/gravitus-text.png';

function Header(props) {
  const { location } = props;

  return (
    <nav className='navbar navbar-expand-sm'>
      <Link to={'/'} className='navbar-brand'>
        <img className='nav-logo' src={logo} alt='Logo'></img>
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarsExample03'
        aria-controls='navbarsExample03'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <i className='fas fa-bars'></i>
      </button>

      <div className='collapse navbar-collapse' id='navbarsExample03'>
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item'>
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
          </li>
          <li className='nav-item'>
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
          </li>
         
          <li className='nav-item'>
            <Link
              to={'/friends'}
              className={
                location.pathname === '/friends'
                  ? 'nav-link active m-1'
                  : 'nav-link linkStyle m-1'
              }
            >
              Friends
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to={'/dashboard'}
              className={
                location.pathname === '/dashboard'
                  ? 'nav-link active m-1'
                  : 'nav-link linkStyle m-1'
              }
            >
              Dashboard
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to={'/profile'}
              className={
                location.pathname === '/profile'
                  ? 'nav-link active m-1'
                  : 'nav-link linkStyle m-1'
              }
            >
              Profile
            </Link>
          </li>
          <li className='nav-item'>
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
          </li>
          <li className='nav-item'>
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
          </li>
        </ul>
      </div>
    </nav>
  );
}

Header.propTypes = {
  location: PropTypes.object.isRequired
};

export default withRouter(Header);
