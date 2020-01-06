import React, { Fragment, useState } from 'react';
import FormInput from '../util/FormInput';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addWorkout } from './AddWorkout';

const AddWorkout = ({ addWorkout, history }) => {
  const [exercise, setExercise] = useState([]);

  const AddExercise = () => {
    setExercise(exercise.concat(<AddExercises key={exercise.length} />));
  };

  return (
    <div className='mt-3 mb-5'>
      <h5>Add Exercise</h5>
      {exercise}
      <br />
      <br />
      <a className='text-primary pointer ' onClick={AddExercise}>
        + Exercise
      </a>
    </div>
  );
};

const AddExercises = () => {
  const [workoutSets, setWorkoutSets] = useState([]);
  const [formData, setFormData] = useState({
    exerciseName: ''
  });
  const { exerciseName } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const addSet = () => {
    setWorkoutSets(workoutSets.concat(<AddSets key={workoutSets.length} />));
  };

  return (
    <Fragment>
      <FormInput
        type='text'
        label='Exercise Name'
        name='exerciseName'
        value={exerciseName}
        onChange={e => onChange(e)}
        required
      />

      {workoutSets}

      <a className='text-primary pointer' onClick={addSet}>
        +
      </a>
    </Fragment>
  );
};

const AddSets = () => {
  const [formData, setFormData] = useState({
    reps: '',
    weight: ''
  });
  const { reps, weight } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <form>
      <div className='row align-items-center'>
        <div className='col-4'>
          <FormInput
            type='text'
            label='Reps'
            name='reps'
            value={reps}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className='col-1 text-muted'>x</div>
        <div className='col-4'>
          <FormInput
            type='text'
            label='Weight'
            name='weight'
            value={weight}
            onChange={e => onChange(e)}
            required
          />
        </div>
      </div>
    </form>
  );
};

AddWorkout.propTypes = {
  // addWorkout: PropTypes.func.isRequired
};

export default connect(null, { addWorkout })(withRouter(AddWorkout));
