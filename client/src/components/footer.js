import React, { Component } from 'react';
import { Link } from 'react-router';

export default class PageHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="footer">
        <div className="footer__wrapper center text-center">
          <ul className="footer__links">
            <Link className="footer__link" to="/faq">
              FAQ
            </Link>
            <Link className="footer__link" to="/home">
              Home
            </Link>
            <Link className="footer__link" to="/resume">
              Resume
            </Link>
            <Link className="footer__link" to="/contact">
              Contact
            </Link>
          </ul>
          <p>© 2015 Alex Buchanan. All rights reserved. Front-End Developer </p>
          <div className="icon-wrap icon--dazzle ">
            <i className="icon icon--facebook" />
            <i className="icon icon--twitter" />
            <i className="icon icon--github" />
            <i className="icon icon--instagram" />
            <i className="icon icon--linkedin" />
          </div>
        </div>
      </footer>
    );
  }
}
