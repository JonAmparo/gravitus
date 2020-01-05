import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loading from './layout/Loading';
import { getCurrentProfile, deleteAccount } from '../actions/profile';
import Workout from './dashboard/Workout';

const ProfilePage = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Loading />
  ) : (
    <Fragment>
      <h1 className='text-center'>Profile</h1>
      <Fragment>
        <div className='my-2 row'>
          <div>
            <img
              style={{ height: '150px', width: '150px' }}
              src={user && user.avatar}
            />
          </div>
          <div className='p-2'>
            <h4>{user && user.name}</h4>
            <p>Last workout: Yesterday</p>
          </div>
          <div className='p-2 ml-auto'>
            <Link to='/edit-profile'>
              <button className='btn btn-outline-light m-2'>
                <i className='fas fa-user-plus' /> Edit Account
              </button>
            </Link>
            <br />
            <button
              className='btn btn-danger m-2'
              onClick={() => deleteAccount()}
            >
              <i className='fas fa-user-minus' /> Delete Account
            </button>
          </div>
        </div>
        <Workout workout={profile.workout} />
      </Fragment>
    </Fragment>
  );
};

ProfilePage.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  ProfilePage
);
