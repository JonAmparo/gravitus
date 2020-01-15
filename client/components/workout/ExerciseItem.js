import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExercise } from '../../actions/workout';
import { FaEllipsisH } from 'react-icons/fa';

const ExerciseItem = ({
  workoutId,
  exercise: {
    _id,
    exercisename,
    text,
    user,
    reps,
    weight,
    reps2,
    weight2,
    reps3,
    weight3,
    reps4,
    weight4,
    reps5,
    weight5,
    reps6,
    weight6,
    reps7,
    weight7,
    reps8,
    weight8,
    reps9,
    weight9,
    reps10,
    weight10
  },
  auth,
  deleteExercise
}) => (
  <div className='border-bottom-dark pt-2'>
    <div className='row align-items-center'>
      <p className='lead mb-0'>{exercisename}</p>

      {!auth.loading && user === auth.user._id && (
        <a
          onClick={() => deleteExercise(workoutId, _id)}
          className='text-danger pointer ml-auto'
        >
          {/* todo: 
          1) add drop down
          2) edit exercise set
          3) delete exercise set
           */}
          <FaEllipsisH />
        </a>
      )}
    </div>

    <p className='text-muted'>
      {weight === null ? null : (
        <span>
          {weight}x{reps}
        </span>
      )}
      {weight2 === null ? null : (
        <span>
          , {weight2}x{reps2}
        </span>
      )}
      {weight3 === null ? null : (
        <span>
          , {weight3}x{reps3}
        </span>
      )}
      {weight4 === null ? null : (
        <span>
          , {weight4}x{reps4}
        </span>
      )}
      {weight5 === null ? null : (
        <span>
          , {weight5}x{reps5}
        </span>
      )}
      {weight6 === null ? null : (
        <span>
          , {weight6}x{reps6}
        </span>
      )}
      {weight7 === null ? null : (
        <span>
          , {weight7}x{reps7}
        </span>
      )}
      {weight8 === null ? null : (
        <span>
          , {weight8}x{reps8}
        </span>
      )}
      {weight9 === null ? null : (
        <span>
          , {weight9}x{reps9}
        </span>
      )}
      {weight10 === null ? null : (
        <span>
          , {weight10}x{reps10}
        </span>
      )}
    </p>
  </div>
);

ExerciseItem.propTypes = {
  workoutId: PropTypes.string.isRequired,
  exercise: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteExercise: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { deleteExercise })(ExerciseItem);
