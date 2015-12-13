import { Route, IndexRoute } from 'react-router';
import React from 'react';

import Home from 'views/home';
import App from 'views/app';

import Pageheader from 'components/pageheader';

function wrap(main) {
  return {
    header: Pageheader,
    main: main,
  };
}

export default (
  <Route path="/" component={App}>
    <IndexRoute components={wrap(Home)} />
  </Route>
);
