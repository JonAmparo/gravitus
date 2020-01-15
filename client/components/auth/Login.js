import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import FormInput from '../util/FormInput';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to='/profile' />;
  }

  return (
    <Fragment>
      <h1 className='text-center'>Sign In</h1>
      <div className='row justify-content-center mt-5'>
        <div className='col-md-8 border border-secondary rounded p-4'>
          <p className='lead'>Sign Into Your Account</p>
          <form onSubmit={e => onSubmit(e)}>
            <FormInput
              type='email'
              label='Email Address'
              name='email'
              value={email}
              onChange={e => onChange(e)}
            />

            <FormInput
              type='password'
              label='Password'
              name='password'
              value={password}
              onChange={e => onChange(e)}
              minLength='6'
            />

            <input
              type='submit'
              className='btn btn-success float-right'
              value='Login'
            />
          </form>
          <p className='pt-4 pb-0'>
            Don't have an account? <Link to='/register'>Sign up</Link>
          </p>
        </div>
      </div>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
