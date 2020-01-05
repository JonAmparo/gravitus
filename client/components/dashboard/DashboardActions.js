import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
  return (
    <div>
      <Link to='/add-workout' className='btn btn-light'>
        <i className='fas fa-dumbbell text-primary' /> Add Workout
      </Link>
    </div>
  );
};

export default DashboardActions;
