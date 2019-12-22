import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './style.scss';

// Components
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import Footer from './components/Footer';

import Home from './components/Home';

import Articles from './components/Articles';
import ArticlesPage from './components/ArticlesPage';

import Exercises from './components/Exercises';
import ExercisesPage from './components/ExercisesPage';

import LoginPage from './components/LoginPage';
import Profiles from './components/Profiles';

function App() {
  return (
    <Router>
      {/* <Router basename={'/gravitus'}> */}
      <Header />
      <Wrapper>
        <Switch>
          <Route exact path='/' render={() => <Home />} />
          <Route exact path='/articles' component={Articles} />
          <Route exact path='/articles/:articleId' component={ArticlesPage} />
          <Route exact path='/exercises' component={Exercises} />
          <Route exact path='/exercises/:exId' component={ExercisesPage} />
          <Route exact path='/profiles' component={Profiles} />
          <Route exact path='/login' component={LoginPage} />
          <Route render={() => <h1>404</h1>} />
        </Switch>
      </Wrapper>
      <Footer />
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
