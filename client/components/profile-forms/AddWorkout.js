import React, { Fragment, useState } from 'react';
import FormInput from '../util/FormInput';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addWorkout } from '../../actions/profile';
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
      <h1>Add An Workout</h1>
      <p className='lead'>
        <i className='fas fa-dumbbell' /> Add workout
      </p>

      <form
        onSubmit={e => {
          e.preventDefault();
          addWorkout(formData, history);
        }}
      >
        <FormInput
          type='text'
          label='* Workout Name'
          name='workoutname'
          value={workoutname}
          onChange={e => onChange(e)}
          required
        />

        <FormInput
          type='text'
          label='* Duration'
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
        />

        <input type='submit' className='btn btn-primary my-1 mr-2' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Go Back
        </Link>
      </form>

      <AddWorkoutExercise />
    </Fragment>
  );
};

AddWorkout.propTypes = {
  addWorkout: PropTypes.func.isRequired
};

export default connect(null, { addWorkout })(withRouter(AddWorkout));
