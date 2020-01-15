import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

// Utilities
import Wrapper from '../util/Wrapper';
import Alert from '../layout/Alert';
import NotFound from '../layout/NotFound';
import Navbar from '../layout/Navbar';

// Components
import Login from '../auth/Login';
import Register from '../auth/Register';

import Articles from '../articles/Articles';
import ArticlesPage from '../articles/ArticlesPage';
import Exercises from '../exercises/Exercises';
import ExercisesPage from '../exercises/ExercisesPage';

import AddWorkout from '../workouts/AddWorkout';
import WorkoutsPage from '../workouts/WorkoutsPage';
import Workout from '../workout/Workout';

import CreateProfile from '../profile/CreateProfile';
import EditProfile from '../profile/EditProfile';
import ProfilePage from '../profile/ProfilePage';
import Profiles from '../profile/Profiles';

import PrivateRoute from '../routing/PrivateRoute';

const Routes = () => {
  return (
    <Fragment>
      <Navbar />
      <Wrapper>
        <Alert />
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/articles' component={Articles} />
          <Route exact path='/articles/:articleId' component={ArticlesPage} />
          <Route exact path='/exercises' component={Exercises} />
          <Route exact path='/exercises/:exId' component={ExercisesPage} />
          <Route exact path='/profiles' component={Profiles} />
          <Route exact path='/profiles/:id' component={ProfilePage} />

          <PrivateRoute exact path='/profile' component={ProfilePage} />
          <PrivateRoute exact path='/add-workout' component={AddWorkout} />
          <PrivateRoute exact path='/workouts' component={WorkoutsPage} />
          <PrivateRoute exact path='/workouts/:id' component={Workout} />
          <PrivateRoute
            exact
            path='/create-profile'
            component={CreateProfile}
          />
          <PrivateRoute exact path='/edit-profile' component={EditProfile} />
          <Route component={NotFound} />
        </Switch>
      </Wrapper>
    </Fragment>
  );
};

export default Routes;
