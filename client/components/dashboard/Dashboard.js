import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import Loading from '../layout/Loading';
import DashboardActions from './DashboardActions';
import Workout from './Workout';

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Loading />
  ) : (
    <Fragment>
      <h1 className='text-center'>Dashboard</h1>

      {profile !== null ? (
        <Fragment>
          <DashboardActions />
          <Workout workout={profile.workout} />
          <div className='my-2'></div>
        </Fragment>
      ) : (
        <Fragment>
          <p>You have not yet setup a profile, please add some info</p>
          <DashboardActions />
          <Link to='/create-profile' className='btn btn-primary my-1'>
            Create Profile
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);

// import UserWorkout from './UserWorkout';
// import { users } from '../assets/data/dummy-data';

// import React, { Fragment } from 'react';

// function Dashboard() {
//   return (
//     <Fragment>
//       <h1 className='text-center'>Home Page</h1>
//       <div className='my-2'>
//         <ul>
//           {users.map(item =>
//             // If id = 1, then show user id with 1
//             item.id === 2
//               ? // ? item.workout.reverse().map(workout => (
//                 item.workout.map(workout => (
//                   <UserWorkout
//                     key={item.id + item.name + workout.workoutId}
//                     id={item.id}
//                     imageURL={item.imageURL}
//                     name={item.name}
//                     workout={workout.workout}
//                     workoutId={workout.workoutId}
//                     workoutName={workout.name}
//                     workoutDuration={workout.duration}
//                     workoutDate={workout.date.toLocaleDateString('default', {
//                       month: 'long',
//                       day: 'numeric',
//                       year: 'numeric'
//                     })}
//                     thumbsup
//                   />
//                 ))
//               : null
//           )}
//         </ul>
//       </div>
//     </Fragment>
//   );
// }

// export default Dashboard;
