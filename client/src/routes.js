import { Route, IndexRoute } from 'react-router';
import React from 'react';

import App from 'views/app';
import Home from 'views/home';
import Resume from 'views/resume';

import Pageheader from 'components/pageheader';
import Footer from 'components/footer';

function wrap(main) {
  return {
    header: Pageheader,
    main: main,
    footer: Footer,
  };
}

export default (
  <Route path="/" component={App}>
    <IndexRoute components={wrap(Home)} />
    <Route path="/resume" components={wrap(Resume)} />
  </Route>
);
