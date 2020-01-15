import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './style.scss';

// Utilities
import Footer from './components/layout/Footer';

// Components
import Landing from './components/layout/Landing';
import Routes from './components/routing/Routes';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

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
        <Switch>
          <Route exact path='/' render={() => <Landing />} />
          <Route component={Routes} />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
