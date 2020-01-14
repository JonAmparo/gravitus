import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteExercise } from '../../actions/workout';

const ExerciseItem = ({
  workoutId,
  exercise: {
    _id,
    exercisename,
    text,
    name,
    avatar,
    user,
    date,
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
  <div className='workout p-1 my-1'>
    <h2>{exercisename}</h2>
    <h4>{date}</h4>
    <div>
      {weight === null ? null : (
        <h6>
          Set: 1 {reps} x {weight}
        </h6>
      )}
      {weight2 === null ? null : (
        <h6>
          Set: 2 {reps2} x {weight2}
        </h6>
      )}
      {weight3 === null ? null : (
        <h6>
          Set: 3 {reps3} x {weight3}
        </h6>
      )}
      {weight4 === null ? null : (
        <h6>
          Set: 4 {reps4} x {weight4}
        </h6>
      )}
      {weight5 === null ? null : (
        <h6>
          Set: 5 {reps5} x {weight5}
        </h6>
      )}
      {weight6 === null ? null : (
        <h6>
          Set: 6 {reps6} x {weight6}
        </h6>
      )}
      {weight7 === null ? null : (
        <h6>
          Set: 7 {reps7} x {weight7}
        </h6>
      )}
      {weight8 === null ? null : (
        <h6>
          Set: 8 {reps8} x {weight8}
        </h6>
      )}
      {weight9 === null ? null : (
        <h6>
          Set: 9 {reps9} x {weight9}
        </h6>
      )}
      {weight10 === null ? null : (
        <h6>
          Set: 10 {reps10} x {weight10}
        </h6>
      )}
    </div>

    <div className='row align-items-center '>
      <div>
        <p className='my-1'>{text}</p>
      </div>
      <div>
        {!auth.loading && user === auth.user._id && (
          <button
            onClick={() => deleteExercise(workoutId, _id)}
            type='button'
            className='btn btn-danger'
          >
            <i className='fas fa-times' />
          </button>
        )}
      </div>
    </div>
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
