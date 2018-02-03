import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Home from '../Home';
import About from '../About';

const routes = (
  <Switch>
    <Route path='/' exact component={Home} />
    <Route path='/about' component={About} />
  </Switch>
);

const App = () => (
  <Router>
    {routes}
  </Router>
);

export default App;
