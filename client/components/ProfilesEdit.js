import React, { useState } from 'react';
import Profile from './Profile';
import Loading from './layout/Loading';
import Button from './util/Button';
import FormInput from './util/FormInput';

function Profiles(props) {
  const [id, setId] = React.useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    email: '',
    image: ''
  });

  React.useEffect(() => {
    setId(() => null); // not needed
    setId(2); // Change for different profiles
  }, []);

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    editName();
  };

  const editProfile = () => {
    if (id) {
      console.log('editProfile was pressed');
    }
  };

  const onSubmit = () => {
    console.log('submitted');
  };

  return (
    <React.Fragment>
      <h1 className='text-center'>Edit Profile</h1>
      <Profile id={id}>
        {profile =>
          profile === null ? (
            <Loading />
          ) : (
            <React.Fragment>
              <div className='row align-items-center'>
                <img
                  className='profile'
                  src={profile.imageURL}
                  alt={profile.name}
                />

                <form>
                  <FormInput
                    label='First Name'
                    name='First Name'
                    type='text'
                    onChange={handleSubmit}
                    required
                  />
                  <FormInput
                    label='Last Name'
                    name='Last Name'
                    type='text'
                    onChange={e => onChange(e)}
                    required
                  />
                  <label className='text-secondary'>Select a gender:</label>{' '}
                  <br />
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
                  <label className='text-secondary'>
                    Please upload an Avatar:
                  </label>
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
                    <Button
                      type='reset'
                      label='Reset'
                      className='btn btn-danger p-2'
                    />
                  </div>
                </form>
              </div>
            </React.Fragment>
          )
        }
      </Profile>
    </React.Fragment>
  );
}

export default Profiles;
