import React from 'react';
import Profile from './Profile';
import UserWorkout from './UserWorkout';
import FriendsList from './FriendsList';
import Loading from './layout/Loading';
// import Button from './Button';
import { Link } from 'react-router-dom';

function Profiles(props) {
  console.log('props:', props.match.url);
  const [id, setId] = React.useState(0);

  React.useEffect(() => {
    setId(() => null); // not needed
    setId(2); // Change for different profiles
  }, []);

  const editName = () => {};

  const editProfile = () => {
    if (id) {
      console.log('Button was pressed2');
    }
  };

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

                <Link
                  to={`${props.match.url}/ProfilesEdit`}
                  className='btn btn-outline-light'
                >
                  Edit Profile
                </Link>
                {/* <Button
                    // as={Link}
                    to={`${props.match.url}/ProfilesEdit`}
                    type='button'
                    label='Edit Profile'
                    className='btn- btn-global'
                    onClick={editProfile}
                  />*/}
              </div>

              <React.Fragment>
                <h5 className='separatorLine text-secondary '>
                  Recent workouts
                </h5>
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
                <h5 className='separatorLine text-secondary '>Friends</h5>
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
