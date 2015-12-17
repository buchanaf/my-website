import React, { Component } from 'react';
import Facebook from 'assets/facebook.svg';
import Twitter from 'assets/twitter.svg';
import Instagram from 'assets/instagram.svg';
import Linkedin from 'assets/linkedin.svg';
import GitHub from 'assets/github.svg';


export default class PageHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="footer">
        <div className="footer__wrapper center text-center">
          <div className>
            <img className="icon" src={Facebook} />
            <img className="icon" src={Twitter} />
            <img className="icon" src={Instagram} />
            <img className="icon" src={Linkedin} />
            <img className="icon"src={GitHub} />
          </div>
        </div>
      </footer>
    );
  }
}
