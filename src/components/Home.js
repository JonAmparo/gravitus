import React from 'react';
import UserWorkout from './UserWorkout';
import { users } from '../assets/data/dummy-data';

export default function Home() {
  return (
    <React.Fragment>
      <h1 className='text-center'>Home Page</h1>
      <div className='my-2'>
        <ul>
          {users.map(item =>
            // If id = 1, then show user id with 1
            item.id === 2
              ? // ? item.workout.reverse().map(workout => (
                item.workout.map(workout => (
                  <UserWorkout
                    key={item.id + item.name + workout.workoutId}
                    id={item.id}
                    imageURL={item.imageURL}
                    name={item.name}
                    workout={workout.workout}
                    workoutId={workout.workoutId}
                    workoutName={workout.name}
                    workoutDuration={workout.duration}
                    workoutDate={workout.date.toLocaleDateString('default', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                    thumbsup
                  />
                ))
              : null
          )}
        </ul>
      </div>
    </React.Fragment>
  );
}
