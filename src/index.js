import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from './routes';
import GA from 'react-ga';

import main from 'css/main.css';
import critical from 'css/critical.css';

function stateUpdate() {
  window.scrollTo(0, 0);
  GA.pageview(window.location.pathname);
}

window.onload = function initApp() {
  GA.initialize('UA-72758609-1');
  render((
    <Router history={createBrowserHistory()} onUpdate={stateUpdate}>
      {routes}
    </Router>
  ), document.getElementById('app'));
};
