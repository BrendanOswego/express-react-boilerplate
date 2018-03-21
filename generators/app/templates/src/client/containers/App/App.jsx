import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from '../../modules/reducers/rootReducer';

import Home from '../Home';
import About from '../About';

const store = createStore(rootReducer);

export const routes = (
  <Switch>
    <Route path='/' exact component={Home} />
    <Route path='/about' component={About} />
  </Switch>
);

const App = () => (
  <Provider store={store}>
    <Router>
      {routes}
    </Router>
  </Provider>
);

export default App;
