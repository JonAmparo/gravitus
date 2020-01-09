import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';
import { connect } from 'react-redux';
import { deleteWorkout } from '../../actions/profile';
import { FaThumbsUp } from 'react-icons/fa';

const Workout = ({ workout, profile, deleteWorkout }) => {
  const workouts = workout.map(work => (
    <div
      className='row align-items-center border-bottom border-dark my-2'
      key={work._id}
    >
      <img
        src={
          profile.user.avatar
          // < 2 ? <div>hi</div> : profile.user.avatar
        }
        alt={profile.user.name}
        className='profile'
      />
      <div className='ml-3 mr-auto'>
        <p className='text-secondary mb-3'>{profile.user.name}</p>
        <h5 className='text-white mb-3'>{work.workoutname}</h5>
        <p className='small text-muted mb-3'>
          <Moment format='MM/DD/YYYY'>{moment.utc(work.date)}</Moment> {' - '}
          {work.duration}
        </p>
      </div>

      <div className='ml-auto'>
        <a href='#fist' className='text-secondary'>
          <FaThumbsUp className='h3' />
        </a>
      </div>
    </div>
  ));

  return (
    <Fragment>
      <div>{workouts}</div>
    </Fragment>
  );
};

Workout.propTypes = {
  workout: PropTypes.array.isRequired,
  deleteWorkout: PropTypes.func.isRequired
};

export default connect(null, { deleteWorkout })(Workout);
