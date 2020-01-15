import React from 'react';
import { Link } from 'react-router-dom';

const AddWorkoutButton = () => {
  return (
    <div className='text-center'>
      <Link to='/add-workout' className='btn btn-success text-center'>
        <i className='fas fa-dumbbell text-light' /> New Workout
      </Link>
    </div>
  );
};

export default AddWorkoutButton;
