import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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

import CreateProfile from './components/profile/CreateProfile';
import EditProfile from './components/profile/EditProfile';
import ProfilePage from './components/profile/Profile';

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
      <Router>
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

            <PrivateRoute exact path='/dashboard' component={Dashboard} />
            <PrivateRoute exact path='/profile' component={ProfilePage} />
            <PrivateRoute exact path='/add-workout' component={AddWorkout} />
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
