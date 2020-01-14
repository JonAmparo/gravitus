import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Loading from '../layout/Loading';
import WorkoutItem from '../workouts/WorkoutItem';
import ExerciseItem from '../workout/ExerciseItem';
import { getWorkout } from '../../actions/workout';
import AddExercise from './AddExercise';

const Workout = ({ getWorkout, workout: { workout, loading }, match }) => {
  useEffect(() => {
    getWorkout(match.params.id);
  }, [getWorkout, match.params.id]);

  return loading || workout === null ? (
    <Loading />
  ) : (
    <Fragment>
      <h1 className='text-center'>Edit Workout</h1>
      <Link to='/workouts' className='btn btn-outline-light'>
        Back to Workouts
      </Link>
      <WorkoutItem workout={workout} showActions={false} />
      <div className='exercises'>
        {workout.exercise.map(exercise => (
          <ExerciseItem
            key={exercise._id}
            exercise={exercise}
            workoutId={workout._id}
          />
        ))}
      </div>
      <AddExercise workout={workout} workoutId={workout._id} showActions={false}  />
    </Fragment>
  );
};

Workout.propTypes = {
  getWorkout: PropTypes.func.isRequired,
  workout: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  workout: state.workout
});

export default connect(mapStateToProps, { getWorkout })(Workout);
