import React, { Component } from 'react';
import { Link } from 'react-router';

export default class PageHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="header">
        <ul className="header__list">
          <Link className="header__list" to="/">
            Home
          </Link>
          <Link className="header__list" to="/about">
            About
          </Link>
          <Link className="header__list" to="/faq">
            FAQ
          </Link>
          <Link className="header__list" to="/resume">
            Resume
          </Link>
        </ul>
      </header>
    );
  }
}
