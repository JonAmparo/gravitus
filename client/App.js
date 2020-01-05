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
import Dashboard from './components/dashboard/Dashboard';
import AddWorkout from './components/profile-forms/AddWorkout';
import Articles from './components/Articles';
import ArticlesPage from './components/ArticlesPage';
import Exercises from './components/Exercises';
import ExercisesPage from './components/ExercisesPage';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Profiles from './components/Profiles';
import ProfilePage from './components/ProfilePage';
import EditProfile from './components/profile-forms/EditProfile';
import ProfilesEdit from './components/ProfilesEdit';
import Landing from './components/layout/Landing';

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
            <PrivateRoute exact path='/edit-profile' component={EditProfile} />
            <PrivateRoute exact path='/profiles' component={Profiles} />
            <PrivateRoute
              exact
              path='/profiles/profilesEdit'
              component={ProfilesEdit}
            />
            <Route component={NotFound} />
          </Switch>
        </Wrapper>
        <Footer />
      </Router>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
