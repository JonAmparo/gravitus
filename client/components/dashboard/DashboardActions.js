import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
  return (
    <div className=''>
      <Link to='/add-workout' className='btn btn-success'>
        <i className='fas fa-dumbbell text-light' /> Add Workout 
      </Link>
    </div>
  );
};

export default DashboardActions;
