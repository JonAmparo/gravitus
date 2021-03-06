import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Loading from '../layout/Loading';
import WorkoutItem from './WorkoutItem';
import WorkoutItem2 from './WorkoutItem2';
import { getWorkouts } from '../../actions/workout';
import AddWorkoutButton from './AddWorkoutButton';

const Workouts = ({
  auth,
  getWorkouts,
  workout: { workouts, loading, user }
}) => {
  useEffect(() => {
    getWorkouts();
  }, [getWorkouts]);

  return loading ? (
    <Loading />
  ) : (
    <Fragment>
      {/* {!auth.loading && user === auth.user._id && ( */}
      <div className='workouts'>
        {workouts.map(workout => (
          <WorkoutItem2 key={workout._id} workout={workout} />
        ))}
      </div>
      {/* )} */}
    </Fragment>
  );
};

Workouts.propTypes = {
  getWorkouts: PropTypes.func.isRequired,
  workout: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  workout: state.workout
});

export default connect(mapStateToProps, { getWorkouts })(Workouts);
