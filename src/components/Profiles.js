import React from 'react';
import Profile from './Profile';
import UserWorkout from './UserWorkout';
import FriendsList from './FriendsList';
import Loading from './Loading';
// import { users } from '../dummy-data';

function Profiles(props) {
  // console.log('props:', props)
  const [id, setId] = React.useState(0);
  // console.log('id:', typeof id);
  // console.log('props Profiles: ', props);

  React.useEffect(() => {
    setId(() => null); // not needed
    setId(2); // Change for different profiles
  }, []);

  return (
    <React.Fragment>
      <h1 className='text-center'>Profile</h1>
      <Profile id={id}>
        {profile =>
          profile === null ? (
            <Loading />
          ) : (
            <React.Fragment>
              <div className='row align-items-center'>
                <img
                  className='profile'
                  src={profile.imageURL}
                  alt={profile.name}
                />
                <div className='ml-3 mr-auto'>
                  <h3>{profile.name}</h3>

                  {profile.workout
                    .reverse()
                    .slice(0, 1)
                    .map(workout => (
                      <React.Fragment key={workout.date + workout.id}>
                        <p className='text-secondary'>
                          {' '}
                          Last workout:{' '}
                          {workout.date.toLocaleDateString('default', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </p>
                      </React.Fragment>
                    ))}
                </div>
                <div>
                  <button className='btn btn-outline-secondary'>
                    Edit Profile
                  </button>
                </div>
              </div>

              <React.Fragment>
                <h5 className='separator text-secondary '>Recent workouts</h5>
                {profile.id === 2
                  ? // If id = 1, then show user id with 1
                    profile.workout
                      .reverse()
                      .slice(0, 2)
                      .map(workout => (
                        <UserWorkout
                          key={profile.id + profile.name + workout.workoutId}
                          id={profile.id}
                          imageURL={profile.imageURL}
                          name={profile.name}
                          workout={workout.workout}
                          workoutId={workout.workoutId}
                          workoutName={workout.name}
                          workoutDuration={workout.duration}
                          workoutDate={workout.date.toLocaleDateString(
                            'default',
                            {
                              month: 'long',
                              day: 'numeric',
                              year: 'numeric'
                            }
                          )}
                        />
                      ))
                  : null}
              </React.Fragment>
              <React.Fragment>
                <h5 className='separator text-secondary '>Friends</h5>
                <div className='my-2'>
                  <FriendsList
                    key={profile.id + profile.name}
                    id={profile.id}
                    name={profile.name}
                    imageURL={profile.imageURL}
                    friends={profile.friends}
                  />
                </div>
              </React.Fragment>
            </React.Fragment>
          )
        }
      </Profile>
    </React.Fragment>
  );
}

export default Profiles;
