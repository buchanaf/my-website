import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="footer">
        <div className="footer__banner">
          <ul className="footer__links">
            <IndexLink className="footer__link" to="/">
              Home
            </IndexLink>
            <Link className="footer__link" to="/about">
              About
            </Link>
            <Link className="footer__link" to="/resume">
              Resume
            </Link>
            <Link className="footer__link" to="/contact">
              Contact
            </Link>
          </ul>
        </div>
        <div className="footer__base">
          <div className="footer__wrapper center-absolute">
            <i className="icon icon--logo" />
            <p className="footer__copyright">
              2015 Alex Buchanan. All rights reserved. Front-End Developer
            </p>
            <div className="icon__wrapper">
              <a className="icon icon--facebook" href="https://www.facebook.com/alex.buchanan.9085" />
              <a className="icon icon--twitter" href="https://twitter.com/ADBuchanan6" />
              <a className="icon icon--github" href="https://github.com/buchanaf" />
              <a className="icon icon--instagram" href="https://www.instagram.com/buckdaddy6/" />
              <a className="icon icon--linkedin" href="https://www.linkedin.com/in/alex-buchanan-625b5942" />
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
