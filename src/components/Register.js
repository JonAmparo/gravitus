import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormInput from './FormInput';
import Button from './Button';

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    email: '',
    password: '',
    image: ''
  });

  const { firstName, lastName, gender, email, password, image } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  console.log(onChange);

  const onSubmit = () => {
    console.log('submitted');
  };

  return (
    <React.Fragment>
      <div className='row justify-content-center mt-5'>
        <div className='col-md-8 border border-secondary rounded p-4'>
          <h1 className='text-center'>Register!</h1>
          <form>
            <FormInput
              label='First Name'
              name='First Name'
              type='text'
              onChange={e => onChange(e)}
              required
            />
            <FormInput
              label='Last Name'
              name='Last Name'
              type='text'
              onChange={e => onChange(e)}
              required
            />
            <label className="text-secondary">Select a gender:</label> <br />
            <select name='Gender'>
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
              <option value='Other'>Other</option>
            </select>
            <FormInput
              label='Gender'
              name='Gender'
              type='text'
              onChange={e => onChange(e)}
              required
            />
            <FormInput
              label='Email'
              name='Email'
              type='email'
              onChange={e => onChange(e)}
              required
            />
            <FormInput
              label='Password'
              name='Password'
              type='password'
              onChange={e => onChange(e)}
              required
            />
            <label className="text-secondary">Please upload an Avatar:</label>
            <FormInput
              name='myFile'
              type='file'
              inputClassName=''
              onChange={e => onChange(e)}
              required
            />
            <div className='float-right'>
              <Button
                type='submit'
                label='Submit'
                onClick={onSubmit}
                className='btn btn-success mr-2 p-2'
              />
              <Button type='reset' label='Reset' className='btn btn-danger p-2' />
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}
