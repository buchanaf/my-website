import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

export default class PageHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="header zindex-2">
        <ul className="header__list">
          <IndexLink className="header__link" activeClassName="active" to="/">
            Home
          </IndexLink>
          <Link className="header__link" activeClassName="active" to="/about">
            About
          </Link>
          <Link className="header__link" activeClassName="active" to="/resume">
            Resume
          </Link>
          <Link className="header__link" activeClassName="active" to="/contact">
            Contact
          </Link>
        </ul>
      </header>
    );
  }
}
