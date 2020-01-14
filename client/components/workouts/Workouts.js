import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Loading from '../layout/Loading';
import WorkoutItem from './WorkoutItem';
import { getWorkouts } from '../../actions/workout';
import AddWorkoutButton from './AddWorkoutButton';

const Workouts = ({ getWorkouts, workout: { workouts, loading } }) => {
  useEffect(() => {
    getWorkouts();
  }, [getWorkouts]);

  return loading ? (
    <Loading />
  ) : (
    <Fragment>
      <div className='workouts'>
        {workouts.map(workout => (
          <WorkoutItem key={workout._id} workout={workout} />
        ))}
      </div>
    </Fragment>
  );
};

Workouts.propTypes = {
  getWorkouts: PropTypes.func.isRequired,
  workout: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  workout: state.workout
});

export default connect(mapStateToProps, { getWorkouts })(Workouts);
