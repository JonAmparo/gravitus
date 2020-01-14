import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loading from '../layout/Loading';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import Workouts from '../workouts/Workouts';
import Workout from '../workouts/Workout';
import FriendsList from '../friends/FriendsList';
import WorkoutItem from '../workouts/WorkoutItem';

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
      {profile !== null ? (
        <Fragment>
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
                    Edit Profile
                  </button>
                </Link>
                <br />
                <button
                  className='btn btn-danger m-2'
                  onClick={() => deleteAccount()}
                >
                  Delete Profile
                </button>
              </div>
            </div>

            <h6 className='separatorLine text-secondary row'>
              RECENT WORKOUTS
            </h6>
            {/* <Workouts workout={profile.workout} profile={profile} /> */}
            <Workout workout={profile.workout} profile={profile} />

            {/* Todo: limit 2 workouts  map slice(0,2)*/}
            {/* todo: clickable workouts */}
            {/* todo: view all workouts */}

            <div className='my-2'>
              <h6 className='separatorLine text-secondary row'>FRIENDS</h6>
              <FriendsList />
            </div>
            {/* Todo: Add friends 2 max map slice(0,2) maybe random/last added */}
            {/* <Friends /> */}
          </Fragment>
        </Fragment>
      ) : (
        <Fragment>
          <h3>Set up profile</h3>
          <p>Hello {user.name}! Please set up your profile </p>
          {/* <AddWorkoutButton /> */}
          <Link to='/create-profile' className='btn btn-primary my-1'>
            Set up your profile
          </Link>
          {/* <AddWorkoutButton />
        <Workout workout={profile.workout} profile={profile} /> */}
          {/* <Workouts /> */}
        </Fragment>
      )}
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
