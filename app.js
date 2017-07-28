import React, {Component} from 'react';
import { render } from 'react-dom';
import Home from './containers/Home'
import Test from './containers/Test'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'




render(
<div>
  <Router>
    <div>
      <Route path="/test" component={Home} />
      <Route path="/" component={Test} />
    </div>
  </Router>
</div>

, document.getElementById('app'));
