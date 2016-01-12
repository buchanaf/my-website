import { Route, IndexRoute } from 'react-router';
import React from 'react';

import App from 'views/app';
import About from 'views/about';
import Contact from 'views/contact';
import Home from 'views/home';
import Resume from 'views/resume';

import Pageheader from 'components/pageheader';
import Footer from 'components/footer';
import SideNav from 'components/sidenav';

function structureApp(Component) {
  return {
    header: Pageheader,
    main: Component,
    footer: Footer,
    sideNav: SideNav,
  };
}

export default (
  <Route path="/" component={App}>
    <IndexRoute components={structureApp(Home)} />
    <Route path="/resume" components={structureApp(Resume)} />
    <Route path="/contact" components={structureApp(Contact)} />
    <Route path="/about" components={structureApp(About)} />
  </Route>
);
