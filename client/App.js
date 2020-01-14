import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";
import './style.scss';

// Utilities
import Wrapper from './components/util/Wrapper';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import NotFound from './components/layout/NotFound';

// Components
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/dashboard/Dashboard';

import Articles from './components/articles/Articles';
import ArticlesPage from './components/articles/ArticlesPage';
import Exercises from './components/exercises/Exercises';
import ExercisesPage from './components/exercises/ExercisesPage';

import AddWorkout from './components/workouts/AddWorkout';
import WorkoutsPage from './components/workouts/WorkoutsPage';
import Workout from './components/workout/Workout';

import CreateProfile from './components/profile/CreateProfile';
import EditProfile from './components/profile/EditProfile';
import ProfilePage from './components/profile/ProfilePage';
import Profiles from './components/profile/Profiles';
import ProfilesId from './components/profile/ProfilesId';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import PrivateRoute from './components/routing/PrivateRoute';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router history={createBrowserHistory}>
        <Navbar />
        <Wrapper>
          <Alert />
          <Switch>
            <Route exact path='/' render={() => <Landing />} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/articles' component={Articles} />
            <Route exact path='/articles/:articleId' component={ArticlesPage} />
            <Route exact path='/exercises' component={Exercises} />
            <Route exact path='/exercises/:exId' component={ExercisesPage} />
            <Route exact path='/profiles' component={Profiles} />
            <Route exact path='/profiles/:id' component={ProfilePage} />

            <PrivateRoute exact path='/dashboard' component={Dashboard} />
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
        <Footer />
      </Router>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
