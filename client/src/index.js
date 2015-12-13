import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

require('./css/index.css');

import Home from './views/home';

window.onload = function initApp() {
  render((
    <Router history={createBrowserHistory()}>
      <Route path="/" component={Home} />
    </Router>
  ), document.getElementById('app'));
};
