import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';
import { connect } from 'react-redux';
import { deleteWorkout } from '../../actions/profile';

const Workout = ({ workout, deleteWorkout }) => {
  const workouts = workout.map(work => (
    <tr key={work._id}>
      <td>{work.workoutname}</td>
      <td>{work.duration}</td>
      <td>{work.volume}</td>
      <td>{work.description}</td>
      <td>
        <Moment format='MM/DD/YYYY'>{moment.utc(work.date)}</Moment>
      </td>
      <td>
        <button
          onClick={() => deleteWorkout(work._id)}
          className='btn btn-danger'
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className='my-2'>Workouts</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Workout Name</th>
            <th>Duration</th>
            <th>Volume</th>
            <th>Description</th>
            <th>Date</th>
            <th />
          </tr>
        </thead>
        <tbody>{workouts}</tbody>
      </table>
    </Fragment>
  );
};

Workout.propTypes = {
  workout: PropTypes.array.isRequired,
  deleteWorkout: PropTypes.func.isRequired
};

export default connect(null, { deleteWorkout })(Workout);
