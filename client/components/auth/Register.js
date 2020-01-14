import React, { Fragment, useState } from 'react';
import FormInput from '../util/FormInput';
import Button from '../util/Button';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    email: '',
    password: '',
    password2: '',
    image: ''
  });

  const { name, gender, email, password, password2, image } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to='/profile' />;
  }

  return (
    <Fragment>
      <div className='row justify-content-center mt-5'>
        <div className='col-md-8 border border-secondary rounded p-4'>
          <h1 className='text-center'>Register!</h1>
          <form onSubmit={e => onSubmit(e)}>
            <FormInput
              label='Name'
              name='name'
              type='text'
              value={name}
              onChange={e => onChange(e)}
              required
            />
            {/* <label className='text-secondary'>Select a gender:</label> <br />
            <select name='Gender' value={gender} onChange={e => onChange(e)}>
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
            </select> */}
            <FormInput
              label='Email'
              name='email'
              type='email'
              value={email}
              onChange={e => onChange(e)}
              required
            />
            <FormInput
              label='Password'
              name='password'
              type='password'
              value={password}
              onChange={e => onChange(e)}
              required
            />
            <FormInput
              label='Confirm Password'
              name='password2'
              type='password'
              value={password2}
              onChange={e => onChange(e)}
              required
            />
            {/* <label className='text-secondary'>Please upload an Avatar:</label>
            <FormInput
              name='myFile'
              type='file'
              inputClassName=''
              value={image}
              onChange={e => onChange(e)}
            /> */}
            <div className='float-right'>
              <input
                type='submit'
                value='Register'
                label='Submit'
                className='btn btn-success mr-2 p-2'
              />
              {/* <Button
                type='submit'
                value='Register'
                label='Submit'
                className='btn btn-success mr-2 p-2'
              /> */}
              <Button
                type='reset'
                label='Reset'
                className='btn btn-danger p-2'
              />
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);
