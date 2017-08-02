import React, {Component} from 'react';
import { render } from 'react-dom';
import Home from './containers/Home'
import Test from './containers/Test'
import reducers from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(thunk));

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


render(
<Provider store={store}>
  <Router>
    <div>
      <Route path="/" component={Home} />
      <Route path="/test" component={Test} />
    </div>
  </Router>
</Provider>, document.getElementById('app'));
