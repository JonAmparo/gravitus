// React imports
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.scss';

// Components
import Header from './components/Header';
import Wrapper from './components/Wrapper';

import Home from './components/Home';

import Exercises from './components/Exercises';
import ExercisesPage from './components/ExercisesPage';

function App() {
  return (
    <Router>
      <Header />
      <Wrapper>
        <Switch>
          <Route exact path='/' render={() => <Home />} />
          <Route exact path='/exercises' component={Exercises} />
          <Route exact path='/exercises/:exId' component={ExercisesPage} />
          <Route render={() => <h1>404</h1>} />
        </Switch>
      </Wrapper>
    </Router>
  );
}

export default App;
