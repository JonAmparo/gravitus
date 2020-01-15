import React, { Fragment, useState } from 'react';
import FormInput from '../util/FormInput';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { addWorkout } from '../../actions/profile';
import { addWorkout } from '../../actions/workout';
import AddWorkoutExercise from './AddWorkoutExercise';
import { IoIosArrowBack } from 'react-icons/io';

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

  console.log('history 1', history);

  return (
    <Fragment>
      <h1 className='text-center'>Add workout</h1>
      <Link to='/workouts' className='text-danger'>
        <IoIosArrowBack className='h4' />
        Back
      </Link>
      <form
        onSubmit={e => {
          e.preventDefault();
          addWorkout(formData, history);
          console.log('history 2', history);
          history.push('/workouts');
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

        <input type='submit' className='btn btn-success my-1 mr-2' />

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
