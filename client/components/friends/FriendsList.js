import React, { Fragment } from 'react';
import avatar from '../../assets/images/avatar.png';
import { users } from '../../assets/data/dummy-data';

function FriendsList() {
  return (
    <Fragment>
      {users.map((user, index) =>
        user.id > 0 && user.id < 3 ? (
          <div className='border-bottom border-dark' key={index}>
            <div className='row align-items-center my-1'>
              <img
                src={user.imageURL.length < 2 ? avatar : user.imageURL}
                alt={user.name}
                className='profile'
              />
              <div className='ml-3 mr-auto'>
                <h6>{user.name}</h6>
                {user.twitter ? (
                  <a
                    href={'https://www.twitter.com/' + user.twitter}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i className='fab fa-twitter'></i>
                    {user.twitter}
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        ) : null
      )}
    </Fragment>
  );
}

export default FriendsList;
