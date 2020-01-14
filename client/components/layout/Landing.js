import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/profile' />;
  }

  return (
    <section className='text-center mt-5 pt-5'>
      <h1>Gravitus</h1>
      <p className='lead'>You won't need another gym application</p>
      <div>
        <Link to='/register' className='btn btn-success mr-2'>
          Sign Up
        </Link>
        <Link to='/login' className='btn btn-outline-light'>
          Login
        </Link>
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
