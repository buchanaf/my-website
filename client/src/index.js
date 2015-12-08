import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link } from 'react-router';

import Home from './views/home';

render((
  <Router>
    <Route path="/" component={Home} />
  </Router>
), document.body)
