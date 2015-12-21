import React, { Component } from 'react';
import { Link } from 'react-router';

export default class PageHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="header zindex-2 ">
        <ul className="header__list">
          <Link className="header__link active" to="/">
            Home
          </Link>
          <Link className="header__link" to="/about">
            About
          </Link>
          <Link className="header__link" to="/faq">
            FAQ
          </Link>
          <Link className="header__link" to="/resume">
            Resume
          </Link>
        </ul>
      </header>
    );
  }
}
