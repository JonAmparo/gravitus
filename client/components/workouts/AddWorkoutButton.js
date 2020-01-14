import React from 'react';
import { Link } from 'react-router-dom';

const AddWorkoutButton = () => {
  return (
    <Link to='/add-workout' className='btn btn-success'>
      <i className='fas fa-dumbbell text-light' /> Add Workout
    </Link>
  );
};

export default AddWorkoutButton;
