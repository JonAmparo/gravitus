import React, { Fragment, useState } from 'react';
import FormInput from '../util/FormInput';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { addWorkout } from '../../actions/profile';
import { addWorkout } from '../../actions/workout';
import AddWorkoutExercise from './AddWorkoutExercise';

const AddWorkout = ({ addWorkout, history }) => {
  const [formData, setFormData] = useState({
    workoutname: '',
    duration: '',
    volume: '',
    description: ''
  });

  const { workoutname, duration, volume, description } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <h1 className='text-center'>Add workout</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          addWorkout(formData, history);
          history.push('/workouts')
        }}
      >
        <FormInput
          type='text'
          label='Workout Name'
          name='workoutname'
          value={workoutname}
          onChange={e => onChange(e)}
          required
        />
{/* 
        <FormInput
          type='text'
          label='Duration'
          name='duration'
          value={duration}
          onChange={e => onChange(e)}
          required
        />

        <FormInput
          type='textarea'
          name='description'
          label='Workout Description'
          value={description}
          onChange={e => onChange(e)}
        /> */}

        <input type='submit' className='btn btn-primary my-1 mr-2' />
        <Link className='btn btn-light my-1' to='/workouts'>
          Go Back
        </Link>
      </form>

      {/* Todo: if adding dynamic AddWorkoutExercise doesn't work. Make link to created exercise and append exercises into workout */}
      {/* <AddWorkoutExercise /> */}
    </Fragment>
  );
};

AddWorkout.propTypes = {
  addWorkout: PropTypes.func.isRequired
};

export default connect(null, { addWorkout })(withRouter(AddWorkout));
