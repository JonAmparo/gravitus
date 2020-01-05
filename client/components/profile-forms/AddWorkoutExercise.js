import React, { Fragment, useState } from 'react';
import FormInput from '../util/FormInput';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addWorkout } from '../../actions/profile';

const AddExercises = () => {
  const [formData, setFormData] = useState({
    workoutname: '',
    duration: '',
    volume: '',
    description: ''
  });

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const { workoutname, duration, volume, description } = formData;

  return (
    <form>
      <FormInput
        type='text'
        label='Exercise Name'
        name='workoutname'
        value={workoutname}
        onChange={e => onChange(e)}
        required
      />
    </form>
  );
};

const AddSets = () => {
  const [formData, setFormData] = useState({
    workoutname: '',
    duration: '',
    volume: '',
    description: ''
  });

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const { workoutname, duration, volume, description } = formData;

  return (
    <form>
      <div className='row'>
        <div className='col-md-6'>
          <FormInput
            type='text'
            label='Reps'
            name='workoutname'
            value={workoutname}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className='col-md-6'>
          <FormInput
            type='text'
            label='Weight'
            name='workoutname'
            value={workoutname}
            onChange={e => onChange(e)}
            required
          />
        </div>
      </div>
    </form>
  );
};

const AddWorkout = ({ addWorkout, history }) => {
  const [workoutSets, setWorkoutSets] = useState([]);
  const [exercise, setExercise] = useState([]);

  const [formData, setFormData] = useState({
    workoutname: '',
    duration: '',
    volume: '',
    description: ''
  });
  const { workoutname, duration, volume, description } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const addSet = () => {
    setWorkoutSets(workoutSets.concat(<AddSets key={workoutSets.length} />));
  };

  const AddExercise = () => {
    setExercise(exercise.concat(<AddExercises key={exercise.length} />));
  };

  return (
    <Fragment>
      <h5>Add Exercise</h5>

      <form>
        <FormInput
          type='text'
          label='Exercise Name'
          name='workoutname'
          value={workoutname}
          onChange={e => onChange(e)}
          required
        />
      </form>

      {workoutSets}
      {exercise}

      <button className='btn btn-outline-light' onClick={addSet}>
        +
      </button>
      <br />
      <br />

      <button className='btn btn-outline-light' onClick={AddExercise}>
        + Exercise
      </button>
    </Fragment>
  );
};

AddWorkout.propTypes = {
  addWorkout: PropTypes.func.isRequired
};

export default connect(null, { addWorkout })(withRouter(AddWorkout));
