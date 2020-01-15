import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { addLike, deleteWorkout } from '../../actions/workout';
import { FaThumbsUp } from 'react-icons/fa';

const WorkoutItem2 = ({
  addLike,
  deleteWorkout,
  auth,
  workout: { _id, workoutname, name, avatar, user, likes, duration, date },
  showActions
}) => (
  <Fragment>
    {!auth.loading && user === auth.user._id && (
      <div className='row align-items-center border-bottom border-dark my-2'>
        <Fragment>
          <div>
            <Link to={`/workouts/${_id}`}>
              <img className='profile' src={avatar} alt={name} />
            </Link>
          </div>
          <Link to={`/workouts/${_id}`} className='ml-3 mr-auto'>
            <p className='text-secondary mb-3'>{name}</p>
            <h5 className='text-white mb-3'>{workoutname}</h5>
            <p className='small text-muted mb-3'>
              <Moment format='YYYY/MM/DD'>{date}</Moment>
            </p>
          </Link>
          <div className='float-right'>
            {showActions && (
              <Fragment>
                <a
                  className='text-secondary pointer'
                  onClick={() => addLike(_id)}
                >
                  <span className='ml-2 h5 text-light'>
                    {likes.length > 0 && <span>{likes.length}</span>}
                  </span>
                  <br />
                  <FaThumbsUp className='h3' />
                </a>
                <br />
                {!auth.loading && user === auth.user._id && (
                  <button
                    onClick={() => deleteWorkout(_id)}
                    type='button'
                    className='btn btn-danger'
                  >
                    x
                  </button>
                )}
              </Fragment>
            )}
          </div>
        </Fragment>
      </div>
    )}
  </Fragment>
);

WorkoutItem2.defaultProps = {
  showActions: true
};

WorkoutItem2.propTypes = {
  workout: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  deleteWorkout: PropTypes.func.isRequired,
  showActions: PropTypes.bool
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { addLike, deleteWorkout })(
  WorkoutItem2
);
