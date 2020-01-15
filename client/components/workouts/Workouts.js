import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loading from '../layout/Loading';
import WorkoutItem from './WorkoutItem';
import WorkoutItem2 from './WorkoutItem2';
import { getWorkouts } from '../../actions/workout';
import Tabs from '../util/Tabs';
import { FiUser, FiUsers } from 'react-icons/fi';
import { AiOutlineGlobal, AiOutlineTrophy } from 'react-icons/ai';
import AddWorkoutButton from './AddWorkoutButton';

const Workouts = ({ getWorkouts, workout: { workouts, loading } }) => {
  useEffect(() => {
    getWorkouts();
  }, [getWorkouts]);

  return loading ? (
    <Loading />
  ) : (
    <Fragment>
      <Tabs
        activeTab={{
          id: 'tab1'
        }}
      >
        <AddWorkoutButton />

        <Tabs.Tab id='tab1' title={<FiUser />}>
          <div className='workouts'>
            {workouts.map(workout => (
              <WorkoutItem2 key={workout._id} workout={workout} />
            ))}
          </div>
        </Tabs.Tab>
        <Tabs.Tab id='tab2' title={<FiUsers />}>
          <div className='workouts'>
            {workouts.map(workout => (
              <WorkoutItem key={workout._id} workout={workout} />
            ))}
          </div>
        </Tabs.Tab>
        <Tabs.Tab id='tab3' title={<AiOutlineGlobal />}>
          <h3 className='text-center pt-5'>Coming soon...</h3>
        </Tabs.Tab>
      </Tabs>
    </Fragment>
  );
};

Workouts.propTypes = {
  getWorkouts: PropTypes.func.isRequired,
  workout: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  workout: state.workout
});

export default connect(mapStateToProps, { getWorkouts })(Workouts);
