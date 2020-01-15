import React, { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import gravitus_logo from '../../assets/images/gravitus_logo.svg';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/profile' />;
  }

  return (
    <section className='landing'>
      {/* Navbar guest link component */}
      <div className='container-fluid'>
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
            </ul>
          </div>
        </nav>
      </div>
      {/* End Navbar*/}
      <div className='landing-inner'>
        <h1 className='display-3'>GRAVITUS</h1>
        <h3 className='text-primary'>
          Powering the future&nbsp;of&nbsp;training.
        </h3>
        <div className='pt-3'>
          <Link to='/register' className='btn btn-lg btn-success mr-2'>
            Register
          </Link>
          <Link to='/login' className='btn btn-lg btn-outline-light'>
            Login
          </Link>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
