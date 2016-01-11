import React, { Component } from 'react';
import { Link } from 'react-router';
import cx from 'classnames';
import setClass from'element-class';


export default class PageHeader extends Component {
  constructor(props) {
    super(props);
  }

  onMenuClick = (e) => {
    const { sideOpen } = this.props;

    this.props.onSideNavToggle();
    setClass(document.body).toggle('scroll--prevent');
    if (!sideOpen) {
      window.scrollTo(0, 0);
    }
  };

  render() {
    const { sideOpen } = this.props;

    return (
      <div>
        <i className="icon icon--menu" onClick={this.onMenuClick}/>
        <nav className={cx('sidenav', { 'side-nav--visible': sideOpen})}>
          <ul className="sidenav__list">
            <Link className="sidenav__link" to="/" onClick={this.onMenuClick}>
              Home
            </Link>
            <Link className="sidenav__link" to="/about" onClick={this.onMenuClick}>
              About
            </Link>
            <Link className="sidenav__link" to="/resume" onClick={this.onMenuClick}>
              Resume
            </Link>
            <Link className="sidenav__link active" to="/contact" onClick={this.onMenuClick}>
              Contact
            </Link>
          </ul>
        </nav>
      </div>
    );
  }
}
