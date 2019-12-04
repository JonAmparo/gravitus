import React from 'react';
import { users } from '../dummy-data';

export default function Home() {
  return (
    <div>
      <h1 className='text-center'>Home Page</h1>
      <div className='my-2'>
        <ul>
          {console.log('profile:', users[0].id)}
          <div>
            {/* {users.map((user, index) => {
              user.workout.map(workout => <div key={index}></div>);
            })} */}
          </div>
        </ul>
      </div>
    </div>
  );
}
