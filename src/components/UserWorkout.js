import React from 'react';
import avatar from '../assets/images/bbcom.jpg';
import { FaThumbsUp } from 'react-icons/fa';

function UserWorkout({
  id,
  name,
  imageURL,
  workoutDuration,
  workoutName,
  workoutDate,
  thumbsup
}) {
  return (
    <li>
      <div className='row align-items-center border-bottom border-dark my-2'>
        <img
          src={imageURL.length < 2 ? avatar : imageURL}
          alt={name}
          className='profile'
        />
        <div className='ml-3 mr-auto'>
          <p className='text-secondary mb-3'>{name}</p>
          <h5 className='text-white mb-3'>{workoutName}</h5>
          <p className='small text-muted mb-3'>
            {workoutDate} {' - '} {workoutDuration}
          </p>
        </div>

        {thumbsup ? (
          <div className='ml-auto'>
            <a href='#fist' className="text-secondary">
              <FaThumbsUp className="h3" />
            </a>
          </div>
        ) : null}
      </div>
    </li>
  );
}

export default UserWorkout;
