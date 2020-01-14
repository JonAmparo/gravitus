import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import Loading from '../layout/Loading';
import AddWorkoutButton from '../workouts/AddWorkoutButton';
import Workout from '../workoutsOLD/Workout';
import Workouts from '../workouts/Workouts';

const Dashboard = ({
  getCurrentProfile,
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
      <h1 className='text-center'>Dashboard</h1>

      {profile !== null ? (
        <Fragment>
          <AddWorkoutButton />
          <Workout workout={profile.workout} profile={profile} />
          <Workouts />
        </Fragment>
      ) : (
        <Fragment>
          <p>Hello {user.name}! Please set up your profile </p>
          <AddWorkoutButton />
          <Link to='/create-profile' className='btn btn-primary my-1'>
            Set up your profile
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
