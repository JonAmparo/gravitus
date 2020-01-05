import React from 'react';
import avatar from '../assets/images/avatar.png';
// import { users } from '../dummy-data';

function FriendsList({
  id,
  name,
  imageURL,
  occupation,
  bio,
  website,
  twitter,
  facebook,
  linkedIn,
  workout,
  date,
  duration,
  workoutId,
  workoutDuration,
  workoutName,
  workoutDate
}) {
  return (
    <div>
      {/* {id <= 2 ? ( */}
      <div className='border-bottom border-dark'>
        <div className='row align-items-center my-1'>
          <img
            src={imageURL.length < 2 ? avatar : imageURL}
            alt={name}
            className='profile'
          />
          <div className='ml-3 mr-auto'>
            <h3>{name}</h3>
            {twitter ? (
              <a
                href={'https://www.twitter.com/' + twitter}
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fab fa-twitter'></i>
                {twitter}
              </a>
            ) : null}
          </div>
        </div>
      </div>
      {/* ) : null} */}
    </div>
  );
}

export default FriendsList;
