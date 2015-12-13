import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import CSS from './css/index.css';

import Home from './views/home';

window.onload = function() {
  render((
    <Router history={createBrowserHistory()}>
      <Route path="/" component={Home} />
    </Router>
  ), document.getElementById('app'));
}
