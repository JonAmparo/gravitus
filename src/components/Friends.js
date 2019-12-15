import React from 'react';
import avatar from '../assets/images/avatar.png';
import { users } from '../dummy-data';

function Friends({ props, id }) {
    console.log('id:', id)
    console.log('props:', props)

  return (
    <div>
      {/* {id <= 2 ? ( */}
      <div className='border-bottom border-secondary'>
        <div className='row align-items-center my-1'>
          {/* <img
            src={imageURL.length < 2 ? avatar : imageURL}
            alt={name}
            className='profile'
          /> */}
          <div className='ml-3 mr-auto'>
            {/* <p>{name}</p> */}
            {/* {twitter ? (
              <a
                href={'https://www.twitter.com/' + twitter}
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fab fa-twitter'></i>
                {twitter}
              </a>
            ) : null} */}
          </div>
        </div>
      </div>
      {/* ) : null} */}
    </div>
  );
}

export default Friends;
